USGSOverlay.prototype = new google.maps.OverlayView(); 
function USGSOverlay(bounds, image, map) {
      this.bounds_ = bounds;
      this.image_ = image;
      this.map_ = map;
      this.div_ = null;
      this.setMap(map); }
USGSOverlay.prototype.onAdd = function() {
      var div = document.createElement("DIV");
      div.style.border = "none";
      div.style.borderWidth = "0px";
      div.style.position = "absolute";
      var img = document.createElement("img");
      img.src = this.image_;
      img.style.width = "100%";
      img.style.height = "100%";
      div.appendChild(img);
      this.div_ = div;
      this.div_.style.opacity = 0.5;
      var panes = this.getPanes();
      panes.overlayImage.appendChild(this.div_);}
USGSOverlay.prototype.draw = function() {
        var overlayProjection = this.getProjection();
        var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
        var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());
        var div = this.div_;
        div.style.left = sw.x + "px";
        div.style.top = ne.y + "px";
        div.style.width = (ne.x - sw.x) + "px";
        div.style.height = (sw.y - ne.y) + "px";} 
USGSOverlay.prototype.onRemove = function() { 
 this.div_.parentNode.removeChild(this.div_);} 
USGSOverlay.prototype.hide = function() { if (this.div_) { this.div_.style.visibility = "hidden";} } 
USGSOverlay.prototype.show = function() {if (this.div_) {  this.div_.style.visibility = "visible";}} 
       USGSOverlay.prototype.toggle = function() { 
 if (this.div_) { 
  if (this.div_.style.visibility == "hidden") {  
   this.show(); 
  } else { 
  this.hide(); } } } 
 USGSOverlay.prototype.toggleDOM = function() {
          if (this.getMap()) {
            this.setMap(null);
          } else {
            this.setMap(this.map_);}}
 function setOpacR(Raster,textname) { 
  opac=0.01*parseInt(document.getElementById(textname).value) 
    Raster.div_.style.opacity= opac } 

 var marker 
 var map 
 var  markersspxlandslide =[] ; var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32639414,103.0543573),
 map:map,
 title:"spxlandslide NO: 1",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32685513,103.0555624),
 map:map,
 title:"spxlandslide NO: 2",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31644684,103.0512502),
 map:map,
 title:"spxlandslide NO: 3",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32818832,103.0404656),
 map:map,
 title:"spxlandslide NO: 4",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32708687,103.0431086),
 map:map,
 title:"spxlandslide NO: 5",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32923171,103.0445124),
 map:map,
 title:"spxlandslide NO: 6",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32584504,103.040124),
 map:map,
 title:"spxlandslide NO: 7",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32491934,103.04046),
 map:map,
 title:"spxlandslide NO: 8",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31997105,103.0430931),
 map:map,
 title:"spxlandslide NO: 9",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32218876,103.0403665),
 map:map,
 title:"spxlandslide NO: 10",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3234523,103.0423026),
 map:map,
 title:"spxlandslide NO: 11",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32981442,103.0398777),
 map:map,
 title:"spxlandslide NO: 12",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.33047115,103.0363751),
 map:map,
 title:"spxlandslide NO: 13",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32864321,103.0356925),
 map:map,
 title:"spxlandslide NO: 14",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32902955,103.0390241),
 map:map,
 title:"spxlandslide NO: 15",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32700355,103.0373177),
 map:map,
 title:"spxlandslide NO: 16",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32634539,103.0373087),
 map:map,
 title:"spxlandslide NO: 17",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32608119,103.0361645),
 map:map,
 title:"spxlandslide NO: 18",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32294256,103.0394952),
 map:map,
 title:"spxlandslide NO: 19",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32201755,103.0388018),
 map:map,
 title:"spxlandslide NO: 20",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32173201,103.0394061),
 map:map,
 title:"spxlandslide NO: 21",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32055715,103.0389806),
 map:map,
 title:"spxlandslide NO: 22",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3203953,103.0372101),
 map:map,
 title:"spxlandslide NO: 23",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32054131,103.038659),
 map:map,
 title:"spxlandslide NO: 24",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31698077,103.038037),
 map:map,
 title:"spxlandslide NO: 25",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31709975,103.0373053),
 map:map,
 title:"spxlandslide NO: 26",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31956573,103.0383824),
 map:map,
 title:"spxlandslide NO: 27",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31792663,103.033167),
 map:map,
 title:"spxlandslide NO: 28",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32185272,103.0359966),
 map:map,
 title:"spxlandslide NO: 29",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32135898,103.0356992),
 map:map,
 title:"spxlandslide NO: 30",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31684453,103.0348398),
 map:map,
 title:"spxlandslide NO: 31",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.30404575,103.0457788),
 map:map,
 title:"spxlandslide NO: 32",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.29559259,103.0571003),
 map:map,
 title:"spxlandslide NO: 33",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.30446512,103.0396267),
 map:map,
 title:"spxlandslide NO: 34",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.30425445,103.0400585),
 map:map,
 title:"spxlandslide NO: 35",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.29893048,103.040289),
 map:map,
 title:"spxlandslide NO: 36",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.30657448,103.0397296),
 map:map,
 title:"spxlandslide NO: 37",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31152136,103.0395521),
 map:map,
 title:"spxlandslide NO: 38",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31580322,103.033543),
 map:map,
 title:"spxlandslide NO: 39",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.30725976,103.0358634),
 map:map,
 title:"spxlandslide NO: 40",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.30543234,103.0364916),
 map:map,
 title:"spxlandslide NO: 41",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.30302773,103.0355866),
 map:map,
 title:"spxlandslide NO: 42",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.30075046,103.0357945),
 map:map,
 title:"spxlandslide NO: 43",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3310239,103.0258118),
 map:map,
 title:"spxlandslide NO: 44",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.33095251,103.0245328),
 map:map,
 title:"spxlandslide NO: 45",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3297033,103.027174),
 map:map,
 title:"spxlandslide NO: 46",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32585023,103.0301611),
 map:map,
 title:"spxlandslide NO: 47",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32620715,103.0318208),
 map:map,
 title:"spxlandslide NO: 48",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32494735,103.0243853),
 map:map,
 title:"spxlandslide NO: 49",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32195184,103.0299446),
 map:map,
 title:"spxlandslide NO: 50",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32087483,103.031074),
 map:map,
 title:"spxlandslide NO: 51",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32298948,103.0279336),
 map:map,
 title:"spxlandslide NO: 52",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31941101,103.025868),
 map:map,
 title:"spxlandslide NO: 53",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.33053962,103.0197421),
 map:map,
 title:"spxlandslide NO: 54",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32569858,103.0207337),
 map:map,
 title:"spxlandslide NO: 55",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32967941,103.0231662),
 map:map,
 title:"spxlandslide NO: 56",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32137558,103.021931),
 map:map,
 title:"spxlandslide NO: 57",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32137558,103.021931),
 map:map,
 title:"spxlandslide NO: 58",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31940372,103.0215711),
 map:map,
 title:"spxlandslide NO: 59",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32034423,103.021979),
 map:map,
 title:"spxlandslide NO: 60",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31940372,103.0215711),
 map:map,
 title:"spxlandslide NO: 61",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32034423,103.021979),
 map:map,
 title:"spxlandslide NO: 62",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32110698,103.0185272),
 map:map,
 title:"spxlandslide NO: 63",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32110698,103.0185272),
 map:map,
 title:"spxlandslide NO: 64",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31573435,103.0267615),
 map:map,
 title:"spxlandslide NO: 65",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31554241,103.0276038),
 map:map,
 title:"spxlandslide NO: 66",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31642188,103.0301808),
 map:map,
 title:"spxlandslide NO: 67",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31792346,103.0260001),
 map:map,
 title:"spxlandslide NO: 68",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31799484,103.024156),
 map:map,
 title:"spxlandslide NO: 69",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31679307,103.0250626),
 map:map,
 title:"spxlandslide NO: 70",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31499989,103.0277276),
 map:map,
 title:"spxlandslide NO: 71",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31347867,103.0318509),
 map:map,
 title:"spxlandslide NO: 72",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31751133,103.0205422),
 map:map,
 title:"spxlandslide NO: 73",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31757602,103.0218628),
 map:map,
 title:"spxlandslide NO: 74",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31805786,103.0219222),
 map:map,
 title:"spxlandslide NO: 75",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31558187,103.0203946),
 map:map,
 title:"spxlandslide NO: 76",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31558187,103.0203946),
 map:map,
 title:"spxlandslide NO: 77",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.30913697,103.0201527),
 map:map,
 title:"spxlandslide NO: 78",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31412816,103.0192697),
 map:map,
 title:"spxlandslide NO: 79",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.33127078,103.0159691),
 map:map,
 title:"spxlandslide NO: 80",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.33036864,103.0161738),
 map:map,
 title:"spxlandslide NO: 81",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32856733,103.0145387),
 map:map,
 title:"spxlandslide NO: 82",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32795898,103.0152138),
 map:map,
 title:"spxlandslide NO: 83",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.33262992,103.0107432),
 map:map,
 title:"spxlandslide NO: 84",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32908665,103.0100102),
 map:map,
 title:"spxlandslide NO: 85",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32899762,103.0085917),
 map:map,
 title:"spxlandslide NO: 86",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32291708,103.0132374),
 map:map,
 title:"spxlandslide NO: 87",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32183096,103.0130149),
 map:map,
 title:"spxlandslide NO: 88",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32328209,103.0138577),
 map:map,
 title:"spxlandslide NO: 89",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32118403,103.0134689),
 map:map,
 title:"spxlandslide NO: 90",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31986643,103.0122685),
 map:map,
 title:"spxlandslide NO: 91",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.33093544,103.0077519),
 map:map,
 title:"spxlandslide NO: 92",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32678679,103.0027694),
 map:map,
 title:"spxlandslide NO: 93",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32584014,103.0038881),
 map:map,
 title:"spxlandslide NO: 94",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32358182,103.0012663),
 map:map,
 title:"spxlandslide NO: 95",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32519914,103.0003716),
 map:map,
 title:"spxlandslide NO: 96",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32117067,103.0046701),
 map:map,
 title:"spxlandslide NO: 97",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32253373,103.0066451),
 map:map,
 title:"spxlandslide NO: 98",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32222161,103.0071569),
 map:map,
 title:"spxlandslide NO: 99",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32167367,102.9997128),
 map:map,
 title:"spxlandslide NO: 100",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32092288,103.0023109),
 map:map,
 title:"spxlandslide NO: 101",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32011867,103.0004057),
 map:map,
 title:"spxlandslide NO: 102",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32081902,102.9998493),
 map:map,
 title:"spxlandslide NO: 103",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31888713,103.0104984),
 map:map,
 title:"spxlandslide NO: 104",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31266415,103.0078246),
 map:map,
 title:"spxlandslide NO: 105",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31289265,103.0091259),
 map:map,
 title:"spxlandslide NO: 106",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31279175,103.0086926),
 map:map,
 title:"spxlandslide NO: 107",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3157519,103.0053126),
 map:map,
 title:"spxlandslide NO: 108",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31621484,103.0056598),
 map:map,
 title:"spxlandslide NO: 109",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31564655,103.0031269),
 map:map,
 title:"spxlandslide NO: 110",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31375028,103.0035691),
 map:map,
 title:"spxlandslide NO: 111",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31165963,103.0076792),
 map:map,
 title:"spxlandslide NO: 112",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31015952,103.0126617),
 map:map,
 title:"spxlandslide NO: 113",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.30961349,103.0073646),
 map:map,
 title:"spxlandslide NO: 114",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.30954524,103.0066494),
 map:map,
 title:"spxlandslide NO: 115",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3093019,103.0059654),
 map:map,
 title:"spxlandslide NO: 116",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.30289639,103.0125),
 map:map,
 title:"spxlandslide NO: 117",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31208844,102.9997202),
 map:map,
 title:"spxlandslide NO: 118",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31076788,103.0052473),
 map:map,
 title:"spxlandslide NO: 119",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.30923958,103.0000125),
 map:map,
 title:"spxlandslide NO: 120",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3088805,103.0020557),
 map:map,
 title:"spxlandslide NO: 121",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.30891315,103.0047057),
 map:map,
 title:"spxlandslide NO: 122",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31971173,102.9976114),
 map:map,
 title:"spxlandslide NO: 123",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31791674,102.9993121),
 map:map,
 title:"spxlandslide NO: 124",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31651011,102.9985821),
 map:map,
 title:"spxlandslide NO: 125",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31693744,102.9987572),
 map:map,
 title:"spxlandslide NO: 126",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31664987,102.9974777),
 map:map,
 title:"spxlandslide NO: 127",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31614254,102.9947049),
 map:map,
 title:"spxlandslide NO: 128",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32797077,102.9806684),
 map:map,
 title:"spxlandslide NO: 129",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.33278233,102.9800343),
 map:map,
 title:"spxlandslide NO: 130",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.33114095,102.9772829),
 map:map,
 title:"spxlandslide NO: 131",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3328908,102.9785786),
 map:map,
 title:"spxlandslide NO: 132",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32970193,102.9796481),
 map:map,
 title:"spxlandslide NO: 133",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.32485332,102.9798374),
 map:map,
 title:"spxlandslide NO: 134",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31415992,102.9786078),
 map:map,
 title:"spxlandslide NO: 135",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.31814835,102.9802859),
 map:map,
 title:"spxlandslide NO: 136",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.28149257,103.0585266),
 map:map,
 title:"spxlandslide NO: 137",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.27610549,103.0513464),
 map:map,
 title:"spxlandslide NO: 138",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.28588207,103.0283764),
 map:map,
 title:"spxlandslide NO: 139",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.29097434,103.0381306),
 map:map,
 title:"spxlandslide NO: 140",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2944152,103.0305472),
 map:map,
 title:"spxlandslide NO: 141",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.28331434,103.0375787),
 map:map,
 title:"spxlandslide NO: 142",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.27864482,103.0317847),
 map:map,
 title:"spxlandslide NO: 143",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.28027829,103.0319912),
 map:map,
 title:"spxlandslide NO: 144",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.27943291,103.0332588),
 map:map,
 title:"spxlandslide NO: 145",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.27442718,103.0471267),
 map:map,
 title:"spxlandslide NO: 146",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.27306976,103.0332732),
 map:map,
 title:"spxlandslide NO: 147",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.274267,103.0305803),
 map:map,
 title:"spxlandslide NO: 148",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.27877976,103.0107301),
 map:map,
 title:"spxlandslide NO: 149",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.27633759,103.0130444),
 map:map,
 title:"spxlandslide NO: 150",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26671385,103.0462005),
 map:map,
 title:"spxlandslide NO: 151",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26535558,103.0485813),
 map:map,
 title:"spxlandslide NO: 152",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26524792,103.0401026),
 map:map,
 title:"spxlandslide NO: 153",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26503377,103.0407832),
 map:map,
 title:"spxlandslide NO: 154",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25866126,103.0406623),
 map:map,
 title:"spxlandslide NO: 155",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26193384,103.0476212),
 map:map,
 title:"spxlandslide NO: 156",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.27306976,103.0332732),
 map:map,
 title:"spxlandslide NO: 157",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.27177223,103.0314275),
 map:map,
 title:"spxlandslide NO: 158",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26814159,103.0333964),
 map:map,
 title:"spxlandslide NO: 159",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26963867,103.0323697),
 map:map,
 title:"spxlandslide NO: 160",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.27028554,103.031913),
 map:map,
 title:"spxlandslide NO: 161",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26649261,103.0346316),
 map:map,
 title:"spxlandslide NO: 162",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26547788,103.0310683),
 map:map,
 title:"spxlandslide NO: 163",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26546742,103.0295999),
 map:map,
 title:"spxlandslide NO: 164",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25836939,103.032531),
 map:map,
 title:"spxlandslide NO: 165",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2698289,103.0236035),
 map:map,
 title:"spxlandslide NO: 166",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.27043479,103.0255616),
 map:map,
 title:"spxlandslide NO: 167",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.27036908,103.0227906),
 map:map,
 title:"spxlandslide NO: 168",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25727241,103.0205907),
 map:map,
 title:"spxlandslide NO: 169",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26222606,103.0121401),
 map:map,
 title:"spxlandslide NO: 170",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26563095,102.9967967),
 map:map,
 title:"spxlandslide NO: 171",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26362217,102.9927476),
 map:map,
 title:"spxlandslide NO: 172",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25992034,103.0027283),
 map:map,
 title:"spxlandslide NO: 173",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26126791,102.9851061),
 map:map,
 title:"spxlandslide NO: 174",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26247216,102.9862606),
 map:map,
 title:"spxlandslide NO: 175",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26313949,102.9902977),
 map:map,
 title:"spxlandslide NO: 176",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.26424707,102.9876031),
 map:map,
 title:"spxlandslide NO: 177",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25234815,103.0427173),
 map:map,
 title:"spxlandslide NO: 178",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25399075,103.0356117),
 map:map,
 title:"spxlandslide NO: 179",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25356112,103.0362227),
 map:map,
 title:"spxlandslide NO: 180",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25496227,103.0249206),
 map:map,
 title:"spxlandslide NO: 181",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25263211,103.0249302),
 map:map,
 title:"spxlandslide NO: 182",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25126,103.0280892),
 map:map,
 title:"spxlandslide NO: 183",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.24293353,103.0286439),
 map:map,
 title:"spxlandslide NO: 184",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.23631899,103.0264148),
 map:map,
 title:"spxlandslide NO: 185",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25584702,103.0194527),
 map:map,
 title:"spxlandslide NO: 186",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.255407,103.0197699),
 map:map,
 title:"spxlandslide NO: 187",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25318963,103.021043),
 map:map,
 title:"spxlandslide NO: 188",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25123436,103.0152845),
 map:map,
 title:"spxlandslide NO: 189",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25176133,103.0180546),
 map:map,
 title:"spxlandslide NO: 190",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25187773,103.0173557),
 map:map,
 title:"spxlandslide NO: 191",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.24086576,103.0182621),
 map:map,
 title:"spxlandslide NO: 192",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2374027,103.0181066),
 map:map,
 title:"spxlandslide NO: 193",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2391616,103.0166164),
 map:map,
 title:"spxlandslide NO: 194",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.24567589,103.0211779),
 map:map,
 title:"spxlandslide NO: 195",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.24016224,103.0188799),
 map:map,
 title:"spxlandslide NO: 196",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.24285434,103.0157975),
 map:map,
 title:"spxlandslide NO: 197",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2362647,103.0144155),
 map:map,
 title:"spxlandslide NO: 198",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.24487151,103.004712),
 map:map,
 title:"spxlandslide NO: 199",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.251585,102.9955038),
 map:map,
 title:"spxlandslide NO: 200",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2522673,102.9973755),
 map:map,
 title:"spxlandslide NO: 201",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25151089,103.0001278),
 map:map,
 title:"spxlandslide NO: 202",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25320315,102.9909972),
 map:map,
 title:"spxlandslide NO: 203",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25346296,102.9991751),
 map:map,
 title:"spxlandslide NO: 204",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2411512,102.9981735),
 map:map,
 title:"spxlandslide NO: 205",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.24199162,102.9971304),
 map:map,
 title:"spxlandslide NO: 206",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.23736693,102.9977222),
 map:map,
 title:"spxlandslide NO: 207",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25395417,102.9851748),
 map:map,
 title:"spxlandslide NO: 208",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25563958,102.9840651),
 map:map,
 title:"spxlandslide NO: 209",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25348904,102.9891693),
 map:map,
 title:"spxlandslide NO: 210",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25576969,102.9861989),
 map:map,
 title:"spxlandslide NO: 211",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.24910481,102.9905585),
 map:map,
 title:"spxlandslide NO: 212",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.25013411,102.9869883),
 map:map,
 title:"spxlandslide NO: 213",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.24708087,102.9851986),
 map:map,
 title:"spxlandslide NO: 214",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.24537809,102.9833557),
 map:map,
 title:"spxlandslide NO: 215",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.23731868,102.9795998),
 map:map,
 title:"spxlandslide NO: 216",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.23864746,102.9831762),
 map:map,
 title:"spxlandslide NO: 217",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.24000367,102.9861275),
 map:map,
 title:"spxlandslide NO: 218",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.23595593,102.9989708),
 map:map,
 title:"spxlandslide NO: 219",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.23315592,102.9967744),
 map:map,
 title:"spxlandslide NO: 220",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.23347757,102.9979169),
 map:map,
 title:"spxlandslide NO: 221",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.23430184,102.9993089),
 map:map,
 title:"spxlandslide NO: 222",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.23040972,102.9941003),
 map:map,
 title:"spxlandslide NO: 223",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.22685555,102.9950262),
 map:map,
 title:"spxlandslide NO: 224",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.22943614,102.9992541),
 map:map,
 title:"spxlandslide NO: 225",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.23401322,102.9883582),
 map:map,
 title:"spxlandslide NO: 226",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.23199058,102.9818344),
 map:map,
 title:"spxlandslide NO: 227",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/orange.png"), 
  zIndex: null }); 
