const route = require('express').Router();
const History = require('./history');

route.get('/', (req, res) => {
    History.find()
    .then()
    .catch(err => {
        console.log(err);
        res.status(500).json(
            {
                message: 'Error Occurred'
            }
        );
    });
});


route.post('/',(res,req)=>
 {
    let history = new History(req.body);
    history.save()
    .then( () => History.find())
    .then( history => {
        res.status(201).json(history);
    })

    .catch(err => {
        console.log(err);
        res.status(500).json(
            {
                message: 'Unable to save to database'
            }
        );
    });
});

module.exports = route;


