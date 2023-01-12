import { getMattilsynetData } from "../api/getMatTilsynet.js";

function searchEvent() {
    document.querySelector('searchBtn').addEventListener('click', () => {
        getMattilsynetData(document.querySelector('input').textContent);
    })
}