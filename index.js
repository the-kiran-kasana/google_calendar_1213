//function* asyncData(){
//    try{
//       let result1 = yield fetchData("https://api.example.com/data1");
//        console.log(result1);
//
//        let result2 = yield fetchData("https://api.example.com/data2")
//        console.log(result2);
//
//    }catch(err){
//        console.log(err);
//    }
//}
//
//function fetchData(url){
//  return new Promise((resolve, reject) => {
//        setTimeout(() => {
//          resolve(`Data from ${url}`);
//        },1000)
//  })
//}
//
//
//
//let generator = asyncData();
//let promise = generator.next().value;
//
//promise.then((result) => generator.next(result));
//promise.then((result) => generator.next(result));
//
//
//function* generatefun(){
//     console.log("")
//}


//var list = readHugeList();
//
//var nextItemList = function(){
//    var item = list.pop();
//
//    if(item){
//      nextItemList();
//    }
//}

//var  arr1 = "john".split(``)      // ['j','o','h','n']
//var  arr2 = arr1.reverse()        // n,h,o,j
//var  arr3 = "jones".split(``)     // ['j','o','n','e','s']
//
//
//arr2.push(arr3);
//
////console.log("7 ",arr1);  //  ['n','h','o','j',['j','o','n','e','s']] // 5
////console.log("8 ",arr2);  //  ['n','h','o','j',['j','o','n','e','s']] // 5
////console.log("9 ",arr3);  //  ['j','o','n','e','s'] // 5
//
//console.log("arr1 is" ,arr1.length , "last is" , arr1.slice(-2)) //
//console.log("arr2 is" ,arr2.length , "last is" , arr2.slice(-1)) //


//(function(){
//  var a = b = 3;
//})();
//
//
//console.log(typeof a);
//console.log(typeof b);



//console.log(typeof a == `undefined`);
//console.log(typeof b == `undefined`);
//
//
//console.log(typeof a !== `undefined`);
//console.log(typeof b !== `undefined`);

//
//function FunComponent(){
//   return <p>hello that is functional components</p>
//}
//
//// props and state / both are used to mnagae the data in the react
//
//function Parent(){
//
//}
//
//
//function PropsFun(props)
//{
//  return <h1>{props.name}</h1>
//}
//

//let arr1 = [1,2]
//let arr2 = [3,4]
//
////let arr3 = arr1.concat(arr2)
//
////spread operator
//let arr3 = [...arr1 , ...arr2];
//console.log(arr3);


//// array mapping
//let arr = [1,2,3];
//let arr1 = arr.map((a) => a*2);
//console.log(arr1);

//   nullish coalescing operator
//let value = 5 !== null && 5 !== undefined ? 5 : 'default';
//let value1 =  'default' ?? 5
//let value2 =  5 ?? 'default'
//console.log(value);




//filtering

//let arr = [2,5,3,6,7,4];
//
////let value = arr.filter(function(n) {
////   return n % 2 == 0;
////})
//
//let value = arr.filter(n => n%2 == 0)
//
//console.log(value) // [2,6,4]






// array destructuring

//let arr = [1,2,3];
//let [a , b , c] = arr;
//console.log(a,b,c)


//swapping
//let a = 5 , b = 10 ;
//
//[b,a] = [a,b]
//console.log(a,b)


// rounding numbers

//let number = 22.59;
//let rounded = Math.round(number)
//console.log(rounded)






// this keyword is depend on how the function  is called , arrow function don't  bind this.

//const user = {
//   name : "kiran",
//   greet() {
//       console.log(this.name)
//   }
//}
//
//user.greet();


//
//const user = {
//   name : "kiran",
//   greet : () => {
//       console.log(this.name)
//   }
//}
//
//user.greet();



//callback function
//function fetchFun(callback)
//{
//  setTimeout(() => {
//    callback("data")
//  },1000);
//}
//
//fetchFun(value => console.log(value));




// Promise is used to reduce the callback hell

