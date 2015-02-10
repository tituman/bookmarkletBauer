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
	for (var i = 0; i < elms.length; i++) {
		if (elms[i].title == 'nächste Tagesansicht') {
			elm = elms[i];
			break;
		}
	}
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
		}
		else {
			if (cell[0].value === '') {
			return i;
			}
		}
	}
}
function findWorkedTime() {
	var iframe = document.getElementById('app');
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
	var elms = innerDoc.getElementsByClassName('p1007scopeinfotable');
	var table = elms[1].getElementsByTagName('td');
		
	return parseFloat(table[3].innerText.split('/')[1]);
}
function fillCell(innerDoc, workedTime, kst, abg) {
	var n = workedTime + '';
	while(n.length < 4){
		n = n+'0';
	}
	var cell1,
		cell2,
		cell3;
	/* find next empty cell and write our time */
	var p0 = 'p0';
	var cell1name = 4;
	var cell2name = 5;
	var cell3name = 6;
	
	var emptyCellNumber = findNextemptyCell(innerDoc);
	if (emptyCellNumber < 1 || emptyCellNumber > 7) {
		alert('cell error!');
		return;
	}
	
	if (cell1 = innerDoc.getElementsByName(p0 + (cell1name + (emptyCellNumber * 100)))) {
		cell1[0].value = n;
	}
	if (cell2 = innerDoc.getElementsByName(p0 + (cell2name + (emptyCellNumber * 100)))) {
		cell2[1].value = kst;
	}
	if (cell3 = innerDoc.getElementsByName(p0 + (cell3name + (emptyCellNumber * 100)))) {
		cell3[1].value = abg;
	}
}
function doIt() {
	workedTime = findWorkedTime();
	workedDiv = Number((workedTime / 5).toFixed(2));
	var iframe = document.getElementById('app');
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
	
	fillCell(innerDoc, workedDiv, '101894720030 ', '565');
	fillCell(innerDoc, workedDiv, '101894740030  ', '565');
	fillCell(innerDoc, workedDiv, '101894760030  ', '565');
	fillCell(innerDoc, workedDiv, '101895020010  ', '565');
	fillCell(innerDoc, '++.++', '101894750030  ', '565');
	
	setTimeout('Func1()', 750);
	setTimeout(function () {
		Func2();
	}, 2000);
	
}
doIt();
void(null);

