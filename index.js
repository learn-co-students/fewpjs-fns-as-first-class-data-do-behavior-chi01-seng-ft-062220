/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);


function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}



/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {

  const parts = time.split(':');
  const first = parts[0];
  const hour = parseInt(first, 10);
  if (hour < 12) return "Good Morning";
  if (hour >= 12 && hour <17) return "Good Afternoon";
  return "Good Evening";
}

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}