fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    return response.json();
  })
  .then((books) => {
    console.log(books);

    for (let i = 0; i < books.length; i++) {
      const container = document.querySelector(".books");
      const div = document.createElement("div");
      let divContent = (div.innerHTML = `
      <div class="card">
        <img
          src="${books[i].img}"
          alt=""
        />
        <div class="card-body">
          <div class="card-top">
            <h2>${books[i].title}</h2>
          </div>
          <div class="card-bottom">
            <p>${books[i].category}</p>
            <p>${books[i].price}</p>
          </div>
        </div>
      </div>
      `);
      container.appendChild(div);
    }
  });
