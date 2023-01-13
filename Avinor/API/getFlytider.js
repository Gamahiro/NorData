import { xml2json } from "xml-js";

xml2json

async function getFlytider() {
    let res = await fetch('https://flydata.avinor.no/XmlFeed.asp?TimeFrom=1&TimeTo=7&airport=OSL&direction=D&lastUpdate=2009-03-10T15:03:00Z');
    let xmldata = res.json();
    let data = xml2json(xmldata, {compact: false, spaces: 4});
    console.log(data);
    return data;
}

export{getFlytider} 