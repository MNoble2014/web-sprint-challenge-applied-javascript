import axios from 'axios'

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div');
  card.classList.add('card');
  card.addEventListener('click', () => console.log(article.headline))

  const cardHeadline = document.createElement('div');
  cardHeadline.classList.add('headline');
  cardHeadline.textContent = article.headline;
  card.appendChild(cardHeadline);

  const cardAuthor = document.createElement('div');
  cardAuthor.classList.add('author')
  card.appendChild(cardAuthor);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  cardAuthor.appendChild(imgContainer);

  const authorImg = document.createElement('img');
  authorImg.src = article.authorPhoto;
  authorImg.textContent = article.authorPhoto;
  imgContainer.appendChild(authorImg);

  const cardAuthorName = document.createElement('span');
  cardAuthorName.textContent = `By ${article.authorName}`;
  cardAuthor.appendChild(cardAuthorName);

  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/articles')
  .then( res => {
    console.log(res.data.articles)
    const cardsContainer = document.querySelector(selector);

    const bootStrap = res.data.articles.bootstrap;
    bootStrap.forEach( (obj) => {
      cardsContainer.appendChild(Card(obj));
    })

    const javaScript = res.data.articles.javascript;
    javaScript.forEach( (obj) => {
      cardsContainer.appendChild(Card(obj));
    })

    const jQuery = res.data.articles.jquery;
    jQuery.forEach( (obj) => {
      cardsContainer.appendChild(Card(obj));
    })

    const nodeObj = res.data.articles.node;
    nodeObj.forEach( (obj) => {
      cardsContainer.appendChild(Card(obj));
    })

    const tech = res.data.articles.technology;
    tech.forEach( (obj) => {
      cardsContainer.appendChild(Card(obj));
    })
  })
  .catch(err => {
    console.error(err)
  })
  .finally( () => {
    console.log('Done')
  })
}

export { Card, cardAppender }
