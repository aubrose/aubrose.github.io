    var hightemp = parseInt(document.getElementById("high").value);
	var lowtemp = parseInt(document.getElementById("low").value);
    var t =(hightemp + lowtemp)/ 2;
    var s = parseInt(document.getElementById("windspeed").value);
    var r = windChill(t, s);
    document.getElementById('outputDiv').innerHTML = r;

windChill(t,s) 
    var f= (35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16))
    return f;

document.getElementById("windchill").innerHTML = f