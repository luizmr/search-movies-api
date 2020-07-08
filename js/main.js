const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const api = ""; //insert api here

const footer = document.querySelector("footer");
const searchBtn = document.getElementById("search");
const topBtn = document.getElementById("topRated");
const nowBtn = document.getElementById("nowPlaying");
const upcomingBtn = document.getElementById("upcoming");
const popularBtn = document.getElementById("popular");

footer.classList.remove("footer");

$(document).ready(() => {
    $("#searchForm").on("submit", (e) => {
        let searchText = $("#searchText").val();
        let searchTextNumber = $("#searchTextNumber").val();
        console.log(searchText);
        getMovies(searchText, searchTextNumber);

        e.preventDefault();
    });
});

function getMovies(searchText, random) {
    // api request

    axios
        .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${searchText}&page=${random}`
        )
        .then((response) => {
            console.log(response);

            let movies = response.data.results;
            let output = "";
            // for each movie, it will add an output
            $.each(movies, (index, movie) => {
                output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="https://image.tmdb.org/t/p/w185/${movie.poster_path}" alt="Image not found" onerror="this.src='/assets/not-found.png';">
                        <h5>${movie.title}</h5>
                        <a onClick="movieSelected(${movie.id})" class="btn btn-primary" href="#" style="border-radius: 0.5rem;">Movie Details</a>
                    </div>
                </div>
                `;
            });

            footer.classList.add("footer");

            // inside #movies div
            $("#movies").html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

function movieSelected(id) {
    sessionStorage.setItem("movieId", id);
    window.location = "movie.html";
    return false;
}

// top rated

$(document).ready(() => {
    $("#numberForm").on("submit", (e) => {
        let searchNumber = $("#searchNumber").val();
        console.log(searchNumber);
        topRated(searchNumber);

        e.preventDefault();
    });
});

function topRated(searchNumber) {
    // api request

    axios
        .get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&page=${searchNumber}`
        )
        .then((response) => {
            console.log(response);

            let movies = response.data.results;
            let output = "";
            let i = 1;
            if (searchNumber === "0") {
                alert("Number of page need to be 1 or higher!");
            } else if (searchNumber === "1") {
                i = 1;
            } else if (searchNumber >= 2) {
                i = searchNumber * 20 - 19;
            } else {
                alert("Enter a valid number");
            }

            // for each movie, it will add an output
            $.each(movies, (index, movie) => {
                output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="https://image.tmdb.org/t/p/w185/${
                            movie.poster_path
                        }" alt="Image not found" onerror="this.src='/assets/not-found.png';">
                        <h5>${i++}º - ${movie.title}</h5>
                        <a onClick="movieSelected(${
                            movie.id
                        })" class="btn btn-primary" href="#" style="border-radius: 0.5rem;">Movie Details</a>
                    </div>
                </div>
                `;
            });

            footer.classList.add("footer");

            // inside #movies div
            $("#movies").html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

// now playing

$(document).ready(() => {
    $("#numberFormPlaying").on("submit", (e) => {
        let searchNumberPlaying = $("#searchNumberPlaying").val();
        console.log(searchNumberPlaying);
        nowPlaying(searchNumberPlaying);

        e.preventDefault();
    });
});

function nowPlaying(searchNumberPlaying) {
    // api request

    axios
        .get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&page=${searchNumberPlaying}`
        )
        .then((response) => {
            console.log(response);

            let movies = response.data.results;
            let output = "";
            let i = 1;
            if (searchNumberPlaying === "0") {
                alert("Number of page need to be 1 or higher!");
            } else if (searchNumberPlaying === "1") {
                i = 1;
            } else if (searchNumberPlaying >= 2) {
                i = searchNumberPlaying * 20 - 19;
            } else {
                alert("Enter a valid number");
            }

            // for each movie, it will add an output
            $.each(movies, (index, movie) => {
                output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="https://image.tmdb.org/t/p/w185/${
                            movie.poster_path
                        }" alt="Image not found" onerror="this.src='/assets/not-found.png';">
                        <h5>${i++}º - ${movie.title}</h5>
                        <a onClick="movieSelected(${
                            movie.id
                        })" class="btn btn-primary" href="#" style="border-radius: 0.5rem;">Movie Details</a>
                    </div>
                </div>
                `;
            });

            footer.classList.add("footer");

            // inside #movies div
            $("#movies").html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

// upcoming

$(document).ready(() => {
    $("#numberFormUpcoming").on("submit", (e) => {
        let searchNumberUpcoming = $("#searchNumberUpcoming").val();
        console.log(searchNumberUpcoming);
        upcoming(searchNumberUpcoming);

        e.preventDefault();
    });
});

