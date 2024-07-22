document.getElementById('addButton').addEventListener('click', addItem);

function addItem() {
    const newItem = document.getElementById('newItem').value;
    if (newItem) {
        const li = document.createElement('li');
        li.textContent = newItem;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => li.remove());
        li.appendChild(removeButton);
        document.getElementById('itemList').appendChild(li);
        document.getElementById('newItem').value = '';
    }
}
