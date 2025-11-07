const draggable = document.querySelectorAll(".draggable");
const dropzone = document.querySelectorAll(".dropzone");

draggable.addEventListener('dragstart', (event) =>{
    event.dataTransfer.setData('text/plain', event.target.id);
    draggable.classlist.add('dragging');
});

draggable.addEventListener('dragend', () =>{
    draggable.classlist.remove('dragging');
});

dropzone.addEventListener('dragenter', (event) =>{
    event.preventDefault();
    dropzone.classlist.add('over');
});

dropzone.addEventListener('dragover', (event) =>{
    event.preventDefault();
});

dropzone.addEventListener('dragleave', () =>{
    dropzone.classlist.remove('over');
    dropzone.appendChild(draggable);
})