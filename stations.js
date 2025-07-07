function searchStations() {
  const container = document.getElementById("stationResults");
  const mockStations = [
    { name: "EV Hub A", speed: "Fast", distance: "3.2 km" },
    { name: "Green Charge B", speed: "Rapid", distance: "4.1 km" },
    { name: "PowerPlug C", speed: "Ultra", distance: "2.8 km" }
  ];
  container.innerHTML = '';
  mockStations.forEach(s => {
    const card = document.createElement("div");
    Object.assign(card.style, {
      margin: "10px 0",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "6px"
    });
    card.innerHTML = `
      <strong>${s.name}</strong><br>
      Speed: ${s.speed}<br>
      Distance: ${s.distance}<br>
      <button onclick="alert('Reserve ${s.name}')">Reserve</button>
    `;
    container.appendChild(card);
  });
}
