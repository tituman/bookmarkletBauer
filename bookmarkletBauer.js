
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
	{key : "7993511", description : "AEC", shortname: "AEC"},
	{key : "7993221", description : "Kostenstelle", shortname: "KST"},
	{key : "5501906", description : "Solution Motion Mgmt", shortname: "SolMngmt"},
	{key : "5501907", description : "Solution Motion Dienstleistung", shortname: "SolDienstLg"},
	{key : "101894720030", description : "CN_int", shortname: "CN_int"},
	{key : "101894730030", description : "TR_int", shortname: "TR_int"},
	{key : "101895130010", description : "TTM_int", shortname: "TTM_int"},
	{key : "101894740030", description : "TW_int", shortname: "TW_int"},
	{key : "101894750030", description : "USA_int", shortname: "USA_int"},
	{key : "101894980010", description : "Ropick_int", shortname: "Ropick_int"},
	{key : "101894760030", description : "KR_int", shortname: "KR_int"},
	{key : "101894970010", description : "Pesterpac_int", shortname: "Pesterpac_int"},
	{key : "101895000010", description : "Güdel_int", shortname: "Güdel_int"},
	{key : "101895010010", description : "Novitas_int", shortname: "Novitas_int"},
	{key : "101895040010", description : "Schunk_int", shortname: "Schunk_int"},
	{key : "101895050010", description : "Gomtech_int", shortname: "Gomtech_int"},
	{key : "101895060010", description : "Sixjet AG (MABI)_int", shortname: "Sixjet AG (MABI)_int"},
	{key : "101895090010", description : "IGM_int", shortname: "IGM_int"},
	{key : "101895110010", description : "Manz_int", shortname: "Manz_int"},
	{key : "101895120010", description : "Lti Drives GmbH_int", shortname: "Lti Drives GmbH_int"},
	{key : "101941030010", description : "Hiwin GmbH_int", shortname: "Hiwin GmbH_int"},
	{key : "101895070010", description : "Felmec SRL_int", shortname: "Felmec SRL_int"},
	{key : "101895080010", description : "Comau_int", shortname: "Comau_int"},
	{key : "101895030010", description : "SACMI COOPERATIVE (Sytrama)_int", shortname: "SACMI COOPERATIVE (Sytrama)_int"},
	{key : "101894990010", description : "Maspack SRL_int", shortname: "Maspack SRL_int"},
	{key : "101895140010", description : "CMA_int", shortname: "CMA_int"},
	{key : "101895150010", description : "GEM SRL_int", shortname: "GEM SRL_int"},
	{key : "101895160010", description : "C.I.A. SRL_int", shortname: "C.I.A. SRL_int"},
	{key : "101940280010", description : "For.El SPA_int", shortname: "For.El SPA_int"},
	{key : "101895170010", description : "Motor Power Company_int", shortname: "Motor Power Company_int"},
	{key : "101942610010", description : "Tecno Pack_int", shortname: "Tecno Pack_int"},
	{key : "101895020010", description : "SP_int", shortname: "SP_int"},
	{key : "101894960010", description : "Electro AB (Blueprint)_int", shortname: "Electro AB (Blueprint)_int"},
	{key : "101895100010", description : "Natreb Brazil_int", shortname: "Natreb Brazil_int"},
	{key : "101917630010", description : "ABB Schweden_int", shortname: "ABB Schweden_int"},
	{key : "101948520010", description : "LTI Motion GmbH_int", shortname: "LTI Motion GmbH_int"},
	{key : "101977030010", description : "Technosert GmbH_int", shortname: "Technosert_int"},
	{key : "101894720040", description : "CN_ext", shortname: "CN_ext"},
	{key : "101894730040", description : "TR_ext", shortname: "TR_ext"},
	{key : "101895130020", description : "TTM_ext", shortname: "TTM_ext"},
	{key : "101894740040", description : "TW_ext", shortname: "TW_ext"},
	{key : "101894750040", description : "USA_ext", shortname: "USA_ext"},
	{key : "101894980020", description : "Ropick_ext", shortname: "Ropick_ext"},
	{key : "101894760040", description : "KR_ext", shortname: "KR_ext"},
	{key : "101894970020", description : "Pesterpac_ext", shortname: "Pesterpac_ext"},
	{key : "101895000020", description : "Güdel_ext", shortname: "Güdel_ext"},
	{key : "101895010020", description : "Novitas_ext", shortname: "Novitas_ext"},
	{key : "101895040020", description : "Schunk_ext", shortname: "Schunk_ext"},
	{key : "101895050020", description : "Gomtech_ext", shortname: "Gomtech_ext"},
	{key : "101895060020", description : "Sixjet AG (MABI)_ext", shortname: "Sixjet AG (MABI)_ext"},
	{key : "101895090020", description : "IGM_ext", shortname: "IGM_ext"},
	{key : "101895110020", description : "Manz_ext", shortname: "Manz_ext"},
	{key : "101895120020", description : "Lti Drives GmbH_ext", shortname: "Lti Drives GmbH_ext"},
	{key : "101941030020", description : "Hiwin GmbH_ext", shortname: "Hiwin GmbH_ext"},
	{key : "101895070020", description : "Felmec SRL_ext", shortname: "Felmec SRL_ext"},
	{key : "101895080020", description : "Comau_ext", shortname: "Comau_ext"},
	{key : "101895030020", description : "SACMI COOPERATIVE (Sytrama)_ext", shortname: "SACMI COOPERATIVE (Sytrama)_ext"},
	{key : "101894990020", description : "Maspack SRL_ext", shortname: "Maspack SRL_ext"},
	{key : "101895140020", description : "CMA_ext", shortname: "CMA_ext"},
	{key : "101895150020", description : "GEM SRL_ext", shortname: "GEM SRL_ext"},
	{key : "101895160020", description : "C.I.A. SRL_ext", shortname: "C.I.A. SRL_ext"},
	{key : "101940280020", description : "For.El SPA_ext", shortname: "For.El SPA_ext"},
	{key : "101895170020", description : "Motor Power Company_ext", shortname: "Motor Power Company_ext"},
	{key : "101942610020", description : "Tecno Pack_ext", shortname: "Tecno Pack_ext"},
	{key : "101895020020", description : "SP_ext", shortname: "SP_ext"},
	{key : "101894960020", description : "Electro AB (Blueprint)_ext", shortname: "Electro AB (Blueprint)_ext"},
	{key : "101895100020", description : "Natreb Brazil_ext", shortname: "Natreb Brazil_ext"},
	{key : "101917630020", description : "ABB Schweden_ext", shortname: "ABB Schweden_ext"},
	{key : "101977030020", description : "Technosert GmbH_ext", shortname: "Technosert_ext"},
	{key : "5503062", description : "Q_Kosten", shortname: "Q_kst"}
];
var kstShortname;

