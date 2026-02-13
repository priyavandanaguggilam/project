let count = 0;

const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

function updateButtons() {
    // Disable + after 10
    if (count >= 10) {
        incrementBtn.disabled = true;
    } else {
        incrementBtn.disabled = false;
    }

    // Disable - at 0
    if (count <= 0) {
        decrementBtn.disabled = true;
    } else {
        decrementBtn.disabled = false;
    }
}

incrementBtn.addEventListener("click", function () {
    if (count < 10) {
        count++;              // increases one after one (1,2,3...)
        counter.textContent = count;
        updateButtons();
    }
});

decrementBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
        counter.textContent = count;
        updateButtons();
    }
});

// Initialize button state on page load
updateButtons();
