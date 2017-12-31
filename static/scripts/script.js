function setCookie(name, value, expiration) {
	var date = new Date();
    date.setTime(date.getTime() + (expiration*86400000));
    document.cookie = name + "=" + value + ";expires=" + date.toGMTString() + ";path=/";
}

function getCookie(name) {
    var name = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function darkModeCheck() {
	if (getCookie("darkMode") == "enabled") {
		document.querySelector("body").classList.add("night");
		document.querySelector(".site-toggle").setAttribute("aria-label", "Activer le mode clair");
	} else {
		document.querySelector(".site-toggle").setAttribute("aria-label", "Activer le mode sombre");
	}
}

function darkModeSet() {
	if (getCookie("darkMode") == "enabled") {
		setCookie("darkMode", "disabled", 7);
		document.querySelector(".site-toggle").setAttribute("aria-label", "Activer le mode clair");
	} else {
		setCookie("darkMode", "enabled", 7);
		document.querySelector(".site-toggle").setAttribute("aria-label", "Activer le mode sombre");
	}
	
	document.querySelector("body").classList.toggle("night");
}