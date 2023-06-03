let items = document.querySelectorAll(".item")
const sortableList = document.querySelector(".sortable-list");
copy = null

items.forEach((item) => {
    item.addEventListener("dragstart", function() {
        copy = item
        item.style.opacity = "0.3"
        setTimeout(() => item.classList.add("dragging"), 0);
    })
    item.addEventListener("dragend", function() {
        copy = null
        item.style.opacity = "1"
        item.classList.remove("dragging")
    })
})


sortableList.addEventListener("dragover", function(event) {
    let draggedItem = document.querySelector(".dragging")
    // . we create an array of the items that are not being dragged
    let notDraggedItems = [...sortableList.querySelectorAll(".item:not(.dragging)")]; // ... spread op conver to array
    // . we find the sibling that we want to put our item before
    let nextItem = notDraggedItems.find((sibling) => { // find return the item that passes the test
        // ! the vertical coordinate of the mouse(like vh) < 
        // ! offsettop: the dist between the top of the sib and the top of parent
        // ! offsetHeight: the height of the sibling but margin and border
        // !checking  if the vertical position of the mouse is less than or equal to the middle of the sibling element
        return event.clientY <= sibling.offsetTop + sibling.offsetHeight / 2
    })
    // . we put the draggedItem before nextItem
    sortableList.insertBefore(draggedItem, nextItem)
})







// ! gpt
/*
sortableList.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(sortableList, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
        sortableList.appendChild(draggable);
    } else {
        sortableList.insertBefore(draggable, afterElement);
    }
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.item:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
*/