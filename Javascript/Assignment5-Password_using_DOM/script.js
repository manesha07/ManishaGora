//create container
var maincontainer = document.createElement("div");
maincontainer.style.width = "70%";
maincontainer.style.margin = "auto";
document.body.appendChild(maincontainer);

//creating form
var form = document.createElement("form");
form.style.width = "260px";
form.style.marginTop ="100px";
form.style.marginLeft = "auto";
form.style.marginRight = "auto";
form.style.border = "1px solid black";
form.style.borderRadius = "2%";
form.style.padding ="30px";
maincontainer.appendChild(form);

//creating title password
var title = document.createElement("span");
title.innerText = "Password";
form.appendChild(title);

//div box for input and eye icon
var box = document.createElement("div");
box.style.position = "relative";
box.style.width ="250px";
box.style.borderRadius = "5%";
box.style.marginTop = "20px";
form.appendChild(box);

var input = document.createElement("input");
input.setAttribute("id","inputbox");
input.setAttribute("placeholder","Enter Your Password");
input.setAttribute("type","password");
input.setAttribute("required","true");
input.style.width ="210px";
input.style.paddingRight ="30px";
input.style.paddingTop = "10px";
input.style.paddingBottom = "10px";
box.appendChild(input);

var eye = document.createElement("i");
eye.className = "fa fa-eye-slash";
eye.id = "eyeToggle";
eye.style.position = "absolute";
eye.style.right ="0px";
eye.style.padding ="10px";
box.appendChild(eye);

//show and hide password
eye.addEventListener("click", function() {
    if (input.type == "password") {
        input.type = "text";
        eye.className = "fa fa-eye";
    } else {
        input.type = "password";
        eye.className = "fa fa-eye-slash";
    }
});

//div for forgotpw and next button
var content = document.createElement("div");
content.style.marginTop ="20px";
form.appendChild(content);

var forgotpw =document.createElement("a");
forgotpw.innerText = "Forget Password";
forgotpw.style.textDecoration ="none";
forgotpw.style.marginRight ="80px";
forgotpw.style.padding = "6px";
forgotpw.setAttribute("href", "#");
content.appendChild(forgotpw);

forgotpw.addEventListener("click", function(){
    input.value = "";
});

var nextbtn = document.createElement("button");
nextbtn.innerText = "Next";
nextbtn.style.border ="1px solid #6082B6";
nextbtn.style.padding = "8px";
nextbtn.style.backgroundColor = "#0047AB";
nextbtn.style.color ="white";
content.appendChild(nextbtn);

nextbtn.addEventListener("click", function(){
    console.log("successful");
});