function upcoming(searchNumberUpcoming) {
    // api request

    axios
        .get(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&page=${searchNumberUpcoming}`
        )
        .then((response) => {
            console.log(response);

            let movies = response.data.results;
            let output = "";
            let i = 1;
            if (searchNumberUpcoming === "0") {
                alert("Number of page need to be 1 or higher!");
            } else if (searchNumberUpcoming === "1") {
                i = 1;
            } else if (searchNumberUpcoming >= 2) {
                i = searchNumberUpcoming * 20 - 19;
            } else {
                alert("Enter a valid number");
            }

            // for each movie, it will add an output
            $.each(movies, (index, movie) => {
                output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="https://image.tmdb.org/t/p/w185/${
                            movie.poster_path
                        }" alt="Image not found" onerror="this.src='/assets/not-found.png';">
                        <h5>${i++}º - ${movie.title}</h5>
                        <a onClick="movieSelected(${
                            movie.id
                        })" class="btn btn-primary" href="#" style="border-radius: 0.5rem;">Movie Details</a>
                    </div>
                </div>
                `;
            });

            footer.classList.add("footer");

            // inside #movies div
            $("#movies").html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

// popular

$(document).ready(() => {
    $("#numberFormPopular").on("submit", (e) => {
        let searchNumberPopular = $("#searchNumberPopular").val();
        console.log(searchNumberPopular);
        popular(searchNumberPopular);

        e.preventDefault();
    });
});

function popular(searchNumberPopular) {
    // api request

    axios
        .get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${api}&page=${searchNumberPopular}`
        )
        .then((response) => {
            console.log(response);

            let movies = response.data.results;
            let output = "";
            let i = 1;
            if (searchNumberPopular === "0") {
                alert("Number of page need to be 1 or higher!");
            } else if (searchNumberPopular === "1") {
                i = 1;
            } else if (searchNumberPopular >= 2) {
                i = searchNumberPopular * 20 - 19;
            } else {
                alert("Enter a valid number");
            }

            // for each movie, it will add an output
            $.each(movies, (index, movie) => {
                output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="https://image.tmdb.org/t/p/w185/${
                            movie.poster_path
                        }" alt="Image not found" onerror="this.src='/assets/not-found.png';">
                        <h5>${i++}º - ${movie.title}</h5>
                        <a onClick="movieSelected(${
                            movie.id
                        })" class="btn btn-primary" href="#" style="border-radius: 0.5rem;">Movie Details</a>
                    </div>
                </div>
                `;
            });

            footer.classList.add("footer");

            // inside #movies div
            $("#movies").html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

// movie.html

function getMovie() {
    let movieId = sessionStorage.getItem("movieId");

    let requestOne = axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api}`
    );
    let requestTwo = axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api}`
    );

    axios
        .all([requestOne, requestTwo])
        .then(
            axios.spread((...responses) => {
                // console.log(...responses);

                let movie = responses[0].data;
                let cast = responses[1].data;

                // date

                let date = movie.release_date;

                let year = date.slice(0, 4);
                let month = date.slice(5, 7);
                let day = date.slice(8, 10);

                let monthIndex = moment()
                    .month(month[1] - 1)
                    .format("M");
                let selectedMonthName = months[monthIndex - 1];

                // director
                let names = cast.crew;

                let director = "";

                $.each(names, (index, name) => {
                    if (name.job === "Director") {
                        director += name.name;

                        return director;
                    }
                });

                // actor
                let actors = cast.cast;

                let actor = [];
                for (i = 0; i < actors.length; i++) {
                    actor.push(" " + actors[i].name);
                }

                // genre
                let genres = movie.genres;

                let genre = genres[0].name;

                let output = `
                <div class="row">
                    <div class="col-md-4">
                        <img src="https://image.tmdb.org/t/p/w185/${movie.poster_path}" alt="Image not found" onerror="this.src='/assets/not-found.png';">
                    </div>
                    <div class="col-md-8">
                        <h2>${movie.title}</h2>
                        <ul class="list-group">
                            <li class="list-group-item"><strong>Genre: </strong>${genre}</li>
                            <li class="list-group-item"><strong>Released: </strong>${selectedMonthName} ${day}, ${year}</li>
                            <li class="list-group-item"><strong>IMDB Rating: </strong>${movie.vote_average}</li>
                            <li class="list-group-item"><strong>Director: </strong>${director}</li>
                            <li class="list-group-item"><strong>Actors: </strong>${actor}</li>
                            <li class="list-group-item"><strong>Runtime: </strong>${movie.runtime} minutes</li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="well">
                        <h3>Plot</h3>
                        ${movie.overview}
                        <hr>
                        <a href="http://imdb.com/title/${movie.imdb_id}" target="__blank" class="btn btn-primary mr-3" style="border-radius: 0.5rem;">View IMDB</a>
                        <a href="index.html" class="btn btn-primary" style="border-radius: 0.5rem;">Go back to search</a>
                    </div>
                </div>
            `;

                $("#movie").html(output);
            })
        )
        .catch((err) => {
            console.log(err);
        });
}
