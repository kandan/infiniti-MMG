// JavaScript Document
var main = "https://maps.google.com.au/maps?saddr=Paradise,+Otago,+New+Zealand&daddr=Queenstown,+Otago,+New+Zealand+to:Arrow+Junction,+Otago,+New+Zealand+to:Cardrona,+Otago,+New+Zealand+to:Wanaka,+Otago,+New+Zealand+to:Cromwell,+Otago,+New+Zealand+to:Tarras,+Otago,+New+Zealand+to:Wanaka,+Otago,+New+Zealand&hl=en&sll=-44.887012,168.906555&sspn=0.684975,1.262054&geocode=Fb5NU_0dOowJCiG-yb85cbDP2Q%3BFQbhUP0ddJYNCilf3qjX8R3VqTEApnmEhu8ABQ%3BFTiwUf0dIG4QCikVrrKY3SPVqTFgXHmEhu8ABQ%3BFQEnU_0dYsoSCimdAjt4WD_VqTHQzXmEhu8ABQ%3BFcn6Vf0dor0UCilvLey5HUbVqTHgwXmEhu8ABQ%3BFfDTUP0dGtAVCik7XtJUFCvVqTFQaHmEhu8ABQ%3BFfrYU_0d0AgZCinFMElUq8UqqDHwzXmEhu8ABQ%3BFcn6Vf0dor0UCilvLey5HUbVqTHgwXmEhu8ABQ&oq=Wana&gl=au&mra=ls&t=m&z=10#bmb=1";


var MMG1 = "http://maps.google.com.au/maps?f=d&amp;source=embed&amp;saddr=wanaka+new+zealand&amp;daddr=Cromwell-Clyde+Rd%2FState+Highway+8+to:Tarras-Cromwell+Rd%2FState+Highway+8+to:23+Brownston+Street,+Wanaka+9305,+New+Zealand+(Te+Wanaka+Lodge)&amp;geocode=Fcn6Vf0dor0UCilvLey5HUbVqTHgwXmEhu8ABQ%3BFUq9UP0dEiMWCg%3BFWS-U_0dMNUYCg%3BFXUAVv0dV9gUCiFVRovs1u8zRykXNdx3Rk_VqTGf_zyDZxeAEw&amp;aq=&amp;sll=-44.87047,169.17572&amp;sspn=0.905128,1.472168&amp;t=m&amp;gl=au&amp;hl=en&amp;mra=pd&amp;ie=UTF8&amp;ll=-44.865603,169.266357&amp;spn=1.226406,2.809753&amp;z=9";

var MMG2 = "http://maps.google.com.au/maps?saddr=wanaka+new+zealand&daddr=Cromwell-Clyde+Rd%2FState+Highway+8+to:Tarras-Cromwell+Rd%2FState+Highway+8+to:23+Brownston+Street,+Wanaka+9305,+New+Zealand+(Te+Wanaka+Lodge)&hl=en&sll=-44.87047,169.17572&sspn=0.905128,1.472168&geocode=Fcn6Vf0dor0UCilvLey5HUbVqTHgwXmEhu8ABQ%3BFUq9UP0dEiMWCg%3BFWS-U_0dMNUYCg%3BFT0AVv0dmtgUCiFVRovs1u8zRykXNdx3Rk_VqTGf_zyDZxeAEw&t=m&gl=au&mra=pd&z=9";

/*var MMG3 = "";*/

var MMG4 = "https://maps.google.co.nz/maps?f=d&source=embed&saddr=-44.753682,168.402064&daddr=queenstown+new+zealand&hl=en&geocode=Fe4cVf0dkJwJCg%3BFQbhUP0ddJYNCilf3qjX8R3VqTEApnmEhu8ABQ&aq=&sll=-44.88885,168.7623&sspn=0.414474,0.916672&t=m&gl=au&mra=ls&ie=UTF8&ll=-44.888958,168.763733&spn=1.225909,2.809753&z=9";

