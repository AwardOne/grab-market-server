module.exports = function (sequlize, dataTypes) {
  const banner = sequlize.define("Banner", {
    imageUrl: {
      type: dataTypes.STRING(300),
      allowNull: false,
    },
    href: {
      type: dataTypes.STRING(200),
      allowNull: false,
    },
  });
  return banner;
};
