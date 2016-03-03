var row = [1,1,1,2,3,3,4,4,4,4,4,5,5,6,6,7,7,7,7,7,8,8,9,10,10,10];
var col = [3,8,15,7,2,6,5,10,11,12,14,7,9,7,9,2,4,5,6,11,10,14,9,1,8,13];
var num = [5,5,2,12,12,14,4,16,11,11,10,7,5,12,9,13,15,12,15,5,16,7,9,7,3,9];

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

var ansBlackRow = [1,1,1,1,1,2,3,3,3,3,4,4,5,5,5,5,6,6,7,7,8,8,9,9,10,10,10,10];
var ansBlackCol = [2,6,9,11,14,5,1,9,13,15,3,7,5,8,12,14,3,11,9,15,2,11,4,8,2,6,10,14];



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
		solved(800,33);

	}
}