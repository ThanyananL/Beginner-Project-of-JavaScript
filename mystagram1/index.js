function appendImgElem(key, index) {
    const ImgElem = document.createElement('img');
    ImgElem.src = `https://source.unsplash.com/300x300/?${key}&sig=${index}`;
    galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(ImgElem);
}

function removeImg() {
    galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML = '';
}

function search(event) {
    const keyword = event.target.value;
    if (event.key === 'Enter' && keyword) {
        removeImg();
        for (let i = 1; i <= 24; i++) {
            appendImgElem(keyword, i);
        }
    }
}

function run() {
    const inputImg = document.querySelector('input');
    inputImg.addEventListener('keydown', search);
}

run();