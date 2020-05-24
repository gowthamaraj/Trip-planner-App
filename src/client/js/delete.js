const delete_all = document.querySelector('.element_deleteAll');
const delete_single = document.querySelector('.delete');
const trip = document.querySelector('.trip');
const empty_container = document.querySelector('.empty_container');
const empty = document.querySelector('.empty');

delete_all.addEventListener('click', e=> {
    if(empty.classList.contains('empty_invisibe')){
        empty.classList.remove('empty_invisibe');
        trip.classList.remove('trip_visible');
    }
});

delete_single.addEventListener('click', e=> {
    if(empty.classList.contains('empty_invisibe')){
        empty.classList.remove('empty_invisibe');
        trip.classList.remove('trip_visible');
    }
});