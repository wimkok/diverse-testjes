function showDOM() {
    var retString = "";
    if (document.getElementById("showDOC") != null) {
    	document.getElementById("showDOC").innerHTML = retString + showDocument();
    } else {retString += showDocument()}
    if (document.getElementById("showDOM") != null) {
        retString += showElement(document.documentElement);
    	document.getElementById("showDOM").innerHTML = retString;        
    }
}

function showDocument() {
    var retString = "<h1>Document Info</h1>";
    retString += printp("document.body=" + document.body.nodeName);
    retString += printp("document.doctype=" + document.doctype.name);
    if( document.documentMode == undefined)
    	retString += printp("document.documentMode=alleen IE");
    else
    	retString += printp("document.documentMode=" + document.documentMode);
    if( document.documentURI == undefined)
    	retString += printp("document.documentURI=Niet in IE");
    else
	    retString += printp("document.documentURI=" + document.documentURI);
    retString += printp("document.implementation=" + document.implementation);
    retString += printp("document.referrer=" + document.referrer);
    retString += printp("document.title=" + document.title);
    retString += printp("document.URL=" + document.URL);
    retString += printp("document.links.length=" + document.links.length);
    
    return retString;
}

function showElement( element ) {
    var retString = "<h1>Element ["+element.nodeName+"]</h1>";
    retString += showAttributes(document.documentElement);
    retString += printp("element.nodeName=" + element.nodeName);
    retString += printp("element.nodeType=" + element.nodeType);
    retString += printp("element.nodeValue=" + element.nodeValue);
    retString += printp("element.title=" + element.title);
    retString += printp("element.style=" + element.style);
    retString += "element.childNodes" + showChildNodes(element);
    return retString;
}

function showChildNodes( element ) {
    var retString = "";
    var nodes = element.childNodes;
    for (var i=0; i<nodes.length; i++) {
        retString += printp("node["+i+"]="+nodes[i].nodeName+":"+nodes[i].nodeType);
    }
    return retString;
}

function showAttributes( element ) {
    var retString = "<h2>Atrributes ["+element.nodeName+"]</h2>";
    var attribs = element.attributes;
    for (var i=0; i<attribs.length; i++) {
        retString += "<p>attrib["+i+"]="+attribs[i].name+":"+attribs[i].value+"</p>";
    }
    return retString;
}

function printp( tekst) {
    return "<p>"+tekst+"</p>";
}