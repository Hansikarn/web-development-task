const baskethead = document.querySelector('#basket-heading');
baskethead.style.color = 'brown';



const oddfruitname = document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0; i<oddfruitname.length;i++){
  oddfruitname[i].style.backgroundColor = 'brown'
  oddfruitname[i].style.color = 'white'
  
}
