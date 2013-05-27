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
	ShowAlert: function(){ 
		window.alert("woop woop oppa gangnam style");
	},
	Log: function(){
		console.log("Calling from EventsDemo.Log");
	},
	init: function(){
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