var fixBlueRow = [2,4,5,6,7,7,8];
var fixBlueCol = [2,2,2,1,6,7,6];
var fixWhiteRow = [1,3,4,7,8,8];
var fixWhiteCol = [8,1,1,3,4,8];



for(var i=0;i<fixBlueRow.length;i++)
{
	$('#threeMazeR'+fixBlueRow[i]+'C'+fixBlueCol[i]+'').removeClass('blankcell');
	$('#threeMazeR'+fixBlueRow[i]+'C'+fixBlueCol[i]+'').removeClass('default');
	$('#threeMazeR'+fixBlueRow[i]+'C'+fixBlueCol[i]+'').addClass('fixBlueCell');
}
for(var i=0;i<fixWhiteRow.length;i++)
{
	$('#threeMazeR'+fixWhiteRow[i]+'C'+fixWhiteCol[i]+'').removeClass('blankcell');
	$('#threeMazeR'+fixWhiteRow[i]+'C'+fixWhiteCol[i]+'').removeClass('default');
	$('#threeMazeR'+fixWhiteRow[i]+'C'+fixWhiteCol[i]+'').addClass('fixWhiteCell');
}

$('.blankcell').click( function(){

	if($(this).hasClass('default')) 
	{
		$(this).removeClass('default');
		$(this).addClass('blue');
	} else if($(this).hasClass('blue')) 
	{
		$(this).removeClass('blue');
		$(this).addClass('white');
	} else if($(this).hasClass('white')) 
	{
		$(this).removeClass('white');
		$(this).addClass('default');
	};	
	checkDynamic();
}
)

var ansWhiteRow = [1,1,1,2,2,2,2,3,3,3,4,4,4,5,5,5,5,6,6,6,6,7,7,7,8,8];
var ansWhiteCol = [1,2,5,3,4,6,7,2,5,6,3,5,8,3,4,6,7,2,4,6,7,1,5,8,2,7];



function checkDynamic() {
	correct=1;

	for(var i=0;i<ansWhiteRow.length;i++)
	{
		if($('#threeMazeR'+ansWhiteRow[i]+'C'+ansWhiteCol[i]+'').hasClass('white'))
		{
			
		}else {
			correct=0;
			break;
		};
	}
	if(correct) {
		var whiteCells = document.querySelectorAll('.white');
		var defaultCells = document.querySelectorAll('.default');
		if(whiteCells.length != ansWhiteRow.length || defaultCells.length!=0)
			correct = 0;
	}
	if(correct)
		solved(300,42);
}