var map = L.map('map-template').setView([-33.4463, -70.6572], 11);

const tileURL = 'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tileURL2 = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';

const tile = L.tileLayer(tileURL2);

// Socket Io
const socket = io.connect();
socket.emit('obtenerCordenadas', null);

socket.on('responseCordenadas', async(coords) => {
    await coords.cordenadas.features.forEach((element) => {
        coords.datacsv.forEach(data => {
            if (element.properties.id == data.id) {
                const marker = L.marker([element.geometry.coordinates[1], element.geometry.coordinates[0]]); // kiev, ukraine
                marker.bindPopup("<b align=" + "center" + " >" + data.name + "</b><br>" + element.geometry.coordinates[1] + ' , ' + element.geometry.coordinates[0]);
                console.log(marker);
                map.addLayer(marker);
            }
        })
    });
});

map.addLayer(tile);