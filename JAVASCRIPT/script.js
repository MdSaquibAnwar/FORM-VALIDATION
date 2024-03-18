let username = document.getElementById("username");
let password = document.getElementById("passwordd");
let mobileNumber = document.getElementById("mobileno");

let check = 1;
function validateform(){
   if(username.value ==""){
    document.getElementById("userError").innerHTML ="user name empty";
    check = 0;
    }
   else if(username.value.length <3){
    document.getElementById("userError").innerHTML ="user name is required min 3 char";
    check = 0;
   }
   else{
    document.getElementById("passError").innerHTML ="";
    check = 1;
   }
   
   if(mobileNumber.value ==""){
      document.getElementById("mobno").innerHTML ="mobile number is empty";
      check = 0;
   }
   else if(mobileNumber.value.length <10){
      document.getElementById("mobno").innerHTML ="your moblie number is less than 10";
      check = 0;
   } 
   else{
      document.getElementById("mobno").innerHTML ="";
      check = 1;
   }
   
   if(password.value ==""){
    document.getElementById("passError").innerHTML ="password is empty";
    check = 0;
   }
   else{
    document.getElementById("passError").innerHTML ="";
   //  check = 1;
   }
   if(check){
    return true;
   }else{
    return false;
   }
};