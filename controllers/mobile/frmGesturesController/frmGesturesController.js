define({ 

	gusturesRecogniser : function()
    {
      	this.view.flxTap.addGestureRecognizer(1, {
          fingers:1,
          taps:2
        }, this. gestureHandler);
      
      	this.view.flxSwipe.addGestureRecognizer(2, {
          fingers:1,
          swipeVelocity:90, 
          swipeDistance : 100
        }, this. gestureHandler); 
      
     	 this.view.flxLongpress.addGestureRecognizer(3, {
           pressDuration:2
         }, this.gestureHandler);
      
      	this.view.flxPan.addGestureRecognizer(4, {
          fingers:2
        }, this.gestureHandler); 
      
      this.view.flxPinch.addGestureRecognizer(6, {
          fingers:2
        }, this.gestureHandler);  
    },
  
  
  	gestureHandler : function(widget, info)
    {
		alert(JSON.stringify(info));
 	}

 });