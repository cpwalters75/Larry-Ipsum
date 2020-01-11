module.exports = (sequelize, DataTypes) => {
  const ipsums = sequelize.define('ipsums', {
    quote: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return ipsums;
};
