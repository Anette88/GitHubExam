
function validateForm() {
	
 		var x = document.forms["myForm"]["fullName"].value;
 		var fnamew = document.getElementById('fullNameError').innerHTML;
 		if (x == "") {
   		alert(fnamew);
   		return false;
  }
		
		const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var validateEmail = emailPattern.test(document.getElementById('email').value);
		var emailw = document.getElementById('emailError').innerHTML;
		
		if (validateEmail !== true) {
			alert(emailw);
			return false;
		}	
		
		var y = document.forms["myForm"]["message"].value;
 		var messagew = document.getElementById('messageError').innerHTML;
 		if (y == "") {
   		alert(messagew);
   		return false;
  }
			alert("Your message has been sent. Thank you.")
}
	
	
