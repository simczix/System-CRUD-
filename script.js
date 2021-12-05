var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Tytul"] = document.getElementById("Tytul").value;
    formData["ISBN"] = document.getElementById("ISBN").value;
    formData["Autor"] = document.getElementById("Autor").value;
    formData["Wydanie"] = document.getElementById("Wydanie").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Tytul;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.ISBN;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Autor;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Wydanie;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edytuj</a>
                       <a onClick="onDelete(this)">Usuń</a>`;
}

function resetForm() {
    document.getElementById("Tytul").value = "";
    document.getElementById("ISBN").value = "";
    document.getElementById("Autor").value = "";
    document.getElementById("Wydanie").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Tytul").value = selectedRow.cells[0].innerHTML;
    document.getElementById("ISBN").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Autor").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Wydanie").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Tytul;
    selectedRow.cells[1].innerHTML = formData.ISBN;
    selectedRow.cells[2].innerHTML = formData.Autor;
    selectedRow.cells[3].innerHTML = formData.Wydanie;
}

function onDelete(td) {
    if (confirm('Czy na pewno chcesz usunąć ten wpis?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Tytul").value == "") {
        isValid = false;
        document.getElementById("TytulValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("TytulValidationError").classList.contains("hide"))
            document.getElementById("TytulValidationError").classList.add("hide");
    }
    return isValid;
}