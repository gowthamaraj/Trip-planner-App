const add_Pack = document.querySelector('.accordion_pack');
const add_Note = document.querySelector('.accordion_note');
const form_pack = document.querySelector('.form_pack');
const form_note = document.querySelector('.form_note');
const packs = document.querySelector('.packs');
const notes = document.querySelector('.notes');
const add_click_packs = document.querySelector('.form_pack i');
const add_click_notes = document.querySelector('.form_note i');

// adding eventlisteners

add_Pack.addEventListener('click', e => {
    if(!add_Pack.nextElementSibling.classList.contains('container_pack_active')){
         add_Pack.nextElementSibling.classList.add('container_pack_active');
    }else{
        add_Pack.nextElementSibling.classList.remove('container_pack_active');
    }   
});
add_Note.addEventListener('click', e => {
    if(!add_Note.nextElementSibling.classList.contains('container_note_active')){
         add_Note.nextElementSibling.classList.add('container_note_active');
    }else{
        add_Note.nextElementSibling.classList.remove('container_note_active');
    }   
});

form_pack.addEventListener('submit', e => {
    e.preventDefault();
    const val = form_pack.addPack.value.trim();
    packs.innerHTML += `<span>${val}<i class="fa fa-times" aria-hidden="true"></i></span`;
    form_pack.reset();
})
form_note.addEventListener('submit', e => {
    e.preventDefault();
    const val = form_note.addNote.value.trim();
    notes.innerHTML += `<span>${val}<i class="fa fa-times" aria-hidden="true"></i></span`;
    form_note.reset();
})

add_click_packs.addEventListener('click', e => {
    const val = form_pack.addPack.value.trim();
    packs.innerHTML += `<span>${val}<i class="fa fa-times" aria-hidden="true"></i></span`;
    form_pack.reset();
})

add_click_notes.addEventListener('click', e => {
    const val = form_note.addNote.value.trim();
    notes.innerHTML += `<span>${val}<i class="fa fa-times" aria-hidden="true"></i></span`;
    form_note.reset();
})

packs.addEventListener('click', e => {
    if(e.target.tagName === "I"){
        e.target.parentElement.remove();
    }
})
notes.addEventListener('click', e => {
    if(e.target.tagName === "I"){
        e.target.parentElement.remove();
    }
})