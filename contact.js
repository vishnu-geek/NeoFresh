const firebaseConfig = {
  apiKey: "AIzaSyDNlCx3wkXVHLCVWiHmDrBViVOsTIw280Q",
  authDomain: "neofresh-788d3.firebaseapp.com",
  databaseURL: "https://neofresh-788d3-default-rtdb.firebaseio.com",
  projectId: "neofresh-788d3",
  storageBucket: "neofresh-788d3.appspot.com",
  messagingSenderId: "348581624475",
  appId: "1:348581624475:web:aa2e107664ea705c96643e",
  measurementId: "G-ZJMHG5QKJY",
};

// Initialising Firebase

firebase.initializeApp(firebaseConfig);

// Referencing the Database

var contactFormDB = firebase.database().ref("form");

document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var phone = getElementVal("phone");
  var message = getElementVal("message");

  saveMessage(name, email, phone, message);

  // Enable Alert
  document.querySelector(".alert").style.display = "block";

  // Remove Alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 1500);

  // Reset the Form
  document.getElementById("form").reset();
}

const saveMessage = (name, email, phone, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    Name: name,
    EmailID: email,
    Phone: phone,
    Message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
