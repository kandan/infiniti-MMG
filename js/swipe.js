/*
 * Swipe 1.0
 *
 * Brad Birdsall, Prime
 * Copyright 2011, Licensed GPL & MIT
 *
*/

window.Swipe = function(element, options) {

  // return immediately if element doesn't exist
  if (!element) return null;

  var _this = this;
  
  // retreive options
  this.options = options || {};
  this.index = this.options.startSlide || 0;
  this.speed = this.options.speed || 300;
  this.callback = this.options.callback || function() {};
  this.delay = this.options.auto || 0;

  // reference dom elements
  this.container = element;
  this.element = this.container.children[0]; // the slide pane

  // static css
  this.container.style.overflow = 'hidden';
  this.element.style.listStyle = 'none';

  this.dir;

  // trigger slider initialization
  this.setup();

  // begin auto slideshow
  this.begin();

  // add event listeners
  if (this.element.addEventListener) {
    this.element.addEventListener('touchstart', this, false);
    this.element.addEventListener('touchmove', this, false);
    this.element.addEventListener('touchend', this, false);
    this.element.addEventListener('webkitTransitionEnd', this, false);
    this.element.addEventListener('msTransitionEnd', this, false);
    this.element.addEventListener('oTransitionEnd', this, false);
    this.element.addEventListener('transitionend', this, false);
    window.addEventListener('resize', this, false);
  }

};

