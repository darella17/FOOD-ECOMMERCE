document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-8");
          entry.target.classList.add("opacity-100", "translate-y-0");
        } else {
          entry.target.classList.remove("opacity-100", "translate-y-0");
          entry.target.classList.add("opacity-0", "translate-y-8");
        }
      });
    },
    {
      threshold: 0.20, 
    }
  );

  const animElements = document.querySelectorAll(".scroll-anim");
  animElements.forEach((el) => observer.observe(el));
});