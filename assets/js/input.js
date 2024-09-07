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
  if (!currentList.store)
  {
    error.textContent = 'Please complete the form.'
  } else

  currentList.items.push(listItems.value);
  console.log(currentList);
  listItems.ariaPlaceholder = 'Add another item';
  
};

function dateInputModal() { (async () => {
  const { value: date } = await Swal.fire({
    title: "select departure date",
    input: "date",
    didOpen: () => {
      const today = (new Date()).toISOString();
      Swal.getInput().min = today.split("T")[0];
    }
  });
  if (date) {
  document.querySelector('#date').value = date
  }
})()
}
date.addEventListener('click', dateInputModal);

function storeInputModal() { (async () => {
  const { value: store } = await Swal.fire({
    title: "Select a store",
    input: "select",
    inputOptions: {
      Stores: {
        harristeeter: "Harris Teeter",
        lowesfoods: "Lowes foods",
        walmart: "Walmart",
    },
    },
  });
  if (store) {
    document.querySelector('#store').value = store
  }
} )()
}
store.addEventListener('click', storeInputModal);



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

