"use strict";
//const list = ['濱田さん','綾さん','橋本さん','田中さん','原さん','申さん','西川さん','井本さん','久納さん','阿部さん','山岡さん','宮下さん','井上さん','一美さん'];

//シャフルプログラム入れる
let numbers = ['濱田さん','綾さん','橋本さん','田中さん','原さん','申さん','西川さん','井本さん','久納さん','阿部さん','山岡さん','宮下さん','井上さん','一美さん'];
numbers.sort((a, b) => 0.5 - Math.random());
console.log(numbers);

let count = 0;
{
document.getElementById("btn").addEventListener("click", () => {
//const one = Math.floor(Math.random() * 14) + 1;
const one = numbers[count];
document.getElementById("number").textContent = one;
count ++;
if(count>=14) {
//シャフルプログラム入れる
//let numbers = ['濱田さん','綾さん','橋本さん','田中さん','原さん','申さん','西川さん','井本さん','久納さん','阿部さん','山岡さん','宮下さん','井上さん','一美さん'];
numbers.sort((a, b) => 0.5 - Math.random());
console.log(numbers);
//カウント０に戻すプログラム　JSの計算参照
// for (let i = 0; i<list.length; i++) {
//   console.log ( list[ i ] );
// }
count = 0;
 }
});
}

{
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    let startTime;
    let timeoutId;
    let elapsedTime = 0;

    function countUp() {
        const d = new Date(Date.now() - startTime + elapsedTime);
        const m = String(d.getMinutes()).padStart(2, '0');
        const s = String(d.getSeconds()).padStart(2, '0');
        const ms = String(d.getMilliseconds()).padStart(3, '0');
        timer.textContent = `${m}:${s}.${ms}`;

        timeoutId = setTimeout(() => {
            countUp();
        }, 10);
    }

    function setButtonStateInitial() {
      start.disabled = false;
      stop.disabled = true;
      reset.disabled = true;
    }

    function setButtonStateRunning() {
      start.disabled = true;
      stop.disabled = false;
      reset.disabled = true;
    }

    function setButtonStateStopped() {
      start.disabled = false;
      stop.disabled = true;
      reset.disabled = false;
    }

    setButtonStateInitial();

    start.addEventListener('click', () => {
        setButtonStateRunning();
        startTime = Date.now();
        countUp();
    });

    stop.addEventListener('click', () => {
        setButtonStateStopped();
        clearTimeout(timeoutId);
        elapsedTime += Date.now() - startTime;
    });

    reset.addEventListener('click', () => {
        setButtonStateInitial();
        timer.textContent = '00:00.000';
        elapsedTime = 0;
    });

    function clock() {
        let now = new Date();
        let hh = now.getHours();
        let mm = now.getMinutes();
        let ss = now.getSeconds();

        hh = hh<10? "0" + hh:hh;
        mm = mm<10? "0" + mm:mm;
        ss = ss<10? "0" + ss:ss;

        let result = document.getElementById("result");

        result.textContent = hh + " : " + mm + " : " + ss;
    }
}

{
    const clock = () => {
        //現在の日時・時刻の情報を取得  
        const d = new Date();
        //
        let year = d.getFullYear();
        //
        let month = d.getMonth();
        //
        let date = d.getDate();
        //
        let dayNum = d.getDay();
        const weekday = ["SUN","MON","TUE","WED","THU","FRY","SAT"];
        let day = weekday[dayNum];
        //
        let hour = d.getHours();
        //
        let min = d.getMinutes();
        //
        let sec = d.getSeconds();

        //
        month = month < 10 ? "0" + month : month;
        date = date < 10 ? "0" + date : date;
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        //
        let today = `${year}.${month}.${date} ${day}`;
        let time = `${hour}:${min}:${sec}`;

        //
        document.querySelector(".clock-date").innerText = today;
        document.querySelector(".clock-time").innerText = time;
    };

    //
    setInterval(clock, 1000);
}