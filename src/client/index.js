 import './styles/main.scss'
 import './js/model'
 import './js/list'
 import './js/delete'
 import './js/addPlan'
 export const prints = require('./js/print');
 prints.addEventListener('click',e=> {
     window.print();
 });