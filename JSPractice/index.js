// console.log('hello world');
// console.log("hello world");
//*******************************************************************************

// section of values and variable 
// we are using camel case in this 
//var myName = 'shriya malvi'; // var define myName is variable and under inverted comma define value :)
//console.log(myName); 

//*******************************************************************************


// var myAge =23;
// console.log(myAge); 

//*******************************************************************************

// Naming variable rules - > 
//1. you can use first charcter must be  a letter or an underscore (_) or a dollar($) . you can not use first charcter as a number  .
//2.  the remain variable name use any letter , number or underscore but can not use any other charchter or including space .
//3 .variable name are case sensitive .
//4.  no limit of variable name .
//5. you can not use of javscirpt reserve words as a varible name 

// var _myName = "shriya"; //(valid)
// console.log(_myName);
// var _1my__Name = "shriya malvi"; //(valid)
// console.log(_1my__Name);
// var 1myName ="shriya"; (NotValid)
// var $myName= "shriyaMalvi" //(valid)
// console.log($myName);

//*******************************************************************************

// they are 6 primitive datatype 
//  1. undifined : typeofInstance === "undefined" 
//  2. boolean : typeofInstance === "boolean"
//   3.Number : typeofInstance ==="number"
//   4. string : typeofInstance ==="string"
//   5.bigInt : typeofInstance ==="bigint"
//   6. symbol : typeofInstance === "symbol" 

//var myAge = 26;
 //var myAge= "shriya";
//  var myAge = true;
// console.log(typeof(myAge)); //  this is for type check of variable 

//*******************************************************************************

//console.log( 10+"20");  // its concatinate number with string because '+' symbol use for concatinaate .
//console.log( 9-"5");  //its bug becuase it illogical 
//console.log( "java"+"script");
//console.log( "shriya "-"malvi "); //NaN not a number 
// console.log(true +true ); // true represent  1 , false represent 0 so its output is 2
// console.log(true +false );  output is 1
// console.log(false - true );output is -1
// console.log(false +false); output is 0
 
//*******************************************************************************

// var My = null;
// console.log(My);
// console.log(typeof(My)) // 2 nd bug of js  null have not type but they give object 
// var MyHubby;
// console.log(MyHubby);

//*******************************************************************************

//console.log( "shriya "-"malvi "); //NaN not a number
// Nan  => 1. NaN  is nproperty of global object and  2. otherwords its is global scope variable .the initial value of NaN is "not a number " ;
//*******************************************************************************

// var myName ="shriya";
// var myNumber = 8109688116
// console.log(isNaN(myName))
// console.log(isNaN(myNumber))

//*******************************************************************************

//Expression and operater ;
//console.log(5+20) // 5 and 20 is operend  and + is operator . combination of operend and opertor called expression
 //var x=5; // = is assignment operator ;

//artmetic operator is  + = additon , - = substract ,* =multiply ,/ = devide ,% = modules 
// var x=28 , y= 5 
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log("its is give remainder "+ x%y);

//increment a++ , ++a and decrement a-- ,--a 
//postfix=  using operator after the operend called postfix 
//prefix = using operator before the operned called prefix .
 //var num =5 ;
 //var num1 =num++;
 //var num2 = ++num;
//  var num3 = num2 ;
 //console.log(num2 );

//  var num =5;
//  var num1 =num--;
//  var num2 = --num;
//  console.log(num1 , num2);


//comparision operator = its give true or false .
// var a = 30;
// var b= -10 ;
// console.log(a==b) //fasle
// console.log(a!=b) //true
// console.log(a>b)  //true
// console.log(a>=b) //true
// console.log(a<b) //false 
// console.log(a<=b) //false

// //logical operator its give also boolean value true or false 
// //logical AND = && , (logical conjuction) for all set of operand,
// //if and only if all operands are true it give true otherwise false  
// console.log(a>b && a<b && b>0)
// //logical OR = || , (logical disjunction) all set of operand .
// //if and only if all condition are false that give false otherwise it give false for any one condition is true.
// console.log(a>b || a<b || b>0)
// //logical  NOT = !, (logical complement and negation)
// //takes truth falsity and vice versa 
// console.log(!(a>b || a<b || b>0))

//string operator(concatination operator) symbol of concatination opeator(+): concates two string values togetter 
//returning another string gives union of two operand string 
//console.log("hello " + "world")

//challenge time : 
//problam 1: What value for 3**3 
//sol its perform like base or power for example a**b -> a is base or b is power 
// var a = 3**3 
// console.log("expansion operator is"+a ); 

// //problem : wap swap number  
//  var a= 10; b =5;
//  var c ;
//  var c = a; // c=10
//  var a = b; // a=5
//  var b = c; // 5
 //console.log("value of a is "+ a +" value of b is "+ b)
//problem : wap swap a number without using third variable
// var a= 5; b =10;
// var a = a+b; // 15
// var b = a-b ; //10
// var a = a-b; //5
// console.log("value of a is "+ a +" value of b is "+ b)

