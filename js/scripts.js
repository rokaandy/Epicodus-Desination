$(document).ready(function() {
  $('#destination1').hide();
  $('#destination2').hide();
  $('#destination3').hide();
  $("#blanks form").submit(function(event) {
    var temperatureInput = $("input#temperature").val();
    var natureInput = $("input#nature").val();
    var surfaceInput = $("input#surface").val();
    var colorInput = $("input#color").val();
    var hotelInput = $("input#hotel").val();

    if (temperatureInput === "A" || temperatureInput === "a") {
      $('#destination1').show();
    }
    if (temperatureInput === "B" || temperatureInput === "b") {
      $('#destination2').show();
    }
    if (natureInput === "B" || temperatureInput === "b") {
      $('#destination2').show();
    }
    if (colorInput === "A" || colorInput === "a") {
      $('#destination3').show();
    }
    if (colorInput === "B" || colorInput === "b") {
      $('#destination1').show();
    }
    if (surfaceInput === "A" || surfaceInput === "a") {
      $('#destination3').show();
    }
    event.preventDefault();
  });
});
