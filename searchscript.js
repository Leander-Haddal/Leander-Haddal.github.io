fetch('movies.json')
  .then(response => response.json())
  .then(data => {
    const searchBox = document.getElementById('searchBox');
    searchBox.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        const searchTerm = searchBox.value.toLowerCase();
        const filteredMovies = data.movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));

        const container = document.getElementById('movieGrid');
        container.innerHTML = ''; // Clear the container
        filteredMovies.forEach(movie => {
          const movieDiv = document.createElement('div');
          movieDiv.className = 'movie';

          const a = document.createElement('a');
          a.href = movie.url;

          const img = document.createElement('img');
          img.src = movie.picture;
          img.style.width = '200px';
          a.appendChild(img);

          const p = document.createElement('p');
          p.textContent = movie.title;
          a.appendChild(p);

          movieDiv.appendChild(a);
          container.appendChild(movieDiv);
        });
      }
    });
  });