markersspxlandslide.push(marker); 
 var  markersspxroad =[] ; var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3089853484796,103.035091703034),
 map:map,
 title:"spxroad NO: 1",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3045768911867,103.037120272567),
 map:map,
 title:"spxroad NO: 2",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3074748666331,103.036042345295),
 map:map,
 title:"spxroad NO: 3",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3018563135015,103.037594999559),
 map:map,
 title:"spxroad NO: 4",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2955340886764,103.038755821423),
 map:map,
 title:"spxroad NO: 5",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2971755123888,103.037433310327),
 map:map,
 title:"spxroad NO: 6",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2987763299486,103.037954744514),
 map:map,
 title:"spxroad NO: 7",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.30923795206,103.031638819579),
 map:map,
 title:"spxroad NO: 8",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3137893220503,103.027361653453),
 map:map,
 title:"spxroad NO: 9",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3155304765366,103.020206129183),
 map:map,
 title:"spxroad NO: 10",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3155304765366,103.020206129183),
 map:map,
 title:"spxroad NO: 11",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3144635819836,103.021107002253),
 map:map,
 title:"spxroad NO: 12",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3090246571754,103.02034684943),
 map:map,
 title:"spxroad NO: 13",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3117012855315,103.020708736002),
 map:map,
 title:"spxroad NO: 14",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3108600270929,103.023244646569),
 map:map,
 title:"spxroad NO: 15",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3204925840401,103.010795130574),
 map:map,
 title:"spxroad NO: 16",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3182550404671,103.013928878602),
 map:map,
 title:"spxroad NO: 17",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3183737430439,103.013569803307),
 map:map,
 title:"spxroad NO: 18",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3187446885965,103.000423492925),
 map:map,
 title:"spxroad NO: 19",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3312248508565,102.994391461571),
 map:map,
 title:"spxroad NO: 20",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3326516351621,102.995416087224),
 map:map,
 title:"spxroad NO: 21",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3308378910104,102.99501693264),
 map:map,
 title:"spxroad NO: 22",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3323036270927,102.992000912277),
 map:map,
 title:"spxroad NO: 23",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3301269338393,102.992852523354),
 map:map,
 title:"spxroad NO: 24",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3307338986499,102.991621889917),
 map:map,
 title:"spxroad NO: 25",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3249307085353,102.991375897272),
 map:map,
 title:"spxroad NO: 26",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3297671335578,102.994997896952),
 map:map,
 title:"spxroad NO: 27",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3296217484904,102.995768366426),
 map:map,
 title:"spxroad NO: 28",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3255642122678,102.99555088369),
 map:map,
 title:"spxroad NO: 29",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3212057535434,102.99859346082),
 map:map,
 title:"spxroad NO: 30",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3211327437482,102.997982454892),
 map:map,
 title:"spxroad NO: 31",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3216236265537,102.996117591986),
 map:map,
 title:"spxroad NO: 32",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3122879600136,102.992306563958),
 map:map,
 title:"spxroad NO: 33",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3275052258571,102.988044056999),
 map:map,
 title:"spxroad NO: 34",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3277286572455,102.988296041919),
 map:map,
 title:"spxroad NO: 35",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3222019842944,102.985551769884),
 map:map,
 title:"spxroad NO: 36",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3230093354137,102.987371264399),
 map:map,
 title:"spxroad NO: 37",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3239891260721,102.988440832121),
 map:map,
 title:"spxroad NO: 38",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3237177485443,102.987744839777),
 map:map,
 title:"spxroad NO: 39",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3223621220201,102.984595464505),
 map:map,
 title:"spxroad NO: 40",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3220042510848,102.98495523901),
 map:map,
 title:"spxroad NO: 41",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.3206374886831,102.978429567201),
 map:map,
 title:"spxroad NO: 42",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2829488094443,103.058300964821),
 map:map,
 title:"spxroad NO: 43",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.288104131961,103.0550158843),
 map:map,
 title:"spxroad NO: 44",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2939837813843,103.055599825337),
 map:map,
 title:"spxroad NO: 45",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2835857012985,103.033219081958),
 map:map,
 title:"spxroad NO: 46",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2834472520635,103.032920650666),
 map:map,
 title:"spxroad NO: 47",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2779786339304,103.038469272059),
 map:map,
 title:"spxroad NO: 48",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2787782501576,103.03147815243),
 map:map,
 title:"spxroad NO: 49",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2779786339304,103.038469272059),
 map:map,
 title:"spxroad NO: 50",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2787782501576,103.03147815243),
 map:map,
 title:"spxroad NO: 51",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2673014943935,103.021620701644),
 map:map,
 title:"spxroad NO: 52",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2617844955029,103.022413046245),
 map:map,
 title:"spxroad NO: 53",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2600529088004,102.997587147921),
 map:map,
 title:"spxroad NO: 54",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2611707567384,102.981370584071),
 map:map,
 title:"spxroad NO: 55",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2557869093155,103.030937590912),
 map:map,
 title:"spxroad NO: 56",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2544947227498,103.025214439963),
 map:map,
 title:"spxroad NO: 57",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2522884855034,103.025014704776),
 map:map,
 title:"spxroad NO: 58",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2551422490795,103.018855580794),
 map:map,
 title:"spxroad NO: 59",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/cabs.png"), 
  zIndex: null }); 
