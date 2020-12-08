const topScore = document.querySelector('#topScore');
const val = topScore.value;
const p1score = document.querySelector('#p1score');
const p2score = document.querySelector('#p2score');
const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const resetBtn = document.querySelector('#resetBtn');

let count1 = 0;
let count2 = 0;

p1btn.onclick = ()=> {
    if (count1 < val){        
        count1++;
        p1score.textContent = count1;
    } else {
        count1 === val;
    }
}
p2btn.onclick = ()=> {
    if (count2 < val){        
        count2++;
        p2score.textContent = count2;
    } else {
        count2 === val;
    }
}

