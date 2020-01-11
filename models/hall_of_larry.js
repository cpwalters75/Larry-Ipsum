module.exports = (sequelize, DataTypes) => {
  const hall_of_larries = sequelize.define('hall_of_larries', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    larry_birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return hall_of_larries;
};
