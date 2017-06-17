var zoomLevel = 100;

function displayLegend(){
   document.getElementById("legend-box").style.display = "block";
}
function hideLegend(){
   document.getElementById("legend-box").style.display = "none";
}
function changeOpacity(percent){
   switch(percent) {
	  case 100:
		 document.getElementsByTagName("body")[0].style.backgroundImage = "url('img/readings2.png'),url('img/background2plus.png')";
		 break;
	  case 70:
		 document.getElementsByTagName("body")[0].style.backgroundImage = "url('img/readings2p7.png'),url('img/background2plus.png')";
		 break;
	 case 40:
		 document.getElementsByTagName("body")[0].style.backgroundImage = "url('img/readings2p4.png'),url('img/background2plus.png')";
		 break;
	 default:
		 alert("Nothing matched in switch statement")
   }
}
function zoomIn(){
		 zoomLevel = zoomLevel+=20;
		 var zoom = zoomLevel + "%";
		 document.getElementsByTagName("body")[0].style.backgroundSize = zoom;
}
function zoomOut(){
         if(zoomLevel > 100){
			 zoomLevel = zoomLevel-=20;
			 var zoom = zoomLevel + "%";
			 document.getElementsByTagName("body")[0].style.backgroundSize = zoom;
		 }
}
function resetTo100(){
         zoomLevel = 100;
		 document.getElementsByTagName("body")[0].style.backgroundSize = "100%";
}