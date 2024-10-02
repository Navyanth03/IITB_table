let chemicals = [
    { id: 1, name: "Ammonium Persulfate", vendor: "LG Chem", density: 3525.92, viscosity: 60.63, packaging: "Bag", packSize: "100", unit: "kg", quantity: 6495.18 },
    { id: 2, name: "Caustic Potash", vendor: "Formosa", density: 3172.15, viscosity: 48.22, packaging: "Bag", packSize: "100", unit: "kg", quantity: 8751.90 },
    { id: 3, name: "Dimethylaminopropylamino", vendor: "LG Chem", density: 8435.37, viscosity: 12.62, packaging: "Barrel", packSize: "75.00", unit: "L", quantity: 5964.61 },
    { id: 4, name: "Mono Ammonium Phosphate", vendor: "Sinopec", density: 1597.65, viscosity: 76.51, packaging: "Bag", packSize: "105.00", unit: "kg", quantity: 8183.73 },
    { id: 5, name: "Ferric Nitrate", vendor: "Dowdupont", density: 364.84, viscosity: 14.90, packaging: "Bag", packSize: "105.00", unit: "kg", quantity: 4145.33 },
    { id: 6, name: "n-Pentane", vendor: "Sinopec", density: 4535.26, viscosity: 66.76, packaging: "N/A", packSize: "N/A", unit: "t", quantity: 6272.34 },
    { id: 7, name: "Glycol Ether PM", vendor: "LG Chem", density: 6495.18, viscosity: 72.12, packaging: "Bag", packSize: "250.00", unit: "kg", quantity: 8749.54 },
    { id: 8, name: "Ammonium Persulfate", vendor: "LG Chem", density: 3525.92, viscosity: 60.63, packaging: "Bag", packSize: "100", unit: "kg", quantity: 6495.18 },
    { id: 9, name: "Caustic Potash", vendor: "Formosa", density: 3172.15, viscosity: 48.22, packaging: "Bag", packSize: "100", unit: "kg", quantity: 8751.90 },
    { id: 10, name: "Dimethylaminopropylamino", vendor: "LG Chem", density: 8435.37, viscosity: 12.62, packaging: "Barrel", packSize: "75.00", unit: "L", quantity: 5964.61 },
    { id: 11, name: "Mono Ammonium Phosphate", vendor: "Sinopec", density: 1597.65, viscosity: 76.51, packaging: "Bag", packSize: "105.00", unit: "kg", quantity: 8183.73 },
    { id: 12, name: "Ferric Nitrate", vendor: "Dowdupont", density: 364.84, viscosity: 14.90, packaging: "Bag", packSize: "105.00", unit: "kg", quantity: 4145.33 },
    { id: 13, name: "n-Pentane", vendor: "Sinopec", density: 4535.26, viscosity: 66.76, packaging: "N/A", packSize: "N/A", unit: "t", quantity: 6272.34 },
    { id: 14, name: "Glycol Ether PM", vendor: "LG Chem", density: 6495.18, viscosity: 72.12, packaging: "Bag", packSize: "250.00", unit: "kg", quantity: 8749.54 }  
];

