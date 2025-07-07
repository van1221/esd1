let vehicles = [];
function addVehiclePrompt() {
  const make = prompt("Make:");
  const model = prompt("Model:");
  const plate = prompt("Plate:");
  if (!make||!model||!plate) return alert("Fill all fields.");
  vehicles.push({ id: Date.now(), make, model, plate });
  displayVehicles();
}
function displayVehicles() {
  const c = document.getElementById("vehiclesList");
  c.innerHTML = vehicles.length
    ? vehicles.map(v => `
      <div style="padding:10px;border:1px solid #ccc;border-radius:6px;margin-bottom:10px;">
        <strong>${v.make} ${v.model}</strong><br>Plate: ${v.plate}
      </div>
    `).join('')
    : "<p>No vehicles added yet.</p>";
}
window.addEventListener('load', displayVehicles);
