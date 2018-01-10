class Album {
  constructor() {
    this.section = document.createElement('section');
    this.section.className = 'album';
    document.body.appendChild(this.section);
  }

  show(animal) {
    this.section.classList.add('active');

    const client = // Key goes here

    fetch(`https://api.unsplash.com/search/photos?client_id=${client}&query=${animal.name}`).then((respose) => {return respose.json();
    }).then(data => {
      this.displayImages(data.results)
    })
  }

  displayImages(images) {
    const imageTags = images.map(image => {
      return `<img src="${image.urls.regular}" alt="${image.description}" />`
    });

    this.section.innerHTML = imageTags.join('')
  }

  hide() {
    this.section.classList.remove('active');
  }

}
