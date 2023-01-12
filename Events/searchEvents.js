import { getMattilsynetData } from "../api/getMatTilsynet.js";
import { createRestaurants } from "../UI/restaurantsUI.js";

function searchEvent() {
    document.querySelector('#searchBtn').addEventListener('click', async (e) => {
        e.preventDefault();
        let restaurantData = await getMattilsynetData(document.querySelector('input').textContent);
        console.log(restaurantData);
        restaurantData.entries.forEach(element => {
            if(element.dato.slice(4, 8) < 2022) return;
            createRestaurants(element);
        });
    })
}

export {searchEvent}