module.exports = function (sequelize, DataTypes) {
  //columns for "text" (DataTypes.STRING), and "complete" (DataTypes.BOOLEAN).
  const User = sequelize.define(
    "User",
    {
      // name: DataTypes.STRING,
       //email: DataTypes.STRING,
       //password: DataTypes.STRING
      UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      Username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return User;
};