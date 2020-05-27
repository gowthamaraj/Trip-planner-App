const delete_all = document.querySelector('.element_deleteAll');
const delete_single = document.querySelector('.delete');
const trip = document.querySelector('.trip');
const empty_container = document.querySelector('.empty_container');
const empty = document.querySelector('.empty');


//TO make the trip section invisble and the error section visible on clicking the "delete all" button
delete_all.addEventListener('click', e=> {
    if(empty.classList.contains('empty_invisibe')){
        empty.classList.remove('empty_invisibe');
        trip.classList.remove('trip_visible');
    }
});

//TO make the trip section invisble and the error section visible on clicking the "delete" button
delete_single.addEventListener('click', e=> {
    if(empty.classList.contains('empty_invisibe')){
        empty.classList.remove('empty_invisibe');
        trip.classList.remove('trip_visible');
    }
});