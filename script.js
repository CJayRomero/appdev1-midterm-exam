// Toggle "More Info" section
const toggleBtn = document.getElementById("toggleBtn");
const extraInfo = document.querySelector(".extra-info");

toggleBtn.addEventListener("click", () => {
  if (extraInfo.classList.contains("hidden")) {
    extraInfo.classList.remove("hidden");
    toggleBtn.textContent = "Show Less";
  } else {
    extraInfo.classList.add("hidden");
    toggleBtn.textContent = "Show More";
  }
});
