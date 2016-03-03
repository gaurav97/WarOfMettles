var row = [3,3,4,4,6,6,7,7];
var col = [6,9,2,7,3,8,1,4];
var num = [4,5,3,8,5,2,2,3];

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

var ansWhiteRow = [1,2,2,2,2,2,2,3,4,4,5,5,5,5,6,6,6,7,8,8,8,8,8,8];
var ansWhiteCol = [9,2,4,5,6,8,9,2,4,9,3,4,6,7,2,6,9,6,1,3,4,6,7,8];


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
		solved(1200,53);

	}
}
