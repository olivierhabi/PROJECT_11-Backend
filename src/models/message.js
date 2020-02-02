"use strict";
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "Message",
    {
      phone: DataTypes.STRING,
      message: DataTypes.STRING
    },
    {}
  );
  Message.associate = models => {
    // associations can be defined here
    Message.belongsTo(models.User, {
      foreignKey: "userId",
      as: "owner"
    });
  };
  return Message;
};
