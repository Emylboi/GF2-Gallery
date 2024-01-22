let gallery = document.querySelector(".gallery-wrapper");
let btnrefresh = document.querySelector(".btn-refresh");

let images = [
  "https://source.unsplash.com/random/1500x1500/?fennec",
  "https://source.unsplash.com/random/1501x1500/?fennec",
  "https://source.unsplash.com/random/1502x1500/?fennec",
  "https://source.unsplash.com/random/1503x1500/?fennec",
  "https://source.unsplash.com/random/1504x1500/?cat",
  "https://source.unsplash.com/random/1500x1501/?cat",
  "https://source.unsplash.com/random/1500x1502/?cat",
  "https://source.unsplash.com/random/1500x1503/?cat",
  "https://source.unsplash.com/random/1500x1504/?dog",
  "https://source.unsplash.com/random/1501x1501/?dog",
  "https://source.unsplash.com/random/1502x1502/?dog",
  "https://source.unsplash.com/random/1503x1503/?dog",
];

images.forEach((image) => {
  gallery.innerHTML += `<img src="${image}" class="img">`;
});

function refreshList() {
  images.cla;
}

btnrefresh.addEventListener("click", refreshList);

function refresh() {
  location.reload();
}
