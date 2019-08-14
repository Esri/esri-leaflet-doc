module.exports.register = function (Handlebars, options) {
  Handlebars.registerHelper('param', function (type, name, link) {
    if (typeof link === 'string') {
      return '<span>&lt;<a href="' + link + '">' + type + '</a>&gt;</span> <code>' + name + '</code>';
    } else {
      return '<span>&lt;' + type + '&gt;</span> <code>' + name + '</code>';
    }
  });
};
