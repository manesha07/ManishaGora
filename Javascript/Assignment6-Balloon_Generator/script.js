var maincontainer = document.createElement("div");
maincontainer.setAttribute("id","container");
document.body.appendChild(maincontainer);

//create button
var button = document.createElement("button");
button.innerHTML = "Generate Balloons"
button.style.padding = "10px";
button.style.display = "block";
button.style.marginLeft = "auto";
button.style.marginRight = "auto";
button.style.backgroundColor = "lightgreen";
maincontainer.appendChild(button);

//create box
var frame = document.createElement("div");
frame.setAttribute("id","frame")
maincontainer.appendChild(frame);
frame.style.height = "500px";
frame.style.width = "600px";
frame.style.marginTop = "20px";
frame.style.marginLeft = "auto";
frame.style.marginRight = "auto";
frame.style.position = "relative";
frame.style.border = "2px solid black";
frame.className = "frame";

const clientWidth = document.querySelector('#frame').clientWidth;
const clientHeight = document.querySelector('#frame').clientHeight;
console.log(clientWidth, clientHeight);

button.addEventListener('click', function(event) {
    var balloons = document.createElement("div");
    frame.appendChild(balloons);
    balloons.style.borderRadius = "50%";
    balloons.style.height = "10px";
    balloons.style.width = "10px";
    balloons.style.position = "absolute";
    balloons.style.top = (clientHeight-10) * Math.random() + "px";
    balloons.style.left = (clientHeight-10) * Math.random() + "px";
    
    //create random number
    balloons.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
});