// Add imports above this line
import { galleryItems } from '../js/gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);



const gallery = document.querySelector('.gallery')

const galleryList = galleryItems.map(el => {
 
 return ` <li class="gallery__item">
   <a class="gallery__link" href=${el.original}>
      <img class="gallery__image" src=${el.preview} alt=${el.description} title=${el.description} />
   </a>
</li>`
}).join('')
const galleryImage = document.querySelector('.gallery__image')
gallery.innerHTML = galleryList
new SimpleLightbox('.gallery a', {
  captionDelay: 250,
})