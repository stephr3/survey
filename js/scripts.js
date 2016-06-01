$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var fullNameinput = $("#fullName").val();
    var favDayinput = $("#favDay").val();
    var favColorinput = $("#favColor").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var favMovieinput = $("#favMovie").val();

    $(".fullName").text(fullNameinput);
    $(".favDay").text(favDayinput);
    $(".flavor").text(flavor);
    $(".favMovie").text(favMovieinput);

    $(".survey").hide();
    $(".results").show();

    $("body").css("background-color", favColorinput)
  });
});
