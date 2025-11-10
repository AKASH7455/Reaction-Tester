let startTime;

// Random color generator
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to move box randomly
function move() {
  const box = document.getElementById("box-click");
  const container = document.getElementById("box");

  // Container dimensions
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  // Random size
  const size = Math.random() * 100 + 50;

  // Random position (avoid overflow)
  const left = Math.random() * (containerWidth - size);
  const top = Math.random() * (containerHeight - size);

  // Apply new position and size
  box.style.left = left + "px";
  box.style.top = top + "px";
  box.style.width = size + "px";
  box.style.height = size + "px";
  box.style.backgroundColor = getRandomColor();
  box.style.display = "flex";

  // Start timer when box appears
  startTime = new Date().getTime();
}

// On box click
document.getElementById("box-click").onclick = function() {
  const box = document.getElementById("box-click");
  box.style.display = "none";

  const endTime = new Date().getTime();
  const reactionTime = (endTime - startTime) / 1000;

  alert("Your reaction time: " + reactionTime.toFixed(3) + " seconds");

  // Reappear box at new random place after random delay
  setTimeout(move, Math.random() * 500 + 500);
};

// Start first appearance
move();