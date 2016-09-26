function showService(){
	document.getElementById('services').style.display='block';
	document.getElementById('serviceTag').style.border='1px solid #ccc';
	document.getElementById('serviceTag').style.background='url(images/jt_up.jpg) no-repeat right center';
}
function hideService(){
	document.getElementById('services').style.display='none';
	document.getElementById('serviceTag').style.border='1px solid transparent';
	document.getElementById('serviceTag').style.background='url(images/jt_down.jpg) no-repeat right center';
}
function showMobileJD(){
	document.getElementById('mobileJDItems').style.display='block';
	document.getElementById('mobileJDTag').style.border='1px solid #ccc';
	document.getElementById('mobileJDTag').style.background='url(images/jt_up.jpg) no-repeat right center';
}
function hideMobileJD(){
	document.getElementById('mobileJDItems').style.display='none';
	document.getElementById('mobileJDTag').style.border='1px solid transparent';
	document.getElementById('mobileJDTag').style.background='url(images/jt_down.jpg) no-repeat right center';
}