markersspxroad.push(marker); 
 var  markersspxlake =[] ; var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.2651333,103.0301574),
 map:map,
 title:"spxlake NO: 1",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/icon29.png"), 
  zIndex: null }); 
markersspxlake.push(marker); 
var  marker = new google.maps.Marker({ 
 position: new google.maps.LatLng(30.24281901,103.0018368),
 map:map,
 title:"spxlake NO: 2",
 clickable: true,
 draggable: false,
 flat: true,
 visible: true,
 icon: new google.maps.MarkerImage("pic/icon29.png"), 
  zIndex: null }); 
markersspxlake.push(marker); 

 function setOpacL(MLPArray,textname) {
opacity=0.01*parseInt(document.getElementById(textname).value) 

for (var i = 0; i < MLPArray.length; i++) { MLPArray[i].setOptions
({strokeOpacity: opacity}); } } 
function showO(MLPArray,boxname) { 

for (var i = 0; i < MLPArray.length; i++) { 
 MLPArray[i].setMap(map); } 

 document.getElementById(boxname).checked = true; } 
 function hideO(MLPArray,boxname) { 

for (var i = 0; i < MLPArray.length; i++) { 
 MLPArray[i].setMap(null);} 

 document.getElementById(boxname).checked = false; } 
 function boxclick(box,MLPArray,boxname)
{ 
 if (box.checked) { 
 showO(MLPArray,boxname); 
 }
 else { 
 hideO(MLPArray,boxname);} } 
 function setOpac(MLPArray,textname)
 {opacity=0.01*parseInt(document.getElementById(textname).value) 
 for
  (var i = 0; i < MLPArray.length; i++) { MLPArray[i].setOptions({strokeOpacity:
  opacity, fillOpacity: opacity}); } } 
 function setLineWeight(MLPArray,textnameW)
 {weight=parseInt(document.getElementById(textnameW).value) 

 for (var i = 0; i < MLPArray.length; i++)
  { MLPArray[i].setOptions({strokeWeight: weight}); } } 
