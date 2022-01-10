const burger = document.getElementById("burger");
const header = document.getElementById("header");
const links = document.querySelectorAll(".link");
const eyeIcon = document.querySelector("#show-pass");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


//slide nav
function slideNav() {
    header.classList.toggle("open-nav");
    //invoke fadelinks
    fadeLinks(links,"fadelinks");
}
//add animation to each links
function fadeLinks(links,animName){
    links.forEach((link,idx)=>{
      if(link.style.animation == ""){
        link.style.animation = `${animName} 0.8s ease-in-out forwards ${idx/7}s`;
      }else{
        link.style.animation = ``;
      }   
    })
}

function showPassword(){
     //change my password input type
   if(password.type === 'password' && password.value.length > 0){
    password.type ='text';
    password2.type ='text';
    this.classList.remove("bi-eye-fill");
    this.classList.add("bi-eye-slash-fill");
  }else{
    password.type ='password'
    this.classList.add("bi-eye-fill");
    this.classList.remove("bi-eye-slash-fill");
    password2.type ='password';
  }
}


burger.addEventListener("click",slideNav);
eyeIcon.addEventListener("click",showPassword)