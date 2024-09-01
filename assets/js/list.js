const main = document.querySelector('main')
const toggle = document.querySelector("#toggle")
const backButton = document.querySelector("#pageSwap")
const message = document.querySelector("#message")

renderGroceryList()

function renderGroceryList() {
    let Posts = readLocalStorage()
    console.log(Posts)
    if (Posts.length === 0) {
      document.getElementById('message').innerText = 'Your list will appear here';
    } else {
      Posts.forEach(post => {
        let postElement = document.createElement('li')
        postElement.innerHTML = `
        <h3>Date: ${post.date}</h3>
        <h4>${post.store}</h4>
        <p>List: ${post.listItems}</p>`;
        
        message.appendChild(postElement)
      })
    }
  }
   



    backButton.addEventListener('click', function () {
        redirectPage('form.html');
      });