
function createSearchPage() {
    let searchForm = document.createElement('form');

    let searchLabel = document.createElement('label');
    searchLabel.for = 'search'
    searchLabel.textContent = 'Search Location: '    

    let searchInput = document.createElement('input');
    searchInput.id = 'search'

    let searchBtn = document.createElement('button');
    searchBtn.id = 'searchBtn';
    searchBtn.textContent = 'Search';

    searchForm.append(searchLabel, searchInput, searchBtn)
    document.querySelector('main').append(searchForm);
}

function createRestaurantsUI() {

    document.createElement('div')


}



export {createSearchPage}