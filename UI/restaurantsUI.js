
    const restaurantsContainer = document.createElement('div');
    restaurantsContainer.className = 'restaurantsContainer';


function createRestaurants(restaurantObj) {
    let tilsynstype;
    if(restaurantObj.tilsynsbesoektype === '0') tilsynstype = 'Ordinært tilsyn';
    if(restaurantObj.tilsynsbesoektype === '1') tilsynstype = 'Oppfølgingstilsyn'
    

    let restaurant = document.createElement('div');
    restaurant.className = 'restaurant';

    let restaurantName = document.createElement('div');
    restaurantName.textContent = `${restaurantObj.navn}`;

    let restaurantAddress = document.createElement('div');
    restaurantAddress.textContent = `${restaurantObj.adrlinje1} ${restaurantObj.postnr}`

    let inspectionType = document.createElement('div');
    inspectionType.textContent = `${tilsynstype}`;

    let inspectionStatus = document.createElement('div');
    inspectionStatus = `${restaurantObj.status}`

    let inspectionDate = document.createElement('div');
    inspectionDate.textContent = `${restaurantObj.dato}`;

    let theme1 = document.createElement('div');
    theme1.textContent = `${restaurantObj.tema1_no}: ${restaurantObj.karakter1}`

    let theme2 = document.createElement('div');
    theme2.textContent = `${restaurantObj.tema2_no}: ${restaurantObj.karakter2}`


    let theme3 = document.createElement('div');
    theme3.textContent = `${restaurantObj.tema3_no}: ${restaurantObj.karakter3}`


    let theme4 = document.createElement('div');
    theme4.textContent = `${restaurantObj.tema4_no}: ${restaurantObj.karakter4}`


    let totalScore = document.createElement('div');
    totalScore.textContent = `Total karakter: ${restaurantObj.total_karakter}`

    restaurant.append(restaurantName, restaurantAddress, inspectionType, inspectionDate, theme1, theme2, theme3, theme4, totalScore);

    restaurantsContainer.append(restaurant);

    document.querySelector('main').append(restaurantsContainer);

}

export {createRestaurants}