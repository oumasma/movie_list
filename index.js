const searchForm = document.getElementById("search-form");

const displayResults = (data) => {
    data.Search.forEach(movie => {
        displayMovie(movie);
    });
}

const searchMovie = (searchTerm) => {
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => displayResults(data))
        .catch((error) => console.error('error :', error))
}


const displayMovie = (movie) => {
    console.log(movie);
    
    const area = document.getElementById("movies-area");
    
    const url = movie.Poster;
    console.log(url);
    const title = movie.Title;
    console.log(title);
    const year = movie.Year;
    console.log(year);
    

    showMovie(area, url, title, year);
    
}


const showMovie = (area, url, title, year) => {
area.innerHTML += `
    <div class="col-md-3">
        <div class="well text-center">
            <img src='${url}' alt='' />
            <h5>${title}</h5>
            <p>${year}</p>
            <button class="btn btn-primary">En savoir plus</button>
        </div>
    </div>
`
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let search = document.getElementById("search").value;
    searchMovie(search);
  });