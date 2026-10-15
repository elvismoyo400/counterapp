
const countEl = document.getElementById("count");
const countBtn = document.getElementById("countBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

countBtn.addEventListener("click", function() {
    count = count + 1;
    countEl.textContent = count;
});

resetBtn.addEventListener("click", function() {
    count = 0;
    countEl.textContent = count;
});
