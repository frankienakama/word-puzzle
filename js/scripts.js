$(document).ready(function() {
  $("form#puzzle").submit(function(event) {
    event.preventDefault();

    var sentenceInput = $("#sentenceInput").val();

    for(var index = 0; index < sentenceInput.length; index += 1) {        if(sentenceInput.charAt(index) === "a" || sentenceInput.charAt(index) === "e" || sentenceInput.charAt(index) === "i" || sentenceInput.charAt(index) === "o" || sentenceInput.charAt(index) === "u") {
      sentenceInput = sentenceInput.replace(sentenceInput.charAt(index), "-");
      };
    };
    $("#return").text(sentenceInput);
  });
});
