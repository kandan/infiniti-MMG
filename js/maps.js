// Insert maps 
	

var map1 = "<iframe width=\"1024\" height=\"630\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"http://maps.google.com.au/maps?f=d&amp;source=s_d&amp;saddr=Queenstown,+New+Zealand&amp;daddr=Wanaka,+Otago,+New+Zealand&amp;hl=en&amp;geocode=FQbhUP0ddJYNCilf3qjX8R3VqTEApnmEhu8ABQ%3BFcn6Vf0dor0UCilvLey5HUbVqTHgwXmEhu8ABQ&amp;aq=0&amp;oq=Wana&amp;sll=-45.031162,168.662644&amp;sspn=0.105182,0.175438&amp;g=Queenstown&amp;mra=ls&amp;ie=UTF8&amp;t=m&amp;ll=-44.865603,168.899689&amp;spn=0.613203,1.404877&amp;z=10&amp;output=embed\"></iframe>";

function place(item){
	
	var _holder = document.getElementById('mapsInsert');
	_holder.innerHTML = item;
	
	}


