const main = document.querySelector('main')
const toggle = document.querySelector("#toggle")
const backButton = document.querySelector("#pageSwap")
const message = document.querySelector("#message")
const listClear = document.querySelector("#listClear")
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
        <section id="styleList" class="d-flex flex-column w-25 align-items-center mb-3">
        <h3>${post.date}</h3>
        <h4>${post.store}</h4>
        <ul class="list-group">
        ${post.items.map(item => `<li class="list-group-item">${item}</li>`).join('')}
        </ul>
        </section>`;
        
        
        message.appendChild(postElement)
      })
    }
  }
   
  listClear.onclick = function () {
    localStorage.clear();
    if(localStorage.length === 0)
    {
      message.innerHTML = "Your list will appear here";
    }
  }


    backButton.addEventListener('click', function () {
        redirectPage('form.html');
      });