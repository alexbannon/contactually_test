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
})
