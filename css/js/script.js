alert("hello")
console.log("time is just a stubborn illusion")


var a=5;
let b= 6;
const c =7;


console.log('a=' +a);
console.log('b=' +b);
console.log('c=' +c);

b=6;
console.log('changed b =' + b)

for(let i=0;i<3;i++)
{
    console.log(i)  
}


let skills = ["JAVA","GCP"];
console.log(skills)

//for(let i=0;i<skills.length;i++){
 //   console.log(skills(i));
//}

let expression= x => x-2
console.log(expression(6))








let cities=["ktm","bkt"];

const looper =(elements)=>elements.foreach(item => console.log(item));
looper(skills)
looper(cities)

//function looper(skillArray) {
 //   for(let i=0;i<skillArray.length;i++){
 //        console.log(skillArray[i])
 //   }
// }

//looper(skills)
//looper(cities)

function add(x,y){
    console.log(x+y)
}
add(2,3)


