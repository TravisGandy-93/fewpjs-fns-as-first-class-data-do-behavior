/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  timeString = timeString.split(":")
  
  let result = parseInt(timeString, 10)
  
  if (result < 12){
      return "Good Morning"
  }
  else if (result > 17){
      return "Good Evening"
  }
  else {
      return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(msg){
  let content = document.getElementById("greeting")
  content.innerHTML = msg
}