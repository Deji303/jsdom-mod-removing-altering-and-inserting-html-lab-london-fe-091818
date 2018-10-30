/* Enter the code to remove the main node element under this comment */
 document.querySelector("main#main").remove();


/* Create your new element here and assign it to newHeader */
// const newHeader = null;

let newHeader = document.createElement('h1');
newHeader.innerHTML = "Deji is the champion";
newHeader.id = "victory";
document.body.appendChild(newHeader);

