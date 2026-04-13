// Simple smooth scroll animation
//document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 //  anchor.addEventListener("click", function (e) {
     //   e.preventDefault();
      //  document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
// CONTA
// CT button 
let scroller= document.querySelectorAll(".scroller");
let btn= document.querySelector("#btn");
scroller.forEach(e=>{
    e.addEventListener("click",()=>{
            window.scroll(0,25000);
                    e.preventDefault();

            
    
        console.log ("hlo");


    })

});
