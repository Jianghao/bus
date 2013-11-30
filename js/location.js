var map 
 var  polysp =[] ; 
 var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2159649416113 , 102.96 ),
new google.maps.LatLng( 30.2157616790428 , 102.958213429611 ),
new google.maps.LatLng( 30.215165745766 , 102.956548631947 ),
new google.maps.LatLng( 30.2142177602615 , 102.955119075517 ),
new google.maps.LatLng( 30.2129823352072 , 102.954022187829 ),
new google.maps.LatLng( 30.21154367181 , 102.953332714359 ),
new google.maps.LatLng( 30.2099998192129 , 102.953097626281 ),
new google.maps.LatLng( 30.2084559908367 , 102.953332923558 ),
new google.maps.LatLng( 30.2070173936122 , 102.954022550172 ),
new google.maps.LatLng( 30.2057820589514 , 102.955119493916 ),
new google.maps.LatLng( 30.2048341638405 , 102.95654899429 ),
new google.maps.LatLng( 30.2042382967363 , 102.958213638811 ),
new google.maps.LatLng( 30.2040350583887 , 102.96 ),
new google.maps.LatLng( 30.2042382967363 , 102.961786361189 ),
new google.maps.LatLng( 30.2048341638405 , 102.96345100571 ),
new google.maps.LatLng( 30.2057820589514 , 102.964880506084 ),
new google.maps.LatLng( 30.2070173936122 , 102.965977449828 ),
new google.maps.LatLng( 30.2084559908367 , 102.966667076442 ),
new google.maps.LatLng( 30.2099998192129 , 102.966902373719 ),
new google.maps.LatLng( 30.21154367181 , 102.966667285641 ),
new google.maps.LatLng( 30.2129823352072 , 102.965977812171 ),
new google.maps.LatLng( 30.2142177602615 , 102.964880924483 ),
new google.maps.LatLng( 30.215165745766 , 102.963451368053 ),
new google.maps.LatLng( 30.2157616790428 , 102.961786570389 ),
 new google.maps.LatLng( 30.2159649416113 , 102.96 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3167375093501 , 103.04 ),
new google.maps.LatLng( 30.3165079187714 , 103.037979964753 ),
new google.maps.LatLng( 30.3158347963544 , 103.036097618376 ),
new google.maps.LatLng( 30.3147640227502 , 103.034481259283 ),
new google.maps.LatLng( 30.3133685809806 , 103.033241046853 ),
new google.maps.LatLng( 30.3117435796646 , 103.032461492326 ),
new google.maps.LatLng( 30.3099997684231 , 103.032195701428 ),
new google.maps.LatLng( 30.308255988207 , 103.03246176057 ),
new google.maps.LatLng( 30.3066310716541 , 103.033241511465 ),
new google.maps.LatLng( 30.3052357456729 , 103.034481795771 ),
new google.maps.LatLng( 30.3041650878572 , 103.036098082988 ),
new google.maps.LatLng( 30.3034920502032 , 103.037980232997 ),
new google.maps.LatLng( 30.3032624906499 , 103.04 ),
new google.maps.LatLng( 30.3034920502032 , 103.042019767003 ),
new google.maps.LatLng( 30.3041650878572 , 103.043901917012 ),
new google.maps.LatLng( 30.3052357456729 , 103.045518204229 ),
new google.maps.LatLng( 30.3066310716541 , 103.046758488535 ),
new google.maps.LatLng( 30.308255988207 , 103.04753823943 ),
new google.maps.LatLng( 30.3099997684231 , 103.047804298572 ),
new google.maps.LatLng( 30.3117435796646 , 103.047538507674 ),
new google.maps.LatLng( 30.3133685809806 , 103.046758953147 ),
new google.maps.LatLng( 30.3147640227502 , 103.045518740717 ),
new google.maps.LatLng( 30.3158347963544 , 103.043902381624 ),
new google.maps.LatLng( 30.3165079187714 , 103.042020035247 ),
 new google.maps.LatLng( 30.3167375093501 , 103.04 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3086599453513 , 103.01 ),
new google.maps.LatLng( 30.3083648392468 , 103.007403797098 ),
new google.maps.LatLng( 30.3074996370475 , 103.0049845654 ),
new google.maps.LatLng( 30.3061233148436 , 103.002907203948 ),
new google.maps.LatLng( 30.3043296858276 , 103.001313293341 ),
new google.maps.LatLng( 30.3022410019576 , 103.00031144408 ),
new google.maps.LatLng( 30.2999996175692 , 102.999969898128 ),
new google.maps.LatLng( 30.2977582844169 , 103.000311887018 ),
new google.maps.LatLng( 30.2956697405263 , 103.001314060532 ),
new google.maps.LatLng( 30.2938763027256 , 103.002908089824 ),
new google.maps.LatLng( 30.2925001717372 , 103.004985332592 ),
new google.maps.LatLng( 30.2916351095172 , 103.007404240036 ),
new google.maps.LatLng( 30.2913400546487 , 103.01 ),
new google.maps.LatLng( 30.2916351095172 , 103.012595759964 ),
new google.maps.LatLng( 30.2925001717372 , 103.015014667408 ),
new google.maps.LatLng( 30.2938763027256 , 103.017091910176 ),
new google.maps.LatLng( 30.2956697405263 , 103.018685939468 ),
new google.maps.LatLng( 30.2977582844169 , 103.019688112982 ),
new google.maps.LatLng( 30.2999996175692 , 103.020030101872 ),
new google.maps.LatLng( 30.3022410019576 , 103.01968855592 ),
new google.maps.LatLng( 30.3043296858276 , 103.018686706659 ),
new google.maps.LatLng( 30.3061233148436 , 103.017092796052 ),
new google.maps.LatLng( 30.3074996370475 , 103.0150154346 ),
new google.maps.LatLng( 30.3083648392468 , 103.012596202902 ),
 new google.maps.LatLng( 30.3086599453513 , 103.01 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1559649416113 , 102.81 ),
new google.maps.LatLng( 30.1557616790719 , 102.808214517543 ),
new google.maps.LatLng( 30.1551657458748 , 102.806550733606 ),
new google.maps.LatLng( 30.1542177604791 , 102.805122047571 ),
new google.maps.LatLng( 30.1529823355335 , 102.80402582761 ),
new google.maps.LatLng( 30.151543672216 , 102.803336773714 ),
new google.maps.LatLng( 30.149999819648 , 102.803101828508 ),
new google.maps.LatLng( 30.1484559912426 , 102.803336982282 ),
new google.maps.LatLng( 30.1470173939385 , 102.804026188861 ),
new google.maps.LatLng( 30.145782059169 , 102.805122464708 ),
new google.maps.LatLng( 30.1448341639493 , 102.806551094858 ),
new google.maps.LatLng( 30.1442382967655 , 102.808214726112 ),
new google.maps.LatLng( 30.1440350583887 , 102.81 ),
new google.maps.LatLng( 30.1442382967655 , 102.811785273888 ),
new google.maps.LatLng( 30.1448341639493 , 102.813448905142 ),
new google.maps.LatLng( 30.145782059169 , 102.814877535292 ),
new google.maps.LatLng( 30.1470173939385 , 102.815973811139 ),
new google.maps.LatLng( 30.1484559912426 , 102.816663017718 ),
new google.maps.LatLng( 30.149999819648 , 102.816898171492 ),
new google.maps.LatLng( 30.151543672216 , 102.816663226286 ),
new google.maps.LatLng( 30.1529823355335 , 102.81597417239 ),
new google.maps.LatLng( 30.1542177604791 , 102.814877952429 ),
new google.maps.LatLng( 30.1551657458748 , 102.813449266394 ),
new google.maps.LatLng( 30.1557616790719 , 102.811785482457 ),
 new google.maps.LatLng( 30.1559649416113 , 102.81 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2586599453513 , 102.97 ),
new google.maps.LatLng( 30.2583648392981 , 102.967405119797 ),
new google.maps.LatLng( 30.2574996372389 , 102.964987120547 ),
new google.maps.LatLng( 30.2561233152266 , 102.962910817222 ),
new google.maps.LatLng( 30.2543296864019 , 102.96131771828 ),
new google.maps.LatLng( 30.2522410026721 , 102.960316378941 ),
new google.maps.LatLng( 30.249999618335 , 102.959975006495 ),
new google.maps.LatLng( 30.2477582851313 , 102.960316820767 ),
new google.maps.LatLng( 30.2456697411006 , 102.961318483546 ),
new google.maps.LatLng( 30.2438763031084 , 102.962911700874 ),
new google.maps.LatLng( 30.2425001719286 , 102.964987885813 ),
new google.maps.LatLng( 30.2416351095685 , 102.967405561623 ),
new google.maps.LatLng( 30.2413400546487 , 102.97 ),
new google.maps.LatLng( 30.2416351095685 , 102.972594438377 ),
new google.maps.LatLng( 30.2425001719286 , 102.975012114187 ),
new google.maps.LatLng( 30.2438763031084 , 102.977088299126 ),
new google.maps.LatLng( 30.2456697411006 , 102.978681516454 ),
new google.maps.LatLng( 30.2477582851313 , 102.979683179233 ),
new google.maps.LatLng( 30.249999618335 , 102.980024993505 ),
new google.maps.LatLng( 30.2522410026721 , 102.979683621059 ),
new google.maps.LatLng( 30.2543296864019 , 102.978682281719 ),
new google.maps.LatLng( 30.2561233152266 , 102.977089182778 ),
new google.maps.LatLng( 30.2574996372389 , 102.975012879453 ),
new google.maps.LatLng( 30.2583648392981 , 102.972594880203 ),
 new google.maps.LatLng( 30.2586599453513 , 102.97 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2967375093501 , 102.87 ),
new google.maps.LatLng( 30.2965079187838 , 102.867980376861 ),
new google.maps.LatLng( 30.2958347964007 , 102.866098414479 ),
new google.maps.LatLng( 30.2947640228429 , 102.864482385083 ),
new google.maps.LatLng( 30.2933685811197 , 102.863242425574 ),
new google.maps.LatLng( 30.2917435798376 , 102.862463029963 ),
new google.maps.LatLng( 30.2899997686086 , 102.862197293168 ),
new google.maps.LatLng( 30.2882559883801 , 102.862463297937 ),
new google.maps.LatLng( 30.2866310717932 , 102.863242889719 ),
new google.maps.LatLng( 30.2852357457657 , 102.864482921032 ),
new google.maps.LatLng( 30.2841650879035 , 102.866098878625 ),
new google.maps.LatLng( 30.2834920502156 , 102.867980644835 ),
new google.maps.LatLng( 30.2832624906499 , 102.87 ),
new google.maps.LatLng( 30.2834920502156 , 102.872019355165 ),
new google.maps.LatLng( 30.2841650879035 , 102.873901121375 ),
new google.maps.LatLng( 30.2852357457657 , 102.875517078968 ),
new google.maps.LatLng( 30.2866310717932 , 102.876757110281 ),
new google.maps.LatLng( 30.2882559883801 , 102.877536702063 ),
new google.maps.LatLng( 30.2899997686086 , 102.877802706832 ),
new google.maps.LatLng( 30.2917435798376 , 102.877536970037 ),
new google.maps.LatLng( 30.2933685811197 , 102.876757574426 ),
new google.maps.LatLng( 30.2947640228429 , 102.875517614917 ),
new google.maps.LatLng( 30.2958347964007 , 102.873901585521 ),
new google.maps.LatLng( 30.2965079187838 , 102.872019623139 ),
 new google.maps.LatLng( 30.2967375093501 , 102.87 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2567375093501 , 102.95 ),
new google.maps.LatLng( 30.2565079188086 , 102.947981199834 ),
new google.maps.LatLng( 30.2558347964934 , 102.946100004287 ),
new google.maps.LatLng( 30.2547640230283 , 102.944484633289 ),
new google.maps.LatLng( 30.2533685813978 , 102.94324517886 ),
new google.maps.LatLng( 30.2517435801836 , 102.942466100604 ),
new google.maps.LatLng( 30.2499997689793 , 102.94220047185 ),
new google.maps.LatLng( 30.248255988726 , 102.94246636804 ),
new google.maps.LatLng( 30.2466310720712 , 102.943245642073 ),
new google.maps.LatLng( 30.245235745951 , 102.944485168161 ),
new google.maps.LatLng( 30.2441650879962 , 102.9461004675 ),
new google.maps.LatLng( 30.2434920502405 , 102.94798146727 ),
new google.maps.LatLng( 30.2432624906499 , 102.95 ),
new google.maps.LatLng( 30.2434920502405 , 102.95201853273 ),
new google.maps.LatLng( 30.2441650879962 , 102.9538995325 ),
new google.maps.LatLng( 30.245235745951 , 102.955514831839 ),
new google.maps.LatLng( 30.2466310720712 , 102.956754357927 ),
new google.maps.LatLng( 30.248255988726 , 102.95753363196 ),
new google.maps.LatLng( 30.2499997689793 , 102.95779952815 ),
new google.maps.LatLng( 30.2517435801836 , 102.957533899396 ),
new google.maps.LatLng( 30.2533685813978 , 102.95675482114 ),
new google.maps.LatLng( 30.2547640230283 , 102.955515366711 ),
new google.maps.LatLng( 30.2558347964934 , 102.953899995713 ),
new google.maps.LatLng( 30.2565079188086 , 102.952018800166 ),
 new google.maps.LatLng( 30.2567375093501 , 102.95 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2759649416113 , 102.9 ),
new google.maps.LatLng( 30.2757616790136 , 102.898212338392 ),
new google.maps.LatLng( 30.275165745657 , 102.896546523935 ),
new google.maps.LatLng( 30.2742177600436 , 102.895116094481 ),
new google.maps.LatLng( 30.2729823348804 , 102.894018537046 ),
new google.maps.LatLng( 30.2715436714035 , 102.893328642735 ),
new google.maps.LatLng( 30.2699998187772 , 102.893093411353 ),
new google.maps.LatLng( 30.2684559904302 , 102.893328852566 ),
new google.maps.LatLng( 30.2670173932855 , 102.894018900485 ),
new google.maps.LatLng( 30.2657820587336 , 102.895116514143 ),
new google.maps.LatLng( 30.2648341637316 , 102.896546887374 ),
new google.maps.LatLng( 30.2642382967071 , 102.898212548223 ),
new google.maps.LatLng( 30.2640350583887 , 102.9 ),
new google.maps.LatLng( 30.2642382967071 , 102.901787451777 ),
new google.maps.LatLng( 30.2648341637316 , 102.903453112626 ),
new google.maps.LatLng( 30.2657820587336 , 102.904883485857 ),
new google.maps.LatLng( 30.2670173932855 , 102.905981099515 ),
new google.maps.LatLng( 30.2684559904302 , 102.906671147434 ),
new google.maps.LatLng( 30.2699998187772 , 102.906906588647 ),
new google.maps.LatLng( 30.2715436714035 , 102.906671357265 ),
new google.maps.LatLng( 30.2729823348804 , 102.905981462954 ),
new google.maps.LatLng( 30.2742177600436 , 102.904883905519 ),
new google.maps.LatLng( 30.275165745657 , 102.903453476065 ),
new google.maps.LatLng( 30.2757616790136 , 102.901787661608 ),
 new google.maps.LatLng( 30.2759649416113 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3359649416113 , 102.93 ),
new google.maps.LatLng( 30.3357616789844 , 102.928211243875 ),
new google.maps.LatLng( 30.335165745548 , 102.926544409555 ),
new google.maps.LatLng( 30.3342177598255 , 102.925113104438 ),
new google.maps.LatLng( 30.3329823345532 , 102.924014875235 ),
new google.maps.LatLng( 30.3315436709965 , 102.92332455881 ),
new google.maps.LatLng( 30.3299998183411 , 102.923089183691 ),
new google.maps.LatLng( 30.3284559900233 , 102.923324769275 ),
new google.maps.LatLng( 30.3270173929583 , 102.924015239771 ),
new google.maps.LatLng( 30.3257820585155 , 102.925113525368 ),
new google.maps.LatLng( 30.3248341636225 , 102.926544774091 ),
new google.maps.LatLng( 30.3242382966779 , 102.92821145434 ),
new google.maps.LatLng( 30.3240350583887 , 102.93 ),
new google.maps.LatLng( 30.3242382966779 , 102.93178854566 ),
new google.maps.LatLng( 30.3248341636225 , 102.933455225909 ),
new google.maps.LatLng( 30.3257820585155 , 102.934886474632 ),
new google.maps.LatLng( 30.3270173929583 , 102.935984760229 ),
new google.maps.LatLng( 30.3284559900233 , 102.936675230725 ),
new google.maps.LatLng( 30.3299998183411 , 102.936910816309 ),
new google.maps.LatLng( 30.3315436709965 , 102.93667544119 ),
new google.maps.LatLng( 30.3329823345532 , 102.935985124765 ),
new google.maps.LatLng( 30.3342177598255 , 102.934886895562 ),
new google.maps.LatLng( 30.335165745548 , 102.933455590445 ),
new google.maps.LatLng( 30.3357616789844 , 102.931788756125 ),
 new google.maps.LatLng( 30.3359649416113 , 102.93 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2759649416113 , 102.98 ),
new google.maps.LatLng( 30.2757616790136 , 102.978212338392 ),
new google.maps.LatLng( 30.275165745657 , 102.976546523935 ),
new google.maps.LatLng( 30.2742177600436 , 102.975116094481 ),
new google.maps.LatLng( 30.2729823348804 , 102.974018537046 ),
new google.maps.LatLng( 30.2715436714035 , 102.973328642735 ),
new google.maps.LatLng( 30.2699998187772 , 102.973093411353 ),
new google.maps.LatLng( 30.2684559904302 , 102.973328852566 ),
new google.maps.LatLng( 30.2670173932855 , 102.974018900485 ),
new google.maps.LatLng( 30.2657820587336 , 102.975116514143 ),
new google.maps.LatLng( 30.2648341637316 , 102.976546887374 ),
new google.maps.LatLng( 30.2642382967071 , 102.978212548223 ),
new google.maps.LatLng( 30.2640350583887 , 102.98 ),
new google.maps.LatLng( 30.2642382967071 , 102.981787451777 ),
new google.maps.LatLng( 30.2648341637316 , 102.983453112626 ),
new google.maps.LatLng( 30.2657820587336 , 102.984883485857 ),
new google.maps.LatLng( 30.2670173932855 , 102.985981099515 ),
new google.maps.LatLng( 30.2684559904302 , 102.986671147434 ),
new google.maps.LatLng( 30.2699998187772 , 102.986906588647 ),
new google.maps.LatLng( 30.2715436714035 , 102.986671357265 ),
new google.maps.LatLng( 30.2729823348804 , 102.985981462954 ),
new google.maps.LatLng( 30.2742177600436 , 102.984883905519 ),
new google.maps.LatLng( 30.275165745657 , 102.983453476065 ),
new google.maps.LatLng( 30.2757616790136 , 102.981787661608 ),
 new google.maps.LatLng( 30.2759649416113 , 102.98 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2086599453513 , 102.93 ),
new google.maps.LatLng( 30.2083648393493 , 102.927406439175 ),
new google.maps.LatLng( 30.2074996374302 , 102.924989669279 ),
new google.maps.LatLng( 30.2061233156091 , 102.922914421423 ),
new google.maps.LatLng( 30.2043296869757 , 102.921322132109 ),
new google.maps.LatLng( 30.2022410033858 , 102.920321301409 ),
new google.maps.LatLng( 30.1999996190999 , 102.919980102035 ),
new google.maps.LatLng( 30.197758285845 , 102.920321742126 ),
new google.maps.LatLng( 30.1956697416742 , 102.921322895452 ),
new google.maps.LatLng( 30.1938763034909 , 102.922915302855 ),
new google.maps.LatLng( 30.1925001721198 , 102.924990432622 ),
new google.maps.LatLng( 30.1916351096198 , 102.927406879892 ),
new google.maps.LatLng( 30.1913400546487 , 102.93 ),
new google.maps.LatLng( 30.1916351096198 , 102.932593120108 ),
new google.maps.LatLng( 30.1925001721198 , 102.935009567378 ),
new google.maps.LatLng( 30.1938763034909 , 102.937084697145 ),
new google.maps.LatLng( 30.1956697416742 , 102.938677104548 ),
new google.maps.LatLng( 30.197758285845 , 102.939678257874 ),
new google.maps.LatLng( 30.1999996190999 , 102.940019897965 ),
new google.maps.LatLng( 30.2022410033858 , 102.939678698591 ),
new google.maps.LatLng( 30.2043296869757 , 102.938677867891 ),
new google.maps.LatLng( 30.2061233156091 , 102.937085578577 ),
new google.maps.LatLng( 30.2074996374302 , 102.935010330721 ),
new google.maps.LatLng( 30.2083648393493 , 102.932593560825 ),
 new google.maps.LatLng( 30.2086599453513 , 102.93 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2486599453513 , 102.85 ),
new google.maps.LatLng( 30.2483648393083 , 102.847405383938 ),
new google.maps.LatLng( 30.2474996372772 , 102.844987630807 ),
new google.maps.LatLng( 30.2461233153031 , 102.842911538787 ),
new google.maps.LatLng( 30.2443296865167 , 102.841318601934 ),
new google.maps.LatLng( 30.2422410028149 , 102.840317364425 ),
new google.maps.LatLng( 30.239999618488 , 102.839976026629 ),
new google.maps.LatLng( 30.2377582852741 , 102.840317806029 ),
new google.maps.LatLng( 30.2356697412153 , 102.841319366815 ),
new google.maps.LatLng( 30.2338763031849 , 102.842912421995 ),
new google.maps.LatLng( 30.2325001719668 , 102.844988395687 ),
new google.maps.LatLng( 30.2316351095788 , 102.847405825542 ),
new google.maps.LatLng( 30.2313400546487 , 102.85 ),
new google.maps.LatLng( 30.2316351095788 , 102.852594174458 ),
new google.maps.LatLng( 30.2325001719668 , 102.855011604313 ),
new google.maps.LatLng( 30.2338763031849 , 102.857087578005 ),
new google.maps.LatLng( 30.2356697412153 , 102.858680633185 ),
new google.maps.LatLng( 30.2377582852741 , 102.859682193971 ),
new google.maps.LatLng( 30.239999618488 , 102.860023973371 ),
new google.maps.LatLng( 30.2422410028149 , 102.859682635575 ),
new google.maps.LatLng( 30.2443296865167 , 102.858681398066 ),
new google.maps.LatLng( 30.2461233153031 , 102.857088461213 ),
new google.maps.LatLng( 30.2474996372772 , 102.855012369193 ),
new google.maps.LatLng( 30.2483648393083 , 102.852594616062 ),
 new google.maps.LatLng( 30.2486599453513 , 102.85 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3386599453513 , 102.93 ),
new google.maps.LatLng( 30.338364839216 , 102.927403001882 ),
new google.maps.LatLng( 30.3374996369325 , 102.924983029227 ),
new google.maps.LatLng( 30.3361233146137 , 102.922905031621 ),
new google.maps.LatLng( 30.3343296854827 , 102.921310633034 ),
new google.maps.LatLng( 30.3322410015286 , 102.920308477205 ),
new google.maps.LatLng( 30.3299996171094 , 102.919966826938 ),
new google.maps.LatLng( 30.3277582839879 , 102.920308920812 ),
new google.maps.LatLng( 30.3256697401815 , 102.921311401383 ),
new google.maps.LatLng( 30.3238763024957 , 102.922905918834 ),
new google.maps.LatLng( 30.3225001716222 , 102.924983797576 ),
new google.maps.LatLng( 30.3216351094864 , 102.927403445488 ),
new google.maps.LatLng( 30.3213400546487 , 102.93 ),
new google.maps.LatLng( 30.3216351094864 , 102.932596554512 ),
new google.maps.LatLng( 30.3225001716222 , 102.935016202424 ),
new google.maps.LatLng( 30.3238763024957 , 102.937094081166 ),
new google.maps.LatLng( 30.3256697401815 , 102.938688598617 ),
new google.maps.LatLng( 30.3277582839879 , 102.939691079188 ),
new google.maps.LatLng( 30.3299996171094 , 102.940033173062 ),
new google.maps.LatLng( 30.3322410015286 , 102.939691522795 ),
new google.maps.LatLng( 30.3343296854827 , 102.938689366966 ),
new google.maps.LatLng( 30.3361233146137 , 102.937094968379 ),
new google.maps.LatLng( 30.3374996369325 , 102.935016970773 ),
new google.maps.LatLng( 30.338364839216 , 102.932596998118 ),
 new google.maps.LatLng( 30.3386599453513 , 102.93 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3367375093501 , 102.95 ),
