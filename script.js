import { searchEvent } from "./MatTilsynet/Events/searchEvents.js";
import { createSearchPage } from "./MatTilsynet/UI/searchPage.js";

function initMattilsynet() {
    createSearchPage();
    searchEvent();
}

initMattilsynet()