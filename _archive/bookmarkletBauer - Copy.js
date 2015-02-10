
var abg = [
{key : "MT0", description : "Seminar, Messen, Schulung", shortname: "Messe"},
{key : "150", description : "Besprechung, Wochentermin", shortname: "Bespr_WT"},
{key : "151", description : "Anlernen, Schulung", shortname: "Anlernen"},
{key : "545", description : "Software Design", shortname: "SWdesign"},
{key : "565", description : "SW Implementierung, Nachbereitung IBN", shortname: "NB_SWimpl"},
{key : "582", description : "SW Auslieferungstest", shortname: "SWtest"},
{key : "590", description : "VB Inbetriebnahme", shortname: "VB"},
{key : "592", description : "Inbetriebnahme", shortname: "IBN"},
{key : "605", description : "techn. Kundenbetreuung", shortname: "support"},
{key : "615", description : "Vorbereitung Messe", shortname: "VBMesse"}
];
var abgShortname;


var kst = [
	{key : "5501384", description : "key account", shortname: "keyAccnt"},
	{key : "5501386", description : "Area Sales, DACH", shortname: "DACH"},
	{key : "5501387", description : "New Countries", shortname: "NewC"},
	{key : "5501700", description : "Korea", shortname: "KR"},
	{key : "5501179", description : "USA + Canada", shortname: "USA"},
	{key : "5501388", description : "CN", shortname: "CN"},
	{key : "5501389", description : "Taiwan", shortname: "TW"},
	{key : "7993221", description : "Appl", shortname: "Appl"},
	{key : "5501821", description : "Appl Entwickl", shortname: "ApplEntw"}
];
var kstShortname;

var buchungsMatrix = [
	{key : "5501384", allowedVals : ["150","151","545","565","582","590","592","605"]},
	{key : "5501386", allowedVals : ["150","151","545","565","582","590","592","605","615"]},	
	{key : "5501387", allowedVals : ["150","151","545","565","582","590","592","605","615"]},
	{key : "5501700", allowedVals : ["150","151","545","565","582","590","592","605","615"]},
	{key : "5501179", allowedVals : ["150","151","545","565","582","590","592","605","615"]},
	{key : "5501388", allowedVals : ["150","151","545","565","582","590","592","605","615"]},
	{key : "5501389", allowedVals : ["150","151","545","565","582","590","592","605","615"]},
	{key : "7993221", allowedVals : ["MT0","150","565","582"]},
	{key : "5501821", allowedVals : ["545","565","582"]}
];

var i, theContainer, theSelect, numOptions, anOption, theSelectAbg, theContainerAbg, numOptionsAbg, onceFocussed;


// Create the container <div> 
theContainer = document.createElement('div');
theContainer.id = 'my_new_div_kst';

theContainerAbg = document.createElement('div');
theContainerAbg.id = 'my_new_div_abg';

// Create the <select>
theSelect = document.createElement('select');

theSelectAbg = document.createElement('select');

// Give the <select> some attributes
theSelect.name = 'name_of_kst';
theSelect.id = 'id_of_kst';
theSelect.className = 'class_of_kst';

theSelectAbg.name = 'name_of_abg';
theSelectAbg.onfocus= 'this.selectedIndex = -1;'
theSelectAbg.id = 'id_of_abg';
theSelectAbg.className = 'class_of_abg';

// Define something to do onChange
theSelect.onchange = function () {
    // Do whatever you want to do when the select changes
    //alert('You selected option '+this.value);
	if (theSelect.value != 0) {
		populateAbg(this);
		theSelectAbg.selectedIndex = -1;

	}
	var linkShow = document.getElementById('idp');
	linkShow.hidden = true;
};

theSelect.onfocus =  function () {
	this.selectedIndex = -1;
	if (!onceFocussed) {
		theSelect.remove(theSelect.length-1);
		onceFocussed = true;
	}
	var linkShow = document.getElementById('idp');
	linkShow.hidden = true;
}

theSelectAbg.onfocus =  function () {
	this.selectedIndex = -1;
}

theSelectAbg.onchange = function () {
    // Do whatever you want to do when the select changes
    //alert('You selected option '+this.value);
	if (theSelectAbg.value != 0) {
		showBookmarklet();
	}
	//document.getElementById('idBtn').hidden = false;
}; 


