$(document).ready(function(){
  var speed = 500;                //slide switch speed
  var autoSwitch = true;          //autoSwitch option
  var autoSpeed = 4000;           //autoSwitch speed

  //set the initial active status
  $(".slider").first().addClass("active");
  $(".slider").hide(); //first hide then show, or else nothing will show.
  $(".active").show();

  //set the next scroll
  $("#next").on("click", showNext);

  //set the prev scroll
  $("#prev").on("click", showPrev);

  //set the autoSwitch
  if(autoSwitch == true){
    setInterval(showNext,autoSpeed);
  };

  //function for next
  function showNext(){
    $(".active").removeClass("active").addClass("oldActive");
    $(".oldActive").fadeOut(speed);
    if($(".oldActive").is(":last-child")){
      $(".slider").first().addClass("active");
    }else{
      $(".oldActive").next().addClass("active");
    }
    $(".active").fadeIn(speed);
    $(".oldActive").removeClass("oldActive");
  };

  //function for previous
  function showPrev(){
    $(".active").removeClass("active").addClass("oldActive");
    $(".oldActive").fadeOut(speed);
    if($(".oldActive").is(":first-child")){
      $(".slider").last().addClass("active");
    }else{
      $(".oldActive").prev().addClass("active");
    }
    $(".active").fadeIn(speed);
    $(".oldActive").removeClass("oldActive");
  };
})
