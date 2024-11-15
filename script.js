// Easter Egg: Fun Animation for Email Click
document.querySelector('a[href="mailto:noa4chang@gmail.com"]').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the default email action
  alert("Thank you for reaching out! I'm excited to connect!");
});

// Expandable Project Details or Confirmation
document.querySelectorAll(".btn-demo").forEach((button) => {
  button.addEventListener("click", (event) => {
    const projectCard = event.target.closest(".project-card");
    const projectName = projectCard.querySelector("h3").innerText;

    // Confirm before opening the GitHub link
    if (confirm(`Do you want to view the code for "${projectName}"?`)) {
      const targetLink = button.getAttribute("onclick").match(/window.open\('(.*)',/)[1];
      window.open(targetLink, "_blank");
    }
  });
});

// Profile Card Flip Animation
const profileCard = document.getElementById("profile-card");
if (profileCard) {
  profileCard.addEventListener("click", () => {
    profileCard.classList.toggle("flipped");
  });
}

// Social Icons Interaction (Hover Animations)
document.querySelectorAll(".footer-icons img").forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "scale(1.2)";
    icon.style.filter = "brightness(1.5)";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.transform = "scale(1)";
    icon.style.filter = "brightness(1)";
  });
});


// Dynamically Load Resume PDF
document.addEventListener("DOMContentLoaded", () => {
  const resumeIframe = document.createElement("iframe");
  resumeIframe.src = "assets/resume.pdf";
  resumeIframe.width = "100%";
  resumeIframe.height = "800px";
  resumeIframe.style.border = "none";

  const resumeSection = document.getElementById("resume");
  resumeSection.appendChild(resumeIframe);
});

// Confirmation on Resume Download
document.getElementById("resume-btn").addEventListener("click", () => {
  alert("Thanks for downloading my resume! You rock!");
});
