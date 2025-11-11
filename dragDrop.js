const draggable = document.querySelectorAll(".draggable");
const dropzone = document.querySelectorAll(".dropzone");

draggable.forEach( (draggable) => {
    draggable.addEventListener('dragstart', (event) =>{
    event.dataTransfer.setData('text', event.target.id);
    draggable.classList.add('dragging');
    });
});

dropzone.forEach( (dropzone) =>{

    dropzone.addEventListener('dragover', (event) =>{
        event.preventDefault();
    });


    dropzone.addEventListener('drop', (event) =>{
        event.preventDefault();
        const data = event.dataTransfer.getData('text');
        const dataDrop = document.getElementById(data);

        dataDrop.classList.add('inside');
        dropzone.classList.add('inside');

        dropzone.appendChild(dataDrop);
    });

});


