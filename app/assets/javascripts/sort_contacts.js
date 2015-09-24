$(document).ready(function(){
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
})
