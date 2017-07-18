<?php 
error_reporting(0);
for ($i=1; $i<9; $i++):
switch($i){
	
	case 1: 
		$color='#32b4c0';
		$color_rgba_1='rgba(50, 180, 192, 0.9)';
		$color_rgba_2='rgba(50, 180, 192, 0.8)';
		$color_name='torquze';
	break;
	
	case 2: 
		$color='#ffcc00';
		$color_rgba_1='rgba(255, 204, 0, 0.90)';
		$color_rgba_2='rgba(255, 204, 0, 0.80)';
		$color_name='sun';
	break;
	
	case 3: 
		$color='#d80000';
		$color_rgba_1='rgba(216, 0, 0, 0.90)';
		$color_rgba_2='rgba(216, 0, 0, 0.80)';
		$color_name='red';
	break;
	
	case 4: 
		$color='#EE163A';
		$color_rgba_1='rgba(238, 22, 58, 0.9)';
		$color_rgba_2='rgba(238, 22, 58, 0.8)';
		$color_name='pink';
	break;
	
	case 5: 
		$color='#9dc032';
		$color_rgba_1='rgba(157, 192, 50, 0.90)';
		$color_rgba_2='rgba(157, 192, 50, 0.80)';
		$color_name='greentea';
	break;
	
	case 6: 
		$color='#1DA879';
		$color_rgba_1='rgba(29, 168, 121, 0.90)';
		$color_rgba_2='rgba(29, 168, 121, 0.80)';
		$color_name='green';
	break;
	
	case 7: 
		$color='#3ea7d7';
		$color_rgba_1='rgba(62, 167, 215, 0.90)';
		$color_rgba_2='rgba(62, 167, 215, 0.80)';
		$color_name='blue';
	break;
	
	case 8: 
		$color='#EE163A';
		$color_rgba_1='rgba(238, 22, 58, 0.90)';
		$color_rgba_2='rgba(238, 22, 58, 0.80)';
		$color_name='orange';
	break;
}
$newFileName = 'css/skins/'.$color_name.".css";
$newFileContent = '/* '.$color_name.' Skin */
/* ------------------------------------------------------------------------ */
/* Color
/* ------------------------------------------------------------------------ */
.jx-info-content .info-title , .jx-section-title-1 .jx-title-icon i , .jx-servicebox-1 .jx-service-item .service-icon i , .jx-event-schedule .date ,
.jx-event-schedule .date i , .jx-media-center .date i , .jx-countdown-form .jx-countdown-box h1 , .jx-btn-default.jx-outline , .jx-testimonial-details .jx-testimonial-icon i , .jx-testimonial-content .jx-testimonial-name , a , .jx-price-item.jx-white .jx-price,.jx-price-item.jx-white .jx-package-name,.jx-price-item.jx-white .jx-package-feature , .jx-btn-default.jx-outline i
{
	color:'.$color.' ;
}
/* ------------------------------------------------------------------------ */
/* Background
/* ------------------------------------------------------------------------ */
::selection 
{
	background:'.$color.' !important;
}
::-moz-selection   
{
	background:'.$color.' !important;
}
.jx-servicebox-1 .jx-service-item .service-title-border , .jx-event-schedule .image i , .jx-speaker-details , .grid-item ,
.jx-newsletter .jx-form-wrapper button , .jx-single-point > a  , .jx-countdown .counter-wrapper li  , .jx-faq .jx-faq-head .jx-faq-title , .jx-contact-form input.jx-submit, .jx-menu .main-menu li:hover , .jx-main-slider .flex-direction-nav a  , .jx-menu .main-menu li a.mPS2id-highlight
{
	background:'.$color.' !important;
}
.shortcode_tab_e.jx-white-tab.jx-arrow-tab li.resp-tab-active , .jx-sponsor .flex-control-nav.flex-control-paging li a , .jx-testimonial .flex-control-nav.flex-control-paging li a , .jx-price-table .jx-price-item , .jx-btn-default , .jx-event-box-register .jx-event-register .jx-btn-default
{
	background:'.$color.';
}
.jx-price-item.jx-white{
  background:#fff !important;   
}
	
/* ------------------------------------------------------------------------ */
/* Background Color
/* ------------------------------------------------------------------------ */
.jx-default-bg , .jx-pricing-switcher .jx-switch 
{
	background-color:'.$color.' !important;
}
/* ------------------------------------------------------------------------ */
/* Background RGBA Color
/* ------------------------------------------------------------------------ */
.jx-event-box .jx-event-date , .jx-event-play {
	background: '.$color_rgba_1.' !important;
}
.grid-item .jx-portfolio-hoverlayer  , .jx-media-center .jx-image-wrapper .jx-image-overlay {
	background: '.$color_rgba_2.' !important;	
}
/* ------------------------------------------------------------------------ */
/* Border Color
/* ------------------------------------------------------------------------ */
.jx-btn-default.jx-outline , .jx-testimonial .flex-control-nav.flex-control-paging li a.flex-active , .jx-sponsor .flex-control-nav.flex-control-paging li a.flex-active , .jx-price-item.jx-white .jx-package-feature li
	{
		border-color:'.$color.' !important;
	}
.jx-faq .jx-faq-head .jx-faq-title::after 
	{
	border-color: '.$color.' transparent !important;
	}
.shortcode_tab_e.jx-white-tab.jx-arrow-tab ul li.resp-tab-active::after 
{
	border-color: '.$color.' transparent;
}
.jx-btn-default {
	border-color:'.$color.';
}
/* ------------------------------------------------------------------------ */
/* Border Left Color
/* ------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------ */
/* Border Right Color
/* ------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------ */
/* Border Top Color
/* ------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------ */
/* Border Bottom Color
/* ------------------------------------------------------------------------ */
.resp-tab-item.childtab_1.resp-tab-active , .resp-tab-item.childtab_2.resp-tab-active , .resp-tab-item.childtab_3.resp-tab-active
 {
	border-bottom-color:'.$color.' !important;
 }
/* ------------------------------------------------------------------------ */
/* Variant Background Color
/* ------------------------------------------------------------------------ */
.jx-bg-defualt-1{background-color:#c63f32 !important}
.jx-bg-defualt-2{background-color:#ad3b30 !important}
.jx-bg-defualt-3{background-color:#852f27 !important}
.jx-bg-defualt-4{background-color:#5b1a13 !important}';
if(file_put_contents($newFileName,$newFileContent)!=false){
    echo "File created (".basename($newFileName).")<br>";
}else{
    echo "Cannot create file (".basename($newFileName).")";
}
endfor;
?>