const searchBar = document.getElementById('search');


const searchTitle = () => {
    searchTerm = searchBar.value;
    searchMovie(searchTerm);
};

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
    <div class="col-lg-4 col-md-6 col-sm-6 fade-in">
        <div class="mb-30">
            <div >
                <img src='${url}' alt='' />
            </div>
            <div class="location-details">
                <p>${title}</p>
                <p><small>${year}</small></p>
                <a class="location-btn">En savoir plus</a>
            </div>
        </div>
    </div>
`
}

const searchButton = document.getElementById("submit");
    searchButton.addEventListener('click', searchTitle);