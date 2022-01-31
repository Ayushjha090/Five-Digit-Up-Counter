var button = document.querySelector(".submit-btn");
var inputNumber = document.querySelector("#input-number");
var current = document.getElementsByClassName("current");
var next = document.getElementsByClassName("next");

var count = 0;
var counterFinished = false;

function startCounter() {
    let maxCount = inputNumber.value;
    if (maxCount < 1 || maxCount > 99999) {
        alert("Out of Range");
        return;
    }

    resetCounter(current, next, 5);

    var interval = setInterval(function () {
        if (count == maxCount) {
            clearInterval(interval);
            alert("Counter Stopped");
            count = 0;
            return;
        }
        increaseCounter(current, next, 4);
        count++;
    }, 1000);

}

function resetCounter(current, next, index) {
    for (let i = 0; i < index; i++) {
        current[i].innerHTML = 0;
        next[i].innerHTML = 1;
    }
}

function increaseCounter(current, next, index) {
    let currentNumber = current[index].innerHTML;

    currentNumber++;
    next[index].innerHTML = currentNumber;
    next[index].classList.add("animate");

    setTimeout(function () {
        current[index].innerHTML = currentNumber;
        next[index].classList.remove("animate");
    }, 500);

    if (currentNumber == 10) {
        currentNumber = 0;
        next[index].innerHTML = currentNumber;
        next[index].classList.add("animate");

        setTimeout(function () {
            current[index].innerHTML = currentNumber;
            next[index].classList.remove("animate");
        }, 500);
        increaseCounter(current, next, index - 1);
    }
}

button.addEventListener("click", startCounter);