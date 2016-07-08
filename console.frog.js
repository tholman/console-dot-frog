/**
 *  Console.frog. A better way to log!
 *    - Logs a frog, saying your log... Yep!
 *
 *  MIT licensed
 *  Copyright (C) 2016 Tim Holman, http://tholman.com
 */

(function dothething() {
  // Act on either the window.console, or the normal console.
  var con = console;
  if (typeof(window) !== 'undefined') {
    con = window.console;
  }

  con.frog = function() {

    var i,
      css = "color: green";

    // Should be enough to make this fine in node.
    var inBrowser = (typeof window !== 'undefined');
    
    // This looks like a frog, right?
    // Taken from here - http://chris.com/ascii/index.php?art=animals/frogs

    var frog;
    if( inBrowser ) {
      frog = ['%c%c',
        "%c         _,-.  %c",
        "%c ,-. ,--'  o ) %c",
        "%c \\(,' '  ,,-' %c",
        "%c,-.\\-.__,\\\\_%c",
        "%c\\(`--'    `\\ %c",
        '%c%c'];
    } else {
      frog = ['',
        "         _,-.  ",
        " ,-. ,--'  o ) ",
        " \\(,' '  ,,-' ",
        ",-.\\-.__,\\\\_",
        "\\(`--'    `\\ ",
        ''];
    }
      

    // Gets args as a string
    var args = Array.prototype.slice.call(arguments);
    var stringOfArgs = args.join(' ');

    // Add the bubble if there is something to log!
    if( stringOfArgs.length > 0 ) {  
      frog[1] = frog[1] + "   ---" + ("-".repeat(stringOfArgs.length)) + "-";
      frog[2] = frog[2] + "-(   " + stringOfArgs + "   )";
      frog[3] = frog[3] + "    ---" + ("-".repeat(stringOfArgs.length)) + "-";
    }

    // Log the frog!
    if( inBrowser ) {
      for( i = 0; i < frog.length; i++ ) {
        console.log(frog[i], css, "");
      }
    } else {
      for( i = 0; i < frog.length; i++ ) {
        console.log(frog[i]);
      }  
    }
  }
})();
