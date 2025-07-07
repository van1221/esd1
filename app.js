function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  document.querySelector(`.nav-tab:nth-child(${Array.from(document.querySelectorAll('.tab-content')).findIndex(t=>t.id===tabId)+1})`).classList.add('active');
}
window.addEventListener('load', () => showTab('stations'));
