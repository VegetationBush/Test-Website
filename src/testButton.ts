const button = document.getElementById("testButton1") as HTMLButtonElement;

button.addEventListener("click", () => {
  button.textContent = "Clicked!";
  console.log("Button was clacked!");
});