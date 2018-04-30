//Initialize Firebase
var config = {
    apiKey: "AIzaSyBWVGA-iPaWFIKiE3OcbpzMR69K0XNk0yA",
    authDomain: "contact-form-11c62.firebaseapp.com",
    databaseURL: "https://contact-form-11c62.firebaseio.com",
    projectId: "contact-form-11c62",
    storageBucket: "contact-form-11c62.appspot.com",
    messagingSenderId: "80479834651"
  };
  firebase.initializeApp(config);

//Refernce Messages
var messagesRef = firebase.database().ref('messages');


// Listen for submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(a) {
	a.preventDefault();
	
	//Get Values
	var name=getInputVal('name');
	var email=getInputVal('email');
	var phone=getInputVal('phone');
	var message=getInputVal('message');

	// save message
	saveMessage(name, email, phone, message)

	//Show alert
	document.querySelector('.alert').style.display = 'block';

	//Hide Alert after time
	setTimeout(function(){
		document.querySelector('.alert').style.display = 'none';
	},5000);

	//Clear form
	document.getElementById('contactForm').reset();

}

// Function to get form value
function getInputVal(id) {
	return document.getElementById(id).value;
}

//Save the message to firebase

function saveMessage(name, email, phone, message){
	var newMessagesRef = messagesRef.push();
	newMessagesRef.set({
		name: name,
		email: email,
		phone: phone,
		message: message
	});
}