new google.maps.LatLng( 30.3365079187589 , 102.947979552232 ),
new google.maps.LatLng( 30.335834796308 , 102.946096821472 ),
new google.maps.LatLng( 30.3347640226574 , 102.944480132352 ),
new google.maps.LatLng( 30.3333685808414 , 102.943239666746 ),
new google.maps.LatLng( 30.3317435794914 , 102.942459953142 ),
new google.maps.LatLng( 30.3299997682375 , 102.942194108087 ),
new google.maps.LatLng( 30.3282559880339 , 102.942460221656 ),
new google.maps.LatLng( 30.3266310715149 , 102.943240131825 ),
new google.maps.LatLng( 30.3252357455801 , 102.944480669379 ),
new google.maps.LatLng( 30.3241650878108 , 102.946097286551 ),
new google.maps.LatLng( 30.3234920501908 , 102.947979820745 ),
new google.maps.LatLng( 30.3232624906499 , 102.95 ),
new google.maps.LatLng( 30.3234920501908 , 102.952020179255 ),
new google.maps.LatLng( 30.3241650878108 , 102.953902713449 ),
new google.maps.LatLng( 30.3252357455801 , 102.955519330621 ),
new google.maps.LatLng( 30.3266310715149 , 102.956759868175 ),
new google.maps.LatLng( 30.3282559880339 , 102.957539778344 ),
new google.maps.LatLng( 30.3299997682375 , 102.957805891913 ),
new google.maps.LatLng( 30.3317435794914 , 102.957540046858 ),
new google.maps.LatLng( 30.3333685808414 , 102.956760333254 ),
new google.maps.LatLng( 30.3347640226574 , 102.955519867649 ),
new google.maps.LatLng( 30.335834796308 , 102.953903178528 ),
new google.maps.LatLng( 30.3365079187589 , 102.952020447768 ),
 new google.maps.LatLng( 30.3367375093501 , 102.95 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2467375093501 , 102.94 ),
new google.maps.LatLng( 30.2465079188148 , 102.937981405318 ),
new google.maps.LatLng( 30.2458347965166 , 102.93610040124 ),
new google.maps.LatLng( 30.2447640230747 , 102.934485194635 ),
new google.maps.LatLng( 30.2433685814673 , 102.933245866317 ),
new google.maps.LatLng( 30.24174358027 , 102.9324668673 ),
new google.maps.LatLng( 30.239999769072 , 102.932201265523 ),
new google.maps.LatLng( 30.2382559888124 , 102.932467134601 ),
new google.maps.LatLng( 30.2366310721407 , 102.933246329297 ),
new google.maps.LatLng( 30.2352357459973 , 102.934485729238 ),
new google.maps.LatLng( 30.2341650880194 , 102.936100864219 ),
new google.maps.LatLng( 30.2334920502467 , 102.93798167262 ),
new google.maps.LatLng( 30.2332624906499 , 102.94 ),
new google.maps.LatLng( 30.2334920502467 , 102.94201832738 ),
new google.maps.LatLng( 30.2341650880194 , 102.943899135781 ),
new google.maps.LatLng( 30.2352357459973 , 102.945514270762 ),
new google.maps.LatLng( 30.2366310721407 , 102.946753670703 ),
new google.maps.LatLng( 30.2382559888124 , 102.947532865399 ),
new google.maps.LatLng( 30.239999769072 , 102.947798734477 ),
new google.maps.LatLng( 30.24174358027 , 102.9475331327 ),
new google.maps.LatLng( 30.2433685814673 , 102.946754133683 ),
new google.maps.LatLng( 30.2447640230747 , 102.945514805365 ),
new google.maps.LatLng( 30.2458347965166 , 102.94389959876 ),
new google.maps.LatLng( 30.2465079188148 , 102.942018594682 ),
 new google.maps.LatLng( 30.2467375093501 , 102.94 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3086599453513 , 103 ),
new google.maps.LatLng( 30.3083648392468 , 102.997403797098 ),
new google.maps.LatLng( 30.3074996370475 , 102.9949845654 ),
new google.maps.LatLng( 30.3061233148436 , 102.992907203948 ),
new google.maps.LatLng( 30.3043296858276 , 102.991313293341 ),
new google.maps.LatLng( 30.3022410019576 , 102.99031144408 ),
new google.maps.LatLng( 30.2999996175692 , 102.989969898128 ),
new google.maps.LatLng( 30.2977582844169 , 102.990311887018 ),
new google.maps.LatLng( 30.2956697405263 , 102.991314060532 ),
new google.maps.LatLng( 30.2938763027256 , 102.992908089824 ),
new google.maps.LatLng( 30.2925001717372 , 102.994985332592 ),
new google.maps.LatLng( 30.2916351095172 , 102.997404240037 ),
new google.maps.LatLng( 30.2913400546487 , 103 ),
new google.maps.LatLng( 30.2916351095172 , 103.002595759963 ),
new google.maps.LatLng( 30.2925001717372 , 103.005014667408 ),
new google.maps.LatLng( 30.2938763027256 , 103.007091910176 ),
new google.maps.LatLng( 30.2956697405263 , 103.008685939468 ),
new google.maps.LatLng( 30.2977582844169 , 103.009688112982 ),
new google.maps.LatLng( 30.2999996175692 , 103.010030101872 ),
new google.maps.LatLng( 30.3022410019576 , 103.00968855592 ),
new google.maps.LatLng( 30.3043296858276 , 103.008686706659 ),
new google.maps.LatLng( 30.3061233148436 , 103.007092796052 ),
new google.maps.LatLng( 30.3074996370475 , 103.0050154346 ),
new google.maps.LatLng( 30.3083648392468 , 103.002596202902 ),
 new google.maps.LatLng( 30.3086599453513 , 103 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2759649416113 , 102.86 ),
new google.maps.LatLng( 30.2757616790136 , 102.858212338392 ),
new google.maps.LatLng( 30.275165745657 , 102.856546523935 ),
new google.maps.LatLng( 30.2742177600436 , 102.855116094481 ),
new google.maps.LatLng( 30.2729823348804 , 102.854018537046 ),
new google.maps.LatLng( 30.2715436714035 , 102.853328642735 ),
new google.maps.LatLng( 30.2699998187772 , 102.853093411353 ),
new google.maps.LatLng( 30.2684559904302 , 102.853328852566 ),
new google.maps.LatLng( 30.2670173932855 , 102.854018900485 ),
new google.maps.LatLng( 30.2657820587336 , 102.855116514143 ),
new google.maps.LatLng( 30.2648341637316 , 102.856546887374 ),
new google.maps.LatLng( 30.2642382967071 , 102.858212548223 ),
new google.maps.LatLng( 30.2640350583887 , 102.86 ),
new google.maps.LatLng( 30.2642382967071 , 102.861787451777 ),
new google.maps.LatLng( 30.2648341637316 , 102.863453112626 ),
new google.maps.LatLng( 30.2657820587336 , 102.864883485857 ),
new google.maps.LatLng( 30.2670173932855 , 102.865981099515 ),
new google.maps.LatLng( 30.2684559904302 , 102.866671147434 ),
new google.maps.LatLng( 30.2699998187772 , 102.866906588647 ),
new google.maps.LatLng( 30.2715436714035 , 102.866671357265 ),
new google.maps.LatLng( 30.2729823348804 , 102.865981462954 ),
new google.maps.LatLng( 30.2742177600436 , 102.864883905519 ),
new google.maps.LatLng( 30.275165745657 , 102.863453476065 ),
new google.maps.LatLng( 30.2757616790136 , 102.861787661608 ),
 new google.maps.LatLng( 30.2759649416113 , 102.86 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2559649416113 , 102.94 ),
new google.maps.LatLng( 30.2557616790233 , 102.938212702497 ),
new google.maps.LatLng( 30.2551657456934 , 102.936547227313 ),
new google.maps.LatLng( 30.2542177601163 , 102.935117089159 ),
new google.maps.LatLng( 30.2529823349894 , 102.934019755198 ),
new google.maps.LatLng( 30.2515436715391 , 102.933330001308 ),
new google.maps.LatLng( 30.2499998189225 , 102.933094817743 ),
new google.maps.LatLng( 30.2484559905658 , 102.933330210929 ),
new google.maps.LatLng( 30.2470173933944 , 102.934020118271 ),
new google.maps.LatLng( 30.2457820588063 , 102.9351175084 ),
new google.maps.LatLng( 30.2448341637679 , 102.936547590386 ),
new google.maps.LatLng( 30.2442382967169 , 102.938212912118 ),
new google.maps.LatLng( 30.2440350583887 , 102.94 ),
new google.maps.LatLng( 30.2442382967169 , 102.941787087882 ),
new google.maps.LatLng( 30.2448341637679 , 102.943452409614 ),
new google.maps.LatLng( 30.2457820588063 , 102.9448824916 ),
new google.maps.LatLng( 30.2470173933944 , 102.945979881729 ),
new google.maps.LatLng( 30.2484559905658 , 102.946669789071 ),
new google.maps.LatLng( 30.2499998189225 , 102.946905182257 ),
new google.maps.LatLng( 30.2515436715391 , 102.946669998692 ),
new google.maps.LatLng( 30.2529823349894 , 102.945980244802 ),
new google.maps.LatLng( 30.2542177601163 , 102.944882910841 ),
new google.maps.LatLng( 30.2551657456934 , 102.943452772687 ),
new google.maps.LatLng( 30.2557616790233 , 102.941787297503 ),
 new google.maps.LatLng( 30.2559649416113 , 102.94 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3086599453513 , 103 ),
new google.maps.LatLng( 30.3083648392468 , 102.997403797098 ),
new google.maps.LatLng( 30.3074996370475 , 102.9949845654 ),
new google.maps.LatLng( 30.3061233148436 , 102.992907203948 ),
new google.maps.LatLng( 30.3043296858276 , 102.991313293341 ),
new google.maps.LatLng( 30.3022410019576 , 102.99031144408 ),
new google.maps.LatLng( 30.2999996175692 , 102.989969898128 ),
new google.maps.LatLng( 30.2977582844169 , 102.990311887018 ),
new google.maps.LatLng( 30.2956697405263 , 102.991314060532 ),
new google.maps.LatLng( 30.2938763027256 , 102.992908089824 ),
new google.maps.LatLng( 30.2925001717372 , 102.994985332592 ),
new google.maps.LatLng( 30.2916351095172 , 102.997404240037 ),
new google.maps.LatLng( 30.2913400546487 , 103 ),
new google.maps.LatLng( 30.2916351095172 , 103.002595759963 ),
new google.maps.LatLng( 30.2925001717372 , 103.005014667408 ),
new google.maps.LatLng( 30.2938763027256 , 103.007091910176 ),
new google.maps.LatLng( 30.2956697405263 , 103.008685939468 ),
new google.maps.LatLng( 30.2977582844169 , 103.009688112982 ),
new google.maps.LatLng( 30.2999996175692 , 103.010030101872 ),
new google.maps.LatLng( 30.3022410019576 , 103.00968855592 ),
new google.maps.LatLng( 30.3043296858276 , 103.008686706659 ),
new google.maps.LatLng( 30.3061233148436 , 103.007092796052 ),
new google.maps.LatLng( 30.3074996370475 , 103.0050154346 ),
new google.maps.LatLng( 30.3083648392468 , 103.002596202902 ),
 new google.maps.LatLng( 30.3086599453513 , 103 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3159649416113 , 102.99 ),
new google.maps.LatLng( 30.3157616789941 , 102.988211609081 ),
new google.maps.LatLng( 30.3151657455843 , 102.986545115057 ),
new google.maps.LatLng( 30.3142177598982 , 102.985114102121 ),
new google.maps.LatLng( 30.3129823346623 , 102.984016097066 ),
new google.maps.LatLng( 30.3115436711323 , 102.983325921487 ),
new google.maps.LatLng( 30.3099998184865 , 102.983090594328 ),
new google.maps.LatLng( 30.308455990159 , 102.983326131741 ),
new google.maps.LatLng( 30.3070173930674 , 102.984016461236 ),
new google.maps.LatLng( 30.3057820585883 , 102.985114522628 ),
new google.maps.LatLng( 30.3048341636589 , 102.986545479227 ),
new google.maps.LatLng( 30.3042382966877 , 102.988211819334 ),
new google.maps.LatLng( 30.3040350583887 , 102.99 ),
new google.maps.LatLng( 30.3042382966877 , 102.991788180666 ),
new google.maps.LatLng( 30.3048341636589 , 102.993454520773 ),
new google.maps.LatLng( 30.3057820585883 , 102.994885477372 ),
new google.maps.LatLng( 30.3070173930674 , 102.995983538764 ),
new google.maps.LatLng( 30.308455990159 , 102.996673868259 ),
new google.maps.LatLng( 30.3099998184865 , 102.996909405671 ),
new google.maps.LatLng( 30.3115436711323 , 102.996674078513 ),
new google.maps.LatLng( 30.3129823346623 , 102.995983902934 ),
new google.maps.LatLng( 30.3142177598982 , 102.994885897879 ),
new google.maps.LatLng( 30.3151657455843 , 102.993454884943 ),
new google.maps.LatLng( 30.3157616789941 , 102.991788390919 ),
 new google.maps.LatLng( 30.3159649416113 , 102.99 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3105823813525 , 103 ),
new google.maps.LatLng( 30.3102217571897 , 102.996827401499 ),
new google.maps.LatLng( 30.3091644682899 , 102.993871076449 ),
new google.maps.LatLng( 30.3074825880374 , 102.991332541902 ),
new google.maps.LatLng( 30.3052907623281 , 102.989384812483 ),
new google.maps.LatLng( 30.3027383889916 , 102.988160604999 ),
new google.maps.LatLng( 30.29999942893 , 102.987743298765 ),
new google.maps.LatLng( 30.2972605453773 , 102.988161266422 ),
new google.maps.LatLng( 30.2947083810669 , 102.989385958102 ),
new google.maps.LatLng( 30.2925168408926 , 102.991333864748 ),
new google.maps.LatLng( 30.2908352461751 , 102.993872222068 ),
new google.maps.LatLng( 30.2897781663014 , 102.996828062922 ),
new google.maps.LatLng( 30.2894176186475 , 103 ),
new google.maps.LatLng( 30.2897781663014 , 103.003171937078 ),
new google.maps.LatLng( 30.2908352461751 , 103.006127777932 ),
new google.maps.LatLng( 30.2925168408926 , 103.008666135252 ),
new google.maps.LatLng( 30.2947083810669 , 103.010614041898 ),
new google.maps.LatLng( 30.2972605453773 , 103.011838733578 ),
new google.maps.LatLng( 30.29999942893 , 103.012256701235 ),
new google.maps.LatLng( 30.3027383889916 , 103.011839395001 ),
new google.maps.LatLng( 30.3052907623281 , 103.010615187517 ),
new google.maps.LatLng( 30.3074825880374 , 103.008667458098 ),
new google.maps.LatLng( 30.3091644682899 , 103.006128923551 ),
new google.maps.LatLng( 30.3102217571897 , 103.003172598501 ),
 new google.maps.LatLng( 30.3105823813525 , 103 )], 
map:map, 
 clickable:true,
 fillColor: "#D26923",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2667375093501 , 102.93 ),
new google.maps.LatLng( 30.2665079188024 , 102.927980994246 ),
new google.maps.LatLng( 30.2658347964703 , 102.926099607135 ),
new google.maps.LatLng( 30.264764022982 , 102.924484071662 ),
new google.maps.LatLng( 30.2633685813283 , 102.923244491058 ),
new google.maps.LatLng( 30.2617435800971 , 102.922465333523 ),
new google.maps.LatLng( 30.2599997688867 , 102.922199677779 ),
new google.maps.LatLng( 30.2582559886396 , 102.922465601093 ),
new google.maps.LatLng( 30.2566310720017 , 102.923244954503 ),
new google.maps.LatLng( 30.2552357459047 , 102.924484606802 ),
new google.maps.LatLng( 30.2541650879731 , 102.92610007058 ),
new google.maps.LatLng( 30.2534920502343 , 102.927981261816 ),
new google.maps.LatLng( 30.2532624906499 , 102.93 ),
new google.maps.LatLng( 30.2534920502343 , 102.932018738184 ),
new google.maps.LatLng( 30.2541650879731 , 102.93389992942 ),
new google.maps.LatLng( 30.2552357459047 , 102.935515393198 ),
new google.maps.LatLng( 30.2566310720017 , 102.936755045497 ),
new google.maps.LatLng( 30.2582559886396 , 102.937534398907 ),
new google.maps.LatLng( 30.2599997688867 , 102.937800322221 ),
new google.maps.LatLng( 30.2617435800971 , 102.937534666477 ),
new google.maps.LatLng( 30.2633685813283 , 102.936755508942 ),
new google.maps.LatLng( 30.264764022982 , 102.935515928338 ),
new google.maps.LatLng( 30.2658347964703 , 102.933900392865 ),
new google.maps.LatLng( 30.2665079188024 , 102.932019005754 ),
 new google.maps.LatLng( 30.2667375093501 , 102.93 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3559649416113 , 102.9 ),
new google.maps.LatLng( 30.3557616789746 , 102.898210878302 ),
new google.maps.LatLng( 30.3551657455116 , 102.896543703344 ),
new google.maps.LatLng( 30.3542177597528 , 102.895112105752 ),
new google.maps.LatLng( 30.3529823344441 , 102.894013652175 ),
new google.maps.LatLng( 30.3515436708608 , 102.893323194763 ),
new google.maps.LatLng( 30.3499998181955 , 102.893087771635 ),
new google.maps.LatLng( 30.3484559898875 , 102.893323405439 ),
new google.maps.LatLng( 30.3470173928492 , 102.894014017077 ),
new google.maps.LatLng( 30.3457820584428 , 102.895112527105 ),
new google.maps.LatLng( 30.3448341635862 , 102.896544068246 ),
new google.maps.LatLng( 30.3442382966682 , 102.898211088979 ),
new google.maps.LatLng( 30.3440350583887 , 102.9 ),
new google.maps.LatLng( 30.3442382966682 , 102.901788911021 ),
new google.maps.LatLng( 30.3448341635862 , 102.903455931754 ),
new google.maps.LatLng( 30.3457820584428 , 102.904887472895 ),
new google.maps.LatLng( 30.3470173928492 , 102.905985982923 ),
new google.maps.LatLng( 30.3484559898875 , 102.906676594561 ),
new google.maps.LatLng( 30.3499998181955 , 102.906912228365 ),
new google.maps.LatLng( 30.3515436708608 , 102.906676805237 ),
new google.maps.LatLng( 30.3529823344441 , 102.905986347825 ),
new google.maps.LatLng( 30.3542177597528 , 102.904887894248 ),
new google.maps.LatLng( 30.3551657455116 , 102.903456296656 ),
new google.maps.LatLng( 30.3557616789746 , 102.901789121698 ),
 new google.maps.LatLng( 30.3559649416113 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3359649416113 , 102.96 ),
new google.maps.LatLng( 30.3357616789844 , 102.958211243875 ),
new google.maps.LatLng( 30.335165745548 , 102.956544409555 ),
new google.maps.LatLng( 30.3342177598255 , 102.955113104438 ),
new google.maps.LatLng( 30.3329823345532 , 102.954014875235 ),
new google.maps.LatLng( 30.3315436709965 , 102.95332455881 ),
new google.maps.LatLng( 30.3299998183411 , 102.953089183691 ),
new google.maps.LatLng( 30.3284559900233 , 102.953324769275 ),
new google.maps.LatLng( 30.3270173929583 , 102.954015239771 ),
new google.maps.LatLng( 30.3257820585155 , 102.955113525368 ),
new google.maps.LatLng( 30.3248341636225 , 102.956544774091 ),
new google.maps.LatLng( 30.3242382966779 , 102.95821145434 ),
new google.maps.LatLng( 30.3240350583887 , 102.96 ),
new google.maps.LatLng( 30.3242382966779 , 102.96178854566 ),
new google.maps.LatLng( 30.3248341636225 , 102.963455225909 ),
new google.maps.LatLng( 30.3257820585155 , 102.964886474632 ),
new google.maps.LatLng( 30.3270173929583 , 102.965984760229 ),
new google.maps.LatLng( 30.3284559900233 , 102.966675230725 ),
new google.maps.LatLng( 30.3299998183411 , 102.966910816309 ),
new google.maps.LatLng( 30.3315436709965 , 102.96667544119 ),
new google.maps.LatLng( 30.3329823345532 , 102.965985124765 ),
new google.maps.LatLng( 30.3342177598255 , 102.964886895562 ),
new google.maps.LatLng( 30.335165745548 , 102.963455590445 ),
new google.maps.LatLng( 30.3357616789844 , 102.961788756125 ),
 new google.maps.LatLng( 30.3359649416113 , 102.96 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2286599453513 , 102.89 ),
new google.maps.LatLng( 30.2283648393288 , 102.887405911822 ),
new google.maps.LatLng( 30.2274996373537 , 102.884988650555 ),
new google.maps.LatLng( 30.2261233154561 , 102.88291298083 ),
new google.maps.LatLng( 30.2243296867462 , 102.881320367909 ),
new google.maps.LatLng( 30.2222410031004 , 102.880319333907 ),
new google.maps.LatLng( 30.2199996187941 , 102.879978065357 ),
new google.maps.LatLng( 30.2177582855596 , 102.880319775067 ),
new google.maps.LatLng( 30.2156697414448 , 102.881321132021 ),
new google.maps.LatLng( 30.2138763033379 , 102.88291386315 ),
new google.maps.LatLng( 30.2125001720433 , 102.884989414667 ),
new google.maps.LatLng( 30.2116351095993 , 102.887406352982 ),
new google.maps.LatLng( 30.2113400546487 , 102.89 ),
new google.maps.LatLng( 30.2116351095993 , 102.892593647018 ),
new google.maps.LatLng( 30.2125001720433 , 102.895010585333 ),
new google.maps.LatLng( 30.2138763033379 , 102.89708613685 ),
new google.maps.LatLng( 30.2156697414448 , 102.898678867979 ),
new google.maps.LatLng( 30.2177582855596 , 102.899680224933 ),
new google.maps.LatLng( 30.2199996187941 , 102.900021934643 ),
new google.maps.LatLng( 30.2222410031004 , 102.899680666093 ),
new google.maps.LatLng( 30.2243296867462 , 102.898679632091 ),
new google.maps.LatLng( 30.2261233154561 , 102.89708701917 ),
new google.maps.LatLng( 30.2274996373537 , 102.895011349445 ),
new google.maps.LatLng( 30.2283648393288 , 102.892594088178 ),
 new google.maps.LatLng( 30.2286599453513 , 102.89 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2105823813525 , 103 ),
new google.maps.LatLng( 30.2102217573429 , 102.996830630396 ),
new google.maps.LatLng( 30.2091644688615 , 102.993877313868 ),
new google.maps.LatLng( 30.2074825891805 , 102.991341362198 ),
new google.maps.LatLng( 30.2052907640426 , 102.989395613906 ),
new google.maps.LatLng( 30.2027383911244 , 102.988172650874 ),
new google.maps.LatLng( 30.1999994312158 , 102.987755767855 ),
new google.maps.LatLng( 30.1972605475098 , 102.98817330898 ),
new google.maps.LatLng( 30.194708382781 , 102.989396753778 ),
new google.maps.LatLng( 30.1925168420353 , 102.99134267841 ),
new google.maps.LatLng( 30.1908352467464 , 102.993878453741 ),
new google.maps.LatLng( 30.1897781664545 , 102.996831288502 ),
new google.maps.LatLng( 30.1894176186475 , 103 ),
new google.maps.LatLng( 30.1897781664545 , 103.003168711498 ),
new google.maps.LatLng( 30.1908352467464 , 103.006121546259 ),
new google.maps.LatLng( 30.1925168420353 , 103.00865732159 ),
new google.maps.LatLng( 30.194708382781 , 103.010603246222 ),
new google.maps.LatLng( 30.1972605475098 , 103.01182669102 ),
new google.maps.LatLng( 30.1999994312158 , 103.012244232145 ),
new google.maps.LatLng( 30.2027383911244 , 103.011827349126 ),
new google.maps.LatLng( 30.2052907640426 , 103.010604386094 ),
new google.maps.LatLng( 30.2074825891805 , 103.008658637802 ),
new google.maps.LatLng( 30.2091644688615 , 103.006122686132 ),
new google.maps.LatLng( 30.2102217573429 , 103.003169369604 ),
 new google.maps.LatLng( 30.2105823813525 , 103 )], 
