var db = require('./db');

db.initCollection('users');

module.exports = {
    createUser: createUser
};

function createUser(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}

    try {
        var user = req.swagger.params.user.value;
        console.log(user);

        var result = db.createObject('users', user);
        console.log(result);

        return res.json({
            id: result._id
        });
    } catch (error) {
        return res.send(400, error);
    }  
    // this sends back a JSON response which is a single string
    res.json(user);
  }