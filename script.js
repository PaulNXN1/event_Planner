
// day.js() code to display the date, time when the user enters the page.  

var currentDay = dayjs();
$("#currentDay").text(currentDay.format('MMM D, YYYY h:mm A'));


$(function () {
  var buttonEl = $(".saveBtn");    //general button

  //event listener, once clicked, triggers "this" in order to specify which button user hits 

  buttonEl.on('click', function(e){
  let btn = $(this);  

  var parent = btn.parent().attr("id");
  var sibling = btn.siblings("textarea").val();
  localStorage.setItem(parent,sibling);

  })

 // $('#hour-9 > textarea').val(localStorage.getItem("hour-9")); starting code - did not use.  

 // a for loop is the best / easiest way to emcompass each hour block
 

 for (var i = 8; i < 18; i++){
  $('#hour-'+ i + '> textarea').val(localStorage.getItem('hour-' + i));
}})

// need to add "if" statement to change colors


var hours = [8,9,10,11,12,13,14,15,16,17];

for (var i = 0; i < hours.length; i++){
  var Hour = hours[i];
 
 var currentHour = parseInt(currentDay.format("H"));

 
  if (currentHour < Hour){
// future
   document.getElementById("hour-" + Hour).classList.add("future");

  } else if (currentHour > Hour) {
// past

    document.getElementById("hour-" + Hour).classList.add("past");

  } else {
//Current time

document.getElementById("hour-" + Hour).classList.add("present");

  }

}



