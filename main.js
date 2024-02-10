let count1=0;
let count2=0;
let count3=0;
let count4=0;
 const btn1 = document.querySelector(".btn1");

 btn1.onclick = function() {
            const result = document.getElementById("counter1");
            count1 += 1;
            result.innerText = count1;
        }

const btn2 = document.querySelector(".btn2");
btn2.onclick = function() {
            const result = document.getElementById("counter2");
            count2 += 1;
            result.innerText = count2;
        }

 const btn3 = document.querySelector(".btn3");
 btn3.onclick = function() {
            const result = document.getElementById("counter3");
            count3 += 1;
            result.innerText = count3;
        }

const btn4 = document.querySelector(".btn4");
btn4.onclick = function() {
            const result = document.getElementById("counter4");
            count4 += 1;
            result.innerText = count4;
        }