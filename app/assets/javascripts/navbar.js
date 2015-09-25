$(document).ready(function(){
  $("#import_container").css("display", "none");
  $("#contacts_container").css("display", "none");

  $(".import_toggle").click(function(){
    $(".notice").hide();
    history.pushState({}, "", "/import")
    $("#mobile_dropdown").css("display", "none")
    $("#contacts_container").css("display", "none");
    $("#welcome_container").css("display", "none");
    $("#import_container").css("display", "block");
  })

  $(".logo").click(function(){
    $(".notice").hide();
    history.pushState({}, "", "/")
    $("#mobile_dropdown").css("display", "none")
    $("#contacts_container").css("display", "none");
    $("#welcome_container").css("display", "block");
    $("#import_container").css("display", "none");
  })

  $(".show_contacts_toggle").click(function(){
    $(".notice").hide();
    history.pushState({}, "", "/contacts")
    $("#mobile_dropdown").css("display", "none")
    $("#contacts_container").css("display", "block");
    $("#welcome_container").css("display", "none");
    $("#import_container").css("display", "none");
  })

  $("#hamburger").click(function(){
    $("#mobile_dropdown").toggle();
  })

  //fix glitch with handrolled hamburger dropdown
  $(window).resize(function(){
    if(window.innerWidth > 761){
      $("#mobile_dropdown").hide()
    }
  })
})
