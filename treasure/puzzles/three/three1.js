var fixBlueRow = [1,1,2,3,4,5,6,6,6];
var fixBlueCol = [1,6,2,6,2,5,1,4,6];
var fixWhiteRow = [1,3];
var fixWhiteCol = [3,3];

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

var ansWhiteRow = [1,1,2,2,2,3,3,4,4,4,5,5,5,6,6,6];
var ansWhiteCol = [2,5,1,4,6,2,5,1,4,6,1,4,6,2,3,5];




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
		solved(200,41);
}