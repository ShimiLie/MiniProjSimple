

function getApiData() {
    const id = document.querySelector("#ID").value;

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then((data) => {
        
        document.querySelector(".card-body").innerHTML = `
        
        <h5 class="card-title">${data.userId}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${data.id}</h6>
              <p class="card-text">${data.title}</p>
              <a href="#" class="card-link">${data.completed}</a>  
        `;
      })
      .catch((err)=> {
        console.log("ID  not found", err);
      })
};

function API() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
};

API();


