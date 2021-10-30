fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
      let num = Math.floor(Math.random() * (1643 - 1) + 1);
      let text = data[num].text;
      let quotesElement = document.getElementById('quotesElement');
      let author = data[num].author;

      quotesElement.innerHTML = `<i>${text} </i> <br><b>~ ${author}</b>`;
  });