map:map, 
 clickable:true,
 fillColor: "#D26923",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2586599453513 , 102.91 ),
new google.maps.LatLng( 30.2583648392981 , 102.907405119797 ),
new google.maps.LatLng( 30.2574996372389 , 102.904987120547 ),
new google.maps.LatLng( 30.2561233152266 , 102.902910817222 ),
new google.maps.LatLng( 30.2543296864019 , 102.90131771828 ),
new google.maps.LatLng( 30.2522410026721 , 102.900316378941 ),
new google.maps.LatLng( 30.249999618335 , 102.899975006495 ),
new google.maps.LatLng( 30.2477582851313 , 102.900316820767 ),
new google.maps.LatLng( 30.2456697411006 , 102.901318483546 ),
new google.maps.LatLng( 30.2438763031084 , 102.902911700874 ),
new google.maps.LatLng( 30.2425001719286 , 102.904987885813 ),
new google.maps.LatLng( 30.2416351095685 , 102.907405561623 ),
new google.maps.LatLng( 30.2413400546487 , 102.91 ),
new google.maps.LatLng( 30.2416351095685 , 102.912594438377 ),
new google.maps.LatLng( 30.2425001719286 , 102.915012114187 ),
new google.maps.LatLng( 30.2438763031084 , 102.917088299126 ),
new google.maps.LatLng( 30.2456697411006 , 102.918681516454 ),
new google.maps.LatLng( 30.2477582851313 , 102.919683179233 ),
new google.maps.LatLng( 30.249999618335 , 102.920024993505 ),
new google.maps.LatLng( 30.2522410026721 , 102.919683621059 ),
new google.maps.LatLng( 30.2543296864019 , 102.918682281719 ),
new google.maps.LatLng( 30.2561233152266 , 102.917089182778 ),
new google.maps.LatLng( 30.2574996372389 , 102.915012879453 ),
new google.maps.LatLng( 30.2583648392981 , 102.912594880203 ),
 new google.maps.LatLng( 30.2586599453513 , 102.91 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2767375093501 , 102.85 ),
new google.maps.LatLng( 30.2765079187962 , 102.847980788554 ),
new google.maps.LatLng( 30.2758347964471 , 102.846099209783 ),
new google.maps.LatLng( 30.2747640229356 , 102.844483509751 ),
new google.maps.LatLng( 30.2733685812588 , 102.843243802909 ),
new google.maps.LatLng( 30.2717435800106 , 102.842464566055 ),
new google.maps.LatLng( 30.269999768794 , 102.842198883308 ),
new google.maps.LatLng( 30.2682559885531 , 102.84246483376 ),
new google.maps.LatLng( 30.2666310719322 , 102.843244266588 ),
new google.maps.LatLng( 30.2652357458583 , 102.844484045161 ),
new google.maps.LatLng( 30.2641650879499 , 102.846099673462 ),
new google.maps.LatLng( 30.2634920502281 , 102.847981056259 ),
new google.maps.LatLng( 30.2632624906499 , 102.85 ),
new google.maps.LatLng( 30.2634920502281 , 102.852018943741 ),
new google.maps.LatLng( 30.2641650879499 , 102.853900326538 ),
new google.maps.LatLng( 30.2652357458583 , 102.855515954839 ),
new google.maps.LatLng( 30.2666310719322 , 102.856755733412 ),
new google.maps.LatLng( 30.2682559885531 , 102.85753516624 ),
new google.maps.LatLng( 30.269999768794 , 102.857801116692 ),
new google.maps.LatLng( 30.2717435800106 , 102.857535433945 ),
new google.maps.LatLng( 30.2733685812588 , 102.856756197091 ),
new google.maps.LatLng( 30.2747640229356 , 102.855516490249 ),
new google.maps.LatLng( 30.2758347964471 , 102.853900790217 ),
new google.maps.LatLng( 30.2765079187962 , 102.852019211446 ),
 new google.maps.LatLng( 30.2767375093501 , 102.85 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1767375093501 , 102.84 ),
new google.maps.LatLng( 30.1765079188582 , 102.837982840821 ),
new google.maps.LatLng( 30.1758347966786 , 102.836103174325 ),
new google.maps.LatLng( 30.1747640233987 , 102.834489116158 ),
new google.maps.LatLng( 30.1733685819533 , 102.833250668845 ),
new google.maps.LatLng( 30.1717435808746 , 102.832472223386 ),
new google.maps.LatLng( 30.16999976972 , 102.832206810065 ),
new google.maps.LatLng( 30.168255989417 , 102.832472489748 ),
new google.maps.LatLng( 30.1666310726267 , 102.833251130198 ),
new google.maps.LatLng( 30.1652357463213 , 102.834489648882 ),
new google.maps.LatLng( 30.1641650881814 , 102.836103635677 ),
new google.maps.LatLng( 30.1634920502901 , 102.837983107183 ),
new google.maps.LatLng( 30.1632624906499 , 102.84 ),
new google.maps.LatLng( 30.1634920502901 , 102.842016892817 ),
new google.maps.LatLng( 30.1641650881814 , 102.843896364323 ),
new google.maps.LatLng( 30.1652357463213 , 102.845510351118 ),
new google.maps.LatLng( 30.1666310726267 , 102.846748869802 ),
new google.maps.LatLng( 30.168255989417 , 102.847527510252 ),
new google.maps.LatLng( 30.16999976972 , 102.847793189935 ),
new google.maps.LatLng( 30.1717435808746 , 102.847527776614 ),
new google.maps.LatLng( 30.1733685819533 , 102.846749331155 ),
new google.maps.LatLng( 30.1747640233987 , 102.845510883842 ),
new google.maps.LatLng( 30.1758347966786 , 102.843896825675 ),
new google.maps.LatLng( 30.1765079188582 , 102.842017159179 ),
 new google.maps.LatLng( 30.1767375093501 , 102.84 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3267375093501 , 102.92 ),
new google.maps.LatLng( 30.3265079187651 , 102.917979758544 ),
new google.maps.LatLng( 30.3258347963312 , 102.916097220024 ),
new google.maps.LatLng( 30.3247640227038 , 102.914480695959 ),
new google.maps.LatLng( 30.323368580911 , 102.913240356973 ),
new google.maps.LatLng( 30.321743579578 , 102.912460722927 ),
new google.maps.LatLng( 30.3199997683303 , 102.912194904958 ),
new google.maps.LatLng( 30.3182559881205 , 102.912460991306 ),
new google.maps.LatLng( 30.3166310715845 , 102.913240821819 ),
new google.maps.LatLng( 30.3152357456265 , 102.914481232716 ),
new google.maps.LatLng( 30.314165087834 , 102.91609768487 ),
new google.maps.LatLng( 30.313492050197 , 102.917980026923 ),
new google.maps.LatLng( 30.3132624906499 , 102.92 ),
new google.maps.LatLng( 30.313492050197 , 102.922019973077 ),
new google.maps.LatLng( 30.314165087834 , 102.92390231513 ),
new google.maps.LatLng( 30.3152357456265 , 102.925518767284 ),
new google.maps.LatLng( 30.3166310715845 , 102.926759178181 ),
new google.maps.LatLng( 30.3182559881205 , 102.927539008694 ),
new google.maps.LatLng( 30.3199997683303 , 102.927805095042 ),
new google.maps.LatLng( 30.321743579578 , 102.927539277073 ),
new google.maps.LatLng( 30.323368580911 , 102.926759643027 ),
new google.maps.LatLng( 30.3247640227038 , 102.925519304041 ),
new google.maps.LatLng( 30.3258347963312 , 102.923902779976 ),
new google.maps.LatLng( 30.3265079187651 , 102.922020241456 ),
 new google.maps.LatLng( 30.3267375093501 , 102.92 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.0967375093501 , 102.84 ),
new google.maps.LatLng( 30.0965079189078 , 102.837984475217 ),
new google.maps.LatLng( 30.0958347968635 , 102.836106331628 ),
new google.maps.LatLng( 30.0947640237684 , 102.834493581019 ),
new google.maps.LatLng( 30.0933685825079 , 102.833256136777 ),
new google.maps.LatLng( 30.0917435815645 , 102.832478321572 ),
new google.maps.LatLng( 30.0899997704594 , 102.832213122818 ),
new google.maps.LatLng( 30.0882559901069 , 102.832478586864 ),
new google.maps.LatLng( 30.0866310731812 , 102.833256596275 ),
new google.maps.LatLng( 30.085235746691 , 102.834494111602 ),
new google.maps.LatLng( 30.0841650883662 , 102.836106791127 ),
new google.maps.LatLng( 30.0834920503396 , 102.837984740509 ),
new google.maps.LatLng( 30.0832624906499 , 102.84 ),
new google.maps.LatLng( 30.0834920503396 , 102.842015259491 ),
new google.maps.LatLng( 30.0841650883662 , 102.843893208873 ),
new google.maps.LatLng( 30.085235746691 , 102.845505888398 ),
new google.maps.LatLng( 30.0866310731812 , 102.846743403725 ),
new google.maps.LatLng( 30.0882559901069 , 102.847521413136 ),
new google.maps.LatLng( 30.0899997704594 , 102.847786877182 ),
new google.maps.LatLng( 30.0917435815645 , 102.847521678427 ),
new google.maps.LatLng( 30.0933685825079 , 102.846743863223 ),
new google.maps.LatLng( 30.0947640237684 , 102.845506418981 ),
new google.maps.LatLng( 30.0958347968635 , 102.843893668372 ),
new google.maps.LatLng( 30.0965079189078 , 102.842015524783 ),
 new google.maps.LatLng( 30.0967375093501 , 102.84 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2359649416113 , 102.92 ),
new google.maps.LatLng( 30.2357616790331 , 102.918213066237 ),
new google.maps.LatLng( 30.2351657457297 , 102.916547929983 ),
new google.maps.LatLng( 30.2342177601889 , 102.915118082838 ),
new google.maps.LatLng( 30.2329823350983 , 102.914020972125 ),
new google.maps.LatLng( 30.2315436716746 , 102.913331358516 ),
new google.maps.LatLng( 30.2299998190677 , 102.913096222718 ),
new google.maps.LatLng( 30.2284559907012 , 102.913331567926 ),
new google.maps.LatLng( 30.2270173935033 , 102.914021334833 ),
new google.maps.LatLng( 30.2257820588789 , 102.915118501657 ),
new google.maps.LatLng( 30.2248341638042 , 102.916548292691 ),
new google.maps.LatLng( 30.2242382967266 , 102.918213275647 ),
new google.maps.LatLng( 30.2240350583887 , 102.92 ),
new google.maps.LatLng( 30.2242382967266 , 102.921786724353 ),
new google.maps.LatLng( 30.2248341638042 , 102.923451707309 ),
new google.maps.LatLng( 30.2257820588789 , 102.924881498343 ),
new google.maps.LatLng( 30.2270173935033 , 102.925978665167 ),
new google.maps.LatLng( 30.2284559907012 , 102.926668432074 ),
new google.maps.LatLng( 30.2299998190677 , 102.926903777282 ),
new google.maps.LatLng( 30.2315436716746 , 102.926668641484 ),
new google.maps.LatLng( 30.2329823350983 , 102.925979027875 ),
new google.maps.LatLng( 30.2342177601889 , 102.924881917162 ),
new google.maps.LatLng( 30.2351657457297 , 102.923452070017 ),
new google.maps.LatLng( 30.2357616790331 , 102.921786933763 ),
 new google.maps.LatLng( 30.2359649416113 , 102.92 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3105823813525 , 103 ),
new google.maps.LatLng( 30.3102217571897 , 102.996827401499 ),
new google.maps.LatLng( 30.3091644682899 , 102.993871076449 ),
new google.maps.LatLng( 30.3074825880374 , 102.991332541902 ),
new google.maps.LatLng( 30.3052907623281 , 102.989384812483 ),
new google.maps.LatLng( 30.3027383889916 , 102.988160604999 ),
new google.maps.LatLng( 30.29999942893 , 102.987743298765 ),
new google.maps.LatLng( 30.2972605453773 , 102.988161266422 ),
new google.maps.LatLng( 30.2947083810669 , 102.989385958102 ),
new google.maps.LatLng( 30.2925168408926 , 102.991333864748 ),
new google.maps.LatLng( 30.2908352461751 , 102.993872222068 ),
new google.maps.LatLng( 30.2897781663014 , 102.996828062922 ),
new google.maps.LatLng( 30.2894176186475 , 103 ),
new google.maps.LatLng( 30.2897781663014 , 103.003171937078 ),
new google.maps.LatLng( 30.2908352461751 , 103.006127777932 ),
new google.maps.LatLng( 30.2925168408926 , 103.008666135252 ),
new google.maps.LatLng( 30.2947083810669 , 103.010614041898 ),
new google.maps.LatLng( 30.2972605453773 , 103.011838733578 ),
new google.maps.LatLng( 30.29999942893 , 103.012256701235 ),
new google.maps.LatLng( 30.3027383889916 , 103.011839395001 ),
new google.maps.LatLng( 30.3052907623281 , 103.010615187517 ),
new google.maps.LatLng( 30.3074825880374 , 103.008667458098 ),
new google.maps.LatLng( 30.3091644682899 , 103.006128923551 ),
new google.maps.LatLng( 30.3102217571897 , 103.003172598501 ),
 new google.maps.LatLng( 30.3105823813525 , 103 )], 
map:map, 
 clickable:true,
 fillColor: "#D26923",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2086599453513 , 102.9 ),
new google.maps.LatLng( 30.2083648393493 , 102.897406439175 ),
new google.maps.LatLng( 30.2074996374302 , 102.894989669279 ),
new google.maps.LatLng( 30.2061233156091 , 102.892914421423 ),
new google.maps.LatLng( 30.2043296869757 , 102.891322132109 ),
new google.maps.LatLng( 30.2022410033858 , 102.890321301409 ),
new google.maps.LatLng( 30.1999996190999 , 102.889980102035 ),
new google.maps.LatLng( 30.197758285845 , 102.890321742126 ),
new google.maps.LatLng( 30.1956697416742 , 102.891322895452 ),
new google.maps.LatLng( 30.1938763034909 , 102.892915302855 ),
new google.maps.LatLng( 30.1925001721198 , 102.894990432622 ),
new google.maps.LatLng( 30.1916351096198 , 102.897406879892 ),
new google.maps.LatLng( 30.1913400546487 , 102.9 ),
new google.maps.LatLng( 30.1916351096198 , 102.902593120108 ),
new google.maps.LatLng( 30.1925001721198 , 102.905009567378 ),
new google.maps.LatLng( 30.1938763034909 , 102.907084697145 ),
new google.maps.LatLng( 30.1956697416742 , 102.908677104548 ),
new google.maps.LatLng( 30.197758285845 , 102.909678257874 ),
new google.maps.LatLng( 30.1999996190999 , 102.910019897965 ),
new google.maps.LatLng( 30.2022410033858 , 102.909678698591 ),
new google.maps.LatLng( 30.2043296869757 , 102.908677867891 ),
new google.maps.LatLng( 30.2061233156091 , 102.907085578578 ),
new google.maps.LatLng( 30.2074996374302 , 102.905010330721 ),
new google.maps.LatLng( 30.2083648393493 , 102.902593560825 ),
 new google.maps.LatLng( 30.2086599453513 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3486599453513 , 102.99 ),
new google.maps.LatLng( 30.3483648392057 , 102.987402736543 ),
new google.maps.LatLng( 30.3474996368942 , 102.984982516654 ),
new google.maps.LatLng( 30.346123314537 , 102.982904306784 ),
new google.maps.LatLng( 30.3443296853677 , 102.981309745374 ),
new google.maps.LatLng( 30.3422410013855 , 102.980307487252 ),
new google.maps.LatLng( 30.3399996169561 , 102.979965802179 ),
new google.maps.LatLng( 30.3377582838448 , 102.980307931082 ),
new google.maps.LatLng( 30.3356697400665 , 102.981310514109 ),
new google.maps.LatLng( 30.3338763024191 , 102.982905194443 ),
new google.maps.LatLng( 30.3325001715839 , 102.984983285389 ),
new google.maps.LatLng( 30.3316351094762 , 102.987403180373 ),
new google.maps.LatLng( 30.3313400546487 , 102.99 ),
new google.maps.LatLng( 30.3316351094762 , 102.992596819627 ),
new google.maps.LatLng( 30.3325001715839 , 102.995016714611 ),
new google.maps.LatLng( 30.3338763024191 , 102.997094805557 ),
new google.maps.LatLng( 30.3356697400665 , 102.998689485891 ),
new google.maps.LatLng( 30.3377582838448 , 102.999692068918 ),
new google.maps.LatLng( 30.3399996169561 , 103.000034197821 ),
new google.maps.LatLng( 30.3422410013855 , 102.999692512748 ),
new google.maps.LatLng( 30.3443296853677 , 102.998690254626 ),
new google.maps.LatLng( 30.346123314537 , 102.997095693216 ),
new google.maps.LatLng( 30.3474996368942 , 102.995017483346 ),
new google.maps.LatLng( 30.3483648392057 , 102.992597263457 ),
 new google.maps.LatLng( 30.3486599453513 , 102.99 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2759649416113 , 102.83 ),
new google.maps.LatLng( 30.2757616790136 , 102.828212338392 ),
new google.maps.LatLng( 30.275165745657 , 102.826546523935 ),
new google.maps.LatLng( 30.2742177600436 , 102.825116094481 ),
new google.maps.LatLng( 30.2729823348804 , 102.824018537046 ),
new google.maps.LatLng( 30.2715436714035 , 102.823328642735 ),
new google.maps.LatLng( 30.2699998187772 , 102.823093411353 ),
new google.maps.LatLng( 30.2684559904302 , 102.823328852566 ),
new google.maps.LatLng( 30.2670173932855 , 102.824018900485 ),
new google.maps.LatLng( 30.2657820587336 , 102.825116514143 ),
new google.maps.LatLng( 30.2648341637316 , 102.826546887374 ),
new google.maps.LatLng( 30.2642382967071 , 102.828212548223 ),
new google.maps.LatLng( 30.2640350583887 , 102.83 ),
new google.maps.LatLng( 30.2642382967071 , 102.831787451777 ),
new google.maps.LatLng( 30.2648341637316 , 102.833453112626 ),
new google.maps.LatLng( 30.2657820587336 , 102.834883485857 ),
new google.maps.LatLng( 30.2670173932855 , 102.835981099515 ),
new google.maps.LatLng( 30.2684559904302 , 102.836671147434 ),
new google.maps.LatLng( 30.2699998187772 , 102.836906588647 ),
new google.maps.LatLng( 30.2715436714035 , 102.836671357265 ),
new google.maps.LatLng( 30.2729823348804 , 102.835981462954 ),
new google.maps.LatLng( 30.2742177600436 , 102.834883905519 ),
new google.maps.LatLng( 30.275165745657 , 102.833453476065 ),
new google.maps.LatLng( 30.2757616790136 , 102.831787661608 ),
 new google.maps.LatLng( 30.2759649416113 , 102.83 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1086599453513 , 102.8 ),
new google.maps.LatLng( 30.1083648394517 , 102.797409067996 ),
new google.maps.LatLng( 30.1074996378122 , 102.794994747549 ),
new google.maps.LatLng( 30.106123316373 , 102.792921602683 ),
new google.maps.LatLng( 30.1043296881215 , 102.791330926527 ),
new google.maps.LatLng( 30.1022410048112 , 102.790331109278 ),
new google.maps.LatLng( 30.0999996206276 , 102.789990254742 ),
new google.maps.LatLng( 30.0977582872702 , 102.790331547782 ),
new google.maps.LatLng( 30.0956697428198 , 102.791331686039 ),
new google.maps.LatLng( 30.0938763042546 , 102.792922479691 ),
new google.maps.LatLng( 30.0925001725016 , 102.79499550706 ),
new google.maps.LatLng( 30.0916351097221 , 102.7974095065 ),
new google.maps.LatLng( 30.0913400546487 , 102.8 ),
new google.maps.LatLng( 30.0916351097221 , 102.8025904935 ),
new google.maps.LatLng( 30.0925001725016 , 102.80500449294 ),
new google.maps.LatLng( 30.0938763042546 , 102.807077520309 ),
new google.maps.LatLng( 30.0956697428198 , 102.808668313962 ),
new google.maps.LatLng( 30.0977582872702 , 102.809668452218 ),
new google.maps.LatLng( 30.0999996206276 , 102.810009745258 ),
new google.maps.LatLng( 30.1022410048112 , 102.809668890723 ),
new google.maps.LatLng( 30.1043296881215 , 102.808669073473 ),
new google.maps.LatLng( 30.106123316373 , 102.807078397317 ),
new google.maps.LatLng( 30.1074996378122 , 102.805005252452 ),
new google.maps.LatLng( 30.1083648394517 , 102.802590932005 ),
 new google.maps.LatLng( 30.1086599453513 , 102.8 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3659649416113 , 102.96 ),
new google.maps.LatLng( 30.3657616789698 , 102.958210695378 ),
new google.maps.LatLng( 30.3651657454934 , 102.956543349972 ),
new google.maps.LatLng( 30.3642177597164 , 102.955111606033 ),
new google.maps.LatLng( 30.3629823343895 , 102.954013040184 ),
new google.maps.LatLng( 30.3615436707929 , 102.953322512225 ),
new google.maps.LatLng( 30.3599998181228 , 102.953087065074 ),
new google.maps.LatLng( 30.3584559898196 , 102.953322723007 ),
new google.maps.LatLng( 30.3570173927946 , 102.95401340527 ),
new google.maps.LatLng( 30.3557820584064 , 102.955112027598 ),
new google.maps.LatLng( 30.354834163568 , 102.956543715058 ),
new google.maps.LatLng( 30.3542382966633 , 102.958210906161 ),
new google.maps.LatLng( 30.3540350583887 , 102.96 ),
new google.maps.LatLng( 30.3542382966633 , 102.961789093839 ),
new google.maps.LatLng( 30.354834163568 , 102.963456284942 ),
new google.maps.LatLng( 30.3557820584064 , 102.964887972402 ),
new google.maps.LatLng( 30.3570173927946 , 102.96598659473 ),
new google.maps.LatLng( 30.3584559898196 , 102.966677276993 ),
new google.maps.LatLng( 30.3599998181228 , 102.966912934926 ),
new google.maps.LatLng( 30.3615436707929 , 102.966677487775 ),
new google.maps.LatLng( 30.3629823343895 , 102.965986959816 ),
new google.maps.LatLng( 30.3642177597164 , 102.964888393967 ),
new google.maps.LatLng( 30.3651657454934 , 102.963456650028 ),
new google.maps.LatLng( 30.3657616789698 , 102.961789304622 ),
 new google.maps.LatLng( 30.3659649416113 , 102.96 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1367375093501 , 102.86 ),
new google.maps.LatLng( 30.136507918883 , 102.857983658842 ),
new google.maps.LatLng( 30.1358347967711 , 102.856104754565 ),
new google.maps.LatLng( 30.1347640235836 , 102.854491350836 ),
new google.maps.LatLng( 30.1333685822307 , 102.853253405563 ),
new google.maps.LatLng( 30.1317435812197 , 102.852475275549 ),
new google.maps.LatLng( 30.1299997700898 , 102.852209969619 ),
new google.maps.LatLng( 30.1282559897621 , 102.852475541375 ),
new google.maps.LatLng( 30.126631072904 , 102.853253865988 ),
new google.maps.LatLng( 30.1252357465062 , 102.854491882488 ),
new google.maps.LatLng( 30.1241650882738 , 102.85610521499 ),
new google.maps.LatLng( 30.1234920503149 , 102.857983924668 ),
new google.maps.LatLng( 30.1232624906499 , 102.86 ),
new google.maps.LatLng( 30.1234920503149 , 102.862016075332 ),
new google.maps.LatLng( 30.1241650882738 , 102.86389478501 ),
new google.maps.LatLng( 30.1252357465062 , 102.865508117512 ),
new google.maps.LatLng( 30.126631072904 , 102.866746134012 ),
new google.maps.LatLng( 30.1282559897621 , 102.867524458625 ),
new google.maps.LatLng( 30.1299997700898 , 102.867790030381 ),
new google.maps.LatLng( 30.1317435812197 , 102.867524724451 ),
new google.maps.LatLng( 30.1333685822307 , 102.866746594437 ),
new google.maps.LatLng( 30.1347640235836 , 102.865508649164 ),
new google.maps.LatLng( 30.1358347967711 , 102.863895245435 ),
new google.maps.LatLng( 30.136507918883 , 102.862016341158 ),
 new google.maps.LatLng( 30.1367375093501 , 102.86 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1867375093501 , 102.91 ),
