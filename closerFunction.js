// closer is return a function//////
// normal function

function myFunction(){
    let count=0;
    return function(){
        count++;
        console.log('count',count);
    }
}
const x=myFunction()
x()
x()
const y=myFunction();
y()

// arrow Function;;

const closerFunction=()=>{
    let count=0;
    return ()=>{
        count ++;
        console.log(count);
    }
}
const p=closerFunction();
p()
p()
p();
const w=closerFunction();
w()
w()
