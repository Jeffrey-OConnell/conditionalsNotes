let array = [28, 43, -12, 30, 4, 0, -36];

let smallest = array[0];
let largest = array[0];

for (let i=0; i<array.length; i++){
    let x = array[i]
    if (x < smallest){
        smallest = x;
    } else if ( x > largest ) {
        largest = x
    }  
}
console.log(smallest, largest);