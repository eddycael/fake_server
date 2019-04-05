const express = require('express');

const appcat = express();

appcat.get('/microservice1/cats', (req, res) => {
    const result = {};
    const cats = [
        { name: 'cat1' },
        { name: 'cat2' },
        { name: 'cat3' },
        { name: 'cat4' },
        { name: 'cat5' },
    ];
    result.data = cats;
    result.originAddress = req.connection.remoteAddress;
    result.hostAddress = req.headers['host'];
    result.clientAddress = req.headers['x-real-ip'];
    result.forwaredFor = req.headers['x-forwarded-for'];
    res.set('Content-Type', 'application/json');
    return res.send(JSON.stringify(result));
});

appcat.post('/microservice1/cats', (req, res) => {
    const result = {
        'status': 'cat created'
    };
    result.originAddress = req.connection.remoteAddress;
    result.hostAddress = req.headers['host'];
    result.clientAddress = req.headers['x-real-ip'];

    res.set('Content-Type', 'application/json');
    return res.send(JSON.stringify(result));
});

const appdog = express();

appdog.get('/microservice1/dogs', (req, res) => {
    const result = {};
    const dogs = [
        { name: 'dog1' },
        { name: 'dog2' },
        { name: 'dog3' },
        { name: 'dog4' },
        { name: 'dog5' },
    ];
    result.data = dogs;
    result.originAddress = req.connection.remoteAddress;
    result.hostAddress = req.headers['host'];
    result.clientAddress = req.headers['x-real-ip'];

    res.set('Content-Type', 'application/json');
    return res.send(JSON.stringify(result));
});
appdog.post('/microservice1/dogs', (req, res) => {
    const result = {
        'status': 'dog created'
    };
    result.originAddress = req.connection.remoteAddress;
    result.hostAddress = req.headers['host'];
    result.clientAddress = req.headers['x-real-ip'];
    
    res.set('Content-Type', 'application/json');
    return res.send(JSON.stringify(result));
});

const appape = express();
appape.get('/microservice1/apes', (req, res) => {
    const result = {};
    const apes = [
        { name: 'ape1' },
        { name: 'ape2' },
        { name: 'ape3' },
        { name: 'ape4' },
        { name: 'ape5' },
    ];
    result.data = apes;
    result.originAddress = req.connection.remoteAddress;
    result.hostAddress = req.headers['host'];
    result.clientAddress = req.headers['x-real-ip'];

    res.set('Content-Type', 'application/json');
    return res.send(JSON.stringify(result));
});



appape.post('/microservice1/apes', (req, res) => {
    const result = {
        'status': 'ape created'
    };
    result.originAddress = req.connection.remoteAddress;
    result.hostAddress = req.headers['host'];
    result.clientAddress = req.headers['x-real-ip'];
    res.set('Content-Type', 'application/json');
    return res.send(JSON.stringify(result));
});


appcat.listen(8000, () =>
  console.log(`Example appcat listening on port 8000`),
);
appdog.listen(8001, () =>
  console.log(`Example appdog listening on port 8001`),
);
appape.listen(8002, () =>
  console.log(`Example appape listening on port 8002`),
);
