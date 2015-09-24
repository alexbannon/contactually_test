$(document).ready(function(){
  $("#search_input").on("keyup", searchContacts)

  $('input[type=search]').on('search', searchContacts)

  function searchContacts(){
    clearFilterSelections();
    var input = $("#search_input").val()
    var search_term = new RegExp(input, 'i')
    var contacts = document.getElementsByClassName("contact_row");
    var forEach = Array.prototype.forEach;
    forEach.call(contacts, function(contact){

      var phone = contact.querySelector(".phone_number").innerHTML;
      var email = contact.querySelector(".email").innerHTML;
      var first_name = contact.querySelector(".first_name").innerHTML;
      var last_name = contact.querySelector(".last_name").innerHTML;
      if(phone.search(search_term) != -1){
        contact.style.display = "block"
        return
      }
      if(email.search(search_term) != -1){
        contact.style.display = "block"
        return
      }
      if(first_name.search(search_term) != -1){
        contact.style.display = "block"
        return
      }
      if(last_name.search(search_term) != -1){
        contact.style.display = "block"
        return
      }
      contact.style.display = "none"
    })
  }

  function clearFilterSelections(){
    $("#extension").attr("class", "unselected");
    $("#email_com").attr("class", "unselected");
    $("#international").attr("class", "unselected");
  }

})
