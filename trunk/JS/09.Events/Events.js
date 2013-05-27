var EventsDemo = {
	ShowAlert: function(){ 
		window.alert("woop woop oppa gangnam style");
	},
	init: function(){
		document.getElementById("btnAttributes").onclick = EventsDemo.ShowAlert;
		var control = document.getElementById("btnEventListener");
		if	(control.attachEvent)
			control.attachEvent('onclick', EventsDemo.ShowAlert);
		else	
			control.addEventListener('click', EventsDemo.ShowAlert, false);
	}
}