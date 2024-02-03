const quizData = [{
    'que': "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    'que': "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    'que': "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    'que': "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];
let index=0;
let total=quizData.length;
let right=0, wrong=0;
let questionBox=document.getElementById("questionBox");
const optionInputs=document.querySelectorAll('.options');

const loadQuestion=() => {
    if(index===total){
        return endQuiz()
    }
    const data = quizData[index];
    questionBox.innerText=`${index+1})${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz=()=>{
    const data = quizData[index]
    const ans=getanswer();
    if(ans===data.correct){
        right++;
    }
    else{
        wrong++ ;
    }
    index++;
    reset();
    loadQuestion();
    // return;
}
const getanswer=()=>{
    let ans;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                ans= input.value;
            }
        }
    )
    return ans;

}
const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`<h3> Thank You For playing the Quiz</h3>
    <h3> ${right} /${total} are correct </h3>`

}
loadQuestion();
{

} 