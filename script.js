let MenuBtn=document.getElementById('MenuBtn');
MenuBtn.addEventListener('click',()=>{
    document.querySelector('body').classList.toggle('toggle-header')
    MenuBtn.classList.toggle('fa-xmark')
})



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});



var typed = new Typed(".auto-type", {
    strings: ["Web Designing", "Front End Designing"],
    typespeed: 10,
    backspeed: 5,
    backdelay: 200,
    loop: true
});



const progressBars = document.querySelectorAll(".inner-bar");
window.addEventListener('scroll', function () {
    progressBars.forEach(function (progressBar) {
        const rect = progressBar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            const width = progressBar.getAttribute('data-width');
            progressBar.style.width = width + '%'
        }
    });
});


    function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sivaranjani.s628123@gmail.com",
    Password : "9B6BAB1D474C423F9031D641E5E4BE6160A7",
    To : 'sivaranjanisahadevan@gmail.com',
    From : document.getElementById("email").value,
    Subject : "Portfolio - contact form",
    Body : "Name: "+document.getElementById("name").value 
         +"<br> Email: "+document.getElementById("email").value 
         +"<br> Message: "+document.getElementById("message").value
}).then(
  message => alert("Message Sent Successfully !!")
);
	  }
