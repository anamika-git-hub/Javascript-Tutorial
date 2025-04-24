//-------------------Array Iteration methods

let array = ['a','b','c']

//---------------ENTRIES

let entry = array.entries();
for(let a of entry){
    console.log(a); // output: [ 0, 'a' ] [ 1, 'b' ] [ 2, 'c' ]
}

//-------------KEYS

let key = array.keys();
for(let a of key){
    console.log(a);// output: 0 1 2
}

//-------------VALUES

let value = array.values();
for(let a of value){
    console.log(a);// output: a b c
}
