//log in validation

function Check() {
  var nam = document.getElementById("name").value;
  var mail = document.getElementById("mail").value;
  var passw = document.getElementById("Pass").value;

  //   Condition name
  if (nam == null || nam == "") {
    document.getElementById("error-name-f").innerHTML =
      "<span style='color: red;'>Please enter your name</span>";
    setTimeout(function () {
      document.getElementById("error-name-f").innerText = "";
    }, 3000);
    return false;
  }

  //   Condition email
  if (mail == "") {
    document.getElementById("error-mail").innerHTML =
      "<span style='color: red;'>Please enter your E-mail</span>";
    setTimeout(function () {
      document.getElementById("error-mail").innerText = "";
    }, 3000);
    return false;
  } else {
    // Regular expression for validating email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      document.getElementById("error-mail").innerHTML =
        "<span style='color: red;'>Please enter a valid E-mail</span>";
      setTimeout(function () {
        document.getElementById("error-mail").innerText = "";
      }, 3000);
      return false;
    }
  }

  //   Empety Input
  if (passw == "") {
    document.getElementById("error-password").innerHTML =
      "<span style='color: red;'>Please enter your password</span>";
    setTimeout(function () {
      document.getElementById("error-password").innerText = "";
    }, 3000);
    return false;
  }
  //   Password Legth
  if (passw.length < 6) {
    document.getElementById("error-password").innerHTML =
      "<span style='color: red;'>Password must be at least 6 characters long</span>";
    setTimeout(function () {
      document.getElementById("error-password").innerText = "";
    }, 3000);
    return false;
  }

  document.querySelector(".status").style.display = "flex";
  setTimeout(function () {
    window.location.href = "Travel.html?nam=" + encodeURIComponent(nam);
  }, 4000);
  return true;
}

// function to create account Validation
function Create() {
  var nam2 = document.getElementById("name").value;
  var mail2 = document.getElementById("mail").value;
  var passw2 = document.getElementById("Pass").value;
  var confirm_Passw2 = document.getElementById("Confirm-Pass").value;
  var phone = document.getElementById("phn").value;
  //   Condition First-name
  if (nam2 == null || nam2 == "") {
    document.getElementById("error-name-f").innerHTML =
      "<span style='color: red;'>Please enter your name</span>";
    setTimeout(function () {
      document.getElementById("error-name-f").innerText = "";
    }, 3000);
    return false;
  }
  //   Condition email
  if (mail2 == "") {
    document.getElementById("error-mail").innerHTML =
      "<span style='color: red;'>Please enter your E-mail</span>";
    setTimeout(function () {
      document.getElementById("error-mail").innerText = "";
    }, 3000);
    return false;
  }
  // Regular expression for validating email
  var emailConfirm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailConfirm.test(mail2)) {
    document.getElementById("error-mail").innerHTML =
      "<span style='color: red;'>Please enter a valid E-mail</span>";
    setTimeout(function () {
      document.getElementById("error-mail").innerText = "";
    }, 3000);
    return false;
  }
  // Condtion for phone number
  if (phone === "" || phone === null) {
    document.getElementById("error-phn").innerHTML =
      "<span style='color: red;'>Please enter  phone number</span>";
    setTimeout(function () {
      document.getElementById("error-phn").innerText = "";
    }, 3000);
    return false;
  }
  if (isNaN(phone) || phone.length < 9) {
    document.getElementById("error-phn").innerHTML =
      "<span style='color: red;'>Please enter vaild phone number</span>";
    setTimeout(function () {
      document.getElementById("error-phn").innerText = "";
    }, 3000);
    return false;
  }
  //   Condition Password

  //   Empety Input
  if (passw2 == "") {
    document.getElementById("error-password").innerHTML =
      "<span style='color: red;'>Please enter your password</span>";
    setTimeout(function () {
      document.getElementById("error-password").innerText = "";
    }, 3000);
    return false;
  }
  //   Password Legth
  if (passw2.length < 6) {
    document.getElementById("error-password").innerHTML =
      "<span style='color: red;'>Password must be at least 6 characters long</span>";
    setTimeout(function () {
      document.getElementById("error-password").innerText = "";
    }, 3000);
    return false;
  }

  // confirm-password-empety
  if (confirm_Passw2 == "") {
    document.getElementById("error-Confirm-password").innerHTML =
      "<span style='color: red;'>Please confirm your password</span>";
    setTimeout(function () {
      document.getElementById("error-Confirm-password").innerText = "    ";
    }, 3000);
    return false;
  }
  // pasword not match
  if (confirm_Passw2 !== passw2) {
    document.getElementById("error-Confirm-password").innerHTML =
      "<span style='color: red;'> Passwords do not match</span>";
    setTimeout(function () {
      document.getElementById("error-Confirm-password").innerText = "";
    }, 3000);
    return false;
  }
  document.querySelector(".status").style.display = "flex";
  setTimeout(function () {
    window.location.href = "Travel.html?nam=" + encodeURIComponent(nam2);
  }, 3000);
  return true;
}

