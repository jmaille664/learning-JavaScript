
//Application that asks the user 3 questions and, based on the user's response, tells their fortune. 

//set timout for window prompt
setTimeout(function(){ 
    //ask user for their name
const name = window.prompt("Enter your name");

//Ask user for their sign
const sign = window.prompt("Enter your sign")

//Ask user what color their socks are 
const color = window.prompt("Enter the color of your socks")

//total number of name, sign, and socks
const num = name.length + sign.length + color.length;
console.log(num);
 
}, 2000);

function tellFortune() {

    //If num is even, displays a dialogue box that reads "You will change the world for the better."
    if (num % 2 ===0){
        window.alert("You will change the world for the better.");
    }

    //If num is odd, displays a dialogue box that reads "Love and happiness is around the corner."
    if (num  % 2 !==0){
        window.alert("Love and happiness is around the corner.");
    }
    //if num is odd and divisible by 3, displays "You will grow to be wealthy in wisdom."
    else if ((num % 2 ===0 ) && (num /3)){
        window.alert("You will grow to be wealthy in wisdom.");
    }


tellFortune()

}