const loadImage = (id, targetId) => {
  const element = document.getElementById(id);
  const targetElement = targetId ? document.getElementById(targetId) : element;
  let imageToLoad;

  if (element.dataset.image) {
    imageToLoad = element.dataset.image;
  } else if (typeof element.currentSrc === 'undefined') {
    imageToLoad = element.src;
  } else {
    imageToLoad = element.currentSrc;
  }

  if (imageToLoad) {
    const img = new Image();
    img.src = imageToLoad;
    img.onload = () => {
      targetElement.classList.add('is-loaded');
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  loadImage('wallpaper');
  loadImage('picture-image', 'picture');
});
const projectsContainer = document.querySelector('.projects-container')
const showProjectsButton = document.querySelector('#button');
const hiddenProjectsButton = document.querySelector('.hidden-button');
const projectsContainerTopStyle = (top) => {
  projectsContainer.style.top = top
}
showProjectsButton.addEventListener('click', () => {
  projectsContainerTopStyle('0')
});
hiddenProjectsButton.addEventListener('click', () => {
  projectsContainerTopStyle('-100%')
})