new google.maps.LatLng( 30.186507918852 , 102.907982636059 ),
new google.maps.LatLng( 30.1858347966555 , 102.906102778767 ),
new google.maps.LatLng( 30.1847640233524 , 102.904488556786 ),
new google.maps.LatLng( 30.1833685818839 , 102.903249983805 ),
new google.maps.LatLng( 30.1817435807883 , 102.902471459385 ),
new google.maps.LatLng( 30.1799997696275 , 102.902206019182 ),
new google.maps.LatLng( 30.1782559893307 , 102.902471725881 ),
new google.maps.LatLng( 30.1766310725573 , 102.903250445389 ),
new google.maps.LatLng( 30.175235746275 , 102.904489089777 ),
new google.maps.LatLng( 30.1741650881582 , 102.906103240352 ),
new google.maps.LatLng( 30.1734920502839 , 102.907982902555 ),
new google.maps.LatLng( 30.1732624906499 , 102.91 ),
new google.maps.LatLng( 30.1734920502839 , 102.912017097445 ),
new google.maps.LatLng( 30.1741650881582 , 102.913896759648 ),
new google.maps.LatLng( 30.175235746275 , 102.915510910223 ),
new google.maps.LatLng( 30.1766310725573 , 102.916749554611 ),
new google.maps.LatLng( 30.1782559893307 , 102.917528274119 ),
new google.maps.LatLng( 30.1799997696275 , 102.917793980818 ),
new google.maps.LatLng( 30.1817435807883 , 102.917528540615 ),
new google.maps.LatLng( 30.1833685818839 , 102.916750016195 ),
new google.maps.LatLng( 30.1847640233524 , 102.915511443214 ),
new google.maps.LatLng( 30.1858347966555 , 102.913897221233 ),
new google.maps.LatLng( 30.186507918852 , 102.912017363941 ),
 new google.maps.LatLng( 30.1867375093501 , 102.91 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3167375093501 , 103 ),
new google.maps.LatLng( 30.3165079187714 , 102.997979964753 ),
new google.maps.LatLng( 30.3158347963544 , 102.996097618376 ),
new google.maps.LatLng( 30.3147640227502 , 102.994481259283 ),
new google.maps.LatLng( 30.3133685809806 , 102.993241046853 ),
new google.maps.LatLng( 30.3117435796646 , 102.992461492326 ),
new google.maps.LatLng( 30.3099997684231 , 102.992195701428 ),
new google.maps.LatLng( 30.308255988207 , 102.99246176057 ),
new google.maps.LatLng( 30.3066310716541 , 102.993241511465 ),
new google.maps.LatLng( 30.3052357456729 , 102.994481795771 ),
new google.maps.LatLng( 30.3041650878572 , 102.996098082988 ),
new google.maps.LatLng( 30.3034920502032 , 102.997980232997 ),
new google.maps.LatLng( 30.3032624906499 , 103 ),
new google.maps.LatLng( 30.3034920502032 , 103.002019767003 ),
new google.maps.LatLng( 30.3041650878572 , 103.003901917012 ),
new google.maps.LatLng( 30.3052357456729 , 103.005518204229 ),
new google.maps.LatLng( 30.3066310716541 , 103.006758488535 ),
new google.maps.LatLng( 30.308255988207 , 103.00753823943 ),
new google.maps.LatLng( 30.3099997684231 , 103.007804298572 ),
new google.maps.LatLng( 30.3117435796646 , 103.007538507674 ),
new google.maps.LatLng( 30.3133685809806 , 103.006758953147 ),
new google.maps.LatLng( 30.3147640227502 , 103.005518740717 ),
new google.maps.LatLng( 30.3158347963544 , 103.003902381624 ),
new google.maps.LatLng( 30.3165079187714 , 103.002020035247 ),
 new google.maps.LatLng( 30.3167375093501 , 103 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2067375093501 , 102.79 ),
new google.maps.LatLng( 30.2065079188396 , 102.787982226225 ),
new google.maps.LatLng( 30.2058347966092 , 102.786101987055 ),
new google.maps.LatLng( 30.2047640232599 , 102.784487437196 ),
new google.maps.LatLng( 30.2033685817451 , 102.783248612689 ),
new google.maps.LatLng( 30.2017435806156 , 102.78246993023 ),
new google.maps.LatLng( 30.1999997694424 , 102.782204436223 ),
new google.maps.LatLng( 30.198255989158 , 102.782470196994 ),
new google.maps.LatLng( 30.1966310724185 , 102.783249074739 ),
new google.maps.LatLng( 30.1952357461825 , 102.784487970724 ),
new google.maps.LatLng( 30.194165088112 , 102.786102449104 ),
new google.maps.LatLng( 30.1934920502715 , 102.787982492989 ),
new google.maps.LatLng( 30.1932624906499 , 102.79 ),
new google.maps.LatLng( 30.1934920502715 , 102.792017507011 ),
new google.maps.LatLng( 30.194165088112 , 102.793897550896 ),
new google.maps.LatLng( 30.1952357461825 , 102.795512029276 ),
new google.maps.LatLng( 30.1966310724185 , 102.796750925261 ),
new google.maps.LatLng( 30.198255989158 , 102.797529803006 ),
new google.maps.LatLng( 30.1999997694424 , 102.797795563777 ),
new google.maps.LatLng( 30.2017435806156 , 102.79753006977 ),
new google.maps.LatLng( 30.2033685817451 , 102.796751387311 ),
new google.maps.LatLng( 30.2047640232599 , 102.795512562804 ),
new google.maps.LatLng( 30.2058347966092 , 102.793898012945 ),
new google.maps.LatLng( 30.2065079188396 , 102.792017773775 ),
 new google.maps.LatLng( 30.2067375093501 , 102.79 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2486599453513 , 102.89 ),
new google.maps.LatLng( 30.2483648393083 , 102.887405383938 ),
new google.maps.LatLng( 30.2474996372772 , 102.884987630807 ),
new google.maps.LatLng( 30.2461233153031 , 102.882911538787 ),
new google.maps.LatLng( 30.2443296865167 , 102.881318601934 ),
new google.maps.LatLng( 30.2422410028149 , 102.880317364425 ),
new google.maps.LatLng( 30.239999618488 , 102.879976026629 ),
new google.maps.LatLng( 30.2377582852741 , 102.880317806029 ),
new google.maps.LatLng( 30.2356697412153 , 102.881319366815 ),
new google.maps.LatLng( 30.2338763031849 , 102.882912421995 ),
new google.maps.LatLng( 30.2325001719668 , 102.884988395687 ),
new google.maps.LatLng( 30.2316351095788 , 102.887405825542 ),
new google.maps.LatLng( 30.2313400546487 , 102.89 ),
new google.maps.LatLng( 30.2316351095788 , 102.892594174458 ),
new google.maps.LatLng( 30.2325001719668 , 102.895011604313 ),
new google.maps.LatLng( 30.2338763031849 , 102.897087578005 ),
new google.maps.LatLng( 30.2356697412153 , 102.898680633185 ),
new google.maps.LatLng( 30.2377582852741 , 102.899682193971 ),
new google.maps.LatLng( 30.239999618488 , 102.900023973371 ),
new google.maps.LatLng( 30.2422410028149 , 102.899682635575 ),
new google.maps.LatLng( 30.2443296865167 , 102.898681398066 ),
new google.maps.LatLng( 30.2461233153031 , 102.897088461213 ),
new google.maps.LatLng( 30.2474996372772 , 102.895012369193 ),
new google.maps.LatLng( 30.2483648393083 , 102.892594616062 ),
 new google.maps.LatLng( 30.2486599453513 , 102.89 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2859649416113 , 102.93 ),
new google.maps.LatLng( 30.2857616790087 , 102.928212156201 ),
new google.maps.LatLng( 30.2851657456389 , 102.926546171981 ),
new google.maps.LatLng( 30.2842177600073 , 102.925115596766 ),
new google.maps.LatLng( 30.2829823348259 , 102.924017927511 ),
new google.maps.LatLng( 30.2815436713357 , 102.923327962936 ),
new google.maps.LatLng( 30.2799998187046 , 102.923092707628 ),
new google.maps.LatLng( 30.2784559903624 , 102.923328172873 ),
new google.maps.LatLng( 30.277017393231 , 102.924018291132 ),
new google.maps.LatLng( 30.2757820586973 , 102.92511601664 ),
new google.maps.LatLng( 30.2748341637134 , 102.926546535602 ),
new google.maps.LatLng( 30.2742382967023 , 102.928212366138 ),
new google.maps.LatLng( 30.2740350583887 , 102.93 ),
new google.maps.LatLng( 30.2742382967023 , 102.931787633862 ),
new google.maps.LatLng( 30.2748341637134 , 102.933453464398 ),
new google.maps.LatLng( 30.2757820586973 , 102.93488398336 ),
new google.maps.LatLng( 30.277017393231 , 102.935981708868 ),
new google.maps.LatLng( 30.2784559903624 , 102.936671827127 ),
new google.maps.LatLng( 30.2799998187046 , 102.936907292372 ),
new google.maps.LatLng( 30.2815436713357 , 102.936672037064 ),
new google.maps.LatLng( 30.2829823348259 , 102.935982072489 ),
new google.maps.LatLng( 30.2842177600073 , 102.934884403234 ),
new google.maps.LatLng( 30.2851657456389 , 102.933453828019 ),
new google.maps.LatLng( 30.2857616790087 , 102.931787843799 ),
 new google.maps.LatLng( 30.2859649416113 , 102.93 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.0459649416113 , 102.8 ),
new google.maps.LatLng( 30.0457616791253 , 102.798216503572 ),
new google.maps.LatLng( 30.0451657460739 , 102.796554570205 ),
new google.maps.LatLng( 30.0442177608773 , 102.795127473082 ),
new google.maps.LatLng( 30.0429823361308 , 102.794032472063 ),
new google.maps.LatLng( 30.041543672959 , 102.793344184101 ),
new google.maps.LatLng( 30.0399998204444 , 102.793109499709 ),
new google.maps.LatLng( 30.0384559919856 , 102.793344391518 ),
new google.maps.LatLng( 30.0370173945357 , 102.794032831319 ),
new google.maps.LatLng( 30.0357820595671 , 102.795127887915 ),
new google.maps.LatLng( 30.0348341641483 , 102.796554929461 ),
new google.maps.LatLng( 30.0342382968188 , 102.798216710989 ),
new google.maps.LatLng( 30.0340350583887 , 102.8 ),
new google.maps.LatLng( 30.0342382968188 , 102.801783289011 ),
new google.maps.LatLng( 30.0348341641483 , 102.803445070539 ),
new google.maps.LatLng( 30.0357820595671 , 102.804872112085 ),
new google.maps.LatLng( 30.0370173945357 , 102.805967168681 ),
new google.maps.LatLng( 30.0384559919856 , 102.806655608482 ),
new google.maps.LatLng( 30.0399998204444 , 102.806890500291 ),
new google.maps.LatLng( 30.041543672959 , 102.806655815899 ),
new google.maps.LatLng( 30.0429823361308 , 102.805967527937 ),
new google.maps.LatLng( 30.0442177608773 , 102.804872526918 ),
new google.maps.LatLng( 30.0451657460739 , 102.803445429795 ),
new google.maps.LatLng( 30.0457616791253 , 102.801783496428 ),
 new google.maps.LatLng( 30.0459649416113 , 102.8 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3086599453513 , 103 ),
new google.maps.LatLng( 30.3083648392468 , 102.997403797098 ),
new google.maps.LatLng( 30.3074996370475 , 102.9949845654 ),
new google.maps.LatLng( 30.3061233148436 , 102.992907203948 ),
new google.maps.LatLng( 30.3043296858276 , 102.991313293341 ),
new google.maps.LatLng( 30.3022410019576 , 102.99031144408 ),
new google.maps.LatLng( 30.2999996175692 , 102.989969898128 ),
new google.maps.LatLng( 30.2977582844169 , 102.990311887018 ),
new google.maps.LatLng( 30.2956697405263 , 102.991314060532 ),
new google.maps.LatLng( 30.2938763027256 , 102.992908089824 ),
new google.maps.LatLng( 30.2925001717372 , 102.994985332592 ),
new google.maps.LatLng( 30.2916351095172 , 102.997404240037 ),
new google.maps.LatLng( 30.2913400546487 , 103 ),
new google.maps.LatLng( 30.2916351095172 , 103.002595759963 ),
new google.maps.LatLng( 30.2925001717372 , 103.005014667408 ),
new google.maps.LatLng( 30.2938763027256 , 103.007091910176 ),
new google.maps.LatLng( 30.2956697405263 , 103.008685939468 ),
new google.maps.LatLng( 30.2977582844169 , 103.009688112982 ),
new google.maps.LatLng( 30.2999996175692 , 103.010030101872 ),
new google.maps.LatLng( 30.3022410019576 , 103.00968855592 ),
new google.maps.LatLng( 30.3043296858276 , 103.008686706659 ),
new google.maps.LatLng( 30.3061233148436 , 103.007092796052 ),
new google.maps.LatLng( 30.3074996370475 , 103.0050154346 ),
new google.maps.LatLng( 30.3083648392468 , 103.002596202902 ),
 new google.maps.LatLng( 30.3086599453513 , 103 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3359649416113 , 102.94 ),
new google.maps.LatLng( 30.3357616789844 , 102.938211243875 ),
new google.maps.LatLng( 30.335165745548 , 102.936544409555 ),
new google.maps.LatLng( 30.3342177598255 , 102.935113104438 ),
new google.maps.LatLng( 30.3329823345532 , 102.934014875235 ),
new google.maps.LatLng( 30.3315436709965 , 102.93332455881 ),
new google.maps.LatLng( 30.3299998183411 , 102.933089183691 ),
new google.maps.LatLng( 30.3284559900233 , 102.933324769275 ),
new google.maps.LatLng( 30.3270173929583 , 102.934015239771 ),
new google.maps.LatLng( 30.3257820585155 , 102.935113525368 ),
new google.maps.LatLng( 30.3248341636225 , 102.936544774091 ),
new google.maps.LatLng( 30.3242382966779 , 102.93821145434 ),
new google.maps.LatLng( 30.3240350583887 , 102.94 ),
new google.maps.LatLng( 30.3242382966779 , 102.94178854566 ),
new google.maps.LatLng( 30.3248341636225 , 102.943455225909 ),
new google.maps.LatLng( 30.3257820585155 , 102.944886474632 ),
new google.maps.LatLng( 30.3270173929583 , 102.945984760229 ),
new google.maps.LatLng( 30.3284559900233 , 102.946675230725 ),
new google.maps.LatLng( 30.3299998183411 , 102.946910816309 ),
new google.maps.LatLng( 30.3315436709965 , 102.94667544119 ),
new google.maps.LatLng( 30.3329823345532 , 102.945985124765 ),
new google.maps.LatLng( 30.3342177598255 , 102.944886895562 ),
new google.maps.LatLng( 30.335165745548 , 102.943455590445 ),
new google.maps.LatLng( 30.3357616789844 , 102.941788756125 ),
 new google.maps.LatLng( 30.3359649416113 , 102.94 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1359649416113 , 102.85 ),
new google.maps.LatLng( 30.1357616790817 , 102.848214879458 ),
new google.maps.LatLng( 30.135165745911 , 102.846551432751 ),
new google.maps.LatLng( 30.1342177605515 , 102.845123036263 ),
new google.maps.LatLng( 30.1329823356422 , 102.844027038431 ),
new google.maps.LatLng( 30.1315436723512 , 102.843338124111 ),
new google.maps.LatLng( 30.1299998197929 , 102.843103226433 ),
new google.maps.LatLng( 30.1284559913778 , 102.84333833247 ),
new google.maps.LatLng( 30.1270173940472 , 102.844027399318 ),
new google.maps.LatLng( 30.1257820592414 , 102.845123452981 ),
new google.maps.LatLng( 30.1248341639855 , 102.846551793639 ),
new google.maps.LatLng( 30.1242382967752 , 102.848215087816 ),
new google.maps.LatLng( 30.1240350583887 , 102.85 ),
new google.maps.LatLng( 30.1242382967752 , 102.851784912184 ),
new google.maps.LatLng( 30.1248341639855 , 102.853448206361 ),
new google.maps.LatLng( 30.1257820592414 , 102.854876547019 ),
new google.maps.LatLng( 30.1270173940472 , 102.855972600682 ),
new google.maps.LatLng( 30.1284559913778 , 102.85666166753 ),
new google.maps.LatLng( 30.1299998197929 , 102.856896773567 ),
new google.maps.LatLng( 30.1315436723512 , 102.856661875889 ),
new google.maps.LatLng( 30.1329823356422 , 102.855972961569 ),
new google.maps.LatLng( 30.1342177605515 , 102.854876963737 ),
new google.maps.LatLng( 30.135165745911 , 102.853448567249 ),
new google.maps.LatLng( 30.1357616790817 , 102.851785120542 ),
 new google.maps.LatLng( 30.1359649416113 , 102.85 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3886599453513 , 102.97 ),
new google.maps.LatLng( 30.3883648391646 , 102.967401673854 ),
new google.maps.LatLng( 30.3874996367407 , 102.964980463786 ),
new google.maps.LatLng( 30.3861233142302 , 102.96290140379 ),
new google.maps.LatLng( 30.3843296849074 , 102.961306190268 ),
new google.maps.LatLng( 30.3822410008129 , 102.960303522463 ),
new google.maps.LatLng( 30.3799996163424 , 102.95996169799 ),
new google.maps.LatLng( 30.3777582832723 , 102.960303967186 ),
new google.maps.LatLng( 30.3756697396063 , 102.96130696055 ),
new google.maps.LatLng( 30.3738763021123 , 102.962902293235 ),
new google.maps.LatLng( 30.3725001714305 , 102.964981234068 ),
new google.maps.LatLng( 30.3716351094351 , 102.967402118577 ),
new google.maps.LatLng( 30.3713400546487 , 102.97 ),
new google.maps.LatLng( 30.3716351094351 , 102.972597881423 ),
new google.maps.LatLng( 30.3725001714305 , 102.975018765932 ),
new google.maps.LatLng( 30.3738763021123 , 102.977097706765 ),
new google.maps.LatLng( 30.3756697396063 , 102.97869303945 ),
new google.maps.LatLng( 30.3777582832723 , 102.979696032814 ),
new google.maps.LatLng( 30.3799996163424 , 102.98003830201 ),
new google.maps.LatLng( 30.3822410008129 , 102.979696477537 ),
new google.maps.LatLng( 30.3843296849074 , 102.978693809732 ),
new google.maps.LatLng( 30.3861233142302 , 102.97709859621 ),
new google.maps.LatLng( 30.3874996367407 , 102.975019536214 ),
new google.maps.LatLng( 30.3883648391646 , 102.972598326146 ),
 new google.maps.LatLng( 30.3886599453513 , 102.97 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3059649416113 , 102.95 ),
new google.maps.LatLng( 30.305761678999 , 102.948211791546 ),
new google.maps.LatLng( 30.3051657456025 , 102.946545467542 ),
new google.maps.LatLng( 30.3042177599346 , 102.945114600587 ),
new google.maps.LatLng( 30.3029823347169 , 102.944016707521 ),
new google.maps.LatLng( 30.3015436712001 , 102.943326602312 ),
new google.maps.LatLng( 30.2999998185592 , 102.943091299116 ),
new google.maps.LatLng( 30.2984559902268 , 102.94332681246 ),
new google.maps.LatLng( 30.297017393122 , 102.944017071508 ),
new google.maps.LatLng( 30.2957820586246 , 102.945115020883 ),
new google.maps.LatLng( 30.2948341636771 , 102.946545831529 ),
new google.maps.LatLng( 30.2942382966925 , 102.948212001694 ),
new google.maps.LatLng( 30.2940350583887 , 102.95 ),
new google.maps.LatLng( 30.2942382966925 , 102.951787998306 ),
new google.maps.LatLng( 30.2948341636771 , 102.953454168471 ),
new google.maps.LatLng( 30.2957820586246 , 102.954884979117 ),
new google.maps.LatLng( 30.297017393122 , 102.955982928492 ),
new google.maps.LatLng( 30.2984559902268 , 102.95667318754 ),
new google.maps.LatLng( 30.2999998185592 , 102.956908700884 ),
new google.maps.LatLng( 30.3015436712001 , 102.956673397688 ),
new google.maps.LatLng( 30.3029823347169 , 102.955983292479 ),
new google.maps.LatLng( 30.3042177599346 , 102.954885399413 ),
new google.maps.LatLng( 30.3051657456025 , 102.953454532458 ),
new google.maps.LatLng( 30.305761678999 , 102.951788208454 ),
 new google.maps.LatLng( 30.3059649416113 , 102.95 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1359649416113 , 102.86 ),
new google.maps.LatLng( 30.1357616790817 , 102.858214879458 ),
new google.maps.LatLng( 30.135165745911 , 102.856551432751 ),
new google.maps.LatLng( 30.1342177605515 , 102.855123036263 ),
new google.maps.LatLng( 30.1329823356422 , 102.854027038431 ),
new google.maps.LatLng( 30.1315436723512 , 102.853338124111 ),
new google.maps.LatLng( 30.1299998197929 , 102.853103226433 ),
new google.maps.LatLng( 30.1284559913778 , 102.85333833247 ),
new google.maps.LatLng( 30.1270173940472 , 102.854027399318 ),
new google.maps.LatLng( 30.1257820592414 , 102.855123452981 ),
new google.maps.LatLng( 30.1248341639855 , 102.856551793639 ),
new google.maps.LatLng( 30.1242382967752 , 102.858215087816 ),
new google.maps.LatLng( 30.1240350583887 , 102.86 ),
new google.maps.LatLng( 30.1242382967752 , 102.861784912184 ),
new google.maps.LatLng( 30.1248341639855 , 102.863448206361 ),
new google.maps.LatLng( 30.1257820592414 , 102.864876547019 ),
new google.maps.LatLng( 30.1270173940472 , 102.865972600682 ),
new google.maps.LatLng( 30.1284559913778 , 102.86666166753 ),
new google.maps.LatLng( 30.1299998197929 , 102.866896773567 ),
new google.maps.LatLng( 30.1315436723512 , 102.866661875889 ),
new google.maps.LatLng( 30.1329823356422 , 102.865972961569 ),
new google.maps.LatLng( 30.1342177605515 , 102.864876963737 ),
new google.maps.LatLng( 30.135165745911 , 102.863448567249 ),
new google.maps.LatLng( 30.1357616790817 , 102.861785120542 ),
 new google.maps.LatLng( 30.1359649416113 , 102.86 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3086599453513 , 103.2 ),
new google.maps.LatLng( 30.3083648392468 , 103.197403797098 ),
new google.maps.LatLng( 30.3074996370475 , 103.1949845654 ),
new google.maps.LatLng( 30.3061233148436 , 103.192907203948 ),
new google.maps.LatLng( 30.3043296858276 , 103.191313293341 ),
new google.maps.LatLng( 30.3022410019576 , 103.19031144408 ),
new google.maps.LatLng( 30.2999996175692 , 103.189969898128 ),
new google.maps.LatLng( 30.2977582844169 , 103.190311887018 ),
new google.maps.LatLng( 30.2956697405263 , 103.191314060532 ),
new google.maps.LatLng( 30.2938763027256 , 103.192908089824 ),
new google.maps.LatLng( 30.2925001717372 , 103.194985332592 ),
new google.maps.LatLng( 30.2916351095172 , 103.197404240037 ),
new google.maps.LatLng( 30.2913400546487 , 103.2 ),
new google.maps.LatLng( 30.2916351095172 , 103.202595759964 ),
new google.maps.LatLng( 30.2925001717372 , 103.205014667408 ),
new google.maps.LatLng( 30.2938763027256 , 103.207091910176 ),
new google.maps.LatLng( 30.2956697405263 , 103.208685939468 ),
new google.maps.LatLng( 30.2977582844169 , 103.209688112982 ),
new google.maps.LatLng( 30.2999996175692 , 103.210030101872 ),
new google.maps.LatLng( 30.3022410019576 , 103.20968855592 ),
new google.maps.LatLng( 30.3043296858276 , 103.208686706659 ),
new google.maps.LatLng( 30.3061233148436 , 103.207092796052 ),
new google.maps.LatLng( 30.3074996370475 , 103.2050154346 ),
new google.maps.LatLng( 30.3083648392468 , 103.202596202902 ),
 new google.maps.LatLng( 30.3086599453513 , 103.2 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3667375093501 , 102.97 ),
