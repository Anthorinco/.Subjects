let timeoutId;


function startTimer() {
 timeoutId = setTimeout(() => window.alert("Hello!"), 3000);
window.alert("Starter")
}
function clearTimer(){
    clearTimeout(timeoutId);
window.alert("cleared")

}