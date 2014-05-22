function showDOM() {
    var retString = "<p>showDOM is gedaan</p>";
    var element = document.getElementById("showDOM");
    retString += showAttributes(element);
    retString += typeof(element);
    retString += showAttributes(document.documentElement);
    retString += showElement(document.documentElement);

    document.getElementById("showDOM").innerHTML = retString;
}


function showElement( element ) {
    var retString = "";
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
    var retString = "";
    var attribs = element.attributes;
    for (var i=0; i<attribs.length; i++) {
        retString += "<p>attrib["+i+"]="+attribs[i].name+":"+attribs[i].value+"</p>";
    }
    return retString;
}

function printp( tekst) {
    return "<p>"+tekst+"</p>";
}