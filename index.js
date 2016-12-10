var babel = require("babel-core");

module.exports = function(embark) {

  embark.registerPipeline(function(opts) {
    var targetFile = opts.targetFile;
    var source = opts.source;

    if (targetFile.split('.').slice(-1)[0] !== 'js' ) {
      return source;
    }

    return babel.transform(source, {}).code;
  });

};
