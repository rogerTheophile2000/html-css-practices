const accessKey = "j0AwqMyww-CyZ3cKUqScniwfbzW4QRZwOWye7Q3jESs";

const formEl  = document.querySelector("form");
const searchInputEl = document.getElementById("search-input")
const searchResultEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button");


let inputData = "";
let page =1;

async function searchImges(){
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchResultEl.innerHTML = "";
    }
    const results = data.results;
    
    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        image.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResultEl.appendChild(imageWrapper);
    });

    page ++;
    if(page > 1){
        showMoreButtonEl.style.display = "block"
    }
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImges();
});

showMoreButtonEl.addEventListener("click", () => {
    searchImges();
})
