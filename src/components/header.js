  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
const Header = (title, date, temp) => {
  const header = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleHeader = document.createElement('h1');
  const tempSpan = document.createElement('span');
  console.log(dateSpan)
  dateSpan.textContent = date;
  titleHeader.textContent = title;
  tempSpan.textContent = temp;

  header.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');

  header.append(dateSpan);
  header.append(titleHeader);
  header.append(tempSpan);

  console.log(header);
  return header;
}

const today = new Date()
const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  document.querySelector(selector)
    .append(Header(`$${today.getMonth()}
    ${today.getDay()}
    ${today.getFullYear()}`))
}
  
export { Header, headerAppender }
