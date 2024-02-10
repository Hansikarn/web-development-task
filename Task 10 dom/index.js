

// Add the Edit Button:

const form =  document.querySelector("form");
const fruits = document.querySelector(".fruits")

form.addEventListener('submit',function(event){
        event.preventDefault();
        const fruittoadd = document.getElementById('fruit-to-add');
        const newLi=document.createElement('li');
        newLi.innerHTML = fruittoadd.value + '<button class="delete-btn">x</button>' + '<button>Edit</button>';

        fruits.appendChild(newLi);
  })
fruits.addEventListener('click',function(event){
  if(event.target.classList.contains("delete-btn")){
    const fruittodel = event.target.parentElement;
    fruits.removeChild(fruittodel);
  };
})