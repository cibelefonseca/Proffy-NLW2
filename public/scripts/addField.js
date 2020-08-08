document.querySelector("#add-time")
    .addEventListener('click', cloneField)

function cloneField() {
    // Duplicate fields
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // Clean input fields
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(field) {
        field.value = "" 
    })
    //Put fields on page
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}