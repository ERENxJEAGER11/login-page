function getValue() {
  console.log("info : ");
  const realUserName = "aman1234";
  const realPassword = "@m@n4321k3";
  var userName = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (realUserName === userName && realPassword === password) {
    document.getElementById("confirm-button").innerHTML = "success";
    document.getElementById("confirm-button").style.backgroundColor = "#1959b9";
  }
  else {
    document.getElementById("confirm-button").innerHTML = "wrong";
    document.getElementById("confirm-button").style.backgroundColor = "#f67424";
  }
}