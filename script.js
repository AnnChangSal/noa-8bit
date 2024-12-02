// Show/Hide Resume Images on Button Click
document.getElementById("show-resume-btn").addEventListener("click", () => {
  const resumeContainer = document.getElementById("resume-container");
  const button = document.getElementById("show-resume-btn");
  console.log("Button clicked");

  if (!resumeContainer.innerHTML) {
    console.log("Adding resume images");
    // Create image elements for each page
    const page1 = document.createElement("img");
    page1.src = "assets/resume_page1.png";
    page1.alt = "Resume Page 1";
    page1.classList.add("resume-page");

    const page2 = document.createElement("img");
    page2.src = "assets/resume_page2.png";
    page2.alt = "Resume Page 2";
    page2.classList.add("resume-page");

    // Listen for image load errors
    page1.onerror = () => console.error("Failed to load resume_page1.png");
    page2.onerror = () => console.error("Failed to load resume_page2.png");

    resumeContainer.appendChild(page1);
    resumeContainer.appendChild(page2);

    resumeContainer.style.display = "flex";
    button.textContent = "Hide Resume";
    button.setAttribute("aria-expanded", "true");
    console.log("Resume images added and displayed");
  } else {
    // Toggle visibility
    if (resumeContainer.style.display === "none") {
      resumeContainer.style.display = "flex";
      button.textContent = "Hide Resume";
      button.setAttribute("aria-expanded", "true");
      console.log("Resume container displayed");
    } else {
      resumeContainer.style.display = "none";
      button.textContent = "Click to View Resume";
      button.setAttribute("aria-expanded", "false");
      console.log("Resume container hidden");
    }
  }
});

// Profile Card Flip Animation
const profileCard = document.getElementById("profile-card");
if (profileCard) {
  profileCard.addEventListener("click", () => {
    profileCard.classList.toggle("flipped");
    console.log("Profile card flipped");
  });
}
// Replace with your GitHub username
const GITHUB_USERNAME = "AnnChangSal";

// Select the container where the avatar will be displayed
const githubAvatarContainer = document.getElementById("github-avatar");

// Fetch GitHub profile information
fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("GitHub API error: " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    const avatarUrl = data.avatar_url;

    // Create an image element
    const avatarImg = document.createElement("img");
    avatarImg.src = avatarUrl;
    avatarImg.alt = "GitHub Profile Picture";
    avatarImg.style.width = "120px";
    avatarImg.style.height = "120px";
    avatarImg.style.borderRadius = "50%";
    avatarImg.style.marginBottom = "10px";

    // Append the image to the avatar container
    githubAvatarContainer.appendChild(avatarImg);
  })
  .catch((error) => {
    console.error("Error fetching GitHub profile picture:", error);
    // Fallback in case of an error
    githubAvatarContainer.textContent = "Error loading profile picture.";
  });


// Removed hover animations from JavaScript since they're handled in CSS
