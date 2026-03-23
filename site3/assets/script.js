// SUPER5 number generator script

document.getElementById("genBtn").addEventListener("click", () => {
  const box = document.querySelector(".number-box");
  const spans = box.querySelectorAll("span");

  // Generate 5 unique numbers (1–49)
  let nums = [];
  while (nums.length < 5) {
    let n = Math.floor(Math.random() * 49) + 1;
    if (!nums.includes(n)) nums.push(n);
  }

  nums.sort((a, b) => a - b);

  // Animate output
  spans.forEach((span, i) => {
    span.classList.remove("animate");
    setTimeout(() => {
      span.textContent = nums[i];
      span.classList.add("animate");
    }, i * 180);
  });
});
