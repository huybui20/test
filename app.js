
//B3
// a)
// for(let i=0 ; i<7 ; i++){
//     console.log(i);
// }
// b)
// let n1 = (Number)(prompt("Enter a number?"));
// for(let i=0 ; i<n1 ; i++){
//     console.log(i);
// }
// c)
// let n2 = (Number)(prompt("Enter a number?"));
// for( let i=3 ; i<n2 ; i++){
//     console.log(i);
// }
// d)
// let n3 = (Number)(prompt("Enter n"));
// let c3 = (Number)(prompt("Enter c"));
// for( let i=c3 ; i<n3 ; i++){
//     console.log(i);
// }
// e)
// let n4 = (Number)(prompt("Enter n"));
// let c4 = (Number)(prompt("Enter c"));
// for( let i=c4 ; i<n4 ; i+=3){
//     console.log(i);
// }
// f)
// let n5 = (Number)(prompt("Enter n"));
// let c5 = (Number)(prompt("Enter c"));
// let s = (Number)(prompt("Enter s"));
// for( let i=c5 ; i<n5 ; i+=s){
//     console.log(i);
// }

//B4
// let n = (Number)(prompt("Enter a number?"));
// let mul=1;
// for(let i=2; i<=n ; i++){
//     mul *= i;
// }
// console.log("The factorial of "+n+" is " + mul );

//B5
// let age = (Number)(prompt("How old are you?"));
// if(age<14){
//     console.log("You are not old enough to view this content");
// }
// else {
//     console.log("Enjoy");
// }

//B6
// let x = (Number)(prompt("Enter a number?"));
// if(x<=4){
//     console.log("Lower half of 9");
// }
// else{
//     console.log("Higher half of 9");
// }

//B7
// let n = (Number)(prompt("n = "));
// let x = (Number)(prompt("x = "));
// if(x < (n/2) ){
//      console.log( x + " is lower half of " + n);
// }
// else{
//     console.log( x + " is higher half of " + n);
// } 

//B8
// let x= (Number)(prompt("Enter a number?"));
// if(x%2==0){
//     console.log(x + " is an even number");
// }
// else console.log(x + " is an odd number");

//B9
// a)
    // console.log("3 L");
    // console.log("3 H");
// b)
    // let n = (Number)(prompt("Enter the total number of L's and H's?"));
    // if(n%2==0){
    //     console.log( n/2 + " L");
    //     console.log( n/2 + " H");
    // }
    // else{
    //     console.log( (n+1)/2 + " L");
    //     console.log( (n-1)/2 + " H");
    // }
// c)
//     for(let i=0  ; i<8 ; i++ ){
//         if(i%2==0) console.log(0);
//         else console.log(1);
//     }
// d)
    // let m = (Number)(prompt("Enter the total number of 1's and 0's?"));
    // for(let i=0  ; i<m ; i++ ){
    //     if(i%2==0) console.log(0);
    //     else console.log(1);
    // }

//B10
// let weight =(Number)(prompt("Your weight in kg?"));
// let height =(Number)(prompt("Your height in cm?"));
// height/=100;
// let BMI= weight/(height*height);
// console.log("Your BMI is " + BMI);
// if(BMI<16) console.log("You are severly underweight");
// else if(BMI<=18.5) console.log("You are underweight ");
// else if(BMI<=25) console.log("You are normal");
// else if(BMI<=30) console.log("You are overweight");
// else console.log("You are obese");