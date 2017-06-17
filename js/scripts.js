$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var temperatureInput = $("input#temperature").val();
    var natureInput = $("input#nature").val();
    var surfaceInput = $("input#surface").val();
    var colorInput = $("input#color").val();
    var hotelInput = $("input#hotel").val();

    //$('')

    event.preventDefault();
  });
});
