$(document).ready(function(){
  $('#contactForm').submit(function(e){
    e.preventDefault();

    let name = $('#name').val().trim();
    let email = $('#email').val().trim();
    let subject = $('#subject').val().trim();
    let message = $('#message').val().trim();

    if(name === "" || email === "" || subject === "" || message === ""){
      alert("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you, " + name + "! Your message has been submitted successfully.");
    $('#contactForm')[0].reset();
  });
});
