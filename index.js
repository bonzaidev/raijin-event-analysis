//var src = require("../Raijin/src/core/manifest/eventmanifest");
var fs = require("fs");
fs.readFile("../Raijin/src/core/manifest/eventmanifest.js","utf8",(err, data)=>{

  var babylon = require("babylon").parse(data,{

    sourceType: "module",
    ecmaVersion:"ecma6",
    allowImportExportEverywhere:"true",
    plugins:[
      "doExpressions",
      "classProperties",
      "objectRestSpread",
      "exportExtensions"
    ]
  });

  console.log(babylon.tokens);

});
