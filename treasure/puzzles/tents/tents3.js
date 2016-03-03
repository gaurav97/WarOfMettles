
var row0 = [5,0,5,1,3,2,2,1,4,1,1,3];
var col0 = [2,3,2,2,3,1,2,3,1,4,1,4];

var row = [1,2,2,2,2,2,3,3,5,5,6,6,6,8,8,8,8,8,10,10,10,11,11,11,11,11,12,12];
var col = [4,2,5,7,9,12,1,3,9,11,1,2,5,1,3,8,9,11,1,4,10,2,6,8,10,12,2,5];

var tentsansRow = [1,1,2,2,2,3,3,4,4,5,5,5,6,7,7,8,8,8,9,10,10,10,10,11,12,12,12,12];
var tentsansCol = [5,9,1,3,11,5,7,3,9,1,5,12,3,1,9,4,7,12,1,3,6,9,12,1,3,6,8,10];


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
		// var defaultCells = document.querySelectorAll('.default');
		if(yellowCells.length != tentsansRow.length)
			correct = 0;
	}
	if(correct)
		solved(800,13);
	
}
