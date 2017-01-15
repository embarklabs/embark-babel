var babel = require("babel-core");
require("babel-preset-react");
require("babel-preset-es2015");
require("babel-preset-es2016");
require("babel-preset-es2017");

module.exports = function(embark) {

  embark.registerPipeline(function(opts) {
    var targetFile = opts.targetFile;
    var source = opts.source;
    var presets = embark.pluginConfig.presets || ['es2015', 'es2016', 'es2017', 'react'];
    var minified = (embark.pluginConfig.minified !== undefined ? embark.pluginConfig.minified : true);

    if (targetFile.split('.').slice(-1)[0] !== 'js' ) {
      return source;
    }

    return babel.transform(source, {minified: minified, presets: presets}).code;
  });

};
