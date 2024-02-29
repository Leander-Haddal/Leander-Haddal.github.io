fetch('movies.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('movieGrid');
    data.movies.forEach(movie => {
      const movieDiv = document.createElement('div');
      movieDiv.className = 'movie';

      const a = document.createElement('a');
      a.href = `play.html?title=${encodeURIComponent(movie.title)}`; // Set the href to play.html with the title

      const img = document.createElement('img');
      img.src = movie.picture;
      img.style.width = '200px'; // Set the image width to 200px
      a.appendChild(img);

      const p = document.createElement('p');
      p.textContent = movie.title;
      a.appendChild(p);

      movieDiv.appendChild(a);
      container.appendChild(movieDiv);
    });
  });