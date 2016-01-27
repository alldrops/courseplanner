var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var pageToVisit = "http://www.bcit.ca/study/programs/630pmcert#courses";
console.log("Visiting page " + pageToVisit);
request(pageToVisit, function(error, response, body) {
   if(error) {
        console.log("Error: " + error);
    }
    // Check status code (200 is HTTP OK)
    console.log("Status code: " + response.statusCode);
    if(response.statusCode === 200) {
        // Parse the document body
        getCourses(body);
    }
});

function getCourses(body) {
    var $ = cheerio.load(body);

    var courses = [
        {
            id: 'BLAW 3100',
            name: 'Business Law',
            credits: '4.0'
        },
        {
            id: 'MDIA 1040',
            name: 'Graphics 1',
            credits: '3.0'  
        },
        {
            id: 'MDIA 1049',
            name: 'InDesign MAC 1',
            credits: '1.5'
        },
        {
            id: 'MDIA 2049',
            name: 'InDesign MAC 2',
            credits: '1.5'
        }
    ];
    var dom = $('#programmatrix td');

    courses.forEach(function(item, i) {
        console.log(item);
        // if($(item).hasClass('course_number')) {
        //     $(this).find('a').find('sup').remove();
        //     console.log($(this).find('a').html());
        // }
    });

    //readCourses(courses);
}

function readCourses(courses) {

    // for (var i = 0; i < courses.length; i++) {
    //     console.log(courses[i]);
    // }
}