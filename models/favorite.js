module.exports = function (sequelize, DataTypes) {
  //columns for "text" (DataTypes.STRING), and "complete" (DataTypes.BOOLEAN).
  const Favorite = sequelize.define(
    "Favorite", 
    { 
      DrinkID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Favorite.associate = ({ User }) => {
      Favorite.belongsTo(User, {foreignKey: 'UserID'});
  }
  
  return Favorite;
};