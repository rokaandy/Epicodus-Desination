$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var temperature = $("input#temperature").val();
    var nature = $("input#nature").val();
    var surface = $("input#surface").val();
    var color = $("input#color").val();
    var hotel = $("input#hotel").val();
  });
});
