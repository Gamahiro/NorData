import { getMattilsynetData } from "../api/getMatTilsynet.js";
import { clearRestaurantContainer, createInfo, createRestaurants } from "../UI/restaurantsUI.js";

function searchEvent() {
    document.querySelector('#searchBtn').addEventListener('click', async (e) => {
        e.preventDefault();
        clearRestaurantContainer();

        if(!document.querySelector('.infoBox')) createInfo();
        
        let restaurantData = await getMattilsynetData(document.querySelector('input').value);
        restaurantData.entries.sort((a, b) => a.total_karakter - b.total_karakter);
        restaurantData.entries.forEach(element => {
            if(element.dato.slice(4, 8) < 2022) return;
            createRestaurants(element);
        });
    })
}

export {searchEvent}