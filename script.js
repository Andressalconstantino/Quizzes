/* --------------------- DISPLAY CORRECT PAGE ----------------------- */

let currentPage = document.getElementsByClassName('Quiz');
let num = 0;

displayPage(num);

function displayPage(num){
    currentPage[num].style.display = 'flex';
}

const cAns = document.getElementById('cAns');
cAns.addEventListener('click', function (){
    const page = document.getElementsByClassName('result');
    page[0].style.display = 'flex';
})

/* -----------------------  BUTTONS --------------------------- */
const nextU = document.getElementById('nextU');
const nextD = document.getElementById('nextD');
const backD = document.getElementById('backD');
const nextT = document.getElementById('nextT');
const backT = document.getElementById('backT');
const nextQ = document.getElementById('nextQ');
const backQ = document.getElementById('backQ');
const Result = document.getElementById('Res');
const backC = document.getElementById('backC');
const reset = document.getElementById('reset');
const start = document.getElementById('start');

start.addEventListener('click', star);
nextU.addEventListener('click', nex);
nextD.addEventListener('click', nex);
nextT.addEventListener('click', nex);
nextQ.addEventListener('click', nex);
Result.addEventListener('click', Res);

backD.addEventListener('click', bac);
backT.addEventListener('click', bac);
backQ.addEventListener('click', bac);
backC.addEventListener('click', bac);
reset.addEventListener('click', rese);

let startTimer;

function star(){
    currentPage[num].style.display = 'none';
    num++;
    displayPage(num);
    startTimer = Date.now();
}

function nex(){
    currentPage[num].style.display = 'none';
    num++;
    displayPage(num);
}

function bac(){
    currentPage[num].style.display = 'none';
    num--;
    displayPage(num);
}

function rese(){
    currentPage[num].style.display = 'none';
    num = 0;
    displayPage(num);
}

function secondsToHSM(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    document.getElementById('timer').innerHTML = 'Time you took to complete the quiz: &nbsp;&nbsp;&nbsp;' + hours.toString() + ':' + minutes.toString() + ':' + seconds.toString(); // Return is HH : MM : SS
}

function Res(){
    let result = 0;

    const seconds = (Date.now() - parseInt(startTimer, 10))/1000;
    secondsToHSM(seconds);

    const one = document.getElementsByName('cppU');
    let answer1;
    for (let i = 0; i<one.length; i++){
        if (one[i].checked){
            answer1 = one[i].value;
        }
    }


    if (answer1 === 'r'){
        result++;
    }

    const two = document.getElementsByName('cppD');
    let answer2;
    for (let i = 0; i<two.length; i++){
        if (two[i].checked){
            answer2 = two[i].value;
        }
    }
    if (answer2 === 'r'){
        result++;
    }


    const three = document.getElementsByName('cppT');
    let answer3;
    for (let i = 0; i<three.length; i++){
        if (three[i].checked){
            answer3 = three[i].value;
        }
    }
    if (answer3 === 'r'){
        result++;
    }

    const four = document.getElementsByName('cppQ');
    let answer4;
    for (let i = 0; i<four.length; i++){
        if (four[i].checked){
            answer4 = four[i].value;
        }
    }
    if (answer4 === 'r'){
        result++;
    }

    const five = document.getElementsByName('cppC');
    let answer5;
    for (let i = 0; i<five.length; i++){
        if (five[i].checked){
            answer5 = five[i].value;
        }
    }
    if (answer5 === 'r'){
        result++;
    }

    document.getElementById('Resultado').innerHTML = 'Your result is ' + result.toString() + '/5';
    if (result>=3){
        document.getElementById('rq').innerHTML = 'You passed the test! :)'
    }
    else{
        document.getElementById('rq').innerHTML = 'You failed the test :('
    }
    currentPage[num].style.display = 'none';
    num++;
    displayPage(num);

}

/* --------------------- First Question ----------------------- */

document.getElementById('oneU').addEventListener('click', function (){
    document.getElementById('FirstU').setAttribute('class', 'check');
    document.getElementById('SecondU').setAttribute('class', 'notclicked');
    document.getElementById('ThirdU').setAttribute('class', 'notclicked');
    document.getElementById('FourthU').setAttribute('class', 'notclicked');
});

document.getElementById('twoU').addEventListener('click', function (){
    document.getElementById('FirstU').setAttribute('class', 'notclicked');
    document.getElementById('SecondU').setAttribute('class', 'check');
    document.getElementById('ThirdU').setAttribute('class', 'notclicked');
    document.getElementById('FourthU').setAttribute('class', 'notclicked');
});

document.getElementById('threeU').addEventListener('click', function (){
    document.getElementById('FirstU').setAttribute('class', 'notclicked');
    document.getElementById('SecondU').setAttribute('class', 'notclicked');
    document.getElementById('ThirdU').setAttribute('class', 'check');
    document.getElementById('FourthU').setAttribute('class', 'notclicked');
});

document.getElementById('fourU').addEventListener('click', function (){
    document.getElementById('FirstU').setAttribute('class', 'notclicked');
    document.getElementById('SecondU').setAttribute('class', 'notclicked');
    document.getElementById('ThirdU').setAttribute('class', 'notclicked');
    document.getElementById('FourthU').setAttribute('class', 'check');
});

/* -------------------- SECOND QUESTION  -------------------- */

document.getElementById('oneD').addEventListener('click', function (){
    document.getElementById('FirstD').setAttribute('class', 'check');
    document.getElementById('SecondD').setAttribute('class', 'notclicked');
    document.getElementById('ThirdD').setAttribute('class', 'notclicked');
    document.getElementById('FourthD').setAttribute('class', 'notclicked');
});

