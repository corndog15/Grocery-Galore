const date = document.querySelector('#date')
const store = document.querySelector('#store')
const listItems = document.querySelector('#listItems')
const error = document.querySelector('#error')
const formInput = document.querySelector('#groceryInput')

let goceryList = []

function saveUserInput(event) {
    event.preventDefault()
    let userInput = {
      date: date.value,
      store: store.value,
      listItems: listItems.value
    }
    if (!userInput.date || !userInput.store || !userInput.listItems) {
      error.textContent = 'Please complete the form.'
    } else {
      goceryList = readLocalStorage()
      goceryList.push(userInput)
      storeLocalStorage(goceryList)
      redirectPage('index.html')
    }
  };
  formInput.addEventListener('submit', saveUserInput);