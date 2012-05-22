// JavaScript Document

var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 

    // Wait for Cordova to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);

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



	function onFail(error) {
	    alert("Fail when getting image. Code = " + error.code);
	}


    function onPhotoDataSuccess(imageData) {
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
    }

    // Called when a photo is successfully retrieved
    //
    function onSuccess(imageURI) {
      // Uncomment to view the image file URI 

      // Get image handle
      //
      var imageTaken = document.getElementById('imageTaken');

      // Unhide image elements
      //
      imageTaken.style.display = 'block';
	  

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      imageTaken.src = imageURI;
    }

    
    
	

	function onFail(message) {
	    alert('Failed because: ' + message);
	}


    // A button will call this function
    //
   

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }







var main ="http://maps.google.com.au/maps?saddr=Current%20Location&hl=en&mra=mdsmb&disamb=0&t=m&z=10"




function loadMap(url){
	window.open (url,"MapsWindow");
	
	
	}