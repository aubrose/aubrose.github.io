function doInputOutput() {
	  var hightemp = 90
	var lowtemp = 66
    var t =(hightemp + lowtemp)/ 2;
    var s = 5
    var r = windChill(t, s);
    document.getElementById("outputDiv").innerHTML = r;
}

function windChill(t,s) {
    var f= Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16))
    return f;
 
}