// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    window.scrollTo({
      top: targetSection.offsetTop - 80,
      behavior: "smooth",
    })

    // Update active link
    document.querySelectorAll("nav a").forEach((link) => {
      link.classList.remove("active")
    })
    this.classList.add("active")
  })
})

// Active navigation link on scroll
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll("nav a").forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })

  // Sticky header
  const header = document.querySelector("header")
  if (scrollPosition > 50) {
    header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.boxShadow = "none"
  }
})

// Form submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form values
    const formData = new FormData(this)
    const formValues = Object.fromEntries(formData.entries())

    // Here you would typically send the data to a server
    console.log("Form submitted with values:", formValues)

    // Show success message (in a real app, do this after successful submission)
    alert("Thank you for your message! I will get back to you soon.")

    // Reset form
    this.reset()
  })
}

// Animation for skill bars
const skillBars = document.querySelectorAll(".skill-progress")
const animateSkills = () => {
  skillBars.forEach((bar) => {
    const width = bar.style.width
    bar.style.width = "0"
    setTimeout(() => {
      bar.style.transition = "width 1s ease-in-out"
      bar.style.width = width
    }, 100)
  })
}

// Run skill animation when skills section is in view
const skillsSection = document.querySelector(".skills")
if (skillsSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkills()
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  observer.observe(skillsSection)
}
