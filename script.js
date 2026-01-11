const profileCard = document.getElementById("profile-card");
if (profileCard) {
  profileCard.addEventListener("click", (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') return;
    
    profileCard.classList.toggle("flipped");
    console.log("Profile card flipped");
  });
} else {
    console.error("Profile Card element not found!");
}

const GITHUB_USERNAME = "AnnChangSal";
const githubAvatarContainer = document.getElementById("github-avatar");

if (githubAvatarContainer) {
  fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("GitHub API error: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const avatarUrl = data.avatar_url;

      const avatarImg = document.createElement("img");
      avatarImg.src = avatarUrl;
      avatarImg.alt = "GitHub Profile Picture";
      
      avatarImg.style.width = "120px";
      avatarImg.style.height = "120px";
      avatarImg.style.borderRadius = "50%";
      avatarImg.style.marginBottom = "10px";
      avatarImg.style.border = "2px solid #00ffcc";

      githubAvatarContainer.innerHTML = ""; 
      githubAvatarContainer.appendChild(avatarImg);
    })
    .catch((error) => {
      console.error("Error fetching GitHub profile picture:", error);
      githubAvatarContainer.textContent = "Profile Img Error";
    });
} else {
    console.log("GitHub Avatar container not found (Check index.html id='github-avatar')");
}

const iframe = document.getElementById('gamma-presentation');

if (iframe) {
    let currentSlide = 1;
    const maxSlides = 5;

    window.navigateSlide = function(direction) {
        if (direction === 'prev') {
            currentSlide = Math.max(1, currentSlide - 1);
        } else if (direction === 'next') {
            currentSlide = Math.min(maxSlides, currentSlide + 1);
        }
        iframe.src = `https://gamma.app/embed/zyses8itfl4m7r6?slide=${currentSlide}`;
    };
}
