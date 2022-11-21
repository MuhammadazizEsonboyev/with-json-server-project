fetch("http://localhost:3000/data")
    .then(res => res.json())
    .then((info) => {
        info.forEach(elem => {
            let div = document.createElement("div")
            div.classList.add("col-3")
            let row = document.querySelector('.cards');
            div.innerHTML = `
                <div class="card" >
                <img src=${elem.image} height="300" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${elem.name}</h5>
                    <p>${elem.description}</p>
                    <p class="card-text">Price: ${elem.price}</p>
                    <a href="#!" class="btn btn-primary click" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Go somewhere</a>
                </div>
                </div>
        `
            row.appendChild(div)
        });
    })



