module.exports = (sequelize, DataTypes) => {
  const ipsums = sequelize.define('ipsums', {
    ipsums: DataTypes.TEXT
  });
  return ipsums;
};
