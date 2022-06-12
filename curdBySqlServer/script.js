var selectedRow = null
function reciveFormData() {
    var formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["email"] = document.getElementById("email").value;
    formData["phoneno"] = document.getElementById("phoneno").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

function onFormSubmit() {
    debugger;
        var formData =  reciveFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    
}


function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phoneno;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.address;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneno").value = "";
    document.getElementById("address").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phoneno").value = selectedRow.cells[2].innerHTML;
    document.getElementById("address").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.phoneno;
    selectedRow.cells[3].innerHTML = formData.address;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}