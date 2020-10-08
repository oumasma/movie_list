const searchBar = document.getElementById('search');

const displayResults = (data) => {
    data.Search.forEach(movie => {
        displayMovie(movie);
        console.log(data);    
    });
}

const searchMovie = (searchTerm) => {
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => displayResults(data))
        .catch((error) => console.error('error :', error))
}

searchMovie("rambo");




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
    <div>
        <img src='${url}' alt='' />
        <p>${title}</p>
        <p>${year}</p>
    </div>
`
}