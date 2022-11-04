const d = new Date();
let count = 0;
document.getElementById("time").innerHTML = d.toLocaleTimeString();

function counter() {
    count++;
    updateCount();
    updateColor();
}
function updateCount() {
    document.getElementById("count").innerHTML = count;
}
function updateColor() {
    if (count % 2 === 0){
        document.getElementById("time").style.color = "green";
        document.getElementById("count").style.color = "green";
        document.querySelector("h3").style.color = "green";

    }
    else{
        document.getElementById("time").style.color = "red";
        document.getElementById("count").style.color = "red";
        document.querySelector("h3").style.color = "red";
    }

}