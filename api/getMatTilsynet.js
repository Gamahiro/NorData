
    async function getMattilsynetData() {
        const res = await fetch('https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?poststed=halden');
        const data = await res.json();
        return data;
    }


    export {getMattilsynetData}