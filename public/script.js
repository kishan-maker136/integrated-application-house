// 🔹 Supabase Setup
const supabase = window.supabase.createClient(
  "https://cpbyotxrrcpyqoowwmex.supabase.co",
  "cpbyotxrrcpyqoowwmex"
);


// 🔹 Navigation Logic
function switchPage(pageId, element) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    element.classList.add('active');

    if(pageId === 'admin') loadTuples();
}


// 🔹 Add Device
async function submitToBackend() {
    const name = document.getElementById('newDevName').value;

    if (!name) return alert("Please enter a device name.");

    const { data, error } = await supabase
        .from("devices")
        .insert([{ name }]);

    if (error) {
        alert("Error: " + error.message);
        console.log(error);
    } else {
        alert(`Success! ${name} added.`);
        document.getElementById('newDevName').value = '';
        updateDashboard();
    }
}


// 🔹 Load Dashboard
async function updateDashboard() {
    const { data, error } = await supabase
        .from("devices")
        .select("*")
        .order("id", { ascending: false });

    if (error) {
        console.log("Error loading dashboard:", error);
        return;
    }

    const container = document.getElementById('dashboard-toggles');

    container.innerHTML = data.length
        ? data.map(dev => `
            <div class="toggle-btn">
                ${dev.name}
            </div>
        `).join('')
        : "No devices provisioned.";
}


// 🔹 Load Admin Table
async function loadTuples() {
    const { data, error } = await supabase
        .from("devices")
        .select("*")
        .order("id", { ascending: false });

    if (error) {
        console.log("Error loading table:", error);
        return;
    }

    const tableBody = document.getElementById('tuple-body');

    tableBody.innerHTML = data.map(row => `
        <tr>
            <td>${row.id}</td>
            <td><b>${row.name}</b></td>
            <td>${new Date(row.created_at).toLocaleString()}</td>
        </tr>
    `).join('');
}


// 🔹 Load on page start
window.onload = updateDashboard;