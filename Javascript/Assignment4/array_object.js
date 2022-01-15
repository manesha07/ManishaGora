// Neeta sapkota
// neha shiwakoti
// Srijana Khatiwada 
// Smrity Dhakal
// Sami Chakradhar
// Kirtee Maharjan
// Trija Thebe
// Sindhu Aryal
// Kusum Ranjitkar
// Elisha Bista
// Rachana kafle
// Barsha Maharjan
// Pooja Gurung
// Bisikha Subedi
// Kritika Baral
// Srijana Thulung

// Convert the list of names in array of object like:
// [
//     {
//       id: 1,
//       firstName: 'Neeta',
//       lastName: 'Sapkota'
//     },
//     {
//       id: 2,
//       firstName: 'Neha',
//       lastName: 'Shiwakoti'
//     }
//     ...
//   ]

// var names_array=['Neeta sapkota','neha shiwakoti','Srijana Khatiwada','Smrity Dhakal','Sami Chakradhar','Kirtee Maharjan','Trija Thebe','Sindhu Aryal','Kusum Ranjitkar','Elisha Bista','Rachana kafle','Barsha Maharjan','Pooja Gurung','Bisikha Subedi','Kritika Baral','Srijana Thulung']

// var final=[];
// var result_array={};
// for(var i=0;i<16;i++) {
//   var splitted=names_array[i].split(" ");
//   result_array.id=i;
//   result_array.firstname=splitted[0];
//   result_array.lastname=splitted[1];
//   console.log(final[i]=(result_array));
//   console.log("Itertion:"+ i);
//   console.log(final);
// }


var names = ['Neeta sapkota','neha shiwakoti','Srijana Khatiwada','Smrity Dhakal','Sami Chakradhar','Kirtee Maharjan','Trija Thebe','Sindhu Aryal','Kusum Ranjitkar','Elisha Bista','Rachana kafle','Barsha Maharjan','Pooja Gurung','Bisikha Subedi','Kritika Baral','Srijana Thulung'];
var obj = {};
final=[];
for (let i = 0; i < names.length; i++) {
  var splitted=names[i].split(" ");
    obj.id = i;
    obj.firstname=splitted[0];
    obj.lastname=splitted[1]
    final[i]=obj;
    obj={};
}

// print object
// console.log(final);

final_result=[]
names.forEach((element,index) => {
  var splitted=names[index].split(" ");
  obj.id = index;
  obj.firstname=splitted[0];
  obj.lastname=splitted[1]
  final_result[index]=obj;
  obj={};
});
// console.log(final_result);


function find(variable) {
  Countfirstletter = final_result.filter(function(value){
    return value.firstname[0]==variable;
  });
  counter=Countfirstletter.length;
  console.log("Started with '" + variable + "' :" + counter);
  console.log("Didn't Started with '" + variable + "' :" + (final_result.length-counter));
}
find("S");


new_object={};
object={};
final_result.forEach((element,index) => {
  object=element.slice();
  console.log(object);
  // new_object[index+1]=object;
  // object={};
});
console.log(new_object);