//  diffrence between == and === 
// == : its only check values and  ===: its check value as well as data type also . for example 
//  var numm1 =5 ;
//  var numm2 = '5';
//  console.log(numm1 == numm2) // its give #true because its check value .  
//  console.log(numm1 === numm2) //its give #false because its check value and type numm1 is number and numm2 is string thats why its give false .  

//*******************************************************************************
// condition statement :-  if... else , switch statement , while loop , do...while loop , for loop , for in loop , for of loop . conditional (ternery) operator . 
// //WAP year is leap year or not 
// var year = "2023"
// if(year%4==0)
// {
//     if(year%100==0){
//         if(year%400){
//             console.log("this year "+year+" leap year");
//         }
//         else{
//             console.log("this year "+year+" is not leap year");
//         }
//     }else{
//         console.log("this year "+year+" leap year");
//     }

// }else{
//     console.log("this year "+year+" is not leap year");
// }

//what is truthy and falsy value in javascript
//we have total 5 falsy values in javascript 0 ,"" -empty string , undefined ,null , NaN and false is false
// if(score = 0){
//     console.log("we won the game ");
// }
// else{
//     console.log("omg, we loss the game");
// }

//conditional (ternery) operator
//that take three operends .
//var variablename =condition ? value1 :value  => condition is truth execute code after question mark(?) and condition is false excute code after colon  (:) .
// var age = 24;
// if(age >=18)
// {
//     console.log("your eligible for vote");
// }
// else{
//     console.log("your not  eligible for vote");

// }
// //using ternery operator 
// (age >=18)? console.log("your eligible for vote"): console.log("your not  eligible for vote");

//WAP find are of circle , rectangle, triangle . 
// var area = "triangle"
// var l=5 , b=4 , PI = 3.142 , r=3 , s=5;
// if(area =="circle")
// {
// console.log("area of circle is " + PI*r**2)
// }else if(area =="triangle")
// {
//     console.log("area of triangle is " + (l+b)/2 )
// }else if(area =="rectangle")
// {
//     console.log("area of rectangle is " + l*b)
// }else{
//     console.log("please enter right input")
// }
 //switch statement and break statement - its terminate the loop , switch and label :-
//  var area = ""
// var l=5 , b=4 , PI = 3.142 , r=3 , s=5;
// switch(area)
// {
//     case "circle":
//         console.log("area of circle is " + PI*r**2);
//         break;
//     case "triangle":
//         console.log("area of triangle is " + (l+b)/2 );
//         break;
//     case "rectangle":
//         console.log("area of rectangle is " + l*b);
//         break;
//     case "square" :
//         console.log("area of rectangle is " + s**2);
//         break;
//     default :
//     console.log("please enter right input");
// }

//while loop 
// var num =1;
// while(num<=10)
// {
//     console.log("2 * "+ num + " = "+ num*2);
//     num++;
// }

// do{
//     console.log("3 * "+ num + " = "+ num*3);
//     num++;
// }while(num<=10)

// for(i=num; i<=10;i++){
//     console.log("4 * "+ i + " = "+ i*4);
// }

//1.  function :-  how to use fuction  ... firstly we define fuction and using fuction keyword syntax :- function  functionName(){ .... }
//and we define function once and we reuse when we need of fuction 
//for Example of function ->
// function sum(){
//     var a = 25 , b=30;
//     var c =a+b;
//     console.log(c)
// }


//2. function parameter and function arguments  . also diffrence between them 
// function sum(a, b){
//     var a1 = a;
//     var b1= b;
//     sum= a1+b1;
//     return sum;
//     //console.log(sum);
// }
//fuction expression 
// var funEx =sum(2,4);
// console.log(funEx);

//"anonymous" function expression 
// var funexp = function(a,b){
//     return total = a+b;
// }
// console.log("sum ="+funexp(5,7))

//diffrence between let and const **Introduce in modern javascript**
// var myname = "shriya malvi";
// console.log(myname);

// myname="shreehari";
// console.log(myname);

// let myName = "shriya malvi";
// console.log(myName);

// myName="shreehari";
// console.log(myName);

//in const variable value assign only once and 
//in let and var we define values many time in same variable name....  

// const Name = "shriya malvi";
// console.log(Name);

// Name="shreehari";
// console.log(Name);

// scope of var , const and let 
//var = fuction scope 
//let and const = block scope ;

// function scope(){
//     var MyFName = "SHRIYA";
//     console.log(MyFName);
//     if(true){
//         var MyLName ="MALVI";
//         console.log('In '+ MyLName);
//         console.log('inner '+MyFName);
//     }
//     console.log('EX '+ MyLName)
// }
// scope();

// function scope(){
//     let MyFName = "SHRIYA";
//     console.log(MyFName);
//     if(true){
//         const MyLName ="MALVI";
//         console.log('In '+ MyLName);
//         console.log('inner '+MyFName);
//     }
//     console.log('EX '+ MyLName)
// } // its have block scope 
// scope();

//template litralls (template string)
//WAP for  table of any number  using template litrals;

// for (let num =1;num <=10;num++)
// {
//     const tableOf =8;
//     //console.log("using traditional "+ tableOf+" * "+num+" = "+tableOf*num);
//     console.log(`using modern way ${tableOf} * ${num} = ${tableOf*num}`); //using template litrals or string 

// }