'use strict';

module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
        title: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                
            }
        }
    });
    return Item;
};