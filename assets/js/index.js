// fecth images and place them in the dom
document.addEventListener("DOMContentLoaded", () => {
 getImages();
});
function getImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/3";
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((json) => renderImg(json));
}

