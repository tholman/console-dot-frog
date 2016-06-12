/**
 *  Console.frog. A better way to log!
 *    - Logs a frog, saying your log... Yep!
 *
 *  MIT licensed
 *  Copyright (C) 2016 Tim Holman, http://tholman.com
 */

(function dothething() {

  if( !window.console ) {
    // Well... nothing really... let it be!
    return;
  }

  window.console.frog = function() {

    var i;
    
    // This looks like a frog, right?
    // Taken from here - http://chris.com/ascii/index.php?art=animals/frogs
    var frog = [[""],
                ["         _,-.  "],
                [" ,-. ,--'  o ) "],
                [" \\(,' '  ,,-' "],
                [",-.\\-.__,\\\\_"],
                ["\\(`--'    `\\ "],
                [""]];

    // Gets args as a string
    var args = Array.prototype.slice.call(arguments);
    var stringOfArgs = args.toString().split(',').join(', ');

    // Add the bubble if there is something to log!
    if( stringOfArgs.length > 0 ) {  
      frog[1] = frog[1] + "   ---" + ("-".repeat(stringOfArgs.length)) + "-";
      frog[2] = frog[2] + "-(   " + stringOfArgs + "   )";
      frog[3] = frog[3] + "    ---" + ("-".repeat(stringOfArgs.length)) + "-";
    }

    // Log the frog!
    for( i = 0; i < frog.length; i++ ) {
      console.log(frog[i] + "\n");
    }
  }
})();