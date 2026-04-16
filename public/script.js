// Load devices
fetch("/devices")
.then(res => res.json())
.then(data => {
  let html = "";

  data.forEach(d => {
    html += `
      <div>
        <h3>${d.device_name}</h3>
        <p>Status: ${d.status ? "ON" : "OFF"}</p>
        <button onclick="toggle(${d.device_id}, ${!d.status})">
          Toggle
        </button>
      </div>
    `;
  });

  document.getElementById("devices").innerHTML = html;
});

// Toggle device
function toggle(id, status) {
  fetch("/devices/" + id, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ status })
  }).then(() => location.reload());
}

// Chart
const ctx = document.getElementById("chart");

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1", "2", "3"],
    datasets: [{
      label: "Temperature",
      data: [22, 30, 28]
    }]
  }
});