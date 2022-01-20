// Question1
var names = ['Neeta sapkota','neha shiwakoti','Srijana Khatiwada','Smrity Dhakal','Sami Chakradhar','Kirtee Maharjan','Trija Thebe','Sindhu Aryal','Kusum Ranjitkar','Elisha Bista','Rachana kafle','Barsha Maharjan','Pooja Gurung','Bisikha Subedi','Kritika Baral','Srijana Thulung'];
var obj = {};
var final=[];
for (let i = 0; i < names.length; i++) {
  var splitted=names[i].split(" ");
    obj.id = i+1;
    obj.firstname=splitted[0];
    obj.lastname=splitted[1];
    final[i]=obj;
    obj={};
}

// print object
// console.log(final);

var final_result=[];
names.forEach((element,index) => {
  var splitted=names[index].split(" ");
  obj.id = index;
  obj.firstname=splitted[0];
  obj.lastname=splitted[1];
  final_result[index]=obj;
  obj={};
});
 console.log(final_result);

// Question 2
// Given the result of the above problem, create a function which takes a character and prints the count of first names which starts with letter that letter and which donot start with given letter.  
function find(variable) {
  Countfirstletter = final_result.filter(function(value){
    return value.firstname[0] == variable.toUpperCase();
  });
  counter=Countfirstletter.length;
  console.log("Started with '" + variable + "' :" + counter);
  console.log("Didn't Started with '" + variable + "' :" + (final_result.length-counter));
}
find("s");
find("a");

// Question 3
// Convert the array of the result in Question 1, in following format
// {
//   1: {
//     firstName: 'Neeta',
//     lastName: 'Sapkota'
//   },
//   2: {
//     firstName: 'Neha',
//     lastName: 'Shiwakoti'
//   },
//   ...
// }

var new_object={};
var object={};
final_result.forEach((element,index) => {
  object=element;
  delete object['id'];
  new_object[index+1] = object;
});
console.log(new_object);
