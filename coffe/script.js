const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const navUl = document.querySelector("nav ul");


openMenu.addEventListener("click", () => {
    navUl.classList.add("active");
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
});


closeMenu.addEventListener("click", () => {
    navUl.classList.remove("active");
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
});
 document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    
    if (name === "" || message === "" || email ==="") {
      alert("Please enter your name and message before sending.");
      return; 
    }

    let phoneNumber = "2349139189579"; 

    let url = "https://api.whatsapp.com/send?phone=" + phoneNumber
              + "&text=" + encodeURIComponent("Name: " + name + "\nEmail:" + email + "\nMessage: "  + message);

    window.open(url, "_blank");
  });
  