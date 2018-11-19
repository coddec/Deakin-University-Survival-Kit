// Pass in a string literal
var url = new URL(window.location);

// Retrieve params via url.search, passed into ctor
var params = new URLSearchParams(url.search);
var searchParams = params.get("q");
var stringLength = searchParams.length;

//Initial Open webpage, set value of query
if (stringLength > 0){
	//alert(searchParams + stringLength);	
	document.getElementById("SearchBox").value = searchParams;
	document.getElementById("queryURL").innerHTML = window.location.href;
	userList.search(searchParams);
}

//Update Display link if search term changed
function updateDisplayLink() {
	params.set("q", document.getElementById("SearchBox").value);
	var newLink = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + params.toString();
    document.getElementById("queryURL").innerHTML = newLink;
	document.getElementById("queryURL").href = newLink;
}

