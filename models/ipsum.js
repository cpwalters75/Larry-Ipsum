module.exports = (sequelize, DataTypes) => {
  const ipsums = sequelize.define('ipsums', {
    ipsums: DataTypes.TEXT,
    quote: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return ipsums;
};
