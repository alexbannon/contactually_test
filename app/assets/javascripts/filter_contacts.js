$(document).ready(function(){
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
    $("#search_input").val("")
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