//const fetchFunc = () => {
//  return  new Promise(resolve => {
//        setTimeout(() => resolve("hello this promise") , 1000);
//    })
//}
//
//
//fetchFunc().then((res) => console.log(res));




// prototypal inheritance

//class Animal {
//   speak(){
//      console.log("animal sound")
//   }
//}
//
//console.log(typeof Animal)

//
//
//class Dog extends  Animal{
//    speak1(){
//      console.log("woof");
//    }
//}
//
//const d = new Dog()
//
//d.speak();



// console.log("first")
//
// setTimeout(() => console.log("second") , 0)
//
// console.log("third");
//
// Promise.resolve().then(() => console.log("forth"));
//
// console.log("fifth");


//
//console.log(age);
//var age = 12;


//function fetchData(callback){
//    callback("this the callback")
//}
//
//
//fetchData(data => console.log(data))



//function fetchData(){
//    return new Promise(reject => {
//       setTimeout(() => reject("this the promise is rejected"), 2000)
//    })
//}
//
//fetchData().then((res) => console.log(res))



//const name = "ram"
//console.log(name());




//function abc(){
//  return 100 + 200;
//}
//
//var abc = 10
//
//console.log(abc)

// type of class is function



//console.log(typeof typeof 100);

//const abc = [..."hari"]
//console.log(abc)
//



//console.log(parseInt("A1000"))
//console.log(parseInt("1000A"))
//console.log(parseInt("10A00"))

//event bubbling or capturing





//if([] == true){
//  console.log("kiran is absent")
//}else{
//  console.log("kiran is present")
//}

//if([]){
//  console.log("kiran is absent")
//}else{
//  console.log("kiran is present")
//}

//console.log(typeof [])

//let obj = {
//   a:{
//     b : undefined
//   }
//}
//
//console.log(obj.a?.b?.c?.d??"kiran");
//console.log(obj.a?.b?.c?.d??"kiran");

//var abc = 25;
//
//if(function fn(){}){
// abc = abc + typeof fn
//}
//console.log(typeof fn)
//console.log(abc)



//infinit currying

// tamplet litterle

//pakegae.json()  and package.lock.json()

//devDependencies & Dependencies

// express routes
// JWT

// figer tag and image tag different

//
//for(var i=0;i<3;i++){
//   setTimeout(() => {
//     console.log(i)
//   },1000)
//}



//function outer(){
//  let x = 1;
//  return () => x;
//}
//
//let fn = outer();
//console.log(fn());




//var x = 1;
//var x = 2;

//console.log(x)

//const arr = [1,2,3,4,5,6];
//arr = []



//
//const obj1 = {
//     name : "kiran",
//     age : 29,
//}
//
//const obj2 = {
//     lastname : "kasana",
//     city : "dausa",
//}
//
//const obj3 = {...obj1 ,...obj2 }
//
//console.log(obj3);

//console.log(Math.round(4.2));
//console.log(Math.round(4.6));

//console.log(Math.ceil(4.2));
//console.log(Math.ceil(4.6));


//let userName;
//let userInput;
//
//userName = userInput || "kiran kasana";
//
//console.log(userName);


//let a = 1 , b = 2;
//[a , b] = [b , a]
//
//console.log(a,b)


//clone array
// clone array with spread operator for a simpler

//let clone = {...array};

//let array = [...new Set([1,2,2,5,1,1,3,4,5])];
//
//console.log(array)

//let str = "42";
//
//let numStr = parseInt("4298")
//
//let numStr1 = -"42";
//
//console.log(numStr1);

//let count = 0
//console.log(count++)
//let value = ++count
////console.log(value)



//setImmediate(() => console.log("immediate"));
//setTimeout(() => console.log("timeout"), 0);



//
//console.log(Math.max());


const object1 = {
a: 10,
b: 20,
c: function () {
console.log(this.a + this.b);
},
};

const func = object1.c;
func(); // This will result in an error or unexpected behavior