// Add some <option>s
numOptions = kst.length;
for (i = 0; i < numOptions; i++) {
    anOption = document.createElement('option');
    anOption.value = kst[i].key;
    anOption.innerHTML = kst[i].description;
    theSelect.appendChild(anOption);
}
    anOption = document.createElement('option');
    anOption.value = 0;
    anOption.selected = true;
    anOption.innerHTML = 'select KST!';
    theSelect.appendChild(anOption);

// Add <option> to abg
anOption = document.createElement('option');
anOption.value = 0;
anOption.innerHTML = 'select KST first!';
theSelectAbg.appendChild(anOption);

// clear and re-Add <option>s to abg
function populateAbg(changedSelect) {
	while(theSelectAbg.options.length > 0)theSelectAbg.remove(0);
	
	// search for allowed vals
	var allowedValues = [];
	for (i = 0; i < buchungsMatrix.length; i++) {
		if (changedSelect.value === buchungsMatrix[i].key) {
			allowedValues = buchungsMatrix[i].allowedVals;
		}
	}

	numOptionsAbg = abg.length;
	for (i = 0; i < numOptionsAbg; i++) {
		if (allowedValues.indexOf(abg[i].key) != -1) {
			anOption = document.createElement('option');
			anOption.value = abg[i].key;
			anOption.id = abg[i].shortname;
			anOption.innerHTML = abg[i].description;
			theSelectAbg.appendChild(anOption);
		}
	}
}

function showBookmarklet() {
	var linkShow = document.getElementById('idLinkShow');
	linkShow.hidden = false;
	/* map should only be used in extreme cases, but here it works magic! see:
	http://stackoverflow.com/questions/8668174/indexof-method-in-an-object-array
	*/
	var posKst = kst.map(function(e) { return e.key; }).indexOf(theSelect.value);
	var posAbg = abg.map(function(e) { return e.key; }).indexOf(theSelectAbg.value);
	linkShow.textContent = kst[posKst].shortname + "_" + abg[posAbg].shortname;
	document.getElementById('idp').hidden=false;
	
		
	var bookmarkLink = "javascript:function Func1(){var iframe=document.getElementById('lower');var innerDoc=iframe.contentDocument||iframe.contentWindow.document;var elm=innerDoc.getElementById('ok');elm.focus();simulateClick(elm);return;}function Func2(){var iframe=document.getElementById('app');var innerDoc=iframe.contentDocument||iframe.contentWindow.document;var elms=innerDoc.getElementsByClassName('p1006infotableicons');var elm;for(var i=0;i<elms.length;i++){if(elms[i].title=='n%C3%A4chste Tagesansicht'){elm=elms[i];break;}}elm.focus();simulateClick(elm);return;}function simulateClick(elm){var evt=document.createEvent('MouseEvents');evt.initMouseEvent('click',true,true,window,0,0,0,0,0,false,false,false,false,0,null);var canceled=!elm.dispatchEvent(evt);if(canceled){}else{}return;}function doIt(){var iframe=document.getElementById('app');var innerDoc=iframe.contentDocument||iframe.contentWindow.document;var cell,cell1,cell2;if(cell=innerDoc.getElementsByName('p0104')){cell[0].value='++.++';}if(cell1=innerDoc.getElementById('IM')){cell1.value=";
	bookmarkLink = bookmarkLink + theSelect.value;
	bookmarkLink = bookmarkLink + ";}if(cell2 = innerDoc.getElementsByName('p0706')){cell2.value=";
	bookmarkLink = bookmarkLink + theSelectAbg.value;
	bookmarkLink = bookmarkLink + ";}setTimeout('Func1()',250);setTimeout(function(){Func2();},2000);}doIt();void(null);";
	
	linkShow.href = bookmarkLink;
	
}

// Add the <div> to the DOM, then add the <select> to the <div>
function doIt(){
//kst containers
document.getElementById('container_for_kst').appendChild(theContainer);
theContainer.appendChild(theSelect);

// arbeitsgang containers
document.getElementById('container_for_abg').appendChild(theContainerAbg);
theContainerAbg.appendChild(theSelectAbg);
}