new google.maps.LatLng( 30.3665079187403 , 102.967978932671 ),
new google.maps.LatLng( 30.3658347962383 , 102.966095624613 ),
new google.maps.LatLng( 30.3647640225181 , 102.964478439829 ),
new google.maps.LatLng( 30.3633685806325 , 102.963237593983 ),
new google.maps.LatLng( 30.3617435792316 , 102.962457641464 ),
new google.maps.LatLng( 30.359999767959 , 102.962191715071 ),
new google.maps.LatLng( 30.3582559877741 , 102.962457910382 ),
new google.maps.LatLng( 30.356631071306 , 102.963238059764 ),
new google.maps.LatLng( 30.3552357454409 , 102.964478977666 ),
new google.maps.LatLng( 30.3541650877412 , 102.966096090394 ),
new google.maps.LatLng( 30.3534920501721 , 102.96797920159 ),
new google.maps.LatLng( 30.3532624906499 , 102.97 ),
new google.maps.LatLng( 30.3534920501721 , 102.97202079841 ),
new google.maps.LatLng( 30.3541650877412 , 102.973903909606 ),
new google.maps.LatLng( 30.3552357454409 , 102.975521022334 ),
new google.maps.LatLng( 30.356631071306 , 102.976761940236 ),
new google.maps.LatLng( 30.3582559877741 , 102.977542089618 ),
new google.maps.LatLng( 30.359999767959 , 102.977808284929 ),
new google.maps.LatLng( 30.3617435792316 , 102.977542358536 ),
new google.maps.LatLng( 30.3633685806325 , 102.976762406017 ),
new google.maps.LatLng( 30.3647640225181 , 102.975521560171 ),
new google.maps.LatLng( 30.3658347962383 , 102.973904375387 ),
new google.maps.LatLng( 30.3665079187403 , 102.972021067329 ),
 new google.maps.LatLng( 30.3667375093501 , 102.97 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3167375093501 , 102.97 ),
new google.maps.LatLng( 30.3165079187714 , 102.967979964753 ),
new google.maps.LatLng( 30.3158347963544 , 102.966097618376 ),
new google.maps.LatLng( 30.3147640227502 , 102.964481259283 ),
new google.maps.LatLng( 30.3133685809806 , 102.963241046853 ),
new google.maps.LatLng( 30.3117435796646 , 102.962461492326 ),
new google.maps.LatLng( 30.3099997684231 , 102.962195701428 ),
new google.maps.LatLng( 30.308255988207 , 102.96246176057 ),
new google.maps.LatLng( 30.3066310716541 , 102.963241511465 ),
new google.maps.LatLng( 30.3052357456729 , 102.964481795771 ),
new google.maps.LatLng( 30.3041650878572 , 102.966098082988 ),
new google.maps.LatLng( 30.3034920502032 , 102.967980232997 ),
new google.maps.LatLng( 30.3032624906499 , 102.97 ),
new google.maps.LatLng( 30.3034920502032 , 102.972019767003 ),
new google.maps.LatLng( 30.3041650878572 , 102.973901917012 ),
new google.maps.LatLng( 30.3052357456729 , 102.975518204229 ),
new google.maps.LatLng( 30.3066310716541 , 102.976758488535 ),
new google.maps.LatLng( 30.308255988207 , 102.97753823943 ),
new google.maps.LatLng( 30.3099997684231 , 102.977804298572 ),
new google.maps.LatLng( 30.3117435796646 , 102.977538507674 ),
new google.maps.LatLng( 30.3133685809806 , 102.976758953147 ),
new google.maps.LatLng( 30.3147640227502 , 102.975518740717 ),
new google.maps.LatLng( 30.3158347963544 , 102.973902381624 ),
new google.maps.LatLng( 30.3165079187714 , 102.972020035247 ),
 new google.maps.LatLng( 30.3167375093501 , 102.97 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3186599453513 , 102.9 ),
new google.maps.LatLng( 30.3183648392365 , 102.897403532159 ),
new google.maps.LatLng( 30.3174996370091 , 102.8949840536 ),
new google.maps.LatLng( 30.316123314767 , 102.892906480203 ),
new google.maps.LatLng( 30.3143296857126 , 102.891312407018 ),
new google.maps.LatLng( 30.3122410018146 , 102.890310455619 ),
new google.maps.LatLng( 30.309999617416 , 102.889968874912 ),
new google.maps.LatLng( 30.3077582842739 , 102.89031089878 ),
new google.maps.LatLng( 30.3056697404114 , 102.891313174595 ),
new google.maps.LatLng( 30.303876302649 , 102.892907366524 ),
new google.maps.LatLng( 30.3025001716988 , 102.894984821177 ),
new google.maps.LatLng( 30.301635109507 , 102.89740397532 ),
new google.maps.LatLng( 30.3013400546487 , 102.9 ),
new google.maps.LatLng( 30.301635109507 , 102.90259602468 ),
new google.maps.LatLng( 30.3025001716988 , 102.905015178823 ),
new google.maps.LatLng( 30.303876302649 , 102.907092633476 ),
new google.maps.LatLng( 30.3056697404114 , 102.908686825405 ),
new google.maps.LatLng( 30.3077582842739 , 102.90968910122 ),
new google.maps.LatLng( 30.309999617416 , 102.910031125088 ),
new google.maps.LatLng( 30.3122410018146 , 102.909689544381 ),
new google.maps.LatLng( 30.3143296857126 , 102.908687592982 ),
new google.maps.LatLng( 30.316123314767 , 102.907093519797 ),
new google.maps.LatLng( 30.3174996370091 , 102.9050159464 ),
new google.maps.LatLng( 30.3183648392365 , 102.902596467841 ),
 new google.maps.LatLng( 30.3186599453513 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.4086599453513 , 102.9 ),
new google.maps.LatLng( 30.408364839144 , 102.897401141709 ),
new google.maps.LatLng( 30.407499636664 , 102.894979435804 ),
new google.maps.LatLng( 30.4061233140766 , 102.892899950105 ),
new google.maps.LatLng( 30.4043296846771 , 102.891304410035 ),
new google.maps.LatLng( 30.4022410005264 , 102.890301537079 ),
new google.maps.LatLng( 30.3999996160354 , 102.8899596428 ),
new google.maps.LatLng( 30.3977582829859 , 102.890301982248 ),
new google.maps.LatLng( 30.395669739376 , 102.89130518109 ),
new google.maps.LatLng( 30.3938763019588 , 102.892900840443 ),
new google.maps.LatLng( 30.3925001713537 , 102.89498020686 ),
new google.maps.LatLng( 30.3916351094145 , 102.897401586878 ),
new google.maps.LatLng( 30.3913400546487 , 102.9 ),
new google.maps.LatLng( 30.3916351094145 , 102.902598413122 ),
new google.maps.LatLng( 30.3925001713537 , 102.90501979314 ),
new google.maps.LatLng( 30.3938763019588 , 102.907099159557 ),
new google.maps.LatLng( 30.395669739376 , 102.90869481891 ),
new google.maps.LatLng( 30.3977582829859 , 102.909698017752 ),
new google.maps.LatLng( 30.3999996160354 , 102.9100403572 ),
new google.maps.LatLng( 30.4022410005264 , 102.909698462921 ),
new google.maps.LatLng( 30.4043296846771 , 102.908695589965 ),
new google.maps.LatLng( 30.4061233140766 , 102.907100049895 ),
new google.maps.LatLng( 30.407499636664 , 102.905020564196 ),
new google.maps.LatLng( 30.408364839144 , 102.902598858292 ),
 new google.maps.LatLng( 30.4086599453513 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3859649416113 , 102.92 ),
new google.maps.LatLng( 30.38576167896 , 102.918210329254 ),
new google.maps.LatLng( 30.385165745457 , 102.916542642695 ),
new google.maps.LatLng( 30.3842177596436 , 102.91511060584 ),
new google.maps.LatLng( 30.3829823342803 , 102.914011815279 ),
new google.maps.LatLng( 30.381543670657 , 102.91332114612 ),
new google.maps.LatLng( 30.3799998179772 , 102.913085650888 ),
new google.maps.LatLng( 30.3784559896837 , 102.913321357114 ),
new google.maps.LatLng( 30.3770173926854 , 102.914012180732 ),
new google.maps.LatLng( 30.3757820583336 , 102.915111027829 ),
new google.maps.LatLng( 30.3748341635316 , 102.916543008148 ),
new google.maps.LatLng( 30.3742382966536 , 102.918210540248 ),
new google.maps.LatLng( 30.3740350583887 , 102.92 ),
new google.maps.LatLng( 30.3742382966536 , 102.921789459752 ),
new google.maps.LatLng( 30.3748341635316 , 102.923456991852 ),
new google.maps.LatLng( 30.3757820583336 , 102.924888972171 ),
new google.maps.LatLng( 30.3770173926854 , 102.925987819268 ),
new google.maps.LatLng( 30.3784559896837 , 102.926678642886 ),
new google.maps.LatLng( 30.3799998179772 , 102.926914349112 ),
new google.maps.LatLng( 30.381543670657 , 102.92667885388 ),
new google.maps.LatLng( 30.3829823342803 , 102.925988184721 ),
new google.maps.LatLng( 30.3842177596436 , 102.92488939416 ),
new google.maps.LatLng( 30.385165745457 , 102.923457357305 ),
new google.maps.LatLng( 30.38576167896 , 102.921789670746 ),
 new google.maps.LatLng( 30.3859649416113 , 102.92 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1886599453513 , 102.87 ),
new google.maps.LatLng( 30.1883648393698 , 102.867406965998 ),
new google.maps.LatLng( 30.1874996375067 , 102.864990686978 ),
new google.maps.LatLng( 30.186123315762 , 102.862915860567 ),
new google.maps.LatLng( 30.184329687205 , 102.861323894534 ),
new google.maps.LatLng( 30.1822410036711 , 102.860323266933 ),
new google.maps.LatLng( 30.1799996194057 , 102.859982136666 ),
new google.maps.LatLng( 30.1777582861303 , 102.860323707206 ),
new google.maps.LatLng( 30.1756697419036 , 102.86132465711 ),
new google.maps.LatLng( 30.1738763036437 , 102.862916741113 ),
new google.maps.LatLng( 30.1725001721962 , 102.864991449553 ),
new google.maps.LatLng( 30.1716351096402 , 102.867407406271 ),
new google.maps.LatLng( 30.1713400546487 , 102.87 ),
new google.maps.LatLng( 30.1716351096402 , 102.872592593729 ),
new google.maps.LatLng( 30.1725001721962 , 102.875008550447 ),
new google.maps.LatLng( 30.1738763036437 , 102.877083258887 ),
new google.maps.LatLng( 30.1756697419036 , 102.87867534289 ),
new google.maps.LatLng( 30.1777582861303 , 102.879676292794 ),
new google.maps.LatLng( 30.1799996194057 , 102.880017863334 ),
new google.maps.LatLng( 30.1822410036711 , 102.879676733067 ),
new google.maps.LatLng( 30.184329687205 , 102.878676105466 ),
new google.maps.LatLng( 30.186123315762 , 102.877084139433 ),
new google.maps.LatLng( 30.1874996375067 , 102.875009313022 ),
new google.maps.LatLng( 30.1883648393698 , 102.872593034002 ),
 new google.maps.LatLng( 30.1886599453513 , 102.87 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2359649416113 , 102.88 ),
new google.maps.LatLng( 30.2357616790331 , 102.878213066237 ),
new google.maps.LatLng( 30.2351657457297 , 102.876547929983 ),
new google.maps.LatLng( 30.2342177601889 , 102.875118082838 ),
new google.maps.LatLng( 30.2329823350983 , 102.874020972125 ),
new google.maps.LatLng( 30.2315436716746 , 102.873331358516 ),
new google.maps.LatLng( 30.2299998190677 , 102.873096222718 ),
new google.maps.LatLng( 30.2284559907012 , 102.873331567926 ),
new google.maps.LatLng( 30.2270173935033 , 102.874021334833 ),
new google.maps.LatLng( 30.2257820588789 , 102.875118501657 ),
new google.maps.LatLng( 30.2248341638042 , 102.876548292691 ),
new google.maps.LatLng( 30.2242382967266 , 102.878213275647 ),
new google.maps.LatLng( 30.2240350583887 , 102.88 ),
new google.maps.LatLng( 30.2242382967266 , 102.881786724353 ),
new google.maps.LatLng( 30.2248341638042 , 102.883451707309 ),
new google.maps.LatLng( 30.2257820588789 , 102.884881498343 ),
new google.maps.LatLng( 30.2270173935033 , 102.885978665167 ),
new google.maps.LatLng( 30.2284559907012 , 102.886668432074 ),
new google.maps.LatLng( 30.2299998190677 , 102.886903777282 ),
new google.maps.LatLng( 30.2315436716746 , 102.886668641484 ),
new google.maps.LatLng( 30.2329823350983 , 102.885979027875 ),
new google.maps.LatLng( 30.2342177601889 , 102.884881917162 ),
new google.maps.LatLng( 30.2351657457297 , 102.883452070017 ),
new google.maps.LatLng( 30.2357616790331 , 102.881786933763 ),
 new google.maps.LatLng( 30.2359649416113 , 102.88 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1559649416113 , 102.83 ),
new google.maps.LatLng( 30.1557616790719 , 102.828214517543 ),
new google.maps.LatLng( 30.1551657458748 , 102.826550733606 ),
new google.maps.LatLng( 30.1542177604791 , 102.825122047571 ),
new google.maps.LatLng( 30.1529823355335 , 102.82402582761 ),
new google.maps.LatLng( 30.151543672216 , 102.823336773714 ),
new google.maps.LatLng( 30.149999819648 , 102.823101828508 ),
new google.maps.LatLng( 30.1484559912426 , 102.823336982282 ),
new google.maps.LatLng( 30.1470173939385 , 102.824026188861 ),
new google.maps.LatLng( 30.145782059169 , 102.825122464708 ),
new google.maps.LatLng( 30.1448341639493 , 102.826551094858 ),
new google.maps.LatLng( 30.1442382967655 , 102.828214726112 ),
new google.maps.LatLng( 30.1440350583887 , 102.83 ),
new google.maps.LatLng( 30.1442382967655 , 102.831785273888 ),
new google.maps.LatLng( 30.1448341639493 , 102.833448905142 ),
new google.maps.LatLng( 30.145782059169 , 102.834877535292 ),
new google.maps.LatLng( 30.1470173939385 , 102.835973811139 ),
new google.maps.LatLng( 30.1484559912426 , 102.836663017718 ),
new google.maps.LatLng( 30.149999819648 , 102.836898171492 ),
new google.maps.LatLng( 30.151543672216 , 102.836663226286 ),
new google.maps.LatLng( 30.1529823355335 , 102.83597417239 ),
new google.maps.LatLng( 30.1542177604791 , 102.834877952429 ),
new google.maps.LatLng( 30.1551657458748 , 102.833449266394 ),
new google.maps.LatLng( 30.1557616790719 , 102.831785482457 ),
 new google.maps.LatLng( 30.1559649416113 , 102.83 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2859649416113 , 102.92 ),
new google.maps.LatLng( 30.2857616790087 , 102.918212156201 ),
new google.maps.LatLng( 30.2851657456389 , 102.916546171981 ),
new google.maps.LatLng( 30.2842177600073 , 102.915115596766 ),
new google.maps.LatLng( 30.2829823348259 , 102.914017927511 ),
new google.maps.LatLng( 30.2815436713357 , 102.913327962936 ),
new google.maps.LatLng( 30.2799998187046 , 102.913092707628 ),
new google.maps.LatLng( 30.2784559903624 , 102.913328172873 ),
new google.maps.LatLng( 30.277017393231 , 102.914018291132 ),
new google.maps.LatLng( 30.2757820586973 , 102.91511601664 ),
new google.maps.LatLng( 30.2748341637134 , 102.916546535602 ),
new google.maps.LatLng( 30.2742382967023 , 102.918212366138 ),
new google.maps.LatLng( 30.2740350583887 , 102.92 ),
new google.maps.LatLng( 30.2742382967023 , 102.921787633862 ),
new google.maps.LatLng( 30.2748341637134 , 102.923453464398 ),
new google.maps.LatLng( 30.2757820586973 , 102.92488398336 ),
new google.maps.LatLng( 30.277017393231 , 102.925981708868 ),
new google.maps.LatLng( 30.2784559903624 , 102.926671827127 ),
new google.maps.LatLng( 30.2799998187046 , 102.926907292372 ),
new google.maps.LatLng( 30.2815436713357 , 102.926672037064 ),
new google.maps.LatLng( 30.2829823348259 , 102.925982072489 ),
new google.maps.LatLng( 30.2842177600073 , 102.924884403234 ),
new google.maps.LatLng( 30.2851657456389 , 102.923453828019 ),
new google.maps.LatLng( 30.2857616790087 , 102.921787843799 ),
 new google.maps.LatLng( 30.2859649416113 , 102.92 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.0867375093501 , 102.84 ),
new google.maps.LatLng( 30.086507918914 , 102.837984679054 ),
new google.maps.LatLng( 30.0858347968866 , 102.836106725398 ),
new google.maps.LatLng( 30.0847640238146 , 102.834494137863 ),
new google.maps.LatLng( 30.0833685825772 , 102.833256818721 ),
new google.maps.LatLng( 30.0817435816507 , 102.832479082121 ),
new google.maps.LatLng( 30.0799997705517 , 102.832213910126 ),
new google.maps.LatLng( 30.078255990193 , 102.832479347279 ),
new google.maps.LatLng( 30.0766310732504 , 102.833257277989 ),
new google.maps.LatLng( 30.0752357467371 , 102.83449466818 ),
new google.maps.LatLng( 30.0741650883893 , 102.836107184665 ),
new google.maps.LatLng( 30.0734920503458 , 102.837984944213 ),
new google.maps.LatLng( 30.0732624906499 , 102.84 ),
new google.maps.LatLng( 30.0734920503458 , 102.842015055788 ),
new google.maps.LatLng( 30.0741650883893 , 102.843892815335 ),
new google.maps.LatLng( 30.0752357467371 , 102.84550533182 ),
new google.maps.LatLng( 30.0766310732504 , 102.846742722012 ),
new google.maps.LatLng( 30.078255990193 , 102.847520652721 ),
new google.maps.LatLng( 30.0799997705517 , 102.847786089874 ),
new google.maps.LatLng( 30.0817435816507 , 102.847520917879 ),
new google.maps.LatLng( 30.0833685825772 , 102.846743181279 ),
new google.maps.LatLng( 30.0847640238146 , 102.845505862136 ),
new google.maps.LatLng( 30.0858347968866 , 102.843893274602 ),
new google.maps.LatLng( 30.086507918914 , 102.842015320946 ),
 new google.maps.LatLng( 30.0867375093501 , 102.84 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3067375093501 , 102.94 ),
new google.maps.LatLng( 30.3065079187776 , 102.937980170859 ),
new google.maps.LatLng( 30.3058347963776 , 102.936098016528 ),
new google.maps.LatLng( 30.3047640227966 , 102.934481822325 ),
new google.maps.LatLng( 30.3033685810501 , 102.933241736387 ),
new google.maps.LatLng( 30.3017435797511 , 102.932462261338 ),
new google.maps.LatLng( 30.2999997685158 , 102.932196497498 ),
new google.maps.LatLng( 30.2982559882936 , 102.932462529447 ),
new google.maps.LatLng( 30.2966310717236 , 102.933242200765 ),
new google.maps.LatLng( 30.2952357457193 , 102.934482358543 ),
new google.maps.LatLng( 30.2941650878804 , 102.936098480906 ),
new google.maps.LatLng( 30.2934920502094 , 102.937980438968 ),
new google.maps.LatLng( 30.2932624906499 , 102.94 ),
new google.maps.LatLng( 30.2934920502094 , 102.942019561032 ),
new google.maps.LatLng( 30.2941650878804 , 102.943901519094 ),
new google.maps.LatLng( 30.2952357457193 , 102.945517641457 ),
new google.maps.LatLng( 30.2966310717236 , 102.946757799234 ),
new google.maps.LatLng( 30.2982559882936 , 102.947537470553 ),
new google.maps.LatLng( 30.2999997685158 , 102.947803502502 ),
new google.maps.LatLng( 30.3017435797511 , 102.947537738662 ),
new google.maps.LatLng( 30.3033685810501 , 102.946758263613 ),
new google.maps.LatLng( 30.3047640227966 , 102.945518177675 ),
new google.maps.LatLng( 30.3058347963776 , 102.943901983472 ),
new google.maps.LatLng( 30.3065079187776 , 102.942019829141 ),
 new google.maps.LatLng( 30.3067375093501 , 102.94 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1967375093501 , 102.88 ),
new google.maps.LatLng( 30.1965079188458 , 102.877982431193 ),
new google.maps.LatLng( 30.1958347966324 , 102.876102383011 ),
new google.maps.LatLng( 30.1947640233061 , 102.874487997131 ),
new google.maps.LatLng( 30.1933685818145 , 102.873249298419 ),
new google.maps.LatLng( 30.191743580702 , 102.872470695 ),
new google.maps.LatLng( 30.1899997695349 , 102.872205227902 ),
new google.maps.LatLng( 30.1882559892444 , 102.87247096163 ),
new google.maps.LatLng( 30.1866310724879 , 102.873249760236 ),
new google.maps.LatLng( 30.1852357462288 , 102.874488530392 ),
new google.maps.LatLng( 30.1841650881351 , 102.876102844828 ),
new google.maps.LatLng( 30.1834920502777 , 102.877982697823 ),
new google.maps.LatLng( 30.1832624906499 , 102.88 ),
new google.maps.LatLng( 30.1834920502777 , 102.882017302177 ),
new google.maps.LatLng( 30.1841650881351 , 102.883897155172 ),
new google.maps.LatLng( 30.1852357462288 , 102.885511469608 ),
new google.maps.LatLng( 30.1866310724879 , 102.886750239764 ),
new google.maps.LatLng( 30.1882559892444 , 102.88752903837 ),
new google.maps.LatLng( 30.1899997695349 , 102.887794772098 ),
new google.maps.LatLng( 30.191743580702 , 102.887529305 ),
new google.maps.LatLng( 30.1933685818145 , 102.886750701581 ),
new google.maps.LatLng( 30.1947640233061 , 102.885512002868 ),
new google.maps.LatLng( 30.1958347966324 , 102.883897616989 ),
new google.maps.LatLng( 30.1965079188458 , 102.882017568807 ),
 new google.maps.LatLng( 30.1967375093501 , 102.88 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1859649416113 , 102.84 ),
new google.maps.LatLng( 30.1857616790574 , 102.838213973988 ),
new google.maps.LatLng( 30.1851657458204 , 102.83654968357 ),
new google.maps.LatLng( 30.1842177603703 , 102.835120562666 ),
new google.maps.LatLng( 30.1829823353704 , 102.834024009093 ),
new google.maps.LatLng( 30.1815436720131 , 102.833334745568 ),
new google.maps.LatLng( 30.1799998194305 , 102.83309972898 ),
new google.maps.LatLng( 30.1784559910397 , 102.833334954452 ),
new google.maps.LatLng( 30.1770173937754 , 102.83402437089 ),
new google.maps.LatLng( 30.1757820590602 , 102.835120980433 ),
new google.maps.LatLng( 30.1748341638949 , 102.836550045367 ),
new google.maps.LatLng( 30.1742382967509 , 102.838214182871 ),
new google.maps.LatLng( 30.1740350583887 , 102.84 ),
new google.maps.LatLng( 30.1742382967509 , 102.841785817129 ),
new google.maps.LatLng( 30.1748341638949 , 102.843449954633 ),
new google.maps.LatLng( 30.1757820590602 , 102.844879019567 ),
new google.maps.LatLng( 30.1770173937754 , 102.84597562911 ),
new google.maps.LatLng( 30.1784559910397 , 102.846665045548 ),
new google.maps.LatLng( 30.1799998194305 , 102.84690027102 ),
new google.maps.LatLng( 30.1815436720131 , 102.846665254432 ),
new google.maps.LatLng( 30.1829823353704 , 102.845975990907 ),
new google.maps.LatLng( 30.1842177603703 , 102.844879437334 ),
new google.maps.LatLng( 30.1851657458204 , 102.84345031643 ),
new google.maps.LatLng( 30.1857616790574 , 102.841786026012 ),
 new google.maps.LatLng( 30.1859649416113 , 102.84 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3659649416113 , 102.97 ),
