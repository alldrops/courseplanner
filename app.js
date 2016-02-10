$(function() {

    $(document).foundation();

    _readJSON();

    function _readJSON() {
        var jsonCourses = [
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
                id: 'MDIA 1105',
                name: 'Visual Composition & Layout',
                credits: '3.0'
            },
            {
                id: 'MDIA 1140',
                name: 'Colour Theory for Design',
                credits: '3.0'
            },
            {
                id: 'MDIA 1144',
                name: 'Practical Colour Management',
                credits: '1.5'
            },
            {
                id: 'MDIA 2049',
                name: 'InDesign MAC 2',
                credits: '1.5'
            },
            {
                id: 'MDIA 2088',
                name: 'Strategic Design for Business',
                credits: '3.0'
            },
            {
                id: 'MDIA 2098',
                name: 'Portfolio Design & Presentation',
                credits: '2.0'
            },
            {
                id: 'MDIA 3051',
                name: 'InDesign MAC 3',
                credits: '3.0'
            },
            {
                id: 'MDIA 1026',
                name: 'Adobe Acrobat MAC',
                credits: '1.5'
            },
            {
                id: 'MDIA 1160',
                name: 'Adobe Illustrator MAC 1',
                credits: '1.5'
            },
            {
                id: 'MDIA 2260',
                name: 'Adobe Illustrator MAC 2',
                credits: '1.5'
            },
            {
                id: 'MDIA 1180',
                name: 'Adobe Photoshop MAC 1',
                credits: '1.5'
            },
            {
                id: 'MDIA 2180',
                name: 'Adobe Photoshop MAC 2',
                credits: '1.5'
            },
            {
                id: 'MDIA 1900',
                name: 'Typography Principles',
                credits: '2.0'
            },
            {
                id: 'MDIA 2012',
                name: 'Digital Darkroom',
                credits: '1.5'
            },
            {
                id: 'MKTG 1102',
                name: 'Essentials of Marketing',
                credits: '3.0'
            },
            {
                id: 'COMM 1103',
                name: 'Introduction to Business and Technical Communication',
                credits: '3.0'
            },
            {
                id: 'MKTG 1352',
                name: 'Strategic Online Marketing',
                credits: '3.0'
            },
            {
                id: 'MKTG 2203',
                name: 'Marketing Communications Essentials',
                credits: '3.0'
            },
            {
                id: 'MKTG 3322',
                name: 'Promotional Strategies',
                credits: '3.0'
            },
            {
                id: 'MKTG 3418',
                name: 'Advertising Design Production',
                credits: '3.0'
            }
        ];

        var htmlCourses = '';
        $.each(jsonCourses, function(i, item) {
            //console.log(i, item);
            htmlCourses += '<div class="row">';
            htmlCourses +=      '<div class="columns medium-3">' + item.id + '</div>';
            htmlCourses +=      '<div class="columns medium-6">' + item.name + '</div>';
            htmlCourses +=      '<div class="columns medium-3">' + item.credits + '</div>';
            htmlCourses += '</div>';
        });
        $('.courses').html(htmlCourses);
    }
});