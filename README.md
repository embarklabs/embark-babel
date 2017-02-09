Embark-Babel
======

Plugin for [Embark](https://github.com/iurimatias/embark-framework) to support es5, es6, es7 and react.

Installation
======

In your embark dapp directory:
```npm install embark-babel --save```

then add embark-babel to the plugins section in ```embark.json```:

```Json
  "plugins": {
    "embark-babel": {}
  }
```

Configuration
======

the options are supported in the configuration:

* minified: true/false (default: true)
* presents: list of presents (default: ['es2015', 'es2016', 'es2017', 'react'])

e.g

```Json
  "plugins": {
    "embark-babel": {
      "minified": false,
      "presets": ['es2016']
     }
  }
``` 
