// let number=prompt("enter a number"); 
// // console.log('tmkcs')
// if(number>=80 && number<=100){
//     console.log("A");

// }
// else if(number>=70 && number<=79){
//     console.log("B")
// }
// else if(number>=60 && number<=69){
//     console.log("C")
// }
// else if(number>=50 && number<=59){
//     console.log("D")
// }
// else if(number>=0 && number<=49){
//     console.log("F")

// }

// let inputnum=25;
// let userin=prompt("GUess the number:");
// while(userin!=inputnum){
//     userin=prompt("Entered wrong no. Guess again");
// }
// console.log("Congrats you guessed the right No.");

// let userin= prompt("Enter your Full name");
// let user="@"+userin+userin.length;
// console.log(user);
// let arr=[250, 645, 300, 900, 50];
// for(let i=0; i<arr.length;i++){
//     let offer=arr[i]/10;
//     arr[i]-=offer;
//     console.log(`value aafter offer is= ${arr[i]}`)
    
// }
// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++
//         }
//     }
//     return count; 

// } 
// let userin= prompt("Enter a no.");
// let arr=[];
// for(let i =0; i<=userin;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let h2= document.querySelector("h2");
// console.dir(h2.innertext);
// h2.innerText =h2 .innerText + " form apna colllege"
// let divs= document.querySelectorAll(".box");
// let idx=1;
// for(div of divs){
//     div.innerText=`new unique value ${idx}`;
//     idx++;
// }
// let btn= document.createElement("button");
// btn.innerText="Click me!";
// btn.style.backgroundColor="blue";
// btn.style.color="white";
// document.querySelector("body").prepend(btn);
// let btn1= document.querySelector("#btn");
// let currmode="light";
// let body=document.querySelector("body");
// btn.addEventListener("click", () =>{
//     if(currmode==="light"){
//       currmode="dark";
//       body.classList.add("dark")
//       body.classList.remove("light");
//     }
//     else{
//         currmode="light";
//         body.style.backgroundColor="white";
//         body.classList.remove("dark");
//     }
//     console.log(currmode);

// })



    //  TIC Tac Toe problem!!!!!!!
let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset");
let newgamebtn= document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg-container.hide");
let msg= document.querySelector("#msg")
let turn0= true;
let count=0;
const winpattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];
const resetGame=()=>{
    turn0=true;
    count=0;
    enableboxes();
    msgContainer.classList.add("hide");
  }

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
            box.style.color="black";
            

        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled= true;
        count++;
        let iswinner= checkWinner();


    })

  })
  const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
  }
  const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
  }

  const showinner= (winner)=>{
    msg.innerText=`Congrats winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
  }
  const checkWinner=() =>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&& pos2===pos3){
                console.log("winner", pos1);
                showinner(pos1);
                return true;
               
            }
        }
    }
  }
  newgamebtn.addEventListener("click", resetGame);
  resetbtn.addEventListener("click", resetGame);

