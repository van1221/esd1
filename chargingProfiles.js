let chargingProfiles = [];
function createChargingProfilePrompt() {
  const name = prompt("Profile name:");
  const speed = prompt("Speed (fast/rapid/ultra):");
  const schedule = prompt("Schedule (e.g., 6pm-9pm):");
  if (!name||!speed||!schedule) return alert("All fields required.");
  chargingProfiles.push({ id: Date.now(), name, speed, schedule });
  displayChargingProfiles();
}
function displayChargingProfiles() {
  const c = document.getElementById("chargingProfilesList");
  c.innerHTML = chargingProfiles.length
    ? chargingProfiles.map(p => `
      <div style="padding:10px;border:1px solid #ccc;border-radius:6px;margin-bottom:10px;">
        <strong>${p.name}</strong><br>Speed: ${p.speed}<br>Time: ${p.schedule}
      </div>
    `).join('')
    : "<p>No profiles created yet.</p>";
}
window.addEventListener('load', displayChargingProfiles);
