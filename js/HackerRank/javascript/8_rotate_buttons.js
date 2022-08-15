let nums = [1, 2, 3, 6, 9, 8, 7, 4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];

let btn5 = document.getElementById("btn5");

btn5.onclick = function () {
  nums.unshift(nums.pop());
  for (i = 0; i <= 7; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = nums[i];
  }
};

// HTML
/*
    <body>
        <div id="btns" class="btn-container">
        <button id="btn1" class="btn">1</button>
        <button id="btn2" class="btn">2</button>
        <button id="btn3" class="btn">3</button>
        <button id="btn4" class="btn">4</button>
        <button id="btn5" class="btn">5</button>
        <button id="btn6" class="btn">6</button>
        <button id="btn7" class="btn">7</button>
        <button id="btn8" class="btn">8</button>
        <button id="btn9" class="btn">9</button>
        </div>
    </body>
 */
