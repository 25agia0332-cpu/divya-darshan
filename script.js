const nav = document.getElementById("navLinks");
document.getElementById("menuBtn").addEventListener("click", () => nav.classList.toggle("open"));

function chooseTemple(name) {
  document.getElementById("temple").value = name;
  document.getElementById("planner").scrollIntoView({behavior:"smooth"});
}

document.getElementById("tripForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const temple = document.getElementById("temple").value;
  const date = document.getElementById("date").value;
  const people = document.getElementById("people").value;
  const service = document.getElementById("service").value;
  const formattedDate = new Date(date + "T00:00:00").toLocaleDateString("en-IN", {
    day:"numeric", month:"long", year:"numeric"
  });
  const result = document.getElementById("result");
  result.innerHTML = `<h3>🙏 Trip Plan Created!</h3>
    <p><strong>${name}</strong>, your ${temple} journey is planned for <strong>${formattedDate}</strong>.</p>
    <p>Travellers: <strong>${people}</strong> &nbsp; | &nbsp; Main service: <strong>${service}</strong></p>
    <p>Our demo will connect you with suitable local service providers.</p>`;
  result.classList.remove("hidden");
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("contactMsg").textContent =
    "Thank you! Your enquiry has been recorded in this demo.";
  this.reset();
});
