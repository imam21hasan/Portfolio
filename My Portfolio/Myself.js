const home = document.getElementById("container-home"),
  about = document.getElementById("container-about"),
  skill = document.getElementById("container-skills"),
  contact = document.getElementById("container-contact");

document.addEventListener("DOMContentLoaded", () => {
  const hideAllContainers = () => {
    home.style.display = "none";
    about.style.display = "none";
    skill.style.display = "none";
    contact.style.display = "none";
  };

  document.querySelector(".home").addEventListener("click", (value) => {
    value.preventDefault();
    hideAllContainers();
    home.style.display = "block";
  });

  document.querySelector(".about").addEventListener("click", (value) => {
    value.preventDefault();
    hideAllContainers();
    about.style.display = "block";
  });

  document.querySelector(".skill").addEventListener("click", (value) => {
    value.preventDefault();
    hideAllContainers();
    skill.style.display = "flex";
  });

  document.querySelector(".contact").addEventListener("click", (value) => {
    value.preventDefault();
    hideAllContainers();
    contact.style.display = "flex";
  });
});

function lookSkills(skill) {
  if (skill === "c") {
    window.location.href = "https://github.com/imam21hasan/Data-Structure";
  } else if (skill === "cpp") {
    window.location.href =
      "https://github.com/imam21hasan/OOP/tree/main/OOP%20C%2B%2B";
  } else if (skill === "java") {
    window.location.href =
      "https://github.com/imam21hasan/OOP/tree/main/OOP%20Java";
  } else if (skill === "html") {
    window.location.href = "https://github.com/imam21hasan/HTML-CSS";
  } else if (skill === "css") {
    window.location.href = "https://github.com/imam21hasan/HTML-CSS";
  } else if (skill === "js") {
    window.location.href = "https://github.com/imam21hasan/JavaScript";
  } else if (skill === "tw") {
    window.location.href =
      "https://github.com/imam21hasan/Tailwind-CSS/blob/main/README.md";
  } else if (skill === "andro") {
    window.location.href =
      "https://github.com/imam21hasan/Android-Studio/blob/main/README.md";
  }
}

function reachMe(contact) {
  if (contact === "github") {
    window.location.href = "https://github.com/imam21hasan";
  } else if (contact === "linkedIn") {
    window.location.href =
      "https://www.linkedin.com/in/imam-hasan-shawon-62a961337/";
  } else if (contact === "gmail") {
    window.location.href = "https://www.ihshawon216@gmail.com";
  } else if (contact === "x") {
    window.location.href = "";
  } else if (contact === "fb") {
    window.location.href = "https://www.facebook.com/I.H.SHAWONcstuBinaryBird";
  } else if (contact === "telegram") {
    window.location.href = "https://t.me/IH_Shawon28";
  } else if (contact === "whatsApp") {
    window.location.href = "https://wa.me/1845995310";
  } else if (contact === "instagram") {
    window.location.href = "";
  }
}
