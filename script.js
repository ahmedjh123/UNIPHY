// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector(".faq-question");
  btn.addEventListener("click", () => {
    const isActive = item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("active"));
    if (!isActive) item.classList.add("active");
  });
});

// Steps tabs (Hitta partner / Skapa event)
const tabs = document.querySelectorAll(".steps-tab");
const panels = document.querySelectorAll(".steps-list[data-panel]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-tab");

    tabs.forEach((t) => t.classList.remove("steps-tab-active"));
    tab.classList.add("steps-tab-active");

    panels.forEach((panel) => {
      if (panel.getAttribute("data-panel") === target) {
        panel.classList.remove("hidden");
      } else {
        panel.classList.add("hidden");
      }
    });
  });
});

// År i footern
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
