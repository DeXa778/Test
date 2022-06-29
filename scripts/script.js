var mybtn = document.querySelector('button');
var myHeading = document.querySelector('h1')
function setUsername(){
    var myNEwname = prompt("Enter name");
    localStorage.setItem('name', myNEwname);
    myHeading.textContent = myNEwname + "`s TEXT "
}
if(!localStorage.getItem('name')) {
setUsername();
} else {
var storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
mybtn.onclick = function(){
setUsername();
};