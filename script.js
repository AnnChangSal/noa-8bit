// Show/Hide Resume Images on Button Click
document.getElementById("show-resume-btn").addEventListener("click", () => {
  const resumeContainer = document.getElementById("resume-container");
  const button = document.getElementById("show-resume-btn");

  if (!resumeContainer.innerHTML) {
    // Create image elements for each page
    const page1 = document.createElement("img");
    page1.src = "assets/resume_page1.png";
    page1.alt = "Resume Page 1";
    page1.classList.add("resume-page");

    const page2 = document.createElement("img");
    page2.src = "assets/resume_page2.png";
    page2.alt = "Resume Page 2";
    page2.classList.add("resume-page");

    resumeContainer.appendChild(page1);
    resumeContainer.appendChild(page2);

    resumeContainer.style.display = "flex";
    button.textContent = "Hide Resume";
    button.setAttribute("aria-expanded", "true");
  } else {
    // Toggle visibility
    if (resumeContainer.style.display === "none") {
      resumeContainer.style.display = "flex";
      button.textContent = "Hide Resume";
      button.setAttribute("aria-expanded", "true");
    } else {
      resumeContainer.style.display = "none";
      button.textContent = "Click to View Resume";
      button.setAttribute("aria-expanded", "false");
    }
  }
});

// Profile Card Flip Animation
const profileCard = document.getElementById("profile-card");
if (profileCard) {
  profileCard.addEventListener("click", () => {
    profileCard.classList.toggle("flipped");
  });
}

// Removed hover animations from JavaScript since they're handled in CSS
