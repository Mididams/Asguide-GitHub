document.getElementById("choixPolice").addEventListener("change", 
function () {
   const nouvellePolice = this.value;
   document.body.style.fontFamily = nouvellePolice;
});
