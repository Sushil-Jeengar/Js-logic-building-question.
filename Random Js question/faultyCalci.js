// faulty calculator, only give right answers 10% of time

let a=10;
let b=20;

let c = Math.random();

console.log(c);

let calci = (a,b) => {
    if(c>0.1){
        console.log("no 1 + no 2 = ", a+b);
        console.log("no 1 - no 2 = ", a-b);
        console.log("no 1 * no 2 = ", a*b);
        console.log("no 1 / no 2 = ", a/b);
    }
    else{
        console.log("no 1 + no 2 = ", a-b);
        console.log("no 1 - no 2 = ", a/b);
        console.log("no 1 * no 2 = ", a+b);
        console.log("no 1 / no 2 = ", a**b);
    }
}

calci(a,b);
