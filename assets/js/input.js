const date = document.querySelector('#date')
const store = document.querySelector('#store')
const listItems = document.querySelector('#listItems')
const error = document.querySelector('#error')
const formInput = document.querySelector('#groceryInput')
const done = document.querySelector('#done')
const noInput = document.querySelector('#noInput')

let goceryList = [];

let currentList = null;


function saveUserInput(event) {
  event.preventDefault()

  currentList = currentList || {
    date: date.value,
    store: store.value,
    items: [],
  };
  if (!currentList.date || !currentList.store)
  {
    error.textContent = 'Please complete the form.'
  } else

  currentList.items.push(listItems.value);
  console.log(currentList);
  listItems.innerHTML = 'Add another item';
};



formInput.addEventListener('submit', saveUserInput);

done.addEventListener('click', function () 

 { if (!currentList || !currentList.items.length) {
    noInput.textContent = 'Please complete the form.'
  }
  else {

  goceryList = readLocalStorage()
  goceryList.push(currentList)
  storeLocalStorage(goceryList)
  redirectPage('index.html')
}});

