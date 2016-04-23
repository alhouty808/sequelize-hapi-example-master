var Hapi = require('hapi');
var models = require('./models');



// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3000
});



server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('index.html');
        }
    });
    
    server.route({
        method: 'GET',
        path: '/{filename}',
        handler: function (request, reply) {
            reply.file(request.params.filename);
        }
    });
    
    //add items to the DB
    server.route({
        method: 'POST',
        path: '/api/add/{item}',
        handler: function (request, reply) {
            models.Item.create({
                    title: request.params.item
                }).then(function () {
                    models.Item.findAll()
                    .then(function (items) {
                    reply(items);
                });
                });
        }
    });
    
    // Get all Items from the DB
    server.route({
        method: 'GET',
        path: '/api/item',
        handler: function (request, reply) {
            models.Item.findAll()
            .then(function (items) {
                    reply(items);
                });
        }
    });
    // Delete certain Item from the DB
    server.route({
        method: 'GET',
        path: '/api/delete/{item}',
        handler: function (request, reply) {
            models.Item.destroy({
                where:{
                    title: request.params.item
                }
            })
            .then(function (affectedRows) {
                    models.Item.findAll()
                    .then(function (items) {
                    reply(items);
                });
                });
        }
    });
    


// Start the server
models.sequelize.sync().then(function() {
    server.start(function () {
        console.log("Hapi server started @", server.info.uri);
    });
});