new google.maps.LatLng( 30.3657616789698 , 102.968210695378 ),
new google.maps.LatLng( 30.3651657454934 , 102.966543349972 ),
new google.maps.LatLng( 30.3642177597164 , 102.965111606033 ),
new google.maps.LatLng( 30.3629823343895 , 102.964013040184 ),
new google.maps.LatLng( 30.3615436707929 , 102.963322512225 ),
new google.maps.LatLng( 30.3599998181228 , 102.963087065074 ),
new google.maps.LatLng( 30.3584559898196 , 102.963322723007 ),
new google.maps.LatLng( 30.3570173927946 , 102.96401340527 ),
new google.maps.LatLng( 30.3557820584064 , 102.965112027598 ),
new google.maps.LatLng( 30.354834163568 , 102.966543715058 ),
new google.maps.LatLng( 30.3542382966633 , 102.968210906161 ),
new google.maps.LatLng( 30.3540350583887 , 102.97 ),
new google.maps.LatLng( 30.3542382966633 , 102.971789093839 ),
new google.maps.LatLng( 30.354834163568 , 102.973456284942 ),
new google.maps.LatLng( 30.3557820584064 , 102.974887972402 ),
new google.maps.LatLng( 30.3570173927946 , 102.97598659473 ),
new google.maps.LatLng( 30.3584559898196 , 102.976677276993 ),
new google.maps.LatLng( 30.3599998181228 , 102.976912934926 ),
new google.maps.LatLng( 30.3615436707929 , 102.976677487775 ),
new google.maps.LatLng( 30.3629823343895 , 102.975986959816 ),
new google.maps.LatLng( 30.3642177597164 , 102.974888393967 ),
new google.maps.LatLng( 30.3651657454934 , 102.973456650028 ),
new google.maps.LatLng( 30.3657616789698 , 102.971789304622 ),
 new google.maps.LatLng( 30.3659649416113 , 102.97 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3567375093501 , 102.94 ),
new google.maps.LatLng( 30.3565079187465 , 102.937979139295 ),
new google.maps.LatLng( 30.3558347962616 , 102.936096023767 ),
new google.maps.LatLng( 30.3547640225646 , 102.934479004286 ),
new google.maps.LatLng( 30.3533685807021 , 102.933238285251 ),
new google.maps.LatLng( 30.3517435793182 , 102.93245841241 ),
new google.maps.LatLng( 30.3499997680519 , 102.932192513144 ),
new google.maps.LatLng( 30.3482559878607 , 102.932458681194 ),
new google.maps.LatLng( 30.3466310713757 , 102.933238750798 ),
new google.maps.LatLng( 30.3452357454873 , 102.934479541854 ),
new google.maps.LatLng( 30.3441650877644 , 102.936096489314 ),
new google.maps.LatLng( 30.3434920501784 , 102.937979408079 ),
new google.maps.LatLng( 30.3432624906499 , 102.94 ),
new google.maps.LatLng( 30.3434920501784 , 102.942020591921 ),
new google.maps.LatLng( 30.3441650877644 , 102.943903510686 ),
new google.maps.LatLng( 30.3452357454873 , 102.945520458146 ),
new google.maps.LatLng( 30.3466310713757 , 102.946761249202 ),
new google.maps.LatLng( 30.3482559878607 , 102.947541318806 ),
new google.maps.LatLng( 30.3499997680519 , 102.947807486856 ),
new google.maps.LatLng( 30.3517435793182 , 102.94754158759 ),
new google.maps.LatLng( 30.3533685807021 , 102.946761714749 ),
new google.maps.LatLng( 30.3547640225646 , 102.945520995714 ),
new google.maps.LatLng( 30.3558347962616 , 102.943903976233 ),
new google.maps.LatLng( 30.3565079187465 , 102.942020860705 ),
 new google.maps.LatLng( 30.3567375093501 , 102.94 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1186599453513 , 102.87 ),
new google.maps.LatLng( 30.1183648394414 , 102.867408805708 ),
new google.maps.LatLng( 30.117499637774 , 102.864994240871 ),
new google.maps.LatLng( 30.1161233162967 , 102.862920886182 ),
new google.maps.LatLng( 30.114329688007 , 102.861330049076 ),
new google.maps.LatLng( 30.1122410046688 , 102.86033013071 ),
new google.maps.LatLng( 30.1099996204749 , 102.85998924177 ),
new google.maps.LatLng( 30.1077582871278 , 102.860330569435 ),
new google.maps.LatLng( 30.1056697427054 , 102.861330808969 ),
new google.maps.LatLng( 30.1038763041783 , 102.862921763632 ),
new google.maps.LatLng( 30.1025001724635 , 102.864995000765 ),
new google.maps.LatLng( 30.1016351097118 , 102.867409244433 ),
new google.maps.LatLng( 30.1013400546487 , 102.87 ),
new google.maps.LatLng( 30.1016351097118 , 102.872590755567 ),
new google.maps.LatLng( 30.1025001724635 , 102.875004999235 ),
new google.maps.LatLng( 30.1038763041783 , 102.877078236368 ),
new google.maps.LatLng( 30.1056697427054 , 102.878669191031 ),
new google.maps.LatLng( 30.1077582871278 , 102.879669430565 ),
new google.maps.LatLng( 30.1099996204749 , 102.88001075823 ),
new google.maps.LatLng( 30.1122410046688 , 102.87966986929 ),
new google.maps.LatLng( 30.114329688007 , 102.878669950924 ),
new google.maps.LatLng( 30.1161233162967 , 102.877079113818 ),
new google.maps.LatLng( 30.117499637774 , 102.875005759129 ),
new google.maps.LatLng( 30.1183648394414 , 102.872591194292 ),
 new google.maps.LatLng( 30.1186599453513 , 102.87 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1105823813525 , 102.9 ),
new google.maps.LatLng( 30.1102217574957 , 102.896833843093 ),
new google.maps.LatLng( 30.1091644694319 , 102.893883519992 ),
new google.maps.LatLng( 30.1074825903212 , 102.89135013824 ),
new google.maps.LatLng( 30.1052907657536 , 102.889406361132 ),
new google.maps.LatLng( 30.1027383932528 , 102.888184636308 ),
new google.maps.LatLng( 30.0999994334969 , 102.887768174379 ),
new google.maps.LatLng( 30.097260549638 , 102.88818529111 ),
new google.maps.LatLng( 30.0947083844917 , 102.889407495282 ),
new google.maps.LatLng( 30.0925168431757 , 102.891351447844 ),
new google.maps.LatLng( 30.0908352473166 , 102.893884654143 ),
new google.maps.LatLng( 30.0897781666073 , 102.896834497895 ),
new google.maps.LatLng( 30.0894176186475 , 102.9 ),
new google.maps.LatLng( 30.0897781666073 , 102.903165502105 ),
new google.maps.LatLng( 30.0908352473166 , 102.906115345857 ),
new google.maps.LatLng( 30.0925168431757 , 102.908648552156 ),
new google.maps.LatLng( 30.0947083844917 , 102.910592504718 ),
new google.maps.LatLng( 30.097260549638 , 102.91181470889 ),
new google.maps.LatLng( 30.0999994334969 , 102.912231825621 ),
new google.maps.LatLng( 30.1027383932528 , 102.911815363692 ),
new google.maps.LatLng( 30.1052907657536 , 102.910593638868 ),
new google.maps.LatLng( 30.1074825903212 , 102.90864986176 ),
new google.maps.LatLng( 30.1091644694319 , 102.906116480008 ),
new google.maps.LatLng( 30.1102217574957 , 102.903166156907 ),
 new google.maps.LatLng( 30.1105823813525 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#D26923",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1767375093501 , 102.86 ),
new google.maps.LatLng( 30.1765079188582 , 102.857982840821 ),
new google.maps.LatLng( 30.1758347966786 , 102.856103174325 ),
new google.maps.LatLng( 30.1747640233987 , 102.854489116158 ),
new google.maps.LatLng( 30.1733685819533 , 102.853250668845 ),
new google.maps.LatLng( 30.1717435808746 , 102.852472223386 ),
new google.maps.LatLng( 30.16999976972 , 102.852206810065 ),
new google.maps.LatLng( 30.168255989417 , 102.852472489748 ),
new google.maps.LatLng( 30.1666310726267 , 102.853251130198 ),
new google.maps.LatLng( 30.1652357463213 , 102.854489648882 ),
new google.maps.LatLng( 30.1641650881814 , 102.856103635677 ),
new google.maps.LatLng( 30.1634920502901 , 102.857983107183 ),
new google.maps.LatLng( 30.1632624906499 , 102.86 ),
new google.maps.LatLng( 30.1634920502901 , 102.862016892817 ),
new google.maps.LatLng( 30.1641650881814 , 102.863896364323 ),
new google.maps.LatLng( 30.1652357463213 , 102.865510351118 ),
new google.maps.LatLng( 30.1666310726267 , 102.866748869802 ),
new google.maps.LatLng( 30.168255989417 , 102.867527510252 ),
new google.maps.LatLng( 30.16999976972 , 102.867793189935 ),
new google.maps.LatLng( 30.1717435808746 , 102.867527776614 ),
new google.maps.LatLng( 30.1733685819533 , 102.866749331155 ),
new google.maps.LatLng( 30.1747640233987 , 102.865510883842 ),
new google.maps.LatLng( 30.1758347966786 , 102.863896825675 ),
new google.maps.LatLng( 30.1765079188582 , 102.862017159179 ),
 new google.maps.LatLng( 30.1767375093501 , 102.86 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2386599453513 , 102.85 ),
new google.maps.LatLng( 30.2383648393186 , 102.847405647947 ),
new google.maps.LatLng( 30.2374996373155 , 102.844988140809 ),
new google.maps.LatLng( 30.2361233153796 , 102.84291225999 ),
new google.maps.LatLng( 30.2343296866315 , 102.841319485144 ),
new google.maps.LatLng( 30.2322410029577 , 102.840318349414 ),
new google.maps.LatLng( 30.2299996186411 , 102.839977046249 ),
new google.maps.LatLng( 30.2277582854169 , 102.840318790796 ),
new google.maps.LatLng( 30.2256697413301 , 102.84132024964 ),
new google.maps.LatLng( 30.2238763032615 , 102.842913142753 ),
new google.maps.LatLng( 30.2225001720051 , 102.844988905305 ),
new google.maps.LatLng( 30.221635109589 , 102.847406089329 ),
new google.maps.LatLng( 30.2213400546487 , 102.85 ),
new google.maps.LatLng( 30.221635109589 , 102.852593910671 ),
new google.maps.LatLng( 30.2225001720051 , 102.855011094695 ),
new google.maps.LatLng( 30.2238763032615 , 102.857086857247 ),
new google.maps.LatLng( 30.2256697413301 , 102.85867975036 ),
new google.maps.LatLng( 30.2277582854169 , 102.859681209204 ),
new google.maps.LatLng( 30.2299996186411 , 102.860022953751 ),
new google.maps.LatLng( 30.2322410029577 , 102.859681650586 ),
new google.maps.LatLng( 30.2343296866315 , 102.858680514856 ),
new google.maps.LatLng( 30.2361233153796 , 102.85708774001 ),
new google.maps.LatLng( 30.2374996373155 , 102.855011859191 ),
new google.maps.LatLng( 30.2383648393186 , 102.852594352053 ),
 new google.maps.LatLng( 30.2386599453513 , 102.85 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3367375093501 , 102.93 ),
new google.maps.LatLng( 30.3365079187589 , 102.927979552232 ),
new google.maps.LatLng( 30.335834796308 , 102.926096821472 ),
new google.maps.LatLng( 30.3347640226574 , 102.924480132351 ),
new google.maps.LatLng( 30.3333685808414 , 102.923239666746 ),
new google.maps.LatLng( 30.3317435794914 , 102.922459953142 ),
new google.maps.LatLng( 30.3299997682375 , 102.922194108087 ),
new google.maps.LatLng( 30.3282559880339 , 102.922460221656 ),
new google.maps.LatLng( 30.3266310715149 , 102.923240131825 ),
new google.maps.LatLng( 30.3252357455801 , 102.924480669379 ),
new google.maps.LatLng( 30.3241650878108 , 102.926097286551 ),
new google.maps.LatLng( 30.3234920501908 , 102.927979820745 ),
new google.maps.LatLng( 30.3232624906499 , 102.93 ),
new google.maps.LatLng( 30.3234920501908 , 102.932020179255 ),
new google.maps.LatLng( 30.3241650878108 , 102.933902713449 ),
new google.maps.LatLng( 30.3252357455801 , 102.935519330621 ),
new google.maps.LatLng( 30.3266310715149 , 102.936759868175 ),
new google.maps.LatLng( 30.3282559880339 , 102.937539778345 ),
new google.maps.LatLng( 30.3299997682375 , 102.937805891913 ),
new google.maps.LatLng( 30.3317435794914 , 102.937540046858 ),
new google.maps.LatLng( 30.3333685808414 , 102.936760333254 ),
new google.maps.LatLng( 30.3347640226574 , 102.935519867649 ),
new google.maps.LatLng( 30.335834796308 , 102.933903178528 ),
new google.maps.LatLng( 30.3365079187589 , 102.932020447768 ),
 new google.maps.LatLng( 30.3367375093501 , 102.93 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2567375093501 , 102.94 ),
new google.maps.LatLng( 30.2565079188086 , 102.937981199834 ),
new google.maps.LatLng( 30.2558347964934 , 102.936100004287 ),
new google.maps.LatLng( 30.2547640230283 , 102.934484633289 ),
new google.maps.LatLng( 30.2533685813978 , 102.93324517886 ),
new google.maps.LatLng( 30.2517435801836 , 102.932466100604 ),
new google.maps.LatLng( 30.2499997689793 , 102.93220047185 ),
new google.maps.LatLng( 30.248255988726 , 102.93246636804 ),
new google.maps.LatLng( 30.2466310720712 , 102.933245642073 ),
new google.maps.LatLng( 30.245235745951 , 102.934485168161 ),
new google.maps.LatLng( 30.2441650879962 , 102.9361004675 ),
new google.maps.LatLng( 30.2434920502405 , 102.93798146727 ),
new google.maps.LatLng( 30.2432624906499 , 102.94 ),
new google.maps.LatLng( 30.2434920502405 , 102.94201853273 ),
new google.maps.LatLng( 30.2441650879962 , 102.9438995325 ),
new google.maps.LatLng( 30.245235745951 , 102.945514831839 ),
new google.maps.LatLng( 30.2466310720712 , 102.946754357927 ),
new google.maps.LatLng( 30.248255988726 , 102.94753363196 ),
new google.maps.LatLng( 30.2499997689793 , 102.94779952815 ),
new google.maps.LatLng( 30.2517435801836 , 102.947533899396 ),
new google.maps.LatLng( 30.2533685813978 , 102.94675482114 ),
new google.maps.LatLng( 30.2547640230283 , 102.945515366711 ),
new google.maps.LatLng( 30.2558347964934 , 102.943899995713 ),
new google.maps.LatLng( 30.2565079188086 , 102.942018800166 ),
 new google.maps.LatLng( 30.2567375093501 , 102.94 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2067375093501 , 102.9 ),
new google.maps.LatLng( 30.2065079188396 , 102.897982226225 ),
new google.maps.LatLng( 30.2058347966092 , 102.896101987055 ),
new google.maps.LatLng( 30.2047640232599 , 102.894487437196 ),
new google.maps.LatLng( 30.2033685817451 , 102.893248612689 ),
new google.maps.LatLng( 30.2017435806156 , 102.89246993023 ),
new google.maps.LatLng( 30.1999997694424 , 102.892204436223 ),
new google.maps.LatLng( 30.198255989158 , 102.892470196994 ),
new google.maps.LatLng( 30.1966310724185 , 102.893249074739 ),
new google.maps.LatLng( 30.1952357461825 , 102.894487970724 ),
new google.maps.LatLng( 30.194165088112 , 102.896102449104 ),
new google.maps.LatLng( 30.1934920502715 , 102.897982492989 ),
new google.maps.LatLng( 30.1932624906499 , 102.9 ),
new google.maps.LatLng( 30.1934920502715 , 102.902017507011 ),
new google.maps.LatLng( 30.194165088112 , 102.903897550896 ),
new google.maps.LatLng( 30.1952357461825 , 102.905512029276 ),
new google.maps.LatLng( 30.1966310724185 , 102.906750925262 ),
new google.maps.LatLng( 30.198255989158 , 102.907529803006 ),
new google.maps.LatLng( 30.1999997694424 , 102.907795563777 ),
new google.maps.LatLng( 30.2017435806156 , 102.90753006977 ),
new google.maps.LatLng( 30.2033685817451 , 102.906751387311 ),
new google.maps.LatLng( 30.2047640232599 , 102.905512562804 ),
new google.maps.LatLng( 30.2058347966092 , 102.903898012945 ),
new google.maps.LatLng( 30.2065079188396 , 102.902017773775 ),
 new google.maps.LatLng( 30.2067375093501 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2105823813525 , 102.9 ),
new google.maps.LatLng( 30.2102217573429 , 102.896830630396 ),
new google.maps.LatLng( 30.2091644688615 , 102.893877313868 ),
new google.maps.LatLng( 30.2074825891805 , 102.891341362199 ),
new google.maps.LatLng( 30.2052907640426 , 102.889395613906 ),
new google.maps.LatLng( 30.2027383911244 , 102.888172650874 ),
new google.maps.LatLng( 30.1999994312158 , 102.887755767855 ),
new google.maps.LatLng( 30.1972605475098 , 102.88817330898 ),
new google.maps.LatLng( 30.194708382781 , 102.889396753778 ),
new google.maps.LatLng( 30.1925168420353 , 102.89134267841 ),
new google.maps.LatLng( 30.1908352467464 , 102.893878453741 ),
new google.maps.LatLng( 30.1897781664545 , 102.896831288502 ),
new google.maps.LatLng( 30.1894176186475 , 102.9 ),
new google.maps.LatLng( 30.1897781664545 , 102.903168711498 ),
new google.maps.LatLng( 30.1908352467464 , 102.906121546259 ),
new google.maps.LatLng( 30.1925168420353 , 102.90865732159 ),
new google.maps.LatLng( 30.194708382781 , 102.910603246222 ),
new google.maps.LatLng( 30.1972605475098 , 102.91182669102 ),
new google.maps.LatLng( 30.1999994312158 , 102.912244232145 ),
new google.maps.LatLng( 30.2027383911244 , 102.911827349126 ),
new google.maps.LatLng( 30.2052907640426 , 102.910604386094 ),
new google.maps.LatLng( 30.2074825891805 , 102.908658637802 ),
new google.maps.LatLng( 30.2091644688615 , 102.906122686132 ),
new google.maps.LatLng( 30.2102217573429 , 102.903169369604 ),
 new google.maps.LatLng( 30.2105823813525 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#D26923",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1886599453513 , 102.84 ),
new google.maps.LatLng( 30.1883648393698 , 102.837406965998 ),
new google.maps.LatLng( 30.1874996375067 , 102.834990686978 ),
new google.maps.LatLng( 30.186123315762 , 102.832915860567 ),
new google.maps.LatLng( 30.184329687205 , 102.831323894534 ),
new google.maps.LatLng( 30.1822410036711 , 102.830323266933 ),
new google.maps.LatLng( 30.1799996194057 , 102.829982136666 ),
new google.maps.LatLng( 30.1777582861303 , 102.830323707206 ),
new google.maps.LatLng( 30.1756697419036 , 102.83132465711 ),
new google.maps.LatLng( 30.1738763036437 , 102.832916741113 ),
new google.maps.LatLng( 30.1725001721962 , 102.834991449553 ),
new google.maps.LatLng( 30.1716351096402 , 102.837407406271 ),
new google.maps.LatLng( 30.1713400546487 , 102.84 ),
new google.maps.LatLng( 30.1716351096402 , 102.842592593729 ),
new google.maps.LatLng( 30.1725001721962 , 102.845008550447 ),
new google.maps.LatLng( 30.1738763036437 , 102.847083258887 ),
new google.maps.LatLng( 30.1756697419036 , 102.84867534289 ),
new google.maps.LatLng( 30.1777582861303 , 102.849676292794 ),
new google.maps.LatLng( 30.1799996194057 , 102.850017863334 ),
new google.maps.LatLng( 30.1822410036711 , 102.849676733067 ),
new google.maps.LatLng( 30.184329687205 , 102.848676105466 ),
new google.maps.LatLng( 30.186123315762 , 102.847084139433 ),
new google.maps.LatLng( 30.1874996375067 , 102.845009313022 ),
new google.maps.LatLng( 30.1883648393698 , 102.842593034002 ),
 new google.maps.LatLng( 30.1886599453513 , 102.84 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3086599453513 , 102.9 ),
new google.maps.LatLng( 30.3083648392468 , 102.897403797098 ),
new google.maps.LatLng( 30.3074996370475 , 102.8949845654 ),
new google.maps.LatLng( 30.3061233148436 , 102.892907203948 ),
new google.maps.LatLng( 30.3043296858276 , 102.891313293341 ),
new google.maps.LatLng( 30.3022410019576 , 102.89031144408 ),
new google.maps.LatLng( 30.2999996175692 , 102.889969898128 ),
new google.maps.LatLng( 30.2977582844169 , 102.890311887018 ),
new google.maps.LatLng( 30.2956697405263 , 102.891314060532 ),
new google.maps.LatLng( 30.2938763027256 , 102.892908089824 ),
new google.maps.LatLng( 30.2925001717372 , 102.894985332592 ),
new google.maps.LatLng( 30.2916351095172 , 102.897404240037 ),
new google.maps.LatLng( 30.2913400546487 , 102.9 ),
new google.maps.LatLng( 30.2916351095172 , 102.902595759963 ),
new google.maps.LatLng( 30.2925001717372 , 102.905014667408 ),
new google.maps.LatLng( 30.2938763027256 , 102.907091910176 ),
new google.maps.LatLng( 30.2956697405263 , 102.908685939468 ),
new google.maps.LatLng( 30.2977582844169 , 102.909688112982 ),
new google.maps.LatLng( 30.2999996175692 , 102.910030101872 ),
new google.maps.LatLng( 30.3022410019576 , 102.90968855592 ),
new google.maps.LatLng( 30.3043296858276 , 102.908686706659 ),
new google.maps.LatLng( 30.3061233148436 , 102.907092796052 ),
new google.maps.LatLng( 30.3074996370475 , 102.9050154346 ),
new google.maps.LatLng( 30.3083648392468 , 102.902596202902 ),
 new google.maps.LatLng( 30.3086599453513 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3167375093501 , 102.96 ),
new google.maps.LatLng( 30.3165079187714 , 102.957979964753 ),
new google.maps.LatLng( 30.3158347963544 , 102.956097618376 ),
new google.maps.LatLng( 30.3147640227502 , 102.954481259283 ),
new google.maps.LatLng( 30.3133685809806 , 102.953241046853 ),
new google.maps.LatLng( 30.3117435796646 , 102.952461492326 ),
new google.maps.LatLng( 30.3099997684231 , 102.952195701428 ),
new google.maps.LatLng( 30.308255988207 , 102.95246176057 ),
new google.maps.LatLng( 30.3066310716541 , 102.953241511465 ),
new google.maps.LatLng( 30.3052357456729 , 102.954481795771 ),
new google.maps.LatLng( 30.3041650878572 , 102.956098082988 ),
new google.maps.LatLng( 30.3034920502032 , 102.957980232997 ),
new google.maps.LatLng( 30.3032624906499 , 102.96 ),
new google.maps.LatLng( 30.3034920502032 , 102.962019767003 ),
new google.maps.LatLng( 30.3041650878572 , 102.963901917012 ),
new google.maps.LatLng( 30.3052357456729 , 102.965518204229 ),
new google.maps.LatLng( 30.3066310716541 , 102.966758488535 ),
new google.maps.LatLng( 30.308255988207 , 102.96753823943 ),
new google.maps.LatLng( 30.3099997684231 , 102.967804298572 ),
new google.maps.LatLng( 30.3117435796646 , 102.967538507674 ),
new google.maps.LatLng( 30.3133685809806 , 102.966758953147 ),
new google.maps.LatLng( 30.3147640227502 , 102.965518740717 ),
new google.maps.LatLng( 30.3158347963544 , 102.963902381624 ),
new google.maps.LatLng( 30.3165079187714 , 102.962020035247 ),
 new google.maps.LatLng( 30.3167375093501 , 102.96 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2067375093501 , 103.1 ),
new google.maps.LatLng( 30.2065079188396 , 103.097982226225 ),
new google.maps.LatLng( 30.2058347966092 , 103.096101987055 ),
new google.maps.LatLng( 30.2047640232599 , 103.094487437196 ),
new google.maps.LatLng( 30.2033685817451 , 103.093248612689 ),
new google.maps.LatLng( 30.2017435806156 , 103.09246993023 ),
new google.maps.LatLng( 30.1999997694424 , 103.092204436223 ),
new google.maps.LatLng( 30.198255989158 , 103.092470196994 ),
new google.maps.LatLng( 30.1966310724185 , 103.093249074739 ),
new google.maps.LatLng( 30.1952357461825 , 103.094487970724 ),
new google.maps.LatLng( 30.194165088112 , 103.096102449104 ),
new google.maps.LatLng( 30.1934920502715 , 103.097982492989 ),
new google.maps.LatLng( 30.1932624906499 , 103.1 ),
new google.maps.LatLng( 30.1934920502715 , 103.102017507011 ),
new google.maps.LatLng( 30.194165088112 , 103.103897550896 ),
new google.maps.LatLng( 30.1952357461825 , 103.105512029276 ),
new google.maps.LatLng( 30.1966310724185 , 103.106750925261 ),
new google.maps.LatLng( 30.198255989158 , 103.107529803006 ),
new google.maps.LatLng( 30.1999997694424 , 103.107795563777 ),
new google.maps.LatLng( 30.2017435806156 , 103.10753006977 ),
new google.maps.LatLng( 30.2033685817451 , 103.106751387311 ),
new google.maps.LatLng( 30.2047640232599 , 103.105512562804 ),
new google.maps.LatLng( 30.2058347966092 , 103.103898012945 ),
new google.maps.LatLng( 30.2065079188396 , 103.102017773775 ),
 new google.maps.LatLng( 30.2067375093501 , 103.1 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1886599453513 , 102.89 ),
new google.maps.LatLng( 30.1883648393698 , 102.887406965998 ),
new google.maps.LatLng( 30.1874996375067 , 102.884990686978 ),
new google.maps.LatLng( 30.186123315762 , 102.882915860567 ),
new google.maps.LatLng( 30.184329687205 , 102.881323894534 ),
new google.maps.LatLng( 30.1822410036711 , 102.880323266933 ),
new google.maps.LatLng( 30.1799996194057 , 102.879982136666 ),
new google.maps.LatLng( 30.1777582861303 , 102.880323707206 ),
new google.maps.LatLng( 30.1756697419036 , 102.88132465711 ),
new google.maps.LatLng( 30.1738763036437 , 102.882916741113 ),
new google.maps.LatLng( 30.1725001721962 , 102.884991449553 ),
new google.maps.LatLng( 30.1716351096402 , 102.887407406271 ),
new google.maps.LatLng( 30.1713400546487 , 102.89 ),
new google.maps.LatLng( 30.1716351096402 , 102.892592593729 ),
new google.maps.LatLng( 30.1725001721962 , 102.895008550447 ),
new google.maps.LatLng( 30.1738763036437 , 102.897083258887 ),
new google.maps.LatLng( 30.1756697419036 , 102.89867534289 ),
new google.maps.LatLng( 30.1777582861303 , 102.899676292794 ),
new google.maps.LatLng( 30.1799996194057 , 102.900017863334 ),
new google.maps.LatLng( 30.1822410036711 , 102.899676733067 ),
new google.maps.LatLng( 30.184329687205 , 102.898676105466 ),
new google.maps.LatLng( 30.186123315762 , 102.897084139433 ),
new google.maps.LatLng( 30.1874996375067 , 102.895009313022 ),
new google.maps.LatLng( 30.1883648393698 , 102.892593034002 ),
 new google.maps.LatLng( 30.1886599453513 , 102.89 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2667375093501 , 102.93 ),
new google.maps.LatLng( 30.2665079188024 , 102.927980994246 ),
new google.maps.LatLng( 30.2658347964703 , 102.926099607135 ),
new google.maps.LatLng( 30.264764022982 , 102.924484071662 ),
new google.maps.LatLng( 30.2633685813283 , 102.923244491058 ),
new google.maps.LatLng( 30.2617435800971 , 102.922465333523 ),
new google.maps.LatLng( 30.2599997688867 , 102.922199677779 ),
new google.maps.LatLng( 30.2582559886396 , 102.922465601093 ),
new google.maps.LatLng( 30.2566310720017 , 102.923244954503 ),
new google.maps.LatLng( 30.2552357459047 , 102.924484606802 ),
new google.maps.LatLng( 30.2541650879731 , 102.92610007058 ),
new google.maps.LatLng( 30.2534920502343 , 102.927981261816 ),
new google.maps.LatLng( 30.2532624906499 , 102.93 ),
new google.maps.LatLng( 30.2534920502343 , 102.932018738184 ),
new google.maps.LatLng( 30.2541650879731 , 102.93389992942 ),
new google.maps.LatLng( 30.2552357459047 , 102.935515393198 ),
new google.maps.LatLng( 30.2566310720017 , 102.936755045497 ),
new google.maps.LatLng( 30.2582559886396 , 102.937534398907 ),
new google.maps.LatLng( 30.2599997688867 , 102.937800322221 ),
new google.maps.LatLng( 30.2617435800971 , 102.937534666477 ),
new google.maps.LatLng( 30.2633685813283 , 102.936755508942 ),
new google.maps.LatLng( 30.264764022982 , 102.935515928338 ),
new google.maps.LatLng( 30.2658347964703 , 102.933900392865 ),
new google.maps.LatLng( 30.2665079188024 , 102.932019005754 ),
 new google.maps.LatLng( 30.2667375093501 , 102.93 )], 
map:map, 
 clickable:true,
 fillColor: "#B9D700",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1086599453513 , 102.9 ),
