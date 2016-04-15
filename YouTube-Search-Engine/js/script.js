//searchBox expand handler
$(function(){
  //on focus event handler
  $(".keyword").on("focus",function(){
    $(this).animate({
      width:'90%' //use percentage value instead of exact px value,
                  //or the search button(as it was positioned relative) would not stay in the input area.
    },400)
  });
  //on blur event handler
  $(".keyword").on("blur",function(){
    $(this).animate({
      width:'45%'
    },400)
  });
})
