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