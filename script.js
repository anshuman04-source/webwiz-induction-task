//Hamburger menu on small mobile screen

const menubtn=document.getElementById("menu-btn");
const mobilemenu=document.getElementById("mobile-menu");

menubtn.addEventListener("click", ()=>{
    mobilemenu.classList.toggle("hidden");
});



const toggleBtn = document.getElementById("toggle");
const html = document.documentElement;

// Dark mode by default and toggle between dark and light
const savedTheme = localStorage.getItem("theme");

if (!savedTheme || savedTheme === "dark") {
  html.classList.add("dark");
  toggleBtn.textContent = "☀️";
  localStorage.setItem("theme", "dark");
} else {
  html.classList.remove("dark");
  toggleBtn.textContent = "🌙";
}

// Toggle on click
toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

//Responsive navigation bar on scroll

window.addEventListener("scroll",() => {
  if(window.scrollY>50){
    let n1=document.querySelector("nav");
    n1.classList.add("shadow-lg");
  }
  else{
    let n2=document.querySelector("nav");
    n2.classList.remove("shadow-lg");
  }
});


//For a simple dmonstration of show more button
const infobtn=document.getElementById("info-button");
const infotext=document.getElementById("info");

infobtn.addEventListener("click",() =>{
  infotext.classList.toggle("hidden");

  if(infobtn.textContent==="Show more"){
    infobtn.textContent="Show less";
  }
    else{
      infobtn.textContent="Show more";
    }
  
});




