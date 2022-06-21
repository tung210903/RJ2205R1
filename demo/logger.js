const count = true ;
let countValue = new Promise((resolve,reject) =>{
    if (count){
        resolve("there is a count value");
    }else {
        reject("there is a no count value");
    }
});

console.log(countValue);