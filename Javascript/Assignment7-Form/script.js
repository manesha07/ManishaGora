var maincontainer = document.createElement("div");
maincontainer.style.margin = "auto";
maincontainer.style.fontFamily = "Open Sans";
document.body.appendChild(maincontainer);

var form = document.createElement("form");
form.name = "myForm";
form.style.width ="320px";
form.style.marginTop = "100px";
form.style.marginLeft = "auto";
form.style.marginRight = "auto";
form.style.padding = "30px 40px";
form.style.boxShadow = "0 2px 10px rgb(0 0 0 / 30%)";
form.style.borderRadius = "5px";
maincontainer.appendChild(form);

var heading =document.createElement("h2");
heading.innerHTML = "Register With Us";
heading.style.display = "block";
heading.style.textAlign = "center";
form.appendChild(heading);

var Inputs = [
    {
      name: "Username",
      placeholder: "Enter username",
      type: "text",
      errorMsg: "Username must be at least 3 characters",
      id: "username",
    },
    {
      name: "Email",
      placeholder: "Enter email",
      type: "email",
      errorMsg: "Email is not valid",
      id: "email",
    },
    {
      name: "Password",
      placeholder: "Enter password",
      type: "password",
      errorMsg: "Password must be at least 6 characters",
      id: "password",
    },
    {
      name: "Confirm_Password",
      placeholder: "Enter password again",
      type: "password",
      errorMsg: "Passwords do not match",
      id: "password2",
      errorMsg1: "Password2 is required",
    },
  ];

for (var i=0;i<Inputs.length;i++)
{
var inputDiv =document.createElement("div");

inputDiv.style.marginBottom = "10px";
inputDiv.style.paddingBottom = "10px";
form.appendChild(inputDiv);

var label = document.createElement("span");
label.classList = "label";
label.innerHTML = Inputs[i].name;

label.style.marginBottom = "5px";
label.style.display = "table";
label.style.color = "Grey";
inputDiv.appendChild(label);

var inputBox = document.createElement("input");
inputBox.type = Inputs[i].type;
inputBox.name = Inputs[i].name;
inputBox.placeholder = Inputs[i].placeholder;
inputBox.required = "true";

inputBox.style.width = "296px";
inputBox.style.padding = "10px";
inputBox.style.border = "2px solid #f0f0f0";
inputBox.style.borderRadius = "4px";
inputBox.style.fontSize = "14px";
inputDiv.appendChild(inputBox);

var small = document.createElement("span");
small.id = Inputs[i].id;
small.innerHTML = Inputs[i].errorMsg;
small.style.color = "red";
small.style.fontSize = "smaller";
small.style.visibility = "hidden";
inputDiv.appendChild(small);
}

var submit = document.createElement("button");
submit.innerHTML = "Submit";
submit.style.width = "100%";
submit.style.backgroundColor = "#3498db";
submit.style.border = "2px solid #3498db";
submit.style.color = "#ffffff";
submit.style.fontSize = "16px";
submit.style.padding = "10px";
submit.style.borderRadius = "4px";
submit.setAttribute("type", "submit");
form.appendChild(submit);

submit.addEventListener('click', function(event) {
console.log("successful");
var x = document.myForm.Username;
var y = document.getElementById("username");
    if (x.value.length < 3 || x.value == "") {
        y.style.visibility = "visible";
        x.style.border = "2px solid red";
    }
    else {
        y.style.visibility = "hidden";
        x.style.border = "2px solid #2ecc71";
    }

var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var e = document.myForm.Email;
var f = document.getElementById("email");
if(e.value == "" || e.value != emailPattern) {
    f.style.visibility = "visible";
    e.style.border = "2px solid red";
}
else {
    f.style.visibility = "hidden";
    e.style.border = "2px solid #2ecc71";
}

var v = document.myForm.Password; // password validation
forPassword =document.getElementById("password");
if (v.value.length < 6 || v.value == "") {
    forPassword.style.visibility = "visible";
    v.style.border = "2px solid red";
} 
else {
    forPassword.style.visibility = "hidden";
    v.style.border = "2px solid #2ecc71";
}

var w = document.myForm.Confirm_Password; //confirm password validation
forConfirmPassword = document.getElementById("password2");
if (w.value != v.value || w.value == "") {
    if (w.value == "") {
        forConfirmPassword.innerHTML = "Confirm Password is required";
        forConfirmPassword.style.visibility = "visible";
        w.style.border = "2px solid red";
    }
    else {
        forConfirmPassword.innerHTML = "Password2 do not match";
        forConfirmPassword.style.visibility = "visible";
        w.style.border = "2px solid red";
    }
} 
else {
    forConfirmPassword.style.visibility = "hidden";
    w.style.border = "2px solid #2ecc71";
}
});


