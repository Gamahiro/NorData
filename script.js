import { getFlytider } from "./Avinor/API/getFlytider.js";
import { searchEvent } from "./MatTilsynet/Events/searchEvents.js";
import { createSearchPage } from "./MatTilsynet/UI/searchPage.js";

function initMattilsynet() {
    createSearchPage();
    searchEvent();
}

initMattilsynet()
getFlytider()