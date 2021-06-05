
let newTask = $('#newTask')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let ulTask = $('#ulTask')

function addItem() {
    let listItem = $('<li>',{
        'class' : 'list-group-item',
        text: newTask.val()
    })

    listItem.click(() =>{
        listItem.toggleClass('done')
    })

    ulTask.append(listItem)
    newTask.val('')
    toggleInputButtons()
}


function clearItem(){
    $('#ulTask .done').remove()
    toggleInputButtons()
}

function sortItem(){
    $('#ulTask .done').appendTo(ulTask)
}

function toggleInputButtons(){
    btnAdd.prop('disabled',newTask.val() == '')
    btnReset.prop('disabled',newTask.val() == '')
    btnCleanup.prop('disabled',ulTask.children().length < 1)
    btnSort.prop('disabled',ulTask.children().length < 1)
}

newTask.on('input',toggleInputButtons)

newTask.keypress((e) =>{
    if (e.which == 13) addItem()
})

btnAdd.click(addItem)

btnReset.click(() =>{
    newTask.val('')
    toggleInputButtons()
})

btnCleanup.click(clearItem)

btnSort.click(sortItem)