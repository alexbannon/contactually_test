// $(".edit").click(function(){
//   //grab contact info and make editable
//   var contact_id = parseInt($(this).parent().children().eq(2).html())
//
//   var first_name = $(this).parent().children().eq(3).html()
//   $(this).parent().children().eq(3).html("<input type='text' name='contact[first_name]' value='"+first_name+"'>")
//
//   var last_name = $(this).parent().children().eq(4).html()
//   $(this).parent().children().eq(4).html("<input type='text' name='contact[last_name]' value='"+last_name+"'>")
//
//   var email_address = $(this).parent().children().eq(5).html()
//   $(this).parent().children().eq(5).html("<input type='text' name='contact[email_address]' value='"+email_address+"'>")
//
//   var phone_number = $(this).parent().children().eq(6).html()
//   $(this).parent().children().eq(6).html("<input type='text' name='contact[phone_number]' value='"+phone_number+"'>")
//
//   var company_name = $(this).parent().children().eq(7).html()
//   $(this).parent().children().eq(7).html("<input type='text' name='contact[company_name]' value='"+company_name+"'>")
//
//   //change edit to submit
//   $(this).attr("class", "submit");
//   $(this).html("Submit")
//
//   console.log(contact_id, first_name, last_name, email_address, phone_number, company_name)
//
// })
