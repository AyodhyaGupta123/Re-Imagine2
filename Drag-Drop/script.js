const items = document.querySelectorAll('.item');
const containers = document.querySelectorAll('.container');

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

containers.forEach(container => {
    container.addEventListener('dragover', dragOver);
    container.addEventListener('dragenter', dragEnter);
    container.addEventListener('dragleave', dragLeave);
    container.addEventListener('drop', drop);
});

let draggedItem = null;

function dragStart() {
    draggedItem = this;
    setTimeout(() => {
        this.style.display = 'none';
    }, 0);
}

function dragEnd() {
    setTimeout(() => {
        this.style.display = 'block';
        draggedItem = null;
    }, 0);
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.style.backgroundColor = '#f0f0f0';
}

function dragLeave() {
    this.style.backgroundColor = '#fff';
}

function drop() {
    this.style.backgroundColor = '#fff';
    this.appendChild(draggedItem);
}
