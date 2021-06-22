"use strict";

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('User', 'Admin'),
      defaultValue: 'User'
    },
    balance: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: false
    }
  });
  return User;
};
//# sourceMappingURL=1-user.js.map