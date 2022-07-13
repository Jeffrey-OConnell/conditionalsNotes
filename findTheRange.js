// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let x = array[0];
let y = array[0];


// LARGEST NUMBER
for (var i = 0; i < array.length;i++){
    if (array[i] > x){
        x = array[i];
        console.log(x);
       
    }
    
}

for (var i = 0; i < array.length;i++){
    if (array[i] < y){
        y = array[i];
        console.log(y);
        
       
    }
    
}

