const axios = require('axios');
const csv = require('csvtojson')

const getCoordenadas = async() => {
    const resp = await axios.get(`https://cswcl.github.io/fake-api/monumentos_historicos_extracto.geojson`)
    return resp.data;

}


const getCsv = async() => {
    const resp = await axios.get(`http://cswcl.github.io/fake-api/monumentos_historicos_extracto.csv`)

    return csv()
        .fromString(resp.data)
        .subscribe((jsonObj) => {});

}
module.exports = {
    getCoordenadas,
    getCsv
}