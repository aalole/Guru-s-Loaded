const formValidation = () => {
  let userName = document.getElementById('uname').value; 
  let password = document.getElementById('password').value;
//   let innerTextContent = document.getElementsByClassName('innerTextArea');

  if (userName ==""){
     document.getElementById("uBlank").innerHTML ="please enter your username. username must be longer than six characters";
  }else if(userName !=""){
    document.getElementById("uBlank").innerHTML= "";
  }
   if(password ==""){
    document.getElementById("pBlank").innerHTML="please enter your password";
  }else if(password !="") {
    document.getElementById("pBlank").innerHTML="";
  }else 
    window.location = ('dashboard.html');
}
formValidation(); 