class Album {
  constructor() {
    this.section = document.createElement('section');
    this.section.className = 'album';
    document.body.appendChild(this.section);
  }

  show(animal) {
    this.section.classList.add('active');
    
    const client = 'a1aff3b188b6ffd926e3c12232423dcf29f199ea31f5ef7fd561d1f0d998dcb5'

    fetch(`https://api.unsplash.com/search/photos?client_id=${client}&query=${animal.name}`).then((respose) => {return respose.json();
    }).then(data => {
      console.log(data);
    })
  };
}
