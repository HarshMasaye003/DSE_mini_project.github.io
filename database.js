//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyCC-wpOXLWePflXBIFoddB_JpEc4W-i43k",
    authDomain: "hacoweb-a6382.firebaseapp.com",
    databaseURL: "https://hacoweb-a6382-default-rtdb.firebaseio.com",
    projectId: "hacoweb-a6382",
    storageBucket: "hacoweb-a6382.appspot.com",
    messagingSenderId: "452275440965",
    appId: "1:452275440965:web:a56e220e1c48a56173422c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var fbForm = firebase.database().ref('feedbackForm');

// Listen for form submit
document.getElementById('feedbackForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var first_name = getInputVal('first_name');
    var cid = getInputVal('cid');
    var c_name = getInputVal('c_name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    console.log(first_name, cid, c_name, email, message);

    // Save message
    saveMessage(first_name, cid, c_name, email, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('feedbackForm').reset();
}



// Save message to firebase
const saveMessage = (first_name, cid, c_name, email, message) => {
    var newfeedbackForm = fbForm.push();
    newfeedbackForm.set({
        first_name: first_name,
        cid: cid,
        c_name: c_name,
        email: email,
        message: message
    });
};

// Function to get get form values
const getInputVal = (id) => {
    return document.getElementById(id).value;
};
