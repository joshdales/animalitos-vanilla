class Album {
  constructor() {
    this.section = document.createElement('section');
    this.section.className = 'album';
    document.body.appendChild(this.section);
  }

  show(animal) {
    this.section.classList.add('active');
  };
}
