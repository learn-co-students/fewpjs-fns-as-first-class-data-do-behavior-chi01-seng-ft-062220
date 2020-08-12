/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const newTime = parseInt(timeString.split(':'));
  if (newTime < 12) {
    return "Good Morning"
  } else if (newTime < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  };
};
/* Write your implementation of displayMessage() */

function displayMessage(inputString) {
  const displayArea = document.querySelector('h1#greeting')
  displayArea.innerText = `${inputString}`
}
