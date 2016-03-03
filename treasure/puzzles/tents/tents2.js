
var row0 = [2,1,2,1,3,1,1,1];
var col0 = [1,2,1,2,2,1,0,3];

var row = [1,2,3,3,4,4,4,5,6,7,7,8];
var col = [7,5,2,7,4,6,7,2,6,1,5,4];

var tentsansRow = [1,2,2,3,4,4,5,5,6,8,8,8];
var tentsansCol = [6,2,4,8,3,5,1,7,5,1,3,5];




for(var i=0;i<row0.length;i++)
{

	var x = i+1;
	$('#tentsR0C'+x).text(row0[i]);
	$('#tentsR'+x+'C0').text(col0[i]);

}

for (var i=0;i<row.length;i++)
{
	$('#tentsR'+row[i]+'C'+col[i]).addClass('green');
}
$('.blankcell').click( function(){
	if($(this).hasClass('default')) 
	{
		$(this).removeClass('default');
		$(this).addClass('yellow');
	}
	else if($(this).hasClass('yellow')) 
	{
		$(this).removeClass('yellow');
		$(this).addClass('white');
		
	}
	else if($(this).hasClass('white')) 
	{
		$(this).removeClass('white');
		
		$(this).addClass('default');
	};
check();
});





for(var i=0;i<tentsansRow.length;i++)
{
	$('#tentsR'+tentsansRow[i]+'C'+tentsansCol[i]).addClass('ansCell');
}

function check() {
	correct=1;

	for(var i=0;i<tentsansRow.length;i++)
	{
		if($('#tentsR'+tentsansRow[i]+'C'+tentsansCol[i]).hasClass('yellow'))
		{
			
		}else {
			correct=0;
			break;
		};
	}
	if(correct) {
		var yellowCells = document.querySelectorAll('.yellow');
		// var defaultCells = document.querySelectorAll('.default');
		if(yellowCells.length != tentsansRow.length)
			correct = 0;
	}
	if(correct)
		solved(500,12);
	
}
