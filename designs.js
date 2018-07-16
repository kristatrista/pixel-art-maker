// Select color input
console.log($('#colorPicker').val());

// Select size input
console.log($('#inputHeight').val());
console.log($('#inputWidth').val());

//submit button
$('input[type="submit"]').on('click',function(event){
  event.preventDefault();

  const height = $('#inputHeight').val();
  const width = $('#inputWidth').val();

  $('#pixelCanvas').empty();
  makeGrid(height,width);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(height,width) {
console.log(height,width);
// Your code goes here!

// for number up to height
for(let i = 0; i < height; i++){
// create a row
$('#pixelCanvas').append($('<tr></tr>'));
//for number up to width
for(let j = 0; j <width; j++){
// add td to row
$('tr').last().append($('<td></td>'));
}
}
//color square when clicked function
$('#pixelCanvas').on('click','td',function(){
  //change bg  color of event target
  $(this).css('background-color',$('#colorPicker').val());

})
}
