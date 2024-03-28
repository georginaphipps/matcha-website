// Buy matcha button //
function buyMatcha() {
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");

    if (name && email) {
    alert("Thank you " + name + ", please check your email for matcha voucher🍵");
    } else {
    alert("Please enter your name and email address to receive matcha voucher!");
    }
  }
  let button = document.querySelector("button");
  button.addEventListener("click", buyMatcha);

  // Form //
function validateForm() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var enquiry = document.getElementById("enquiry").value;
}

  // First Name validation
  if (fname === "") {
    alert("Please enter your First Name");
    return false;
  }

  // Last Name validation
  if (lname === "") {
    alert("Please enter your Last Name");
    return false;
  }

  // Email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid Email Address");
    return false;
  }

  // Enquiry validation
  if (enquiry === "") {
    alert("Please enter your Enquiry");
    return false;
  }

  // Form validation passed, form can be submitted
  function validateForm() {
  return true;
  }

  // Gallery
  var images = document.querySelectorAll('.carousel-image');
  var currentImageIndex = 0;

  function showImage(index) {
      images[currentImageIndex].classList.remove('active');
      images[index].classList.add('active');
      currentImageIndex = index;
  }

  function nextImage() {
      var newIndex = (currentImageIndex + 1) % images.length;
      showImage(newIndex);
  }

  function previousImage() {
      var newIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(newIndex);
  }