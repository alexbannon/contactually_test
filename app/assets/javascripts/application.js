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
  $("#import_container").css("display", "none");
  $("#contacts_container").css("display", "none");

  $("#import_toggle").click(function(){
    $("#contacts_container").css("display", "none");
    $("#welcome_container").css("display", "none");
    $("#import_container").css("display", "block");
  })

  $("#logo").click(function(){
    $("#contacts_container").css("display", "none");
    $("#welcome_container").css("display", "block");
    $("#import_container").css("display", "none");
  })

  $("#show_contacts_toggle").click(function(){
    $("#contacts_container").css("display", "block");
    $("#welcome_container").css("display", "none");
    $("#import_container").css("display", "none");
  })


  $(".delete").click(function(){
    var self = this;
    var contact_id = parseInt($(this).parent().children().eq(1).html())
    console.log(contact_id)
    var url = "/contacts/"+contact_id
    $.ajax({
      url: url,
      dataType: "json",
      type: "DELETE"
    }).done(function(){
      $(self).parent().hide()
    })
  })



  //** Sorting DOM with jquery and vanilla js **
  $("#sort_first_name").click(function(){
    clearSortBySelections()
    $("#sort_first_name").attr("class", "selected");
    sortBy(".first_name")
  });

  $("#sort_last_name").click(function(){
    clearSortBySelections()
    $("#sort_last_name").attr("class", "selected");
    sortBy(".last_name")
  });

  $("#sort_email").click(function(){
    clearSortBySelections()
    $("#sort_email").attr("class", "selected");
    sortBy(".email")
  })

  function clearSortBySelections(){
    $("#sort_first_name").attr("class", "unselected");
    $("#sort_last_name").attr("class", "unselected");
    $("#sort_email").attr("class", "unselected");
  }

  function sortBy(query_identifier){
    console.log("sorting by "+query_identifier)
    var contactsContainer = $("#contacts_list")
    var contacts = $(".contact_row")
    contacts.sort(function(a, b){
      var an = a.querySelector(query_identifier).innerHTML
      var bn = b.querySelector(query_identifier).innerHTML

      if(an > bn) {
        return 1;
      }
      if(an < bn) {
        return -1;
      }
      return 0;
    })
    contacts.detach().appendTo(contactsContainer)
  }



  //*** filtering DOM by international #, ext, and .com ***
  function hideNumsWithoutExtension(){
    var contacts = document.getElementsByClassName("contact_row");
    var forEach = Array.prototype.forEach;
    forEach.call(contacts, function(contact){
      var phone = contact.querySelector(".phone_number").innerHTML
      if(phone.indexOf("x") == -1){
        contact.style.display = "none"
      }
      else {
        contact.style.display = "block"
      }
    })
  }

  function hideNonComEmails(){
    var contacts = document.getElementsByClassName("contact_row");
    var forEach = Array.prototype.forEach;
    forEach.call(contacts, function(contact){
      var email = contact.querySelector(".email").innerHTML
      if(email.substr(email.length - 4) != ".com"){
        contact.style.display = "none"
      }
      else {
        contact.style.display = "block"
      }
    })
  }

  //the following shows all numbers that begin with 0 or 1
  function hideNonInternationalNums(){
    var contacts = document.getElementsByClassName("contact_row");
    var forEach = Array.prototype.forEach;
    forEach.call(contacts, function(contact){
      var phone = contact.querySelector(".phone_number").innerHTML
      if(phone.substr(0, 1) == "("){
        var first_digit = phone.substr(1, 1);
        var second_digit = phone.substr(2, 1);
      }
      else{
        var first_digit = phone.substr(0, 1)
        var second_digit = phone.substr(1, 1);
      }
      if(!((first_digit == 0 || first_digit == 1) && second_digit != "-")){
        if(second_digit == "-"){
          if(phone.substr(2,1) == "0" || phone.substr(2,1) == "1"){
            contact.style.display = "block"
            return
          }
        }
        contact.style.display = "none"
      }
    })

  }

  function clearFilterSelections(){
    $("#extension").attr("class", "unselected");
    $("#email_com").attr("class", "unselected");
    $("#international").attr("class", "unselected");
  }

  function showAllContacts(){
    clearFilterSelections()
    var contacts = document.getElementsByClassName("contact_row");
    var forEach = Array.prototype.forEach;
    forEach.call(contacts, function(contact){
      contact.style.display = "block"
    })
  }

  //call function on click of 'only show' buttons and clear previous css styling

  $("#extension").click(function(){
    if($("#extension").attr("class") == "selected"){
      showAllContacts()
    }
    else{
      clearFilterSelections()
      $("#extension").attr("class", "selected")
      hideNumsWithoutExtension()
    }
  })

  $("#email_com").click(function(){
    if($("#email_com").attr("class") == "selected"){
      showAllContacts()
    }
    else{
      clearFilterSelections()
      $("#email_com").attr("class", "selected")
      hideNonComEmails()
    }
  })

  $("#international").click(function(){
    if($("#international").attr("class") == "selected"){
      showAllContacts()
    }
    else{
      clearFilterSelections()
      $("#international").attr("class", "selected")
      hideNonInternationalNums()
    }
  })

})
