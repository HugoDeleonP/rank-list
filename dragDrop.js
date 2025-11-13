const draggable = document.querySelectorAll(".draggable");
const dropzone = document.querySelectorAll(".dropzone");
const images = document.getElementsByClassName("image");
const galeria = document.getElementById('default-image');

draggable.forEach( (draggable) => {
    draggable.addEventListener('dragstart', (event) =>{
        event.dataTransfer.setData('text', event.target.id);
        draggable.classList.add('draggable');
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
        const dataParent = dataDrop.parentElement;

        dataDrop.classList.add('inside');
        dropzone.classList.add('inside');

        dropzone.appendChild(dataDrop);

        if(dataParent.childElementCount == 0){
            dataParent.classList.remove('inside');
        }
    });

});
