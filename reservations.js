let reservations = [];
function createReservationPrompt() {
  const station = prompt("Station name:");
  const date = prompt("Date (YYYY-MM-DD):");
  const time = prompt("Time (HH:MM):");
  if (!station || !date || !time) return alert("Fill all fields.");
  reservations.push({ id: Date.now(), station, date, time });
  displayReservations();
}
function displayReservations() {
  const c = document.getElementById("reservationsList");
  c.innerHTML = reservations.length
    ? reservations.map(r => `
      <div style="padding:10px;border:1px solid #ccc;border-radius:6px;margin-bottom:10px;">
        <strong>${r.station}</strong><br>Date: ${r.date}<br>Time: ${r.time}
      </div>
    `).join('')
    : "<p>No reservations yet.</p>";
}
window.addEventListener('load', displayReservations);
