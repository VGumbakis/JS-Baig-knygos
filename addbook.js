const button = document.getElementById('submit');

const fetchBooks = (newBook) => {
  fetch(`https://643d73daf0ec48ce905cc21e.mockapi.io/book`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const hideForm = document.getElementById('book-form');
      hideForm.style.display = 'none';
      const addedMessage = document.getElementById('added-message');
      addedMessage.innerHTML = 'Book added';

      setTimeout(() => {
        window.location.replace('./index.html');
      }, 1000);
    });
};

button.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const city = document.getElementById('city').value;
  const price = document.getElementById('price').value;
  const photourl = document.getElementById('photourl').value;

  const newBook = {
    title: title,
    description: description,
    city: city,
    price: price,
    photourl: photourl,
  };

  fetchBooks(newBook);
});
