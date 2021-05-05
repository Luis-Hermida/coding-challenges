function onButton(e) {
  var btn = e.target || e.srcElement;
  var action = document.getElementById(btn.id).innerHTML;
  var res = document.getElementById("res");

  switch (action) {
    case "0":
    case "1":
    case "+":
    case "-":
    case "*":
    case "/":
      res.innerHTML += action;
      break;
    case "C":
      res.innerHTML = "";
      break;
    case "=":
      var expr = res.innerHTML;
      var nums = /(\d+)/g;
      // Replace all base 2 nums with base 10 equivs
      expr = expr.replace(nums, function (match) {
        return parseInt(match, 2);
      });
      // eval in base 10 and convert to base 2
      res.innerHTML = eval(expr).toString(2);
      break;
    default:
      console.error("should not be executed");
      break;
  }
}
var buttons = document.getElementsByTagName("button");
for (let button of buttons) {
  button.onclick = onButton;
}

// HTML
/*
<div id="res" class="res"> </div>
<div id="btns" class="btns"> 
    <button id="btn0" class="btn0">0</button>
    <button id="btn1" class="btn1">1</button>
    <button id="btnClr" class="btnClr">C</button>
    <button id="btnEql" class="btnEql">=</button>
    <button id="btnSum" class="btnSum">+</button>
    <button id="btnSub" class="btnSub">-</button>
    <button id="btnMul" class="btnMul">*</button>
    <button id="btnDiv" class="btnDiv">/</button>
</div>
*/
