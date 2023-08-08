function validate(){
    let user=document.getElementById("uname");
    let pass=document.getElementById("pass");
    if(user.value.trim==""){
        alert("Blank Username")
        user.style.border="1px solid red"
        return false
    }
    else if(pass.value.trim()==""){
        alert("BlankPassword")
        pass.style.border="1px solid red"
        return false
    }
  if(user.value.trim().length<6){
        alert("The Username is Too Short")
        user.style.border="1px solid red"
        return false
    }
   else if(pass.value.trim().length<7){
        alert("The Password is Too Short")
        pass.style.border="1px solid red"
        return false
    }
    
        user.style.border="none"
        pass.style.border="none"
        return true
}