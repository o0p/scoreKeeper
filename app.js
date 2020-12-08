const topScore = document.querySelector('#topScore');
const val = topScore.value;
const p1score = document.querySelector('#p1score');
const p2score = document.querySelector('#p2score');
const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const resetBtn = document.querySelector('#resetBtn');

let count1 = 0;
let count2 = 0;


// while (count1 || count2 !== parseInt(val)){

// }

p1btn.onclick = ()=> {
    if (count1 < parseInt(val)){        
        count1++;
        p1score.textContent = count1;
    } 
    if (count1 === parseInt(val)) {
        p1btn.disabled = true;
        p2btn.disabled = true;

    }
}
p2btn.onclick = ()=> {
    if (count2 < parseInt(val)){        
        count2++;
        p2score.textContent = count2;
    } 
    if (count2 === parseInt(val)) {
        p1btn.disabled = true;
        p2btn.disabled = true;

    }
}
resetBtn.onclick = ()=> {
    count1 = 0;
    count2 = 0;
    p1score.textContent = 0;
    p2score.textContent = 0;
    p1btn.disabled = false;
    p2btn.disabled = false;
}
