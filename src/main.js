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

  return figure;
}

animals.forEach(animal => {
  animalsContainer.appendChild(
    createAnimalFigure(animal)
  );
});
