define(function (require, exports, module) {
  "use strict";

  var LanguageManager = brackets.getModule("language/LanguageManager");
  LanguageManager.defineLanguage("verilog", {"name":"Verilog","mode":"verilog","fileExtensions":["v"],"lineComment":["//"]});
      
});