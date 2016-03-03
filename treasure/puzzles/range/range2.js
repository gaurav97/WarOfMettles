var row = [1,1,2,2,3,4,4,4,4,5,5,6,6,6,6,7,8,8,9,9];
var col = [3,9,2,8,8,2,9,11,12,6,7,1,2,4,11,5,5,11,4,10];
var num = [2,10,5,9,14,7,8,5,6,16,11,11,4,8,7,6,9,6,2,5];

for(var i=0;i<row.length;i++)
{
	$('#rangeMazeR'+row[i]+'C'+col[i]+'').removeClass('blankcell');
	$('#rangeMazeR'+row[i]+'C'+col[i]+'').removeClass('default');
	$('#rangeMazeR'+row[i]+'C'+col[i]+'').addClass('ncell');
	$('#rangeMazeR'+row[i]+'C'+col[i]+'').text(num[i]);
}

$('.blankcell').click( function(){
	if($(this).hasClass('default')) 
	{
		$(this).removeClass('default');
		$(this).addClass('white');
	}
	else if($(this).hasClass('white')) 
	{
		$(this).removeClass('white');
		$(this).addClass('black');
	}
	else if($(this).hasClass('black')) 
	{
		$(this).removeClass('black');
		$(this).addClass('default');
	};
	checkDynamic();
});

var ansBlackRow = [1,1,1,2,2,3,4,4,4,5,5,6,6,7,7,7,8,9,9,9,9];
var ansBlackCol = [1,4,8,3,10,12,5,7,10,2,11,5,8,2,4,10,9,3,5,7,12];



function checkDynamic() {
	correct=1;

	for(var i=0;i<ansBlackRow.length;i++)
	{
		if($('#rangeMazeR'+ansBlackRow[i]+'C'+ansBlackCol[i]+'').hasClass('black'))
		{
			
		}else {
			correct=0;
			break;
		};
	}
	if(correct) {
		var blackCells = document.querySelectorAll('.black');
		// var defaultCells = document.querySelectorAll('.default');
		if(blackCells.length != ansBlackRow.length )
			correct = 0;
	}
	if(correct)
	{
		solved(800,32);

	}
}