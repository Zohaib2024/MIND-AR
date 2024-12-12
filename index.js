function openrightsidebar() {
  document.getElementById("rightsidebar").style.width = "250px";
  document.getElementById("leftsidebar").style.width = "0";
}

function closerightsidebar() {
  document.getElementById("rightsidebar").style.width = "0";
}

function openleftsidebar() {
  document.getElementById("leftsidebar").style.width = "250px";
  document.getElementById("rightsidebar").style.width = "0";
}

function closeleftSidebar() {
  document.getElementById("leftsidebar").style.width = "0";
}

// Function named 'help' that shows an alert
function help() {
  alert("First Scan Picture and then order of your favorite product");
}
