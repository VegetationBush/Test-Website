const button = document.getElementById("testButton1");
button.addEventListener("click", () => {
    button.textContent = "Clicked!";
    console.log("Button was clacked!");
});
