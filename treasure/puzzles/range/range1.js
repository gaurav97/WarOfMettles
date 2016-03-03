var row = [1,1,2,2,4,4,4,4,6,6,7,7];
var col = [1,4,2,6,1,2,7,8,3,7,5,8];
var num = [5,8,2,6,4,5,5,9,6,4,8,7];

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

var ansBlackRow = [1,2,2,2,3,3,4,4,5,6,6,7];
var ansBlackCol = [6,1,3,5,2,7,3,5,4,1,6,7];


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
		solved(500,31);

	}
}