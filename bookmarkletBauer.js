
var abg = [
{key : "MT0", description : "Seminar, Messen, Schulung", shortname: "SchulMesse"},
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
	{key : "5501384", 	allowedVals : ["150","151","545","565","582","590","592","605"]},
	{key : "5501386", 	allowedVals : ["150","151","545","565","582","590","592","605","615"]},	
	{key : "5501387", 	allowedVals : ["150","151","545","565","582","590","592","605","615"]},
	{key : "5501700", 	allowedVals : ["150","151","545","565","582","590","592","605","615"]},
	{key : "5501179", 	allowedVals : ["150","151","545","565","582","590","592","605","615"]},
	{key : "5501388", 	allowedVals : ["150","151","545","565","582","590","592","605","615"]},
	{key : "5501389", 	allowedVals : ["150","151","545","565","582","590","592","605","615"]},
	{key : "7993221", 	allowedVals : ["MT0","150","565","582"]},
	{key : "5501821", 	allowedVals : ["545","565","582"]},
	{key : "1", 		allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]}
];

var i, theContainer, theSelect, numOptions, anOption, theSelectAbg, theContainerAbg, numOptionsAbg, onceFocussed, kstManual, abgManual;


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
		abgManual = document.getElementById('idAbgManual');
		btnGetBookmarklet = document.getElementById('btnGetBookmarklet');
		btnGetBookmarklet.hidden = true;
		abgManual.type = 'hidden';		
		if (theSelect.value == 1) {
			kstManual = document.getElementById('idKstManual');
			kstManual.type = 'text';
			kstManualName = document.getElementById('idKstManualName');
			kstManualName.type = 'text';
			
			idKstManualName
		} else {
			kstManual = document.getElementById('idKstManual');
			kstManual.type = 'hidden';
			kstManualName = document.getElementById('idKstManualName');
			kstManualNAme.type = 'hidden';
		}
	}
	var linkShow = document.getElementById('idp');
	linkShow.hidden = true;
};

theSelect.onfocus =  function () {
	this.selectedIndex = -1;
	theSelectAbg.selectedIndex = -1;
	if (!onceFocussed) {
		theSelect.remove(theSelect.length-1);
		onceFocussed = true;
	}
	var linkShow = document.getElementById('idp');
	linkShow.hidden = true;
	kstManual = document.getElementById('idKstManual');
	kstManual.type = 'hidden';
	kstManualName = document.getElementById('idKstManualName');
	kstManualName.type = 'hidden';
	abgManual = document.getElementById('idAbgManual');
	btnGetBookmarklet = document.getElementById('btnGetBookmarklet');
	btnGetBookmarklet.hidden = true;
	abgManual.type = 'hidden';
}

theSelectAbg.onfocus =  function () {
	this.selectedIndex = -1;
	abgManual = document.getElementById('idAbgManual');
	btnGetBookmarklet = document.getElementById('btnGetBookmarklet');
	btnGetBookmarklet.hidden = true;
	abgManual.type = 'hidden';
}

theSelectAbg.onchange = function () {
    // Do whatever you want to do when the select changes
    //alert('You selected option '+this.value);
	if (theSelectAbg.value != 0) {
		if (theSelectAbg.value == 1) {
			//get agbManual input and button to react on change
			abgManual = document.getElementById('idAbgManual');
			btnGetBookmarklet = document.getElementById('btnGetBookmarklet');
			abgManual.onfocus = function () {
				btnGetBookmarklet.hidden = false;
			}		
			abgManual.type = 'text';
		} else {	
			abgManual = document.getElementById('idAbgManual');
			btnGetBookmarklet = document.getElementById('btnGetBookmarklet');
			btnGetBookmarklet.hidden = true;
			abgManual.type = 'hidden';		
			showBookmarklet();
		}
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
    anOption.value = 1;
    anOption.innerHTML = 'type-in manually';
    theSelect.appendChild(anOption);
	
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
	anOption = document.createElement('option');
	anOption.value = 1;
	anOption.innerHTML = 'type-in manually';
	theSelectAbg.appendChild(anOption);
	

}

function showBookmarklet() {
	var linkShow = document.getElementById('idLinkShow');
	linkShow.hidden = false;
	/* map should only be used in extreme cases, but here it works magic! see:
	http://stackoverflow.com/questions/8668174/indexof-method-in-an-object-array
	*/
	
	//handle case of manually typing in
	var posKst, kstText, kstLinkText, posAbg, abgText, abgLinkText;
	
	if (theSelect.value == 1) {
		kstLinkText = kstManual.value.toString();
		kstText = kstManualName.value.toString();
	} else {
		posKst = kst.map(function(e) { return e.key; }).indexOf(theSelect.value);
		kstLinkText = theSelect.value.toString();
		kstText = kst[posKst].shortname;
	}
	
	if (theSelectAbg.value == 1) {
		abgLinkText = abgManual.value.toString();
		abgText = abgManual.value.toString();
	} else {
		posAbg = abg.map(function(e) { return e.key; }).indexOf(theSelectAbg.value);
		abgLinkText = theSelectAbg.value.toString();
		abgText = abg[posAbg].shortname;
	}
	
	
	
	linkShow.textContent = kstText + "_" + abgText;
	document.getElementById('idp').hidden=false;
	
		
	var bookmarkLink = "javascript:function Func1(){var iframe=document.getElementById('lower');var innerDoc=iframe.contentDocument||iframe.contentWindow.document;var elm=innerDoc.getElementById('ok');elm.focus();simulateClick(elm);return;}function Func2(){var iframe=document.getElementById('app');var innerDoc=iframe.contentDocument||iframe.contentWindow.document;var elms=innerDoc.getElementsByClassName('p1006infotableicons');var elm;for(var i=0;i<elms.length;i++){if(elms[i].title=='n%C3%A4chste Tagesansicht'){elm=elms[i];break;}}elm.focus();simulateClick(elm);return;}function simulateClick(elm){var evt=document.createEvent('MouseEvents');evt.initMouseEvent('click',true,true,window,0,0,0,0,0,false,false,false,false,0,null);var canceled=!elm.dispatchEvent(evt);if(canceled){}else{}return;}function findNextemptyCell(innerDoc){var cell;var p0='p0';var emptyCellName=0;for(var i=1;i<8;i++){emptyCellName=4+(i*100);cell=innerDoc.getElementsByName(p0+emptyCellName);if(cell===null||cell=='undefined'||cell===0){return 0;}else{if(cell[0].value===''){return i;}}}}function doIt(){var iframe=document.getElementById('app');var innerDoc=iframe.contentDocument||iframe.contentWindow.document;var cell1,cell2,cell3;var p0='p0';var cell1name=4;var cell2name=5;var cell3name=6;var emptyCellNumber=findNextemptyCell(innerDoc);if(emptyCellNumber<1||emptyCellNumber>7){alert('cell error!');return;}if(cell1=innerDoc.getElementsByName(p0+(cell1name+(emptyCellNumber*100)))){cell1[0].value='++.++';}if(cell2=innerDoc.getElementsByName(p0+(cell2name+(emptyCellNumber*100)))){cell2[1].value='";
	bookmarkLink = bookmarkLink + kstLinkText;
	bookmarkLink = bookmarkLink + "';}if(cell3=innerDoc.getElementsByName(p0+(cell3name+(emptyCellNumber*100)))){cell3[1].value=";
	bookmarkLink = bookmarkLink + "'" + abgLinkText + "'";
	bookmarkLink = bookmarkLink + ";}setTimeout('Func1()',750);setTimeout(function(){Func2();},2000);}doIt();void(null);";
	
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

