function wenben(){
	
	document.getElementById("menu_right_hr").innerHTML="<div id=\"menu_right_hr\"></div>";

	document.getElementById("menu_left_hr").innerHTML="<div id=\"menu_left_hr\"><hr  width=80% size=3 color=#000 style=\"filter:progid:DXImageTransform.Microsoft.Shadow(color#5151A2,direction:145,strength:15)\"></div>";

	document.getElementById("content_input_textarea").placeholder="请输入文字内容";
}

function wangzhi(){
	
	document.getElementById("menu_left_hr").innerHTML="<div id=\"menu_left_hr\"></div>";

	document.getElementById("menu_right_hr").innerHTML="<div id=\"menu_right_hr\"><hr  width=80% size=3 color=#000 style=\"filter:progid:DXImageTransform.Microsoft.Shadow(color#5151A2,direction:145,strength:15)\"></div>";
	
	document.getElementById("content_input_textarea").placeholder="http://";
}

 
function logoCheck(){
	
	document.getElementById("menu_right_hr").innerHTML="<div id=\"menu_right_hr\"></div>";

	document.getElementById("menu_left_hr").innerHTML="<div id=\"menu_left_hr\"><hr  width=80% size=3 color=#000 style=\"filter:progid:DXImageTransform.Microsoft.Shadow(color#5151A2,direction:145,strength:15)\"></div>";

	document.getElementById("QR_menu_LOGO").style.display='block';
	document.getElementById("QR_menu_color").style.display='none';

}

function colorCheck(){
	
	document.getElementById("menu_left_hr").innerHTML="<div id=\"menu_left_hr\"></div>";

	document.getElementById("menu_right_hr").innerHTML="<div id=\"menu_right_hr\"><hr  width=80% size=3 color=#000 style=\"filter:progid:DXImageTransform.Microsoft.Shadow(color#5151A2,direction:145,strength:15)\"></div>";

	document.getElementById("QR_menu_LOGO").style.display='none';
	document.getElementById("QR_menu_color").style.display='block';
	
}
