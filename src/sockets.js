const getdata = require('./services/getServcies.service')


module.exports = io => {
    io.on('connection', socket => {

        console.log('new socket connected');

        socket.on('obtenerCordenadas', async() => {
            const cordenadas = await getdata.getCoordenadas();
            const datacsv = await getdata.getCsv();

            socket.emit('responseCordenadas', { cordenadas, datacsv });

        });


    });
};