let screenText = document.getElementById("screen");
let lastStrokeKey;
let lastEvaluationError = false;

document.querySelectorAll("button").forEach(function (e) {
  e.addEventListener("click", function (event) {
    if (lastStrokeKey === "=" && !lastEvaluationError) {
      screenText.innerText = "";
    }
    lastStrokeKey = event.target.textContent;

    if (event.target.textContent === "Reset") {
      screenText.innerText = "";
    } else if (event.target.textContent === "Delete") {
      screenText.innerText = screenText.innerText.slice(0, -1);
    } else if (event.target.textContent === "=") {
      try {
        let num = math.evaluate(screenText.innerText);

        if (typeof num == "undefined") {
          screenText.innerText = 0;
        } else {
          screenText.innerText = String(num).slice(0, 17);
          lastEvaluationError = false;
        }
      } catch (error) {
        lastEvaluationError = true;
      }
    } else {
      if (screenText.innerText.length < 17) {
        screenText.innerText += event.target.textContent;
      } else {
        alert("Character limit reached (max 17 characters).");
      }
    }
    console.log(event.target.textContent);
  });
});
