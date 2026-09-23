const searchInput = document.querySelector("#search-input");
const searchForm = document.querySelector("#search-form");

function search() {
    const query = searchInput.value.trim();

    if (!query) {
        return;
    }

    const encodedQuery = encodeURIComponent(query);

    window.location.href = `https://www.google.com/search?q=${encodedQuery}`;
}

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    search();
});