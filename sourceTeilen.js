javascript : function Func1() {
	var iframe = document.getElementById('lower');
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
	var elm = innerDoc.getElementById('ok');
	elm.focus();
	simulateClick(elm);
	return;
}
function Func2() {
	var iframe = document.getElementById('app');
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
	var elms = innerDoc.getElementsByClassName('p1006infotableicons');
	var elm;
	elm = elms[3];
	elm.focus();
	simulateClick(elm);
	return;
}
function simulateClick(elm) {
	var evt = document.createEvent('MouseEvents');
	evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	var canceled = !elm.dispatchEvent(evt);
	if (canceled) {}
	else {}

	return;
}
function findNextemptyCell(innerDoc) {
	var cell;
	var p0 = 'p0';
	var emptyCellName = 0;
	for (var i = 1; i < 8; i++) {
		emptyCellName = 4 + (i * 100);
		cell = innerDoc.getElementsByName(p0 + emptyCellName);
		if (cell === null || cell == 'undefined' || cell === 0) {
			return 0;
		} else {
			if (cell[0].value === '') {
				return i;
			}
		}
	}
}
function doIt() {
	var arbeitsgang = window.prompt('Enter your arbeitsgang (docu: 545)', '545');
	var iframe = document.getElementById('app');
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
	var cell1,
	cell2,
	cell3;
	var p0 = 'p0';
	var cell1name = 4;
	var cell2name = 5;
	var cell3name = 6;
	
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
	var x = innerDoc.getElementsByClassName('p1007scopeinfotable');
	var istTime = parseFloat(x[1].rows[1].cells[1].outerText.split('/')[1]);
	var arrKst = ['101894720030','101894730030','101894740030','101894750030','101894760030','102159170010','101895020010','5503109'];
	var istTimeDiv = (istTime/arrKst.length).toFixed(2);
	for(var i=0; i<arrKst.length; i++)
	{
		var emptyCellNumber = findNextemptyCell(innerDoc);
		if (emptyCellNumber < 1 || emptyCellNumber > 7) {
			alert('cell error!');
			return;
		}
		if (cell1 = innerDoc.getElementsByName(p0 + (cell1name + (emptyCellNumber * 100)))) {
			if (i == arrKst.length-1) cell1[0].value = '++.++';
			else cell1[0].value = istTimeDiv;
		}
		if (cell2 = innerDoc.getElementsByName(p0 + (cell2name + (emptyCellNumber * 100)))) {
			cell2[0].value = arrKst[i];
		}
		if (cell3 = innerDoc.getElementsByName(p0 + (cell3name + (emptyCellNumber * 100)))) {
			cell3[0].value = arbeitsgang;
		}
	}
	setTimeout('Func1()', 750);
	setTimeout(function () {
		Func2();
	}, 3000);
}
doIt();
void(null);
