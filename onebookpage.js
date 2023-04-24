const bookId = localStorage.getItem('id');

const oneBookPage = (data) => {
  const bookPhoto = document.getElementById('book-photo');
  bookPhoto.setAttribute('src', data.photourl);

  const title = document.getElementById('book-title');
  title.innerHTML = data.title;

  const city = document.getElementById('book-city');
  city.innerHTML = data.city;

  const price = document.getElementById('book-price');
  price.innerHTML = `${data.price}€`;

  const description = document.getElementById('book-description');
  description.innerHTML = data.description;
};

fetch(`https://643d73daf0ec48ce905cc21e.mockapi.io/book/${bookId}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    oneBookPage(data);
  });

const removeBook = () => {
  fetch(`https://643d73daf0ec48ce905cc21e.mockapi.io/book/${bookId}`, {
    method: 'DELETE',
  }).then((res) => {
    const hideBook = document.getElementById('book-section');
    hideBook.style.display = 'none';
    const removedMessage = document.getElementById('removed-message');
    removedMessage.innerHTML = 'Book Removed';
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  });
};

const removeButton = document.getElementById('remove-book');
removeButton.addEventListener('click', removeBook);