document.getElementById('twoD').addEventListener('click', function (){
    document.getElementById('FirstD').setAttribute('class', 'notclicked');
    document.getElementById('SecondD').setAttribute('class', 'check');
    document.getElementById('ThirdD').setAttribute('class', 'notclicked');
    document.getElementById('FourthD').setAttribute('class', 'notclicked');
});

document.getElementById('threeD').addEventListener('click', function (){
    document.getElementById('FirstD').setAttribute('class', 'notclicked');
    document.getElementById('SecondD').setAttribute('class', 'notclicked');
    document.getElementById('ThirdD').setAttribute('class', 'check');
    document.getElementById('FourthD').setAttribute('class', 'notclicked');
});

document.getElementById('fourD').addEventListener('click', function (){
    document.getElementById('FirstD').setAttribute('class', 'notclicked');
    document.getElementById('SecondD').setAttribute('class', 'notclicked');
    document.getElementById('ThirdD').setAttribute('class', 'notclicked');
    document.getElementById('FourthD').setAttribute('class', 'check');
});

/* -------------------- THIRD QUESTION -------------------- */

document.getElementById('oneT').addEventListener('click', function (){
    document.getElementById('FirstT').setAttribute('class', 'check');
    document.getElementById('SecondT').setAttribute('class', 'notclicked');
    document.getElementById('ThirdT').setAttribute('class', 'notclicked');
    document.getElementById('FourthT').setAttribute('class', 'notclicked');
});

document.getElementById('twoT').addEventListener('click', function (){
    document.getElementById('FirstT').setAttribute('class', 'notclicked');
    document.getElementById('SecondT').setAttribute('class', 'check');
    document.getElementById('ThirdT').setAttribute('class', 'notclicked');
    document.getElementById('FourthT').setAttribute('class', 'notclicked');
});

document.getElementById('threeT').addEventListener('click', function (){
    document.getElementById('FirstT').setAttribute('class', 'notclicked');
    document.getElementById('SecondT').setAttribute('class', 'notclicked');
    document.getElementById('ThirdT').setAttribute('class', 'check');
    document.getElementById('FourthT').setAttribute('class', 'notclicked');
});

document.getElementById('fourT').addEventListener('click', function (){
    document.getElementById('FirstT').setAttribute('class', 'notclicked');
    document.getElementById('SecondT').setAttribute('class', 'notclicked');
    document.getElementById('ThirdT').setAttribute('class', 'notclicked');
    document.getElementById('FourthT').setAttribute('class', 'check');
});

/* -------------------- FOURTH QUESTION -------------------- */

document.getElementById('oneQ').addEventListener('click', function (){
    document.getElementById('FirstQ').setAttribute('class', 'check');
    document.getElementById('SecondQ').setAttribute('class', 'notclicked');
    document.getElementById('ThirdQ').setAttribute('class', 'notclicked');
    document.getElementById('FourthQ').setAttribute('class', 'notclicked');
});

document.getElementById('twoQ').addEventListener('click', function (){
    document.getElementById('FirstQ').setAttribute('class', 'notclicked');
    document.getElementById('SecondQ').setAttribute('class', 'check');
    document.getElementById('ThirdQ').setAttribute('class', 'notclicked');
    document.getElementById('FourthQ').setAttribute('class', 'notclicked');
});

document.getElementById('threeQ').addEventListener('click', function (){
    document.getElementById('FirstQ').setAttribute('class', 'notclicked');
    document.getElementById('SecondQ').setAttribute('class', 'notclicked');
    document.getElementById('ThirdQ').setAttribute('class', 'check');
    document.getElementById('FourthQ').setAttribute('class', 'notclicked');
});

document.getElementById('fourQ').addEventListener('click', function (){
    document.getElementById('FirstQ').setAttribute('class', 'notclicked');
    document.getElementById('SecondQ').setAttribute('class', 'notclicked');
    document.getElementById('ThirdQ').setAttribute('class', 'notclicked');
    document.getElementById('FourthQ').setAttribute('class', 'check');
});

/* -------------------- FIFTH QUESTION -------------------- */

document.getElementById('oneC').addEventListener('click', function (){
    document.getElementById('FirstC').setAttribute('class', 'check');
    document.getElementById('SecondC').setAttribute('class', 'notclicked');
    document.getElementById('ThirdC').setAttribute('class', 'notclicked');
    document.getElementById('FourthC').setAttribute('class', 'notclicked');
});

document.getElementById('twoC').addEventListener('click', function (){
    document.getElementById('FirstC').setAttribute('class', 'notclicked');
    document.getElementById('SecondC').setAttribute('class', 'check');
    document.getElementById('ThirdC').setAttribute('class', 'notclicked');
    document.getElementById('FourthC').setAttribute('class', 'notclicked');
});

document.getElementById('threeC').addEventListener('click', function (){
    document.getElementById('FirstC').setAttribute('class', 'notclicked');
    document.getElementById('SecondC').setAttribute('class', 'notclicked');
    document.getElementById('ThirdC').setAttribute('class', 'check');
    document.getElementById('FourthC').setAttribute('class', 'notclicked');
});

document.getElementById('fourC').addEventListener('click', function (){
    document.getElementById('FirstC').setAttribute('class', 'notclicked');
    document.getElementById('SecondC').setAttribute('class', 'notclicked');
    document.getElementById('ThirdC').setAttribute('class', 'notclicked');
    document.getElementById('FourthC').setAttribute('class', 'check');
});