// Confirm the details
function oneStep() {
  var yourCity = document.getElementById("from-state").value;
  var tourPack = document.getElementById("inputSta").value;
  var tourDate = document.getElementById("tour-date").value;
  var tourPeople = document.getElementById("number-people").value;
  var Request = document.getElementById("Request").value;
  var checkbox = document.getElementById("checkbox");
  var lastName = document.querySelector("#last-name").value;
  var lastMail = document.querySelector("#last-mail").value;
  var lastPass = document.querySelector("#last-Pass").value;
  var paymentMethod = document.querySelector("#paymentMethod").value;
  var upi = document.querySelector("#upi").value;
  var destonation = document.querySelector(
    "#selected-destination-2"
  ).textContent;
  // Getting the current date
  var currentDate = new Date();
  // Converting the entered date string to a Date object
  var Today = new Date(tourDate);

  if (!yourCity || yourCity === "" || !isNaN(yourCity)) {
    document.getElementById("error-state").innerHTML =
      "<span style='color: red;'> Choose your State </span>";
    setTimeout(function () {
      document.getElementById("error-state").innerText = "";
    }, 3000);
  }
  if (!tourPack || tourPack === "") {
    document.getElementById("error-pack").innerHTML =
      "<span style='color: red;'> Enter your pack</span>";

    setTimeout(function () {
      document.getElementById("error-pack").innerText = "";
    }, 3000);
  }
  //   Condition for Date

  //   Empety input
  if (tourDate == "") {
    document.getElementById("error-date").innerHTML =
      "<span style='color: red;'>Please select a date</span>";
    setTimeout(function () {
      document.getElementById("error-date").innerText = "";
    }, 3000);
    return false;
  }
  //   If Same Date
  if (Today.getDay() === currentDate.getDay()) {
    document.getElementById("error-date").innerHTML =
      "<span style='color: red;'>Please select a future date for booking</span>";
    setTimeout(function () {
      document.getElementById("error-date").innerText = "";
    }, 3000);
    return false;
  }

  // If past Date
  if (Today < currentDate) {
    document.getElementById("error-date").innerHTML =
      "<span style='color: red;'>Selected date has passed</span>";
    setTimeout(function () {
      document.getElementById("error-date").innerText = "";
    }, 3000);
    return false;
  }

  // Traveler length
  if (isNaN(tourPeople) || tourPeople === "" || tourPeople < 1) {
    document.getElementById("error-number").innerHTML =
      "<span style='color: red;'>Enter People</span>";
    setTimeout(function () {
      document.getElementById("error-number").innerText = "";
    }, 3000);
    return false;
  }

  // if the special request is empty
  if (Request.trim() === "") {
    //set it to Default
    Request = "No";
  }

  // Terms and Conditions
  if (!checkbox.checked) {
    document.getElementById("error-check").innerHTML =
      "<span style='color: red;'>Please accept the Terms and Conditions</span>";
    setTimeout(function () {
      document.getElementById("error-check").innerText = "";
    }, 3000);
    return false;
  }
  // If checkbox is checked
  document.getElementById("show").style.display = "inline";

  //   Condition First-name
  if (lastName == null || lastName == "") {
    document.getElementById("error-name-last").innerHTML =
      "<span style='color: red;'>Please enter your name</span>";
    setTimeout(function () {
      document.getElementById("error-name-last").innerText = "";
    }, 3000);
    return false;
  }
  //   Condition email
  if (lastMail == "") {
    document.getElementById("error-mail").innerHTML =
      "<span style='color: red;'>Please enter your E-mail</span>";
    setTimeout(function () {
      document.getElementById("error-mail").innerText = "";
    }, 3000);
    return false;
  } else {
    // Regular expression for validating email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(lastMail)) {
      document.getElementById("last-error-mail").innerHTML =
        "<span style='color: red;'>Please enter a valid E-mail</span>";
      setTimeout(function () {
        document.getElementById("last-error-mail").innerText = "";
      }, 3000);
      return false;
    }
  }
  //   Condition Password

  //   Empety Input
  if (lastPass == "") {
    document.getElementById("error-password-last").innerHTML =
      "<span style='color: red;'>Please enter your password</span>";
    setTimeout(function () {
      document.getElementById("error-password-last").innerText = "";
    }, 3000);
    return false;
  }
  //   Password Legth
  if (lastPass.length < 6) {
    document.getElementById("error-password-last").innerHTML =
      "<span style='color: red;'>Password must be at least 6 characters long</span>";
    setTimeout(function () {
      document.getElementById("error-password-last").innerText = "";
    }, 3000);
    return false;
  }
  if (paymentMethod === "") {
    document.getElementById("error-payment").innerHTML =
      "<span style='color: red;'>Select Payment Method</span>";
    setTimeout(function () {
      document.getElementById("error-payment").innerText = "";
    }, 3000);
    return false;
  } else {
    document.getElementById("showUpi").style.display = "inline";
  }

  if (upi === "" || upi === null) {
    document.getElementById("error-upi").innerHTML =
      "<span style='color: red;'>Enter Upi Id</span>";
    setTimeout(function () {
      document.getElementById("error-upi").innerText = "";
    }, 3000);
    return false;
  }
  if (upi.indexOf("@") === -1) {
    document.getElementById("error-upi").innerHTML =
      "<span style='color: red;'>Enter Vaild UPI Id</span>";
    setTimeout(function () {
      document.getElementById("error-upi").innerText = "";
    }, 10000);
    return false;
  }
  // show wait message

  document.querySelector(".Payment-final").style.display = "flex";
  setTimeout(function () {
    document.querySelector(".Payment-final").style.display = "none";
    // after disapare the msg show this msg
    document.getElementById("error-upi").innerHTML =
      "<span style='color: green;'>Payment Confirmed </span>";
    document.querySelector(".status-final").style.display = "inline";
  }, 3000);

  setTimeout(function () {
    window.location.href =
      "Bill.html?" +
      "lastName=" +
      encodeURIComponent(lastName) +
      "&destonation=" +
      encodeURIComponent(destonation) +
      "&lastMail=" +
      encodeURIComponent(lastMail) +
      "&paymentMethod=" +
      encodeURIComponent(paymentMethod) +
      "&yourCity=" +
      encodeURIComponent(yourCity) +
      "&tourDate=" +
      encodeURIComponent(tourDate) +
      "&tourPack=" +
      encodeURIComponent(tourPack) +
      "&tourPeople=" +
      encodeURIComponent(tourPeople) +
      "&Request=" +
      encodeURIComponent(Request);
  }, 5000);
  return true;
}

// new user ID Genrate
var userID = document.querySelector("#userID");
var userID = Math.floor(Math.random() * 10000000);
document.getElementById("userID").innerText = userID;