new google.maps.LatLng( 30.1083648394517 , 102.897409067995 ),
new google.maps.LatLng( 30.1074996378122 , 102.894994747549 ),
new google.maps.LatLng( 30.106123316373 , 102.892921602683 ),
new google.maps.LatLng( 30.1043296881215 , 102.891330926527 ),
new google.maps.LatLng( 30.1022410048112 , 102.890331109278 ),
new google.maps.LatLng( 30.0999996206276 , 102.889990254742 ),
new google.maps.LatLng( 30.0977582872702 , 102.890331547782 ),
new google.maps.LatLng( 30.0956697428198 , 102.891331686039 ),
new google.maps.LatLng( 30.0938763042546 , 102.892922479691 ),
new google.maps.LatLng( 30.0925001725016 , 102.89499550706 ),
new google.maps.LatLng( 30.0916351097221 , 102.8974095065 ),
new google.maps.LatLng( 30.0913400546487 , 102.9 ),
new google.maps.LatLng( 30.0916351097221 , 102.9025904935 ),
new google.maps.LatLng( 30.0925001725016 , 102.90500449294 ),
new google.maps.LatLng( 30.0938763042546 , 102.907077520309 ),
new google.maps.LatLng( 30.0956697428198 , 102.908668313961 ),
new google.maps.LatLng( 30.0977582872702 , 102.909668452218 ),
new google.maps.LatLng( 30.0999996206276 , 102.910009745258 ),
new google.maps.LatLng( 30.1022410048112 , 102.909668890723 ),
new google.maps.LatLng( 30.1043296881215 , 102.908669073473 ),
new google.maps.LatLng( 30.106123316373 , 102.907078397317 ),
new google.maps.LatLng( 30.1074996378122 , 102.905005252451 ),
new google.maps.LatLng( 30.1083648394517 , 102.902590932005 ),
 new google.maps.LatLng( 30.1086599453513 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3105823813525 , 102.9 ),
new google.maps.LatLng( 30.3102217571897 , 102.896827401499 ),
new google.maps.LatLng( 30.3091644682899 , 102.893871076449 ),
new google.maps.LatLng( 30.3074825880374 , 102.891332541902 ),
new google.maps.LatLng( 30.3052907623281 , 102.889384812483 ),
new google.maps.LatLng( 30.3027383889916 , 102.888160604999 ),
new google.maps.LatLng( 30.29999942893 , 102.887743298765 ),
new google.maps.LatLng( 30.2972605453773 , 102.888161266422 ),
new google.maps.LatLng( 30.2947083810669 , 102.889385958102 ),
new google.maps.LatLng( 30.2925168408926 , 102.891333864749 ),
new google.maps.LatLng( 30.2908352461751 , 102.893872222068 ),
new google.maps.LatLng( 30.2897781663014 , 102.896828062922 ),
new google.maps.LatLng( 30.2894176186475 , 102.9 ),
new google.maps.LatLng( 30.2897781663014 , 102.903171937078 ),
new google.maps.LatLng( 30.2908352461751 , 102.906127777932 ),
new google.maps.LatLng( 30.2925168408926 , 102.908666135252 ),
new google.maps.LatLng( 30.2947083810669 , 102.910614041898 ),
new google.maps.LatLng( 30.2972605453773 , 102.911838733578 ),
new google.maps.LatLng( 30.29999942893 , 102.912256701235 ),
new google.maps.LatLng( 30.3027383889916 , 102.911839395001 ),
new google.maps.LatLng( 30.3052907623281 , 102.910615187517 ),
new google.maps.LatLng( 30.3074825880374 , 102.908667458098 ),
new google.maps.LatLng( 30.3091644682899 , 102.906128923551 ),
new google.maps.LatLng( 30.3102217571897 , 102.903172598501 ),
 new google.maps.LatLng( 30.3105823813525 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#D26923",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2086599453513 , 102.9 ),
new google.maps.LatLng( 30.2083648393493 , 102.897406439175 ),
new google.maps.LatLng( 30.2074996374302 , 102.894989669279 ),
new google.maps.LatLng( 30.2061233156091 , 102.892914421423 ),
new google.maps.LatLng( 30.2043296869757 , 102.891322132109 ),
new google.maps.LatLng( 30.2022410033858 , 102.890321301409 ),
new google.maps.LatLng( 30.1999996190999 , 102.889980102035 ),
new google.maps.LatLng( 30.197758285845 , 102.890321742126 ),
new google.maps.LatLng( 30.1956697416742 , 102.891322895452 ),
new google.maps.LatLng( 30.1938763034909 , 102.892915302855 ),
new google.maps.LatLng( 30.1925001721198 , 102.894990432622 ),
new google.maps.LatLng( 30.1916351096198 , 102.897406879892 ),
new google.maps.LatLng( 30.1913400546487 , 102.9 ),
new google.maps.LatLng( 30.1916351096198 , 102.902593120108 ),
new google.maps.LatLng( 30.1925001721198 , 102.905009567378 ),
new google.maps.LatLng( 30.1938763034909 , 102.907084697145 ),
new google.maps.LatLng( 30.1956697416742 , 102.908677104548 ),
new google.maps.LatLng( 30.197758285845 , 102.909678257874 ),
new google.maps.LatLng( 30.1999996190999 , 102.910019897965 ),
new google.maps.LatLng( 30.2022410033858 , 102.909678698591 ),
new google.maps.LatLng( 30.2043296869757 , 102.908677867891 ),
new google.maps.LatLng( 30.2061233156091 , 102.907085578578 ),
new google.maps.LatLng( 30.2074996374302 , 102.905010330721 ),
new google.maps.LatLng( 30.2083648393493 , 102.902593560825 ),
 new google.maps.LatLng( 30.2086599453513 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2105823813525 , 102.9 ),
new google.maps.LatLng( 30.2102217573429 , 102.896830630396 ),
new google.maps.LatLng( 30.2091644688615 , 102.893877313868 ),
new google.maps.LatLng( 30.2074825891805 , 102.891341362199 ),
new google.maps.LatLng( 30.2052907640426 , 102.889395613906 ),
new google.maps.LatLng( 30.2027383911244 , 102.888172650874 ),
new google.maps.LatLng( 30.1999994312158 , 102.887755767855 ),
new google.maps.LatLng( 30.1972605475098 , 102.88817330898 ),
new google.maps.LatLng( 30.194708382781 , 102.889396753778 ),
new google.maps.LatLng( 30.1925168420353 , 102.89134267841 ),
new google.maps.LatLng( 30.1908352467464 , 102.893878453741 ),
new google.maps.LatLng( 30.1897781664545 , 102.896831288502 ),
new google.maps.LatLng( 30.1894176186475 , 102.9 ),
new google.maps.LatLng( 30.1897781664545 , 102.903168711498 ),
new google.maps.LatLng( 30.1908352467464 , 102.906121546259 ),
new google.maps.LatLng( 30.1925168420353 , 102.90865732159 ),
new google.maps.LatLng( 30.194708382781 , 102.910603246222 ),
new google.maps.LatLng( 30.1972605475098 , 102.91182669102 ),
new google.maps.LatLng( 30.1999994312158 , 102.912244232145 ),
new google.maps.LatLng( 30.2027383911244 , 102.911827349126 ),
new google.maps.LatLng( 30.2052907640426 , 102.910604386094 ),
new google.maps.LatLng( 30.2074825891805 , 102.908658637802 ),
new google.maps.LatLng( 30.2091644688615 , 102.906122686132 ),
new google.maps.LatLng( 30.2102217573429 , 102.903169369604 ),
 new google.maps.LatLng( 30.2105823813525 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#D26923",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2086599453513 , 102.8 ),
new google.maps.LatLng( 30.2083648393493 , 102.797406439175 ),
new google.maps.LatLng( 30.2074996374302 , 102.794989669279 ),
new google.maps.LatLng( 30.2061233156091 , 102.792914421423 ),
new google.maps.LatLng( 30.2043296869757 , 102.791322132109 ),
new google.maps.LatLng( 30.2022410033858 , 102.790321301409 ),
new google.maps.LatLng( 30.1999996190999 , 102.789980102035 ),
new google.maps.LatLng( 30.197758285845 , 102.790321742126 ),
new google.maps.LatLng( 30.1956697416742 , 102.791322895452 ),
new google.maps.LatLng( 30.1938763034909 , 102.792915302855 ),
new google.maps.LatLng( 30.1925001721198 , 102.794990432622 ),
new google.maps.LatLng( 30.1916351096198 , 102.797406879892 ),
new google.maps.LatLng( 30.1913400546487 , 102.8 ),
new google.maps.LatLng( 30.1916351096198 , 102.802593120108 ),
new google.maps.LatLng( 30.1925001721198 , 102.805009567378 ),
new google.maps.LatLng( 30.1938763034909 , 102.807084697145 ),
new google.maps.LatLng( 30.1956697416742 , 102.808677104548 ),
new google.maps.LatLng( 30.197758285845 , 102.809678257874 ),
new google.maps.LatLng( 30.1999996190999 , 102.810019897965 ),
new google.maps.LatLng( 30.2022410033858 , 102.809678698591 ),
new google.maps.LatLng( 30.2043296869757 , 102.808677867891 ),
new google.maps.LatLng( 30.2061233156091 , 102.807085578578 ),
new google.maps.LatLng( 30.2074996374302 , 102.805010330721 ),
new google.maps.LatLng( 30.2083648393493 , 102.802593560825 ),
 new google.maps.LatLng( 30.2086599453513 , 102.8 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3105823813525 , 102.9 ),
new google.maps.LatLng( 30.3102217571897 , 102.896827401499 ),
new google.maps.LatLng( 30.3091644682899 , 102.893871076449 ),
new google.maps.LatLng( 30.3074825880374 , 102.891332541902 ),
new google.maps.LatLng( 30.3052907623281 , 102.889384812483 ),
new google.maps.LatLng( 30.3027383889916 , 102.888160604999 ),
new google.maps.LatLng( 30.29999942893 , 102.887743298765 ),
new google.maps.LatLng( 30.2972605453773 , 102.888161266422 ),
new google.maps.LatLng( 30.2947083810669 , 102.889385958102 ),
new google.maps.LatLng( 30.2925168408926 , 102.891333864749 ),
new google.maps.LatLng( 30.2908352461751 , 102.893872222068 ),
new google.maps.LatLng( 30.2897781663014 , 102.896828062922 ),
new google.maps.LatLng( 30.2894176186475 , 102.9 ),
new google.maps.LatLng( 30.2897781663014 , 102.903171937078 ),
new google.maps.LatLng( 30.2908352461751 , 102.906127777932 ),
new google.maps.LatLng( 30.2925168408926 , 102.908666135252 ),
new google.maps.LatLng( 30.2947083810669 , 102.910614041898 ),
new google.maps.LatLng( 30.2972605453773 , 102.911838733578 ),
new google.maps.LatLng( 30.29999942893 , 102.912256701235 ),
new google.maps.LatLng( 30.3027383889916 , 102.911839395001 ),
new google.maps.LatLng( 30.3052907623281 , 102.910615187517 ),
new google.maps.LatLng( 30.3074825880374 , 102.908667458098 ),
new google.maps.LatLng( 30.3091644682899 , 102.906128923551 ),
new google.maps.LatLng( 30.3102217571897 , 102.903172598501 ),
 new google.maps.LatLng( 30.3105823813525 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#D26923",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1586599453513 , 102.85 ),
new google.maps.LatLng( 30.1583648394005 , 102.847407755239 ),
new google.maps.LatLng( 30.1574996376213 , 102.844992211608 ),
new google.maps.LatLng( 30.1561233159912 , 102.84291801657 ),
new google.maps.LatLng( 30.1543296875489 , 102.84132653485 ),
new google.maps.LatLng( 30.1522410040989 , 102.840326211513 ),
new google.maps.LatLng( 30.1499996198641 , 102.839985184775 ),
new google.maps.LatLng( 30.147758286558 , 102.840326651122 ),
new google.maps.LatLng( 30.1456697422473 , 102.841327296275 ),
new google.maps.LatLng( 30.1438763038729 , 102.842918895788 ),
new google.maps.LatLng( 30.1425001723108 , 102.844992973033 ),
new google.maps.LatLng( 30.141635109671 , 102.847408194848 ),
new google.maps.LatLng( 30.1413400546487 , 102.85 ),
new google.maps.LatLng( 30.141635109671 , 102.852591805152 ),
new google.maps.LatLng( 30.1425001723108 , 102.855007026967 ),
new google.maps.LatLng( 30.1438763038729 , 102.857081104212 ),
new google.maps.LatLng( 30.1456697422473 , 102.858672703725 ),
new google.maps.LatLng( 30.147758286558 , 102.859673348878 ),
new google.maps.LatLng( 30.1499996198641 , 102.860014815225 ),
new google.maps.LatLng( 30.1522410040989 , 102.859673788487 ),
new google.maps.LatLng( 30.1543296875489 , 102.85867346515 ),
new google.maps.LatLng( 30.1561233159912 , 102.85708198343 ),
new google.maps.LatLng( 30.1574996376213 , 102.855007788392 ),
new google.maps.LatLng( 30.1583648394005 , 102.852592244761 ),
 new google.maps.LatLng( 30.1586599453513 , 102.85 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.1459649416113 , 102.83 ),
new google.maps.LatLng( 30.1457616790768 , 102.828214698546 ),
new google.maps.LatLng( 30.1451657458929 , 102.826551083267 ),
new google.maps.LatLng( 30.1442177605153 , 102.825122542042 ),
new google.maps.LatLng( 30.1429823355879 , 102.824026433173 ),
new google.maps.LatLng( 30.1415436722836 , 102.823337449082 ),
new google.maps.LatLng( 30.1399998197205 , 102.823102527647 ),
new google.maps.LatLng( 30.1384559913102 , 102.823337657546 ),
new google.maps.LatLng( 30.1370173939929 , 102.824026794242 ),
new google.maps.LatLng( 30.1357820592052 , 102.825122958969 ),
new google.maps.LatLng( 30.1348341639674 , 102.826551444336 ),
new google.maps.LatLng( 30.1342382967703 , 102.82821490701 ),
new google.maps.LatLng( 30.1340350583887 , 102.83 ),
new google.maps.LatLng( 30.1342382967703 , 102.83178509299 ),
new google.maps.LatLng( 30.1348341639674 , 102.833448555664 ),
new google.maps.LatLng( 30.1357820592052 , 102.834877041031 ),
new google.maps.LatLng( 30.1370173939929 , 102.835973205758 ),
new google.maps.LatLng( 30.1384559913102 , 102.836662342454 ),
new google.maps.LatLng( 30.1399998197205 , 102.836897472353 ),
new google.maps.LatLng( 30.1415436722836 , 102.836662550918 ),
new google.maps.LatLng( 30.1429823355879 , 102.835973566827 ),
new google.maps.LatLng( 30.1442177605153 , 102.834877457958 ),
new google.maps.LatLng( 30.1451657458929 , 102.833448916733 ),
new google.maps.LatLng( 30.1457616790768 , 102.831785301454 ),
 new google.maps.LatLng( 30.1459649416113 , 102.83 )], 
map:map, 
 clickable:true,
 fillColor: "#00FF00",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2886599453513 , 102.89 ),
new google.maps.LatLng( 30.2883648392673 , 102.887404326577 ),
new google.maps.LatLng( 30.2874996371241 , 102.88498558823 ),
new google.maps.LatLng( 30.2861233149968 , 102.882908650347 ),
new google.maps.LatLng( 30.2843296860574 , 102.881315064652 ),
new google.maps.LatLng( 30.2822410022435 , 102.880313419513 ),
new google.maps.LatLng( 30.2799996178756 , 102.879971943016 ),
new google.maps.LatLng( 30.2777582847027 , 102.880313862006 ),
new google.maps.LatLng( 30.2756697407561 , 102.881315831072 ),
new google.maps.LatLng( 30.2738763028788 , 102.882909535333 ),
new google.maps.LatLng( 30.2725001718137 , 102.88498635465 ),
new google.maps.LatLng( 30.2716351095378 , 102.88740476907 ),
new google.maps.LatLng( 30.2713400546487 , 102.89 ),
new google.maps.LatLng( 30.2716351095378 , 102.89259523093 ),
new google.maps.LatLng( 30.2725001718137 , 102.89501364535 ),
new google.maps.LatLng( 30.2738763028788 , 102.897090464667 ),
new google.maps.LatLng( 30.2756697407561 , 102.898684168928 ),
new google.maps.LatLng( 30.2777582847027 , 102.899686137994 ),
new google.maps.LatLng( 30.2799996178756 , 102.900028056984 ),
new google.maps.LatLng( 30.2822410022435 , 102.899686580487 ),
new google.maps.LatLng( 30.2843296860574 , 102.898684935348 ),
new google.maps.LatLng( 30.2861233149968 , 102.897091349653 ),
new google.maps.LatLng( 30.2874996371241 , 102.89501441177 ),
new google.maps.LatLng( 30.2883648392673 , 102.892595673423 ),
 new google.maps.LatLng( 30.2886599453513 , 102.89 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2086599453513 , 102.9 ),
new google.maps.LatLng( 30.2083648393493 , 102.897406439175 ),
new google.maps.LatLng( 30.2074996374302 , 102.894989669279 ),
new google.maps.LatLng( 30.2061233156091 , 102.892914421423 ),
new google.maps.LatLng( 30.2043296869757 , 102.891322132109 ),
new google.maps.LatLng( 30.2022410033858 , 102.890321301409 ),
new google.maps.LatLng( 30.1999996190999 , 102.889980102035 ),
new google.maps.LatLng( 30.197758285845 , 102.890321742126 ),
new google.maps.LatLng( 30.1956697416742 , 102.891322895452 ),
new google.maps.LatLng( 30.1938763034909 , 102.892915302855 ),
new google.maps.LatLng( 30.1925001721198 , 102.894990432622 ),
new google.maps.LatLng( 30.1916351096198 , 102.897406879892 ),
new google.maps.LatLng( 30.1913400546487 , 102.9 ),
new google.maps.LatLng( 30.1916351096198 , 102.902593120108 ),
new google.maps.LatLng( 30.1925001721198 , 102.905009567378 ),
new google.maps.LatLng( 30.1938763034909 , 102.907084697145 ),
new google.maps.LatLng( 30.1956697416742 , 102.908677104548 ),
new google.maps.LatLng( 30.197758285845 , 102.909678257874 ),
new google.maps.LatLng( 30.1999996190999 , 102.910019897965 ),
new google.maps.LatLng( 30.2022410033858 , 102.909678698591 ),
new google.maps.LatLng( 30.2043296869757 , 102.908677867891 ),
new google.maps.LatLng( 30.2061233156091 , 102.907085578578 ),
new google.maps.LatLng( 30.2074996374302 , 102.905010330721 ),
new google.maps.LatLng( 30.2083648393493 , 102.902593560825 ),
 new google.maps.LatLng( 30.2086599453513 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.4086599453513 , 102.9 ),
new google.maps.LatLng( 30.408364839144 , 102.897401141709 ),
new google.maps.LatLng( 30.407499636664 , 102.894979435804 ),
new google.maps.LatLng( 30.4061233140766 , 102.892899950105 ),
new google.maps.LatLng( 30.4043296846771 , 102.891304410035 ),
new google.maps.LatLng( 30.4022410005264 , 102.890301537079 ),
new google.maps.LatLng( 30.3999996160354 , 102.8899596428 ),
new google.maps.LatLng( 30.3977582829859 , 102.890301982248 ),
new google.maps.LatLng( 30.395669739376 , 102.89130518109 ),
new google.maps.LatLng( 30.3938763019588 , 102.892900840443 ),
new google.maps.LatLng( 30.3925001713537 , 102.89498020686 ),
new google.maps.LatLng( 30.3916351094145 , 102.897401586878 ),
new google.maps.LatLng( 30.3913400546487 , 102.9 ),
new google.maps.LatLng( 30.3916351094145 , 102.902598413122 ),
new google.maps.LatLng( 30.3925001713537 , 102.90501979314 ),
new google.maps.LatLng( 30.3938763019588 , 102.907099159557 ),
new google.maps.LatLng( 30.395669739376 , 102.90869481891 ),
new google.maps.LatLng( 30.3977582829859 , 102.909698017752 ),
new google.maps.LatLng( 30.3999996160354 , 102.9100403572 ),
new google.maps.LatLng( 30.4022410005264 , 102.909698462921 ),
new google.maps.LatLng( 30.4043296846771 , 102.908695589965 ),
new google.maps.LatLng( 30.4061233140766 , 102.907100049895 ),
new google.maps.LatLng( 30.407499636664 , 102.905020564196 ),
new google.maps.LatLng( 30.408364839144 , 102.902598858292 ),
 new google.maps.LatLng( 30.4086599453513 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2686599453513 , 102.87 ),
new google.maps.LatLng( 30.2683648392878 , 102.867404855524 ),
new google.maps.LatLng( 30.2674996372007 , 102.864986610032 ),
new google.maps.LatLng( 30.26612331515 , 102.862910095293 ),
new google.maps.LatLng( 30.2643296862871 , 102.861316834182 ),
new google.maps.LatLng( 30.2622410025292 , 102.860315392961 ),
new google.maps.LatLng( 30.2599996181819 , 102.859973985849 ),
new google.maps.LatLng( 30.2577582849885 , 102.860315835009 ),
new google.maps.LatLng( 30.2556697409858 , 102.861317599832 ),
new google.maps.LatLng( 30.2538763030319 , 102.86291097939 ),
new google.maps.LatLng( 30.2525001718903 , 102.864987375682 ),
new google.maps.LatLng( 30.2516351095583 , 102.867405297572 ),
new google.maps.LatLng( 30.2513400546487 , 102.87 ),
new google.maps.LatLng( 30.2516351095583 , 102.872594702428 ),
new google.maps.LatLng( 30.2525001718903 , 102.875012624318 ),
new google.maps.LatLng( 30.2538763030319 , 102.87708902061 ),
new google.maps.LatLng( 30.2556697409858 , 102.878682400168 ),
new google.maps.LatLng( 30.2577582849885 , 102.879684164991 ),
new google.maps.LatLng( 30.2599996181819 , 102.880026014151 ),
new google.maps.LatLng( 30.2622410025292 , 102.879684607039 ),
new google.maps.LatLng( 30.2643296862871 , 102.878683165818 ),
new google.maps.LatLng( 30.26612331515 , 102.877089904707 ),
new google.maps.LatLng( 30.2674996372007 , 102.875013389968 ),
new google.maps.LatLng( 30.2683648392878 , 102.872595144476 ),
 new google.maps.LatLng( 30.2686599453513 , 102.87 )], 
