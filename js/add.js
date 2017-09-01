// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#message").on("click", function(event) {
  event.preventDefault();

  // make a newCharacter obj
  var newInfo = {
    // name from name input
    name: $("#name").val().trim(),
    // role from role input
    email: $("#email").val().trim(),
    // age from age input
    phone: $("#phone").val().trim(),
    // points from force-points input
    position: $("#position").val().trim(),

    company: $("#company").val().trim(),

    message: $("#message").val().trim()

  };
  console.log("new info", newInfo);
  // send an AJAX POST-request with jQuery
  $.post("/api/new", newInfo)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding character...");
    });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#email").val("");
  $("#phone").val("");
  $("#position").val("");
  $("#company").val("");
  $("#message").val("");

});
