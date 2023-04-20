const allBooksWrapper = document.getElementById('all-books-wrapper');

const bookToHtml = (book) => {
  const link = document.createElement('a');
  link.setAttribute('class', 'book-link');
  link.href = './onebookpage.html';

  link.addEventListener('click', () => {
    localStorage.setItem('id', book.id);
  });

  allBooksWrapper.append(link);

  const inlineBookWrapper = document.createElement('div');
  inlineBookWrapper.setAttribute('class', 'inline-book-wrapper');

  link.append(inlineBookWrapper);

  const city = document.createElement('div');
  city.setAttribute('class', 'city');
  city.innerHTML = book.city;
  const image = document.createElement('img');
  image.setAttribute('src', book.photourl);

  const titleWrapper = document.createElement('div');
  titleWrapper.setAttribute('class', 'title-wrapper');

  inlineBookWrapper.append(city, image, titleWrapper);

  const title = document.createElement('h2');
  title.setAttribute('class', 'title');
  title.innerHTML = book.title;
  const description = document.createElement('div');
  description.innerHTML = book.description;
  const price = document.createElement('div');
  price.setAttribute('class', 'price');
  price.innerHTML = `${book.price} €`;

  titleWrapper.append(title, description, price);
};

fetch('https://643d73daf0ec48ce905cc21e.mockapi.io/book')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data
      .sort((a, b) => Number(a.price) - Number(b.price))
      .forEach((book) => {
        bookToHtml(book);
      });
  });
