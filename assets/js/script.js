

// use to switch between pages
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(groceryList) {
    localStorage.setItem('groceryList', JSON.stringify(groceryList))
  };


 // reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
    const groceryList = JSON.parse(localStorage.getItem('groceryList'))
    return groceryList ? groceryList : []
  };

  // the following code is to toggle between light and dark mode
      
/*if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark')
  }
  
  toggle.addEventListener('click', function() {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }); ?*/