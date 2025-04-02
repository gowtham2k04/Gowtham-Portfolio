// Mobile Menu Toggle
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Close Menu on Click
function closeMenu() {
    document.querySelector('.nav-links').classList.remove('active');
}

// Show/Hide Scroll to Top Button 
let scrollTopBtn = document.getElementById("scrollTopBtn");

  // Show or hide button on scroll
  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  // Scroll to top on button click
  scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


// Animation on Scroll
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    function showItems() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        items.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top + scrollY;
            if (scrollY + windowHeight - 100 > itemTop) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showItems);
    showItems();
});



document.addEventListener("DOMContentLoaded", function () {
    function animateSkills() {
        let skillsSection = document.getElementById("skills");
        let skills = document.querySelectorAll(".fill");
        let sectionTitle = document.querySelector(".section-title");
        let skillsContainer = document.querySelector(".skills-container");
        let skillItems = document.querySelectorAll(".skill");

        if (!skillsSection) {
            console.error("Skills section not found!");
            return;
        }

        // Get the position of the skills section
        let sectionPos = skillsSection.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            skillsSection.classList.add("show-skills");
            sectionTitle.classList.add("show-skills");
            skillsContainer.classList.add("show-skills");

            skills.forEach((skill, index) => {
                skill.style.width = skill.getAttribute("data-width");

                // Delay animation for each skill
                setTimeout(() => {
                    skillItems[index].classList.add("show-skills");
                }, index * 150);
            });

            // Remove event listener after animation runs once
            window.removeEventListener("scroll", animateSkills);
        }
    }

    window.addEventListener("scroll", animateSkills);
    animateSkills(); // Run once in case it's already in view
});
