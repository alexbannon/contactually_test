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

  //jquery and vanilla js sorting of DOM
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

  //filtering DOM by international #, ext, and .com
  function showOrHideNumsWithoutExtension(){
    var contacts = document.getElementsByClassName("contact_row");
    var forEach = Array.prototype.forEach;
    forEach.call(contacts, function(contact){
      var phone = contact.querySelector(".phone_number").innerHTML
      if(phone.indexOf("x") == -1){
        if(contact.style.display == "none"){
          contact.style.display = "block"
        }
        else{
          contact.style.display = "none"
        }
      }
    })
  }

  function showOrHideNonComEmails(){
    var contacts = document.getElementsByClassName("contact_row");
    var forEach = Array.prototype.forEach;
    forEach.call(contacts, function(contact){
      var email = contact.querySelector(".email").innerHTML
      if(email.substr(email.length - 4) != ".com"){
        if(contact.style.display == "none"){
          contact.style.display = "block"
        }
        else{
          contact.style.display = "none"
        }
      }
    })
  }

  function showOrHideNonInternationalNums(){
    var contacts = document.getElementsByClassName("contact_row");
    var forEach = Array.prototype.forEach;
    forEach.call(contacts, function(contact){
      var phone = contact.querySelector(".phone_number").innerHTML
      if(phone.indexOf("x") == -1){
      }
    })

  }


  function clearFilterSelections(){
    $("#extension").attr("class", "unselected");
    $("#email_com").attr("class", "unselected");
    $("#international").attr("class", "unselected");
  }


  $("#extension").click(function(){
    clearFilterSelections()
    $("#extension").attr("class", "selected")
    showOrHideNumsWithoutExtension()
  })

  $("#email_com").click(function(){
    clearFilterSelections()
    $("#email_com").attr("class", "selected")
    showOrHideNonComEmails();
  })

  $("#international").click(function(){
    clearFilterSelections()
    $("#international").attr("class", "selected")
  })

})
