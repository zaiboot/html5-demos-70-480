var EventsDemo = {
	AddEventHandler: function(element, eventName, pointerToFunc ){
	
		if	(element.attachEvent)
		{
		
			element.attachEvent('on'+eventName, pointerToFunc);			
		}
		else
		{		
			element.addEventListener(eventName, pointerToFunc, false);
			
		}
	},
	ShowAlert: function(event){ 
		window.alert("woop woop oppa gangnam style");
		//if( event) event.stopPropagation();
		return false;
	},
	Log: function(event){
		console.log("Calling from EventsDemo.Log");
		//if( event) event.stopPropagation();
		return false;
		
	},
	init: function(){
		EventsDemo.AddEventHandler(document.body, 'click',  EventsDemo.Log );
		var btnHtmlHandler = document.getElementById("btnHtmlHandler");
		EventsDemo.AddEventHandler(btnHtmlHandler, 'click',  EventsDemo.Log );	
		
	
		var btnAttributes = document.getElementById("btnAttributes");
		EventsDemo.AddEventHandler(btnAttributes, 'click',  EventsDemo.Log );
		btnAttributes.onclick = EventsDemo.ShowAlert;
		
		var btnEventListener = document.getElementById("btnEventListener");
		EventsDemo.AddEventHandler(btnEventListener, 'click',  EventsDemo.ShowAlert );
		EventsDemo.AddEventHandler(btnEventListener, 'click',  EventsDemo.Log );
		
		
			
	}
}