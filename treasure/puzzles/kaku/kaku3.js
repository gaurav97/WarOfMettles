
 var row = [1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10,10];
var col = [10,10,10,10,10,10,10,10,10,1,2,3,4,5,6,7,8,9];
var num = [32,25,39,32,41,36,7,28,10,'?',6,11,'?',21,'?',43,'?',28];


for(var i=0;i<row.length;i++)
{
	$('#KakuR'+row[i]+'C'+col[i]+'').removeClass('blankcell');
	$('#KakuR'+row[i]+'C'+col[i]+'').addClass('white');
	$('#KakuR'+row[i]+'C'+col[i]+'').text(num[i]);
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
		$(this).html("X");
	}
	else if($(this).hasClass('white')) 
	{
		$(this).removeClass('white');
		$(this).html("");
		$(this).addClass('default');
	};
	check();
});



var KakuansRow = [1,1,1,1,1,1,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,7,8,8,8,8,9,9];
var KakuansCol = [2,4,5,6,7,8,3,5,8,9,4,5,6,7,8,9,1,4,5,6,7,9,2,4,5,6,7,8,9,1,5,6,7,8,9,7,4,7,8,9,3,7];


// for(var i=0;i<KakuansRow.length;i++)
// {
// 	$('#KakuR'+KakuansRow[i]+'C'+KakuansCol[i]+'').addClass('ansCell');
// }

function check() {
	correct=1;

	for(var i=0;i<KakuansRow.length;i++)
	{
		if($('#KakuR'+KakuansRow[i]+'C'+KakuansCol[i]+'').hasClass('blue'))
		{
			
		}else {
			correct=0;
			break;
		};
	}
	if(correct) {
		var blueCells = document.querySelectorAll('.blue');
		// var defaultCells = document.querySelectorAll('.default');
		if(blueCells.length != KakuansRow.length)
			correct = 0;
	}
	if(correct)
	{
		solved(500,23);

	}
}
