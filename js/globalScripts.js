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
									  limit: 1
									}
	);
	}



	function onFail(error) {
	    alert("Fail when getting image. Code = " + error.code);
	}


    

    // Called when a photo is successfully retrieved
    //
    function onSuccess(imageURI) {
      // Uncomment to view the image file URI 
	alert('Your Image has been stored in the image library.');
      // Get image handle
      //
    }

    
    
	

    







var main ="http://maps.google.com.au/maps?saddr=Current%20Location&hl=en&mra=mdsmb&disamb=0&t=m&z=10"




function loadMap(url){
	window.open (url,"MapsWindow");
	
	
	}