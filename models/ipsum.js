module.exports = (sequelize, DataTypes) => {
  const ipsum = sequelize.define('ipsum', {
    ipsum: DataTypes.TEXT
  });
  return ipsum;
};