function legendDisplay(box,divLegendImage){ 

element = document.getElementById(divLegendImage).style; 
 if (box.checked)
 { element.display="block";} else {  element.display="none";}} 
function showR(R,boxname) { R.setMap(map);
 
 document.getElementById(boxname).checked = true; } 
  function hideR(R,boxname) { R.setMap(null);
 
 document.getElementById(boxname).checked = false; } 
 function boxclickR(box,R,boxname) { 
 if (box.checked)
{ 
 showR(R,boxname);
 } else { 
 hideR(R,boxname);} }  
function legendDisplay(box,divLegendImage){

 element = document.getElementById(divLegendImage).style; 
 if (box.checked)
 { element.display="block";} else {  element.display="none";}} 
function initialize() { 
 var latlng = new google.maps.LatLng( 30.279873175 , 103.01790475 ) ; 
 
 var myOptions = { zoom: 15 , 
 center: latlng , 
 mapTypeId: google.maps.MapTypeId.TERRAIN  ,
 disableDefaultUI: false  ,
 disableDoubleClickZoom: false  ,
  draggable: true  ,
  keyboardShortcuts:  true  ,
 mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DEFAULT}  ,
  navigationControl: true  ,
 navigationControlOptions: {style: google.maps.NavigationControlStyle.DEFAULT}  ,
 noClear: false  ,
 scaleControl: true  ,
 scaleControlOptions: {style: google.maps.ScaleControlStyle.STANDARD}  ,
  scrollwheel: true  ,
 streetViewControl: false } ; 
 
 map= new google.maps.Map(document.getElementById("map_canvas"),myOptions); 
 map.fitBounds(new google.maps.LatLngBounds(
 new google.maps.LatLng(30.22685555,102.9772829),
 new google.maps.LatLng( 30.3328908,103.0585266)));   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[0] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[0] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[1] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[1] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[2] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description : 滑坡面积较大 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[2] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[3] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[3] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[4] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[4] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[5] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[5] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[6] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[6] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[7] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[7] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[8] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[8] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[9] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[9] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[10] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[10] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[11] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[11] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[12] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[12] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[13] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[13] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[14] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[14] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[15] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[15] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[16] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[16] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[17] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[17] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[18] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[18] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[19] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[19] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[20] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[20] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[21] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[21] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[22] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[22] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[23] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[23] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[24] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[24] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[25] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[25] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[26] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[26] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[27] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[27] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[28] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[28] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[29] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[29] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[30] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[30] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[31] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 101 <br> description : 面积较大 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[31] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[32] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[32] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[33] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-27(16) <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[33] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[34] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-27(16) <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[34] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[35] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-27(16) <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[35] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[36] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[36] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[37] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description : 滑坡面积较大 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[37] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[38] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[38] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[39] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[39] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[40] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description : 滑坡厉害，阻断了河边的路 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[40] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[41] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-27(16) <br> description : 玉溪河岸，面积较大 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[41] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[42] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[42] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[43] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[43] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[44] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[44] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[45] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[45] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[46] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[46] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[47] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[47] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[48] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[48] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[49] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[49] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[50] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[50] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[51] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[51] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[52] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[52] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[53] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[53] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[54] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[54] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[55] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[55] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[56] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[56] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[57] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[57] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[58] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[58] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[59] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[59] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[60] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[60] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[61] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[61] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[62] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[62] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[63] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[63] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[64] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[64] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[65] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[65] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[66] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[66] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[67] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[67] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[68] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[68] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[69] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[69] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[70] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[70] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[71] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[71] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[72] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[72] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[73] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[73] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[74] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[74] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[75] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[75] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[76] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[76] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[77] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[77] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[78] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[78] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[79] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[79] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[80] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[80] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[81] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[81] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[82] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[82] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[83] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[83] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[84] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[84] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[85] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[85] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[86] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[86] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[87] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[87] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[88] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[88] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[89] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[89] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[90] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[90] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[91] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[91] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[92] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[92] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[93] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[93] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[94] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[94] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[95] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[95] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[96] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[96] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[97] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[97] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[98] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[98] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[99] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[99] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[100] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[100] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[101] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[101] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[102] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[102] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[103] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[103] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[104] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[104] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[105] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[105] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[106] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[106] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[107] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[107] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[108] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[108] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[109] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[109] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[110] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[110] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[111] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[111] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[112] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[112] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[113] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[113] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[114] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[114] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[115] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[115] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[116] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[116] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[117] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[117] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[118] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[118] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[119] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[119] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[120] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[120] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[121] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[121] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[122] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description : 小面积滑坡 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[122] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[123] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[123] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[124] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[124] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[125] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[125] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[126] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[126] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[127] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description : 大面积滑坡 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[127] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[128] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[128] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[129] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[129] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[130] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[130] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[131] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[131] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[132] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[132] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[133] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[133] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[134] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description : 大面积滑坡 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[134] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[135] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[135] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[136] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[136] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[137] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[137] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[138] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-103 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[138] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[139] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-53 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[139] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[140] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[140] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[141] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[141] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[142] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-148 <br> description : 面积较大 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[142] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[143] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-148 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[143] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[144] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-148 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[144] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[145] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[145] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[146] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-262 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[146] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[147] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-262 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[147] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[148] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[148] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[149] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[149] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[150] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-277 <br> description : 大面积滑坡 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[150] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[151] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[151] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[152] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-281 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[152] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[153] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-281 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[153] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[154] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-367 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[154] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[155] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[155] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[156] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-262 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[156] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[157] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-262 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[157] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[158] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-262 <br> description : 泥石落入玉溪河中，阻塞了一半河道 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[158] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[159] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-262 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[159] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[160] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-262 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[160] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[161] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-262 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[161] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[162] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡上 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[162] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[163] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡上 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[163] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[164] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[164] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[165] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[165] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[166] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[166] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[167] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[167] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[168] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡上 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[168] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[169] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[169] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[170] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡上 <br> description : 面积较大 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[170] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[171] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[171] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[172] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[172] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[173] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-405 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[173] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[174] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-405 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[174] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[175] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡上 <br> description : 少量落石,道路可能中断 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[175] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[176] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[176] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[177] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-526 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[177] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[178] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-455 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[178] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[179] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-455 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[179] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[180] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[180] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[181] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[181] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[182] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description : 大面积滑坡 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[182] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[183] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[183] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[184] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[184] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[185] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[185] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[186] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[186] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[187] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[187] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[188] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description : 泥土堆人龙门河中,河道堵塞 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[188] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[189] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[189] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[190] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[190] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[191] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[191] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[192] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[192] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[193] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[193] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[194] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[194] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[195] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[195] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[196] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[196] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[197] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[197] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[198] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[198] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[199] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡上 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[199] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[200] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡上 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[200] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[201] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description : 可能引起堰塞湖 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[201] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[202] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[202] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[203] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[203] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[204] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-621 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[204] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[205] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-621 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[205] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[206] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-621 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[206] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[207] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-405 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[207] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[208] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[208] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[209] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[209] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[210] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[210] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[211] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[211] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[212] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[212] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[213] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[213] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[214] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[214] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[215] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[215] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[216] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[216] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[217] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[217] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[218] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-621 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[218] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[219] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-689 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[219] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[220] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-689 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[220] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[221] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[221] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[222] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 2-689 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[222] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[223] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[223] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[224] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[224] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[225] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[225] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlandslide[226] ,"click",function(event){ 
 infowindow.content=" type : 滑坡 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlandslide[226] )}); showO(markersspxlandslide,"spxlandslidebox");  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[0] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[0] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[1] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 2-27(16) <br> description : 邛崃油榨-芦山玉溪河X074县道中断约500米 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[1] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[2] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[2] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[3] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 2-27(16) <br> description : 断路约有400米 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[3] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[4] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 2-27(16) <br> description : 少量落石 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[4] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[5] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 2-27(16) <br> description : 道路可能中断 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[5] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[6] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 2-27(16) <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[6] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[7] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[7] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[8] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[8] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[9] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-中 <br> description : 路断约150米 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[9] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[10] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-中 <br> description : 路断约150米 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[10] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[11] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[11] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[12] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[12] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[13] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[13] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[14] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-中 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[14] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[15] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description : 道路中断达130米 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[15] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[16] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[16] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[17] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[17] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[18] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description : 道路中断达160米 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[18] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[19] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[19] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[20] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description : 该条道路基本中断，无法进入 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[20] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[21] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[21] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[22] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description : 该道路中断约110米 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[22] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[23] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description : 被损毁房屋中断，较易清理 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[23] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[24] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[24] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[25] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[25] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[26] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[26] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[27] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[27] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[28] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description : 道路中断严重 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[28] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[29] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description : 道路被巨石中断 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[29] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[30] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description : 中断约70M <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[30] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[31] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description : 道路完全损毁，被水中断 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[31] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[32] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description : 道路被完全损毁 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[32] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[33] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[33] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[34] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[34] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[35] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description : 道路中断严重 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[35] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[36] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[36] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[37] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[37] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[38] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[38] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[39] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[39] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[40] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[40] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[41] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 宝盛乡-左 <br> description : 被碎石中断 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[41] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[42] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 2-130(511) <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[42] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[43] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 2-130 <br> description : 少量落石，可以通行 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[43] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[44] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[44] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[45] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[45] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[46] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[46] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[47] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 2-179 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[47] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[48] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 2-148 <br> description : 道路中断约350米 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[48] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[49] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 2-179 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[49] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[50] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 2-148 <br> description : 道路中断约350米 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[50] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[51] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 龙门乡上 <br> description : 少量落石,道路可能中断 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[51] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[52] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 龙门乡上 <br> description : 间断性塌方,约250米路段，一直到龙门江 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[52] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[53] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[53] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[54] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 2-405 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[54] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[55] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 龙门乡 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[55] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[56] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 龙门乡下 <br> description : 间断性塌方,约200米路段 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[56] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[57] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 龙门乡下 <br> description :  <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[57] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxroad[58] ,"click",function(event){ 
 infowindow.content=" type : 道路堵塞点 <br> location : 龙门乡下 <br> description : 由于道路塌方造成约300米距离堵塞 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxroad[58] )}); showO(markersspxroad,"spxroadbox");  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlake[0] ,"click",function(event){ 
 infowindow.content=" type : 堰塞湖 <br> location : 龙门乡上 <br> description : 可能形成堰塞湖 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlake[0] )});   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(markersspxlake[1] ,"click",function(event){ 
 infowindow.content=" type : 堰塞湖 <br> location : 龙门乡下 <br> description : 由于滑坡造成河道堵塞,可能形成堰塞湖 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map,markersspxlake[1] )}); showO(markersspxlake,"spxlakebox"); }