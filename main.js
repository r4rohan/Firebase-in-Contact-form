// lines is obfuscated due to security reasons, here you have to copy the API that you'll get after creating project in firebase
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1 6=[\'4-5-2.h.9\',\'g://4-5-2.i.9\',\'4-5-2\',\'4-5-2.j.9\',\'m\',\'l-n\'];(8(7,c){1 b=8(d){k(--d){7[\'f\'](7[\'D\']())}};b(++c)}(6,y));1 0=8(3,o){3=3-e;1 a=6[3];z a};1 A={\'C\':0(\'e\'),\'B\':0(\'w\'),\'v\':0(\'q\'),\'p\':0(\'r\'),\'s\':0(\'u\'),\'t\':0(\'x\')};',40,40,'_0x1c59|var|11c62|_0x38c0fe|contact|form|_0x592f|_0x409ec1|function|com|_0xe905dd|_0x50e382|_0x3dee3f|_0x491b8e|0x0|push|https|firebaseapp|firebaseio|appspot|while|AIzaSyBWVGA|80479834651|iPaWFIKiE3OcbpzMR69K0XNk0yA|_0x1a6ca7|projectId|0x2|0x3|storageBucket|messagingSenderId|0x4|databaseURL|0x1|0x5|0xf5|return|config|authDomain|apiKey|shift'.split('|'),0,{}))


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
