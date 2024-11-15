// Show/Hide Resume PDF on Button Click
document.getElementById("show-resume-btn").addEventListener("click", () => {
  const resumeContainer = document.getElementById("resume-container");

  // Check if the resume is already displayed
  if (!resumeContainer.innerHTML) {
    const resumeIframe = document.createElement("iframe");
    resumeIframe.src = "assets/resume.pdf";
    resumeIframe.width = "100%";
    resumeIframe.style.border = "none";
    resumeIframe.style.height = "800px";

    resumeContainer.appendChild(resumeIframe);
    resumeContainer.style.display = "block";
    document.getElementById("show-resume-btn").textContent = "Hide Resume";
  } else {
    // Toggle visibility
    if (resumeContainer.style.display === "none") {
      resumeContainer.style.display = "block";
      document.getElementById("show-resume-btn").textContent = "Hide Resume";
    } else {
      resumeContainer.style.display = "none";
      document.getElementById("show-resume-btn").textContent = "Click to View Resume";
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