map:map, 
 clickable:true,
 fillColor: "#FFA500",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3105823813525 , 102.9 ),
new google.maps.LatLng( 30.3102217571897 , 102.896827401499 ),
new google.maps.LatLng( 30.3091644682899 , 102.893871076449 ),
new google.maps.LatLng( 30.3074825880374 , 102.891332541902 ),
new google.maps.LatLng( 30.3052907623281 , 102.889384812483 ),
new google.maps.LatLng( 30.3027383889916 , 102.888160604999 ),
new google.maps.LatLng( 30.29999942893 , 102.887743298765 ),
new google.maps.LatLng( 30.2972605453773 , 102.888161266422 ),
new google.maps.LatLng( 30.2947083810669 , 102.889385958102 ),
new google.maps.LatLng( 30.2925168408926 , 102.891333864749 ),
new google.maps.LatLng( 30.2908352461751 , 102.893872222068 ),
new google.maps.LatLng( 30.2897781663014 , 102.896828062922 ),
new google.maps.LatLng( 30.2894176186475 , 102.9 ),
new google.maps.LatLng( 30.2897781663014 , 102.903171937078 ),
new google.maps.LatLng( 30.2908352461751 , 102.906127777932 ),
new google.maps.LatLng( 30.2925168408926 , 102.908666135252 ),
new google.maps.LatLng( 30.2947083810669 , 102.910614041898 ),
new google.maps.LatLng( 30.2972605453773 , 102.911838733578 ),
new google.maps.LatLng( 30.29999942893 , 102.912256701235 ),
new google.maps.LatLng( 30.3027383889916 , 102.911839395001 ),
new google.maps.LatLng( 30.3052907623281 , 102.910615187517 ),
new google.maps.LatLng( 30.3074825880374 , 102.908667458098 ),
new google.maps.LatLng( 30.3091644682899 , 102.906128923551 ),
new google.maps.LatLng( 30.3102217571897 , 102.903172598501 ),
 new google.maps.LatLng( 30.3105823813525 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#D26923",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.2105823813525 , 102.9 ),
new google.maps.LatLng( 30.2102217573429 , 102.896830630396 ),
new google.maps.LatLng( 30.2091644688615 , 102.893877313868 ),
new google.maps.LatLng( 30.2074825891805 , 102.891341362199 ),
new google.maps.LatLng( 30.2052907640426 , 102.889395613906 ),
new google.maps.LatLng( 30.2027383911244 , 102.888172650874 ),
new google.maps.LatLng( 30.1999994312158 , 102.887755767855 ),
new google.maps.LatLng( 30.1972605475098 , 102.88817330898 ),
new google.maps.LatLng( 30.194708382781 , 102.889396753778 ),
new google.maps.LatLng( 30.1925168420353 , 102.89134267841 ),
new google.maps.LatLng( 30.1908352467464 , 102.893878453741 ),
new google.maps.LatLng( 30.1897781664545 , 102.896831288502 ),
new google.maps.LatLng( 30.1894176186475 , 102.9 ),
new google.maps.LatLng( 30.1897781664545 , 102.903168711498 ),
new google.maps.LatLng( 30.1908352467464 , 102.906121546259 ),
new google.maps.LatLng( 30.1925168420353 , 102.90865732159 ),
new google.maps.LatLng( 30.194708382781 , 102.910603246222 ),
new google.maps.LatLng( 30.1972605475098 , 102.91182669102 ),
new google.maps.LatLng( 30.1999994312158 , 102.912244232145 ),
new google.maps.LatLng( 30.2027383911244 , 102.911827349126 ),
new google.maps.LatLng( 30.2052907640426 , 102.910604386094 ),
new google.maps.LatLng( 30.2074825891805 , 102.908658637802 ),
new google.maps.LatLng( 30.2091644688615 , 102.906122686132 ),
new google.maps.LatLng( 30.2102217573429 , 102.903169369604 ),
 new google.maps.LatLng( 30.2105823813525 , 102.9 )], 
map:map, 
 clickable:true,
 fillColor: "#D26923",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 
var polygon= new google.maps.Polygon({ 
 path:[ new google.maps.LatLng( 30.3134750187002 , 103 ),
new google.maps.LatLng( 30.3130158065299 , 102.995960073504 ),
new google.maps.LatLng( 30.3116694769722 , 102.992195568522 ),
new google.maps.LatLng( 30.3095278140423 , 102.988963108303 ),
new google.maps.LatLng( 30.3067368148033 , 102.986483008349 ),
new google.maps.LatLng( 30.3034867275013 , 102.984924254604 ),
new google.maps.LatLng( 30.2999990740634 , 102.984392995069 ),
new google.maps.LatLng( 30.2965115446774 , 102.984925327041 ),
new google.maps.LatLng( 30.2932617962917 , 102.986484865863 ),
new google.maps.LatLng( 30.2904712600211 , 102.988965253175 ),
new google.maps.LatLng( 30.2883300600595 , 102.992197426036 ),
new google.maps.LatLng( 30.2869840694181 , 102.995961145941 ),
new google.maps.LatLng( 30.2865249812998 , 103 ),
new google.maps.LatLng( 30.2869840694181 , 103.004038854059 ),
new google.maps.LatLng( 30.2883300600595 , 103.007802573964 ),
new google.maps.LatLng( 30.2904712600211 , 103.011034746825 ),
new google.maps.LatLng( 30.2932617962917 , 103.013515134137 ),
new google.maps.LatLng( 30.2965115446774 , 103.015074672959 ),
new google.maps.LatLng( 30.2999990740634 , 103.015607004931 ),
new google.maps.LatLng( 30.3034867275013 , 103.015075745396 ),
new google.maps.LatLng( 30.3067368148033 , 103.013516991651 ),
new google.maps.LatLng( 30.3095278140423 , 103.011036891697 ),
new google.maps.LatLng( 30.3116694769722 , 103.007804431478 ),
new google.maps.LatLng( 30.3130158065299 , 103.004039926496 ),
 new google.maps.LatLng( 30.3134750187002 , 103 )], 
map:map, 
 clickable:true,
 fillColor: "#A52A2A",
 strokeColor: "#404040", 
 strokeOpacity:1,
 fillOpacity:0.7,
 strokeWeight:1,
 geodesic:true,
 zIndex:null});
polysp.push(polygon); 

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
 var latlng = new google.maps.LatLng( 30.22 , 102.995 ) ; 
 
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
 new google.maps.LatLng(30.04,102.79),
 new google.maps.LatLng( 30.4,103.2)));   var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[0] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-22 <br> 时间 : 19:04:52.5 <br> 深度 : 21 <br> 震级值 : 3.1 <br> 参考地名 : 四川省雅安市芦山县、雨城区交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[1] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-22 <br> 时间 : 18:56:50.4 <br> 深度 : 12 <br> 震级值 : 3.4 <br> 参考地名 : 四川省雅安市芦山县、成都市邛崃市交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[2] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-22 <br> 时间 : 17:14:04.5 <br> 深度 : 12 <br> 震级值 : 3.7 <br> 参考地名 : 四川省雅安市芦山县、成都市邛崃市交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[3] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-22 <br> 时间 : 13:42:52.4 <br> 深度 : 16 <br> 震级值 : 3.1 <br> 参考地名 : 四川省雅安市天全县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[4] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-22 <br> 时间 : 09:18:08.5 <br> 深度 : 19 <br> 震级值 : 3.6 <br> 参考地名 : 四川省雅安市芦山县 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[5] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-22 <br> 时间 : 07:45:00.9 <br> 深度 : 14 <br> 震级值 : 3.2 <br> 参考地名 : 四川省雅安市宝兴县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[6] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-22 <br> 时间 : 07:17:04.4 <br> 深度 : 17 <br> 震级值 : 3.4 <br> 参考地名 : 四川省雅安市芦山县 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[7] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-22 <br> 时间 : 06:21:10.2 <br> 深度 : 20 <br> 震级值 : 3.1 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[8] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-22 <br> 时间 : 04:53:20.2 <br> 深度 : 20 <br> 震级值 : 3.1 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[9] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-22 <br> 时间 : 04:36:11.9 <br> 深度 : 17 <br> 震级值 : 3.1 <br> 参考地名 : 四川省雅安市芦山县 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[10] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-22 <br> 时间 : 03:36:37.7 <br> 深度 : 17 <br> 震级值 : 3.8 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[11] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 23:25:24.1 <br> 深度 : 16 <br> 震级值 : 3.7 <br> 参考地名 : 四川省雅安市宝兴县、芦山县、天全县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[12] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 22:16:54.3 <br> 深度 : 14 <br> 震级值 : 4.3 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[13] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 20:06:23.4 <br> 深度 : 20 <br> 震级值 : 3.2 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[14] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 18:55:10.1 <br> 深度 : 14 <br> 震级值 : 3.2 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[15] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 18:48:23.4 <br> 深度 : 19 <br> 震级值 : 4.2 <br> 参考地名 : 四川省雅安市芦山县 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[16] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 18:24:15.0 <br> 深度 : 14 <br> 震级值 : 3 <br> 参考地名 : 四川省雅安市宝兴县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[17] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 17:43:38.6 <br> 深度 : 18 <br> 震级值 : 3.1 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[18] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 17:30:24.3 <br> 深度 : 18 <br> 震级值 : 4.2 <br> 参考地名 : 四川省雅安市芦山县 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[19] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 17:18:10.6 <br> 深度 : 18 <br> 震级值 : 3.1 <br> 参考地名 : 四川省雅安市芦山县 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[20] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 17:05:22.7 <br> 深度 : 17 <br> 震级值 : 5.4 <br> 参考地名 : 四川省雅安市芦山县、成都市邛崃市交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[21] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 17:01:55.4 <br> 深度 : 14 <br> 震级值 : 3.2 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[22] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 16:45:38.7 <br> 深度 : 20 <br> 震级值 : 3.1 <br> 参考地名 : 四川省雅安市宝兴县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[23] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 12:58:49.4 <br> 深度 : 14 <br> 震级值 : 3.1 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[24] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 12:39:18.6 <br> 深度 : 11 <br> 震级值 : 3.8 <br> 参考地名 : 四川省雅安市芦山县、宝兴县、天全县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[25] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 11:59:37.4 <br> 深度 : 17 <br> 震级值 : 4.9 <br> 参考地名 : 四川省雅安市芦山县 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[26] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 09:29:33.1 <br> 深度 : 20 <br> 震级值 : 3.7 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[27] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 08:13:07.1 <br> 深度 : 18 <br> 震级值 : 3.4 <br> 参考地名 : 四川省雅安市宝兴县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[28] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 07:50:59.9 <br> 深度 : 19 <br> 震级值 : 3.4 <br> 参考地名 : 四川省雅安市天全县、宝兴县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[29] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 06:27:22.7 <br> 深度 : 18 <br> 震级值 : 3.4 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[30] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 05:54:29.1 <br> 深度 : 15 <br> 震级值 : 3.2 <br> 参考地名 : 四川省雅安市天全县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[31] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 05:29:56.1 <br> 深度 : 17 <br> 震级值 : 3 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[32] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 04:53:44.1 <br> 深度 : 16 <br> 震级值 : 5 <br> 参考地名 : 四川省雅安市芦山县、成都市邛崃市交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[33] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 03:54:45.0 <br> 深度 : 18 <br> 震级值 : 4 <br> 参考地名 : 四川省雅安市芦山县 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[34] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 02:32:08.9 <br> 深度 : 18 <br> 震级值 : 3.7 <br> 参考地名 : 四川省雅安市芦山县 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[35] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 00:38:21.8 <br> 深度 : 17 <br> 震级值 : 3 <br> 参考地名 : 四川省雅安市宝兴县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[36] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 00:14:35.7 <br> 深度 : 18 <br> 震级值 : 4 <br> 参考地名 : 四川省雅安市天全县、芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[37] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-04-21 <br> 时间 : 00:06:47.6 <br> 深度 : 15 <br> 震级值 : 3.1 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[38] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 23:20:51 <br> 深度 : 15 <br> 震级值 : 3.4 <br> 参考地名 : 四川省雅安市天全县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[39] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 23:08:12 <br> 深度 : 17 <br> 震级值 : 3.2 <br> 参考地名 : 四川省雅安市芦山县、宝兴县、天全县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[40] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 23:02:56 <br> 深度 : 18 <br> 震级值 : 3.2 <br> 参考地名 : 四川省雅安市芦山县 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[41] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 23:00:39 <br> 深度 : 18 <br> 震级值 : 3.3 <br> 参考地名 : 四川省雅安市宝兴县、天全县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[42] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 22:29:35 <br> 深度 : 15 <br> 震级值 : 3.8 <br> 参考地名 : 四川省雅安市芦山县、宝兴县、天全县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[43] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 22:10:32 <br> 深度 : 15 <br> 震级值 : 3.1 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[44] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 20:33:40 <br> 深度 : 20 <br> 震级值 : 3.1 <br> 参考地名 : 四川省雅安市天全县 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[45] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 19:12:50 <br> 深度 : 17 <br> 震级值 : 4.5 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[46] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 19:10:52 <br> 深度 : 17 <br> 震级值 : 3.1 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[47] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 19:01:55 <br> 深度 : 14 <br> 震级值 : 3 <br> 参考地名 : 四川省雅安市天全县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[48] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 18:59:00 <br> 深度 : 17 <br> 震级值 : 3.8 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[49] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 18:09:16 <br> 深度 : 20 <br> 震级值 : 3 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[50] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 18:03:14 <br> 深度 : 15 <br> 震级值 : 3 <br> 参考地名 : 四川省雅安市天全县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[51] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 17:45:15 <br> 深度 : 17 <br> 震级值 : 4 <br> 参考地名 : 四川省成都市邛崃市 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[52] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 16:39:43 <br> 深度 : 15 <br> 震级值 : 3.2 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[53] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 16:06:03 <br> 深度 : 15 <br> 震级值 : 3.4 <br> 参考地名 : 四川省雅安市芦山县 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[54] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 15:53:28 <br> 深度 : 15 <br> 震级值 : 3.6 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[55] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 15:18:32 <br> 深度 : 17 <br> 震级值 : 4.1 <br> 参考地名 : 四川省雅安市宝兴县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[56] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 15:12:23 <br> 深度 : 16 <br> 震级值 : 3 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[57] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 14:43:21 <br> 深度 : 16 <br> 震级值 : 3.6 <br> 参考地名 : 四川省雅安市芦山县、天全县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[58] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 14:23:17 <br> 深度 : 15 <br> 震级值 : 3 <br> 参考地名 : 四川省雅安市芦山县、宝兴县、天全县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[59] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 14:12:46 <br> 深度 : 16 <br> 震级值 : 3 <br> 参考地名 : 四川省雅安市天全县、宝兴县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[60] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 13:52:07 <br> 深度 : 15 <br> 震级值 : 3.1 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[61] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 13:44:02 <br> 深度 : 17 <br> 震级值 : 3.4 <br> 参考地名 : 四川省雅安市天全县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[62] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 13:39:06 <br> 深度 : 15 <br> 震级值 : 3.3 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[63] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 13:36:36 <br> 深度 : 16 <br> 震级值 : 3.2 <br> 参考地名 : 四川省雅安市芦山县、天全县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[64] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 12:47:02 <br> 深度 : 14 <br> 震级值 : 3 <br> 参考地名 : 四川省雅安市天全县、芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[65] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 12:38:50 <br> 深度 : 16 <br> 震级值 : 3 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[66] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 11:55:38 <br> 深度 : 11 <br> 震级值 : 3.4 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[67] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 11:40:23 <br> 深度 : 14 <br> 震级值 : 3.7 <br> 参考地名 : 四川省雅安市天全县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[68] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 11:34:17 <br> 深度 : 11 <br> 震级值 : 5.3 <br> 参考地名 : 四川省雅安市天全县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[69] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 11:29:11 <br> 深度 : 17 <br> 震级值 : 3.3 <br> 参考地名 : 四川省雅安市天全县、芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[70] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 11:19:51 <br> 深度 : 20 <br> 震级值 : 3.6 <br> 参考地名 : 四川省雅安市宝兴县、芦山县、天全县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[71] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 11:04:56 <br> 深度 : 15 <br> 震级值 : 3.2 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[72] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 10:46:47 <br> 深度 : 17 <br> 震级值 : 3.3 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[73] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 10:41:14 <br> 深度 : 9 <br> 震级值 : 3.2 <br> 参考地名 : 四川省雅安市芦山县、天全县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[74] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 10:38:35 <br> 深度 : 17 <br> 震级值 : 4.6 <br> 参考地名 : 四川省雅安市芦山县 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[75] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 10:29:49 <br> 深度 : 18 <br> 震级值 : 3.7 <br> 参考地名 : 四川省雅安市天全县、芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[76] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 10:19:04 <br> 深度 : 15 <br> 震级值 : 4.3 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[77] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 10:12:35 <br> 深度 : 11 <br> 震级值 : 3.4 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[78] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 10:06:29 <br> 深度 : 10 <br> 震级值 : 3.3 <br> 参考地名 : 四川省雅安市雨城区、名山县、成都市邛崃市交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[79] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 10:01:41 <br> 深度 : 15 <br> 震级值 : 3.7 <br> 参考地名 : 四川省雅安市芦山县、天全县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[80] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 9:54:56 <br> 深度 : 19 <br> 震级值 : 3.2 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[81] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 9:39:34 <br> 深度 : 17 <br> 震级值 : 4.5 <br> 参考地名 : 四川省雅安市芦山县、天全县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[82] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 9:37:28 <br> 深度 : 15 <br> 震级值 : 4.9 <br> 参考地名 : 四川省雅安市芦山县 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[83] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 9:26:00 <br> 深度 : 17 <br> 震级值 : 4.4 <br> 参考地名 : 四川省雅安市芦山县、宝兴县、天全县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[84] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 9:20:09 <br> 深度 : 19 <br> 震级值 : 4.6 <br> 参考地名 : 四川省雅安市芦山县、宝兴县、天全县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[85] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 9:11:52 <br> 深度 : 16 <br> 震级值 : 4.3 <br> 参考地名 : 四川省雅安市宝兴县、天全县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[86] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 9:02:57 <br> 深度 : 15 <br> 震级值 : 4.6 <br> 参考地名 : 四川省雅安市宝兴县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[87] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 8:52:23 <br> 深度 : 13 <br> 震级值 : 3.7 <br> 参考地名 : 四川省雅安市天全县、芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[88] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 8:50:34 <br> 深度 : 16 <br> 震级值 : 3.1 <br> 参考地名 : 四川省雅安市天全县、芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[89] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 8:42:35 <br> 深度 : 20 <br> 震级值 : 3.6 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[90] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 8:37:12 <br> 深度 : 19 <br> 震级值 : 4.1 <br> 参考地名 : 四川省雅安市芦山县、天全县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[91] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 8:31:34 <br> 深度 : 12 <br> 震级值 : 4.1 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[92] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 8:27:26 <br> 深度 : 15 <br> 震级值 : 3.6 <br> 参考地名 : 四川省雅安市宝兴县、芦山县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[93] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 8:07:32 <br> 深度 : 10 <br> 震级值 : 5.1 <br> 参考地名 : 四川省雅安市芦山县、宝兴县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[94] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 8:06:38 <br> 深度 : 10 <br> 震级值 : 4.8 <br> 参考地名 : 四川省雅安市芦山县、宝兴县、天全县交界 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
  var infowindow = new google.maps.InfoWindow({ content: "" }); 
 google.maps.event.addListener(polysp[95] ,"click",function(event){ 
 infowindow.content=" 日期 : 2013-4-20 <br> 时间 : 8:02:46 <br> 深度 : 13 <br> 震级值 : 7 <br> 参考地名 : 四川省雅安市芦山县 <br>"; 
  infowindow.position =event.latLng; 
 infowindow.disableAutoPan=false; 
 infowindow.maxWidth=null;
 infowindow.pixelOffset=null;
 infowindow.zIndex=null; infowindow.open(map)});   
showO(polysp,"spbox"); }