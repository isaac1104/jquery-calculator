function reset() {
  inputFirstNumber = true;
  inputSecondNumber = false;
  inputOperators = false;
  equalButton = false;
  firstNumberSet = [];
  secondNumberSet = [];
  operators = "";
}

reset();

$(document).ready(function() {
  $(".number").on("click", function() {
    if (inputFirstNumber === true) {
      firstNumberSet.push($(this).attr("value"));
      firstNumber = parseInt(firstNumberSet.join(""));
      $("#first-number").html(firstNumber);
      inputOperators = true;
    }
  });

  $(".operator").on("click", function() {
    if (inputOperators === true) {
      operators = $(this).attr("value");
      if (operators === "plus") {
        operators = "+";
        $("#operator").html(operators);
      } else if (operators === "minus") {
        operators = "-";
        $("#operator").html(operators);
      } else if (operators === "divide") {
        operators = "/";
        $("#operator").html(operators);
      } else if (operators === "times") {
        operators = "*";
        $("#operator").html(operators);
      } else if (operators === "power") {
        operators = "^";
        $("#operator").html(operators);
      }
      inputFirstNumber = false;
      inputSecondNumber = true;
    }
  });

  $(".number").on("click", function() {
    if (inputSecondNumber === true) {
      secondNumberSet.push($(this).attr("value"));
      secondNumber = parseInt(secondNumberSet.join(""));
      $("#second-number").html(secondNumber);
      equalButton = true;
    }
  });

  $(".equal").on("click", function() {
    if (equalButton === true) {
      var result = calculate();
      $("#result").html(calculate(firstNumber, secondNumber, operators));
      inputFirstNumber = false;
      inputSecondNumber = false;
      inputOperators = false;
    }
  });

  function calculate(x, y, op) {
    if (op === "/") {
      return x / y;
    } else if (op === "*") {
      return x * y;
    } else if (op === "+") {
      return x + y;
    } else if (op === "-") {
      return x - y;
    } else if (op === "^") {
      return Math.pow(x, y);
    }
  }

  $("#button-clear").on("click", function() {
    $("#first-number").empty();
    $("#second-number").empty();
    $("#operator").empty();
    $("#result").empty();
    reset();
  });
});
