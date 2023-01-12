
function createInfo() {

    let infoBox = document.createElement('div');
    infoBox.className = 'infoBox';

    let infoKrk1 = document.createElement('p');
    infoKrk1.textContent = '0 = Ingen anmerkning. Stort smil.'

    let infoKrk2 = document.createElement('p');
    infoKrk2.textContent = '1 = Mattilsynet påpeker plikt til å etterleve regelverket (mindre/midlertidig avvik). Stort smil.'

    let infoKrk3 = document.createElement('p');
    infoKrk3.textContent = '2 = Mattilsynet har funnet brudd på regelverket og varsler om at vedtak vil bli fattet dersom feilen ikke utbedres innen frist. Strek munn.'

    let infoKrk4 = document.createElement('p');
    infoKrk4.textContent = '3 = Mattilsynet har funnet vesentlige brudd på regelverket. Sur munn.';


    infoBox.append(infoKrk1, infoKrk2, infoKrk3, infoKrk4);
    document.querySelector('main').append(infoBox);
}


    const restaurantsContainer = document.createElement('div');
    restaurantsContainer.className = 'restaurantsContainer';


function createRestaurants(restaurantObj) {
    let tilsynstype;
    let status;

    let restaurant = document.createElement('div');
    restaurant.className = 'restaurant';

    let restaurantName = document.createElement('div');
    restaurantName.textContent = `${restaurantObj.navn}`;

    let restaurantAddress = document.createElement('div');
    restaurantAddress.textContent = `${restaurantObj.adrlinje1}, ${restaurantObj.postnr}`

    let inspectionType = document.createElement('div');
    if(restaurantObj.tilsynsbesoektype === '0') tilsynstype = 'Ordinært tilsyn';
    if(restaurantObj.tilsynsbesoektype === '1') {
        tilsynstype = 'Oppfølgingstilsyn'
        inspectionType.style.color = 'red'
    };
    inspectionType.textContent = `${tilsynstype}`;

    let inspectionStatus = document.createElement('div');
    if(restaurantObj.status === '0') {
        status = 'Under oppfølging';
        inspectionStatus.style.color = 'red';
        inspectionStatus.style.fontWeight = 'bold';
    };
    if(restaurantObj.status === '1') {
        status = 'Tilsyn fullført';
        inspectionStatus.style.color = 'green';
    };
    inspectionStatus.textContent = `Status: ${status}`

    let inspectionDate = document.createElement('div');
    inspectionDate.textContent = `Tilsynsdato: ${restaurantObj.dato.slice(0,2)}.${restaurantObj.dato.slice(2,4)}.${restaurantObj.dato.slice(4,8)}`;

    let theme1 = document.createElement('div');
    theme1.textContent = `${restaurantObj.tema1_no}: `
    theme1.append(getSmiley(restaurantObj.karakter1));

    let theme2 = document.createElement('div');
    theme2.textContent = `${restaurantObj.tema2_no}: `
    theme2.append(getSmiley(restaurantObj.karakter2));


    let theme3 = document.createElement('div');
    theme3.textContent = `${restaurantObj.tema3_no}: `
    theme3.append(getSmiley(restaurantObj.karakter3));


    let theme4 = document.createElement('div');
    theme4.textContent = `${restaurantObj.tema4_no}: `
    theme4.append(getSmiley(restaurantObj.karakter4));



    let totalScore = document.createElement('div');
    totalScore.textContent = `Total karakter: `
    totalScore.append(getSmiley(restaurantObj.total_karakter));


    restaurant.append(restaurantName, restaurantAddress, inspectionDate, inspectionType, inspectionStatus, theme1, theme2, theme3, theme4, totalScore);

    restaurantsContainer.append(restaurant);

    document.querySelector('main').append(restaurantsContainer);

}

function clearRestaurantContainer() {
    if(!restaurantsContainer.firstChild) return;

while(restaurantsContainer.firstChild) {
    restaurantsContainer.removeChild(restaurantsContainer.firstChild);
}
}

function getSmiley(num) {
    let smileyType;
    let smiley = document.createElement('span');
    smiley.className = 'material-icons';
    if(num === '0') smileyType = 'sentiment_very_satisfied';
    if(num === '1') smileyType = 'sentiment_satisfied';
    if(num === '2') smileyType = 'sentiment_neutral';
    if(num === '3') smileyType = 'sentiment_dissatisfied';
    smiley.textContent = smileyType;
    return smiley;
}

export {createRestaurants, createInfo, clearRestaurantContainer}