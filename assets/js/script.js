const moviesContainer = document.getElementById('list_of_movies');
const movie = document.creatElementById('movie-of-user');
const fetchButton = document.getElementById('fetch-button');
const APIKey="7342b483cdb029edb2f50c0716f42554"

function getApi() {
    event.preventDefault();

  const queryURL = 'https://developer.marvel.com/movies?per_page=5?q=${movie.value}&appid=${APIKey}';

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      for (let i = 0; i < data.length; i++) {
                 
        //Setting the text of the h3 element and p element.
        moviesContainer.textContent = data[i].login;
        movie.textContent = data[i].html_url;

        //Appending the dynamically generated html to the div associated with the id="list_of_movies"
        //Append will attach the element as the bottom most child.
        moviesContainer.append(movie);

        }
    });
}
fetchButton.addEventListener('click', getApi);