function populateTable() {
    const tableBody = document.getElementById("chemicalData");
    tableBody.innerHTML = '';
    chemicals.forEach((chemical,index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <svg id="mySvg-${index}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" onclick="changeColor(${index})">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <td class="chemical-id">${chemical.id}</td>
            <td class="chemical-name">${chemical.name}</td>
            <td class="chemical-vendor">${chemical.vendor}</td>
            <td class="chemical-density">
                <div class="inner-border">
                    ${chemical.density}
                </div>
            </td>
            <td class="chemical-viscosity">
                <div class="inner-border">
                    ${chemical.viscosity}
                </div>
            </td>
            <td class="chemical-packaging">${chemical.packaging}</td>
            <td class="chemical-packSize">${chemical.packSize}</td>
            <td class="chemical-unit">${chemical.unit}</td>
            <td class="chemical-quantity">
                <div class="inner-border">
                    ${chemical.quantity}
                </div>
            </td>
            <td><button class="edit-btn" onclick="editRow(${index})">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
        </button></td>
        `;
        tableBody.appendChild(row);
    });
}

let currentSelectionIndex=-1;

function changeColor(index) {
    if(currentSelectionIndex>=0){
        const oldSvg=document.getElementById(`mySvg-${currentSelectionIndex}`);
        oldSvg.style.stroke = oldSvg.style.stroke === "blue" ? "currentColor" : "blue"; // Toggle between light blue and default color
    }
    currentSelectionIndex=index;
    const svg = document.getElementById(`mySvg-${index}`);
    svg.style.stroke = svg.style.stroke === "blue" ? "currentColor" : "blue"; // Toggle between light blue and default color
}

function sortTable(n) {
    const table = document.getElementById("chemicalTable");
    let switching = true, shouldSwitch, i, x, y;
    let dir = "asc", switchcount = 0;
    
    while (switching) {
        switching = false;
        let rows = table.rows;
        
        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            
            if (dir === "asc" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            } else if (dir === "desc" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else if (switchcount === 0 && dir === "asc") {
            dir = "desc";
            switching = true;
        }
    }
}

document.addEventListener("DOMContentLoaded", populateTable);

document.getElementById("addRow").addEventListener("click", () => {
    chemicals.push({
        id: chemicals.length + 1,
        name: "New Chemical",
        vendor: "New Vendor",
        density: 1000,
        viscosity: 10,
        packaging: "Bag",
        packSize: 50,
        unit: "kg",
        quantity: 500
    });
    populateTable();
});

document.getElementById("deleteRow").addEventListener("click", () => {
    if(currentSelectionIndex!=-1){
        chemicals=chemicals.filter((chemical)=>chemical.id!=currentSelectionIndex);
        populateTable();
    }
});

document.getElementById("moveUp").addEventListener("click",()=>{
    if(currentSelectionIndex<=0)return;
    const temp=chemicals[currentSelectionIndex];
    chemicals[currentSelectionIndex]=chemicals[currentSelectionIndex-1];
    chemicals[currentSelectionIndex-1]=temp;
    currentSelectionIndex--;
    populateTable();
})

document.getElementById("moveDown").addEventListener("click",()=>{
    if(currentSelectionIndex===chemicals.length-1 || currentSelectionIndex===-1)return;
    const temp=chemicals[currentSelectionIndex];
    chemicals[currentSelectionIndex]=chemicals[currentSelectionIndex+1];
    chemicals[currentSelectionIndex+1]=temp;
    currentSelectionIndex++;
    populateTable();
})

document.getElementById("refreshData").addEventListener("click",()=>{
    chemicals.sort((a,b)=>a.id-b.id);
    populateTable();
})

// Move up and down buttons logic can be similar, shifting array elements.
let currentEditIndex = null;

function editRow(index) {
    document.getElementById("table").style.opacity="0.5";
    currentEditIndex = index;
    const chemical = chemicals[index];
    
    // Populate the form with current data
    document.getElementById("editId").value = chemical.id;
    document.getElementById("editName").value = chemical.name;
    document.getElementById("editVendor").value = chemical.vendor;
    document.getElementById("editDensity").value = chemical.density;
    document.getElementById("editViscosity").value = chemical.viscosity;
    document.getElementById("editPackaging").value = chemical.packaging;
    document.getElementById("editPackSize").value = chemical.packSize;
    document.getElementById("editUnit").value = chemical.unit;
    document.getElementById("editQuantity").value = chemical.quantity;
    
    // Show the form
    document.getElementById("editForm").style.display = "block";
}

function saveEdit() {
    // Save updated data to the array
    chemicals[currentEditIndex] = {
        id: document.getElementById("editId").value,
        name: document.getElementById("editName").value,
        vendor: document.getElementById("editVendor").value,
        density: parseFloat(document.getElementById("editDensity").value),
        viscosity: parseFloat(document.getElementById("editViscosity").value),
        packaging: document.getElementById("editPackaging").value,
        packSize: parseFloat(document.getElementById("editPackSize").value),
        unit: document.getElementById("editUnit").value,
        quantity: parseFloat(document.getElementById("editQuantity").value)
    };
    
    // Hide the form and refresh the table
    document.getElementById("editForm").style.display = "none";
    document.getElementById("table").style.opacity="1";
    populateTable();
}

function cancelEdit() {
    document.getElementById("editForm").style.display = "none";
    document.getElementById("table").style.opacity="1";
}

