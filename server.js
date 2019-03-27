const express = require('express');

const app = express();

app.get('/microservice1/cats', (req, res) => {
    const ducks = [
        { name: 'cat1' },
        { name: 'cat2' },
        { name: 'cat3' },
        { name: 'cat4' },
        { name: 'cat5' },
    ];

    res.set('Content-Type', 'application/json');
    return res.send(JSON.stringify(ducks));
});

app.post('/microservice1/cats', (req, res) => {
    const result = {
        'status': 'cat created'
    };
    res.set('Content-Type', 'application/json');
    return res.send(JSON.stringify(result));
});


app.listen(8000, () =>
  console.log(`Example app listening on port 8000`),
);
