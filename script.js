let rejected = true;
const acceptedFunction = () => {
    document.querySelector(".accepted").style.visibility = "visible";
}
document.querySelector(".no").addEventListener("click", (event) => {
    if(rejected) {
        document.querySelector(".no").innerText = "YES YES YES 😘";
        rejected = false;
    } else {
        acceptedFunction();
    }
})

document.querySelector(".yes1").addEventListener("click", () => {
    acceptedFunction();
})

document.querySelector(".yes2").addEventListener("click", () => {
    acceptedFunction();
})


document.querySelector(".final-button").addEventListener("click", () => {
    document.querySelector(".accepted").style.visibility = "hidden";
})