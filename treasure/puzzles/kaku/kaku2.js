//var row = [1,2,3,4,5,6,7,8,9,9,9,9,9,9,9,9];
//var col = [9,9,9,9,9,9,9,9,1,2,3,4,5,6,7,8];
//var num = [6,11,27,35,11,27,3,17,16,32,20,7,10,15,21,22];

//medium
var row = [1,2,3,4,5,6,7,8,9,9,9,9,9,9,9,9];
var col = [9,9,9,9,9,9,9,9,1,2,3,4,5,6,7,8];
var num = [5,26,6,22,'?','?','?','?',1,13,18,36,28,21,19,23];

//hard
// var row = [1,2,3,4,5,6,7,8,9,9,9,9,9,9,9,9];
// var col = [9,9,9,9,9,9,9,9,1,2,3,4,5,6,7,8];
// var num = [11,35,3,23,17,13,33,13,'?','?',12,10,'?','?',10,32];


for(var i=0;i<16;i++)
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


var KakuansRow = [1,1,2,2,2,2,2,3,3,4,4,4,4,4,5,5,5,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8];
var KakuansCol = [1,4,3,4,5,6,8,2,4,2,3,4,6,7,3,4,5,2,4,5,8,3,4,5,6,7,8,4,5,6,7,8];




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
		solved(300,22);

	}
}
