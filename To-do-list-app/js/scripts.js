function newItem() {
    let li = $('<li></li>')
    let inputValue = $('#input').val()
    li.append(document.createTextNode(inputValue));

    if(inputValue === '') {
        alert('You must write something')
    } else {
        let list = $('#list');
        list.append(li);
    }
    //Crossing out an item
    li.on('dbclick', function(){
        li.toggleClass('strike');
    });
    //We add the delete button 'X'
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    crossOutButton.on('click', function(){
        li.addClass('delete');
    });
    //reordering the items
    $('#list').sortable();

}