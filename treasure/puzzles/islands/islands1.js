var row = [1,2,4,5,5,6,8,9];
var col = [2,3,6,1,9,4,7,8];
var num = [3,5,2,6,4,2,8,4];

for(var i=0;i<row.length;i++)
{
	$('#islandsMazeR'+row[i]+'C'+col[i]+'').removeClass('blankcell');
	$('#islandsMazeR'+row[i]+'C'+col[i]+'').removeClass('default');
	$('#islandsMazeR'+row[i]+'C'+col[i]+'').addClass('ncell');
	$('#islandsMazeR'+row[i]+'C'+col[i]+'').text(num[i]);
}

$('.blankcell').click( function(){
	if($(this).hasClass('default')) 
	{
		$(this).removeClass('default');
		$(this).addClass('blue');
	}
	else if($(this).hasClass('blue')) 
	{
		$(this).removeClass('blue');
		$(this).addClass('white');
	}
	else if($(this).hasClass('white')) 
	{
		$(this).removeClass('white');
		$(this).addClass('default');
	};
	checkDynamic();
});

var ansWhiteRow = [1,2,2,2,2,2,2,3,4,4,4,4,4,5,6,6,6,7,7,8,8,8,8,8,8,9];
var ansWhiteCol = [1,1,4,5,6,7,9,9,2,3,4,7,9,2,2,5,7,7,9,2,3,4,5,6,9,9];

function check() {
	correct=1;

	for(var i=0;i<ansWhiteRow.length;i++)
	{
		if($('#islandsMazeR'+ansWhiteRow[i]+'C'+ansWhiteCol[i]+'').hasClass('white'))
		{
			
		}else {
			correct=0;
			break;
		};
	}
	if(correct) {
		var whiteCells = document.querySelectorAll('.white');
		// var defaultCells = document.querySelectorAll('.default');
		if(whiteCells.length != ansWhiteRow.length)
			correct = 0;
	}
	if(correct)
		alert('Congrats');
	else
		alert('Its not done yet!');
}

function checkDynamic() {
	correct=1;

	for(var i=0;i<ansWhiteRow.length;i++)
	{
		if($('#islandsMazeR'+ansWhiteRow[i]+'C'+ansWhiteCol[i]+'').hasClass('white'))
		{
			
		}else {
			correct=0;
			break;
		};
	}
	if(correct) {
		var whiteCells = document.querySelectorAll('.white');
		// var defaultCells = document.querySelectorAll('.default');
		if(whiteCells.length != ansWhiteRow.length)
			correct = 0;
	}
	if(correct)
	{
		solved(300,51);

	}
}