Swipe.prototype = {

  setup: function() {

    // get and measure amt of slides
    this.slides = this.element.children;
    this.length = this.slides.length;
	
	// length
	
		var num_of_items = this.length
		this.start = null;
		this.end = null;
		this.increase = 0;
		
		switch(this.length){
			case 4:
  			this.start = 0;
			this.end = 3;
			this.increase = 1;
  			break;
			case 5:
  			this.start = 0;
			this.end = 5;
			this.increase = 1;
  			break;
			default:
			this.start = 0;
			this.end = 4;
			}
	
	
	
	//this.loadImages(this.start, this.end, this.increase);
	
    // return immediately if their are less than two slides
    if (this.length < 2) return null;

    // determine width of each slide
    this.width = this.container.getBoundingClientRect().width;

    // return immediately if measurement fails
    if (!this.width) return null;

    // hide slider element but keep positioning during setup
    this.container.style.visibility = 'hidden';

    // dynamic css
    this.element.style.width = (this.slides.length * this.width) + 'px';
    var index = this.slides.length;
    while (index--) {
      var el = this.slides[index];
      el.style.width = this.width + 'px';
      el.style.display = 'table-cell';
      el.style.verticalAlign = 'top';
    }

    // set start position and force translate to remove initial flickering
    this.slide(this.index, 0); 

    // show slider element
    this.container.style.visibility = 'visible';

  },

  slide: function(index, duration) {

    var style = this.element.style;

    // fallback to default speed
    if (duration == undefined) {
        duration = this.speed;
    }

    // set duration speed (0 represents 1-to-1 scrolling)
    style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration = duration + 'ms';

    // translate to given index position
    style.MozTransform = style.webkitTransform = 'translate3d(' + -(index * this.width) + 'px,0,0)';
    style.msTransform = style.OTransform = 'translateX(' + -(index * this.width) + 'px)';

    // set new index to allow for expression arguments
    this.index = index;
	console.log("swipe index = " + index);
	this.swapNav(index);
	
  },

  getPos: function() {
    
    // return current index position
    return this.index;

  },
  slide1: function(delay) {

    // cancel next scheduled automatic transition, if any
    this.delay = delay || 0;
    clearTimeout(this.interval);

    // if not at first slide
    if (this.index) this.slide(this.index[1], this.speed);
	console.log("slide1 index = " + this.index);
  },

  prev: function(delay) {

    // cancel next scheduled automatic transition, if any
    this.delay = delay || 0;
    clearTimeout(this.interval);

    // if not at first slide
    if (this.index) this.slide(this.index-1, this.speed);
	console.log("prev index = " + this.index);
  },

  next: function(delay) {

    // cancel next scheduled automatic transition, if any
    this.delay = delay || 0;
    clearTimeout(this.interval);

    if (this.index < this.length - 1) this.slide(this.index+1, this.speed); // if not last slide
    else this.slide(0, this.speed); //if last slide return to start
	console.log("next index = " + this.index);
  },

  begin: function() {

    var _this = this;

    this.interval = (this.delay)
      ? setTimeout(function() { 
        _this.next(_this.delay);
      }, this.delay)
      : 0;
  		console.log("begin index = " + this.index);
  },
  
  stop: function() {
    this.delay = 0;
    clearTimeout(this.interval);
  },
  
  resume: function() {
    this.delay = this.options.auto || 0;
    this.begin();
  },

  handleEvent: function(e) {
    switch (e.type) {
      case 'touchstart': this.onTouchStart(e); break;
      case 'touchmove': this.onTouchMove(e); break;
      case 'touchend': this.onTouchEnd(e); break;
      case 'webkitTransitionEnd':
      case 'msTransitionEnd':
      case 'oTransitionEnd':
      case 'transitionend': this.transitionEnd(e); break;
      case 'resize': this.setup(); break;
    }
  },

  transitionEnd: function(e) {
    
    if (this.delay) this.begin();

    this.callback(e, this.index, this.slides[this.index]);

  },

  onTouchStart: function(e) {
    
    this.start = {

      // get touch coordinates for delta calculations in onTouchMove
      pageX: e.touches[0].pageX,
      pageY: e.touches[0].pageY,

      // set initial timestamp of touch sequence
      time: Number( new Date() )

    };

    // used for testing first onTouchMove event
    this.isScrolling = undefined;
    
    // reset deltaX
    this.deltaX = 0;

    // set transition time to 0 for 1-to-1 touch movement
    this.element.style.MozTransitionDuration = this.element.style.webkitTransitionDuration = 0;

  },

  onTouchMove: function(e) {

    // ensure swiping with one touch and not pinching
    if(e.touches.length > 1 || e.scale && e.scale !== 1) return;

    this.deltaX = e.touches[0].pageX - this.start.pageX;

    // determine if scrolling test has run - one time test
    if ( typeof this.isScrolling == 'undefined') {
      this.isScrolling = !!( this.isScrolling || Math.abs(this.deltaX) < Math.abs(e.touches[0].pageY - this.start.pageY) );
    }

    // if user is not trying to scroll vertically
    if (!this.isScrolling) {

      // prevent native scrolling 
      e.preventDefault();

      // cancel slideshow
      clearTimeout(this.interval);

      // increase resistance if first or last slide
      this.deltaX = 
        this.deltaX / 
          ( (!this.index && this.deltaX > 0               // if first slide and sliding left
            || this.index == this.length - 1              // or if last slide and sliding right
            && this.deltaX < 0                            // and if sliding at all
          ) ?                      
          ( Math.abs(this.deltaX) / this.width + 1 )      // determine resistance level
          : 1 );                                          // no resistance if false
      
      // translate immediately 1-to-1
      this.element.style.MozTransform = this.element.style.webkitTransform = 'translate3d(' + (this.deltaX - this.index * this.width) + 'px,0,0)';

    }

  },

  onTouchEnd: function(e) {

    // determine if slide attempt triggers next/prev slide
    var isValidSlide = 
          Number(new Date()) - this.start.time < 250      // if slide duration is less than 250ms
          && Math.abs(this.deltaX) > 20                   // and if slide amt is greater than 20px
          || Math.abs(this.deltaX) > this.width/2,        // or if slide amt is greater than half the width

    // determine if slide attempt is past start and end
        isPastBounds = 
          !this.index && this.deltaX > 0                          // if first slide and slide amt is greater than 0
          || this.index == this.length - 1 && this.deltaX < 0;    // or if last slide and slide amt is less than 0

    // if not scrolling vertically
    if (!this.isScrolling) {

      // call slide function with slide end value based on isValidSlide and isPastBounds tests
      this.slide( this.index + ( isValidSlide && !isPastBounds ? (this.deltaX < 0 ? 1 : -1) : 0 ), this.speed );

    }

  },
  
  
	
	swapNav: function(index) {
		var group = this.group;
		var dir = this.dir;
		var start = this.start;
		var end = this.end;
		var loc = this.loc;
		
		var num = index;
	  	var routeMap = $(".nav a");
	  	console.log("swap index = " + index);
		var navString = ".leg"+num+"Btn"+num;
		var nav = $(navString);
		var navClass = String(nav);
		
		for (var i = start; i < end ; i++){
			var navlink = ".leg"+i+"Btn"+i;
			var classRemove = "leg"+i+"Btn"+i+"Active";
			
			$(navlink).removeClass("leg"+i+"Btn"+i+"Active");
			console.log("navlink"+ i +" =" + navlink);
		}
		routeMap.removeClass("leg0Btn0Active , leg1Btn1Active , leg2Btn2Active , leg3Btn3Active , leg4Btn4Active");
		
		
		$(navString).addClass("leg"+num+"Btn"+num+"Active");
		
		$('.topNavTxt img').attr({ src: loc + "images/"+group+"/"+ dir+"/Leg0"+num+"-title.png", height:"39", width:"355"});		
		
		//$('.topInstructionsNavTxt img').attr({ src: "images/"+group+"/"+ dir+"/title0" + num +".png"});
		console.log("swap index = " + num);
		console.log("images/Leg0"+num+"-title.png");
		console.log("navString = " + navString);
		console.log("nav = " + num);
		console.log("slides length = " + this.length);
		
		
		if (this.length == 2){
			
			if (num ==0){
				console.log("num=0");
				
				$(".carM1").removeClass("carM1Active");
				$(".carFx1").addClass("carFx1Active");
				
				
				} else {
				console.log("num=0");
				$(".carFx1").removeClass("carFx1Active");
				$(".carM1").addClass("carM1Active");
				}
			
			
			
			}
		
 
	  }, 
	  
	 	loadImages: function (start, end, group, backup){
		var dir;
		console.log("group = " + group + " backUp = " + backup );
		var loc = "./";
		if (backup){
			dir = "backup";
			loc = "../";
			} else {
				dir = "standard";
				}
		
		
		//default setting
		for(var i = start; i < end; i++){
			//var added = i+increase;
			var _src = loc+"images/"+group+"/"+dir+"/map0"+i+".jpg";
			$('#item'+i+' img').attr({ src: _src});
			
		}
		
		$('.topNavTxt img').attr({ src: loc+"images/"+group+"/"+ dir+"/Leg0"+0+"-title.png", height:"39", width:"355"});
		
		this.start =  start;
		this.end =  end;
		this.dir = dir;
		this.group = group;
		this.loc = loc;
		

		
		
		
		
	}
  
    

  

};

