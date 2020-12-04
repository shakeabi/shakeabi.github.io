const contactFormSubmit = ()=>{
  document.getElementById("contactSubmitBtn").setAttribute("value","Sending...");
  $.post("https://script.google.com/macros/s/AKfycbyBEgQL6yY5bC999gP3J6AsroGhBf5xihrxALI/exec",$('#gform').serialize(),()=>{alert('Your request has been submitted successfully!');document.getElementById("gform").reset();document.getElementById("contactSubmitBtn").setAttribute("value","Send");});
  return false;
}