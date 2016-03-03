// var row = [1,2,3,4,5,6,7,8,9,9,9,9,9,9,9,9];
// var col = [9,9,9,9,9,9,9,9,1,2,3,4,5,6,7,8];
// var num = [6,11,27,35,11,27,3,17,16,32,20,7,10,15,21,22];

// alert("message");
var row0 = [2,1,2,0,3,1,1,2];
var col0 = [1,1,2,2,2,1,2,1];

var row = [2,2,2,3,3,4,4,6,7,7,7,8];
var col = [3,4,7,2,8,3,7,1,3,5,7,6];

var tentsansRow = [1,2,3,3,4,4,5,5,6,7,7,8];
var tentsansCol = [7,5,1,3,6,8,1,3,5,2,8,5];

//medium
// var row = [1,2,3,4,5,6,7,8,9,9,9,9,9,9,9,9];
// var col = [9,9,9,9,9,9,9,9,1,2,3,4,5,6,7,8];
// var num = [5,26,6,22,'?','?','?','?',1,13,18,36,28,21,19,23];

//hard
// var row = [1,2,3,4,5,6,7,8,9,9,9,9,9,9,9,9];
// var col = [9,9,9,9,9,9,9,9,1,2,3,4,5,6,7,8];
// var num = [11,35,3,23,17,13,33,13,'?','?',12,10,'?','?',10,32];


for(var i=0;i<row0.length;i++)
{
	// $('#tentsR'+0+'C'+col[i]+'').removeClass('blankcell');
	// $('#tentsR'+0+'C'+col[i]+'').addClass('white');
	var x = i+1;
	$('#tentsR0C'+x).text(row0[i]);
	// $('#tentsR0C'+x).removeClass('white');
	$('#tentsR'+x+'C0').text(col0[i]);
	// $('#tentsR'+x+'C0').removeClass('white');

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



// var tentsansRow = [1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,6,6,6,6,6,6,7,7,8,8,8];
// var tentsansCol = [1,5,1,2,3,5,3,4,5,7,8,2,3,4,5,6,7,8,2,3,6,1,2,3,6,7,8,1,2,2,7,8];

// var tentsansRow = [1,1,2,2,2,2,2,3,3,4,4,4,4,4,5,5,5,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8];
// var tentsansCol = [1,4,3,4,5,6,8,2,4,2,3,4,6,7,3,4,5,2,4,5,8,3,4,5,6,7,8,4,5,6,7,8];

// var tentsansRow = [1,1];
// var tentsansCol = [1,5];


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
		solved(300,11);
	
}
// function checkDynamic() {
// 	correct=1;

// 	for(var i=0;i<tentsansRow.length;i++)
// 	{
// 		if($('#rangeMazeR'+tentsansRow[i]+'C'+tentsansCol[i]+'').hasClass('white'))
// 		{
			
// 		}else {
// 			correct=0;
// 			break;
// 		};
// 	}
// 	if(correct) {
// 		var whiteCells = document.querySelectorAll('.white');
// 		// var defaultCells = document.querySelectorAll('.default');
// 		if(whiteCells.length != tentsansRow.length )
// 			correct = 0;
// 	}
// 	if(correct)
// 		alert('Congrats');
// }