var buchungsMatrix = [
	{key : "7993511", 			allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "7993221", 			allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "5501906", 			allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "5501907", 			allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894720030",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894730030",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895130010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894740030",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894750030",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894980010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894760030",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894970010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895000010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895010010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895040010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895050010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895060010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895090010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895110010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895120010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101941030010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895070010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895080010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895030010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894990010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895140010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895150010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895160010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101940280010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895170010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101942610010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895020010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894960010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895100010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101917630010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101948520010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894720040",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894730040",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895130020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894740040",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894750040",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894980020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894760040",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894970020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895000020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895010020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895040020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895050020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895060020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895090020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895110020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895120020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101941030020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895070020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895080020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895030020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894990020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895140020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895150020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895160020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101940280020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895170020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101942610020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895020020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101894960020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101895100020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101917630020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101977030020",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]},
	{key : "101977030010",   	allowedVals : ["MT0","150","151","545","565","582","590","592","605","615"]}	
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
	
		
	var bookmarkLink = "javascript:function Func1(){var iframe=document.getElementById('lower');var innerDoc=iframe.contentDocument||iframe.contentWindow.document;var elm=innerDoc.getElementById('ok');elm.focus();simulateClick(elm);return;}function Func2(){var iframe=document.getElementById('app');var innerDoc=iframe.contentDocument||iframe.contentWindow.document;var elms=innerDoc.getElementsByClassName('p1006infotableicons');var elm;elm=elms[3];elm.focus();simulateClick(elm);return;}function simulateClick(elm){var evt=document.createEvent('MouseEvents');evt.initMouseEvent('click',true,true,window,0,0,0,0,0,false,false,false,false,0,null);var canceled=!elm.dispatchEvent(evt);if(canceled){}else{}return;}function findNextemptyCell(innerDoc){var cell;var p0='p0';var emptyCellName=0;for(var i=1;i<8;i++){emptyCellName=4+(i*100);cell=innerDoc.getElementsByName(p0+emptyCellName);if(cell===null||cell=='undefined'||cell===0){return 0;}else{if(cell[0].value===''){return i;}}}}function doIt(){var iframe=document.getElementById('app');var innerDoc=iframe.contentDocument||iframe.contentWindow.document;var cell1,cell2,cell3;var p0='p0';var cell1name=4;var cell2name=5;var cell3name=6;var emptyCellNumber=findNextemptyCell(innerDoc);if(emptyCellNumber<1||emptyCellNumber>7){alert('cell error!');return;}if(cell1=innerDoc.getElementsByName(p0+(cell1name+(emptyCellNumber*100)))){cell1[0].value='++.++';}if(cell2=innerDoc.getElementsByName(p0+(cell2name+(emptyCellNumber*100)))){cell2[0].value='";
	bookmarkLink = bookmarkLink + kstLinkText;
	bookmarkLink = bookmarkLink + "';}if(cell3=innerDoc.getElementsByName(p0+(cell3name+(emptyCellNumber*100)))){cell3[0].value='";
	bookmarkLink = bookmarkLink + abgLinkText;
	bookmarkLink = bookmarkLink + "';}setTimeout('Func1()',750);setTimeout(function(){Func2();},6000);}doIt();void(null);";
	
	linkShow.href = bookmarkLink;
	
}

function addTeilen(){
	
 var linkteilen = document.getElementById('idLinkTeilen');
	linkteilen.textContent = 'LaenderTeilen';
	var bookmarkLink = "javascript:function Func1(){var iframe=document.getElementById('lower');var innerDoc=iframe.contentDocument||iframe.contentWindow.document;var elm=innerDoc.getElementById('ok');elm.focus();simulateClick(elm);return;}function Func2(){var iframe=document.getElementById('app');var innerDoc=iframe.contentDocument||iframe.contentWindow.document;var elms=innerDoc.getElementsByClassName('p1006infotableicons');var elm;elm=elms[3];elm.focus();simulateClick(elm);return;}function simulateClick(elm){var evt=document.createEvent('MouseEvents');evt.initMouseEvent('click',true,true,window,0,0,0,0,0,false,false,false,false,0,null);var canceled=!elm.dispatchEvent(evt);if(canceled){}else{}return;}function findNextemptyCell(innerDoc){var cell;var p0='p0';var emptyCellName=0;for(var i=1;i<8;i++){emptyCellName=4+(i*100);cell=innerDoc.getElementsByName(p0+emptyCellName);if(cell===null||cell=='undefined'||cell===0){return 0;}else{if(cell[0].value===''){return i;}}}}function doIt(){var arbeitsgang=window.prompt('Enter your arbeitsgang (docu: 545)','545');var iframe=document.getElementById('app');var innerDoc=iframe.contentDocument||iframe.contentWindow.document;var cell1,cell2,cell3;var p0='p0';var cell1name=4;var cell2name=5;var cell3name=6;var innerDoc=iframe.contentDocument||iframe.contentWindow.document;var x=innerDoc.getElementsByClassName('p1007scopeinfotable');var istTime=parseFloat(x[1].rows[1].cells[1].outerText.split('/')[1]);var istTimeDiv4=(istTime/4.0).toFixed(2);var arrKst=['101894720030','101894750030','101894760030','5501907'];for(var i=0;i<4;i++){var emptyCellNumber=findNextemptyCell(innerDoc);if(emptyCellNumber<1||emptyCellNumber>7){alert('cell error!');return;}if(cell1=innerDoc.getElementsByName(p0+(cell1name+(emptyCellNumber*100)))){if(i==3)cell1[0].value='++.++';else cell1[0].value=istTimeDiv4;}if(cell2=innerDoc.getElementsByName(p0+(cell2name+(emptyCellNumber*100)))){cell2[0].value=arrKst[i];}if(cell3=innerDoc.getElementsByName(p0+(cell3name+(emptyCellNumber*100)))){cell3[0].value=arbeitsgang;}}setTimeout('Func1()',750);setTimeout(function(){Func2();},6000);}doIt();void(null);";
	linkteilen.href = bookmarkLink;

}

// Add the <div> to the DOM, then add the <select> to the <div>
function doIt(){
//kst containers
document.getElementById('container_for_kst').appendChild(theContainer);
theContainer.appendChild(theSelect);

// arbeitsgang containers
document.getElementById('container_for_abg').appendChild(theContainerAbg);
theContainerAbg.appendChild(theSelectAbg);

//link for laender teilen
	addTeilen();
}

