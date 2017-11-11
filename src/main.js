const player = new Player();

const animalsContainer = document.createElement('section');
animalsContainer.className = 'animals';
document.body.append(animalsContainer);

const createAnimalFigure = (animal) => {
  const figure = document.createElement('figure');
  figure.className = 'animal';

  const background = document.createElement('div');
  background.className = 'background';
  background.style.backgroundImage = `url('${animal.image}')`;
  figure.appendChild(background)

  const caption = document.createElement('figcaption');
  caption.style.backgroundColour = animal.bgColour;
  caption.innerHTML = `
    <h2>${animal.name}</h2>
    <img src="${animal.icon}" alt="${animal.name}" class='animal-icon'/>
    `;
  figure.appendChild(caption);

  figure.addEventListener('click', (event) => {
    player.play(animal.sound);
  });

  return figure;
}

animals.forEach(animal => {
  animalsContainer.appendChild(
    createAnimalFigure(animal)
  );
});