// MMG backups - 1st Leg
var MMG1_backup = "http://maps.google.com.au/maps?ie=UTF8&amp;gl=au&amp;saddr=queenstown&amp;daddr=wanaka&amp;dirflg=d&amp;geocode=FQbhUP0ddJYNCilf3qjX8R3VqTEApnmEhu8ABQ%3BFcn6Vf0dor0UCilvLey5HUbVqTHgwXmEhu8ABQ&amp;t=m&amp;source=embed&amp;ll=-44.88312,169.104309&amp;spn=1.226033,2.809753&amp;z=9";
var MMG2_backup = "http://maps.google.com.au/maps?f=d&amp;source=embed&amp;saddr=wanaka+new+zealand&amp;daddr=Cromwell-Clyde+Rd%2FState+Highway+8+to:Tarras-Cromwell+Rd%2FState+Highway+8+to:23+Brownston+Street,+Wanaka+9305,+New+Zealand+(Te+Wanaka+Lodge)&amp;geocode=Fcn6Vf0dor0UCilvLey5HUbVqTHgwXmEhu8ABQ%3BFUq9UP0dEiMWCg%3BFWS-U_0dMNUYCg%3BFXUAVv0dV9gUCiFVRovs1u8zRykXNdx3Rk_VqTGf_zyDZxeAEw&amp;aq=&amp;sll=-44.87047,169.17572&amp;sspn=0.905128,1.472168&amp;t=m&amp;gl=au&amp;hl=en&amp;mra=pd&amp;ie=UTF8&amp;ll=-44.865603,169.266357&amp;spn=1.226406,2.809753&amp;z=9";
var MMG3_backup = "http://maps.google.com.au/maps?f=d&amp;source=embed&amp;saddr=cromwell+new+zealand&amp;daddr=Rees+Valley+Rd&amp;geocode=FfDTUP0dGtAVCik7XtJUFCvVqTFQaHmEhu8ABQ%3BFRLsVP0dXfsJCg&amp;aq=&amp;sll=-44.923505,168.525105&amp;sspn=0.452147,0.724411&amp;t=m&amp;gl=au&amp;hl=en&amp;mra=ls&amp;ie=UTF8&amp;ll=-44.923974,168.793945&amp;spn=0.612581,1.404877&amp;z=10";
var MMG4_backup = "http://maps.google.com.au/maps?f=d&amp;source=embed&amp;saddr=-44.753682,168.402064&amp;daddr=queenstown+new+zealand&amp;hl=en&amp;geocode=Fe4cVf0dkJwJCg%3BFQbhUP0ddJYNCilf3qjX8R3VqTEApnmEhu8ABQ&amp;aq=&amp;sll=-44.88885,168.7623&amp;sspn=0.414474,0.916672&amp;t=m&amp;gl=au&amp;mra=ls&amp;ie=UTF8&amp;ll=-44.888958,168.763733&amp;spn=1.225909,2.809753&amp;z=9";


function loadMap(url){
	window.location.href = url;
	//window.open (url,"MapsWindow");
	}

    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 

    // Wait for Cordova to connect with the device
    //
    window.addEventListener("deviceready",onDeviceReady,false);

    // Cordova is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
		
    }

    // Called when a photo is successfully retrieved
    //
	function getImage() {
		
	    navigator.device.capture.captureImage(onSuccess, onFail,
	
		   { 
			 limit: 1,
			 quality: 75,
			 allowEdit: true,
			 destinationType: destinationType.DATA_URI
		   }
	);
	}


    /*function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }*/

    // Called when a photo is successfully retrieved
    //
    function onSuccess(imageURI) {
      // Uncomment to view the image file URI 
      console.log(imageURI);

      
    }

      

    /*// A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URI });
    }*/

    // A button will call this function
    //

    // Called if something bad happens.
    // 
    function onFail(message) {
      console.log('Failed because: ' + message);
    }

	

		    
		

		function onCloseBrowser() {
		    console.log("onCloseBrowser!");
		}

		function locChanged(loc) {
		    console.log("locChanged!");
		}

		function onOpenExternal() {
		    console.log("onOpenExternal!");
		}
    
	
	
	

    










