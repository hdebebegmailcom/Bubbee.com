function validate(){

	if(document.login.Email.value=="") {
				var er=document.getElementById("em");
			er.innerHTML="please";
				document.login.Email.focus();
				return false;
			}

			return true;      

}