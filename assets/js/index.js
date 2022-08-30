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

function renderImg(images) {
  const imgContent = document.getElementById("");
  images.message.forEach((Image) => {
    const img = document.createElement("img");
    img.src = Image;
    //img.style.maxHeight = "200px";
    imgContent.appendChild(img);
  });
}
