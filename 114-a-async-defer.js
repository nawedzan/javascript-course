// there are 4 ways to make a html file know about your js project

// but before that lets see how html and js files work
// html files is parsed
// js file is first loaded and than executed
// in all four way it happens in different order

// declaring the js file in the header 
    // by this method the js file gets loaded and executed first before html file is parsed which is why the resourses needed from html file
    // never gets to the js file and there is whole bunch of error


// declaring the js file after the entire html file
    // by this method the entire html file first gets parsed and than the js file gets loaded and executed
    // but this is a slow method and a faster approach is needed and can be achieved

// declaring the js file in the header with the addition of async after the js file link
    // with this addition the html file will parse and the js file will load
    // but when the js file has been completed loading the parsing stops for the js file to execute
    // which means some resources may not reach the js file
    // and with this error might might happen

// declaring the js file with defer
    // the js file will now load and the html file will now parse
    // but when the loading of js file is complete the parsing doesnot stop
    // its when the parsing is complete the js file is executed
    // in this way time is saved and erro is reduced.
