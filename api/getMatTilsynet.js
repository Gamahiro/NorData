
    async function getMattilsynetData(locationName) {
        const res = await fetch(`https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?poststed=${locationName}`);
        const data = await res.json();
        return data;
    }


    export {getMattilsynetData}