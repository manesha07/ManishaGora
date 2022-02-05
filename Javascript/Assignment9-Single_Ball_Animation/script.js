var container = document.getElementById('container');
container.style = `
    width:500px;
    height:600px;
    margin:auto;
    border: 1px solid black;
    position:relative;
`;
var ball = document.getElementById('ball');
ball.style = `
    border-radius: 50%;
    background-color: red;
    height:50px;
    width:50px;
    position:absolute;
    top:100px;
    left:10px;
`;

console.log(ball,container);

var direction =1;
var Ldirection =1;

ball.addEventListener("click", function(event){
 setInterval(function () {
    var newTop = parseInt(event.target.style.top) + 5 * direction +"px";
    var newLeft = parseInt(event.target.style.left) + 2 * Ldirection +"px";
    event.target.style.top = newTop;
    event.target.style.left = newLeft;
    console.log(newTop,newLeft);

    if (parseInt(newTop) >= container.clientHeight - ball.clientHeight ) {
        direction *=-1;
    }
    if(parseInt(newTop) <= 0) {
        direction = 1;
    }
    if (parseInt(newLeft) >= container.clientWidth - ball.clientWidth )
    {
        Ldirection *=-1;
    }
    if(parseInt(newLeft) <= 0) {
        Ldirection = 1;
    }
}, 1000/60);


});
