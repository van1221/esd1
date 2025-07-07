let paymentMethods = [];
function addPaymentMethodPrompt() {
  const name = prompt("Name on card:");
  const last4 = prompt("Card last 4 digits:");
  if (!name || !last4) return alert("All fields required.");
  paymentMethods.push({ id: Date.now(), name, last4 });
  displayPaymentMethods();
}
function displayPaymentMethods() {
  const c = document.getElementById("paymentMethods");
  c.innerHTML = paymentMethods.length
    ? paymentMethods.map(pm => `
      <div style="padding:10px;border:1px solid #ccc;border-radius:6px;margin-bottom:10px;">
        <strong>${pm.name}</strong><br>**** **** **** ${pm.last4}
      </div>
    `).join('')
    : "<p>No payment methods saved.</p>";
}
window.addEventListener('load', displayPaymentMethods);
