// Add input element inside form, before button, to take fruit description

const newInputElement = document.createElement('input');
newInputElement.type='text';
newInputElement.placeholder = 'Fruit description...';
newInputElement.id= 'description';
newInputElement.name='description';

const form =document.querySelector('form');
const button = document.querySelector('button');
form.insertBefore(newInputElement,button);

// Show the fruit description in italics on the next line
 const fruits = document.querySelector('.fruits');

form.addEventListener('submit',function(event){
  const newInput = document.getElementById('fruit-to-add');
  const newInput2 = document.getElementById('description');

  const p_tag = document.createElement('p');
  const p_tagtext = document.createTextNode(newInput2.value);
  p_tag.style = "font-style:italic";
  p_tag.appendChild(p_tagtext);

  const newLi=document.createElement('li');
  const newLiText = document.createTextNode(newInput.value);
  newLi.appendChild(newLiText);
  newLi.appendChild(p_tag);
  newLi.className='fruit;

   const newDelete = document.createElement('button');
  const newDeleteText = document.createTextNode('x');
  newDelete.appendChild(newDeleteText);
  newDelete.className = 'delete-btn';
  newLi.appendChild(newDelete);
  fruits.appendChild(newLi);
  })

  fruits.addEventListener('click', function(event){
      if(event.target.classList.contains('delete-btn')){
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
        }
    })
// Create a filter that shows only those fruits whose either name or description or both matches the entered text
document.getElementById('filter').addEventListener('keyup', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const listItems = document.querySelectorAll('.fruits li');
for(let i=0; i<listItems.length; i++){
const currentFruitText =  listItems[i].firstChild.textContent.toLowerCase();
const currentFruitDescription = listItems[i].firstElementChild.firstChild.textContent.toLowerCase();  
if((currentFruitText.indexOf(searchTerm) === -1) && (currentFruitDescription.includes(searchTerm) === false)){
listItems[i].style.display = 'none';
}else{
listItems[i].style.display = 'flex';
}
}
})


  





