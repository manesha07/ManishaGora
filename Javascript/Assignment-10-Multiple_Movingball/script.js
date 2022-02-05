function Ball(size, id) {
    this.width = size;
    this.height = size;
    this.id = id;
  
    this.create = function (container, position) {
      this.element = document.createElement("div");
      this.element.setAttribute("id", this.id);
  
      this.element.style.width = this.width + "px";
      this.element.style.height = this.height + "px";
      this.element.style.borderRadius = "50%";
      this.element.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  
      this.element.style.position = "absolute";
      this.element.style.top = position.top + "px";
      this.element.style.left = position.left + "px";
  
      this.element.addEventListener("click", function () {
        console.log("thiss",this);
        var animate = this;
        var direction =1;
        var Ldirection =1;
        (setInterval(function(that) {
            console.log("this",that);
            console.log("this bhitra",this);
            var newTop = parseInt(animate.style.top) + 5 * direction +"px";
            var newLeft = parseInt(animate.style.left) + 2 * Ldirection +"px";
            animate.style.top = newTop;
            animate.style.left = newLeft;
            console.log(newTop,newLeft);
        
            if (parseInt(newTop) >= container.clientHeight - animate.clientHeight ) {
                direction *=-1;
            }
            if(parseInt(newTop) <= 0) {
                direction = 1;
            }
            if ((parseInt(newLeft) >= container.clientWidth - animate.clientWidth ))
            {
                Ldirection *=-1;
            }
            if(parseInt(newLeft) <= 0) {
                Ldirection = 1;
            }
        }, 1000/60))(1);
      });
  
      container.appendChild(this.element);
    };
  }

  function Container(size) {
    this.size = size;
  
    this.create = function (parent) {
      this.element = document.createElement("div");
      this.element.style.width = this.size + "px";
      this.element.style.height = this.size + "px";
      this.element.style.border = "1px solid black";
      this.element.style.position = "relative";
      this.element.style.margin = "auto";
  
      parent.appendChild(this.element);
    };
  }
  // this is all to create the flexibility for OOP
var defaultBallSize = 50;
var containerSize = 600;

function position(size) {
  return {
    top: parseInt(Math.random() * size),
    left: parseInt(Math.random() * size),
  };
}

var container = new Container(containerSize);
console.log("containerrobject" + container);
container.create(document.body);

for (var i = 0; i < 10; i++) {
  var ball = new Ball(defaultBallSize, i);
  ball.create(container.element, position(containerSize - defaultBallSize));
}

console.log(ball);
console.log(container);
console.log(position(50).top);