// Create a function that takes an array and returns the types of values (data types) in a new array.

function newarray(arr) {
    newarr=[];
    for(i=0;i<arr.length;i++) {
        newarr[i]=typeof(arr[i]);
    }
    console.log(newarr);
}
arr=[1, 2, "null", []];
newarray(arr);

// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterArray(arr) {
    newarr=[]
    index=0;
    for(i=0;i<arr.length;i++) {
        if(typeof(arr[i])!='string') {
            newarr[index]=arr[i];
            index++;
        }
    }
    console.log(newarr);
}
filterArray([1, 2, "a", "b"]);
filterArray([1, "a", "b", 0, 15]);
filterArray([1, 2, "aasf", "1", "123", 123]);
