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
  console.log(images);
  images.message.forEach((image) => {
    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("id", "imageCont");
    imageContainer.style.margin = "auto";
    const img = document.createElement("img");
    img.src = image;
    img.style.height = "200px";

    imageContainer.appendChild(img);
    document.getElementById("reviews").appendChild(imageContainer);
  });
}
