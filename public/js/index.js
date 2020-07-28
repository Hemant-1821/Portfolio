function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("check");
  // Get the output text
  var box = document.getElementById("nav-box-2");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    box.style.transform = "scale(1)";
  } else {
    box.style.transform = "scale(0)";
  }
} 