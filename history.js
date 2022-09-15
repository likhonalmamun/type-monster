const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount) {
  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");
    // test speed (with the standard 5 charecters == 1 word )
    let textLength = parseFloat(test.questionText.length);
    let wordCount = textLength / 5;
    let WPS = wordCount / test.timeTaken;
    let WPM = parseInt(WPS * 60);
    newRow.innerHTML = `
  <h3>${test.questionText}</h3>
  <p style="margin-top:12px">You took: <span class="bold">${test.timeTaken}</span> seconds</p>
  <p>Your typing speed is: <span class="bold green">${WPM}</span> WPM</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  `;

    histories.appendChild(newRow);
  });
}