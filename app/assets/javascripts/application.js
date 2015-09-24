// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  var addressArray = window.location.href.split("/")
  var deepLink = addressArray[3];
  console.log(deepLink)
  if(deepLink == ""){
    $("#contacts_container").css("display", "none");
    $("#welcome_container").css("display", "block");
    $("#import_container").css("display", "none");
  }
  else if(deepLink == "import"){
    $("#contacts_container").css("display", "none");
    $("#welcome_container").css("display", "none");
    $("#import_container").css("display", "block");
  }
  else if(deepLink == "contacts"){
    $("#contacts_container").css("display", "block");
    $("#welcome_container").css("display", "none");
    $("#import_container").css("display", "none");
  }
})
