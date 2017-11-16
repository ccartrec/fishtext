$(document).ready(function() {
    var numP = $('#numParagraph'),
        openTag = '&lt;p&gt;',
        closeTag = '&lt;/p&gt;';

    numP.on('keyup', function() {
        generateContent();
        onlyNumbers();
    });
    $('input[type=checkbox]').change(function() {
        checkHtmlTags()
    });


    function checkHtmlTags() {
        if ($('input[type=checkbox]:checked').length) {
            $('#generateContent p').prepend(openTag).append(closeTag)
        } else {
            $('#generateContent p').each(function() {
                $(this).text($(this).text().replace(/<(?:.|\n)*?>/gm, ''))
            })
        }
    }

    function generateContent() {
        var maxP = parseInt(numP.val());
        $('#generateContent').html('');
        for (var i = 1; i <= maxP; i++) {
            var textNumber = Math['floor'](Math['random']() * (10 - 1 + 1)) + 1;
            $('#generateContent').append('<p>' + textComputer[textNumber] + '</p>');
        };
        checkHtmlTags();
        numberSymbols();
    }


    function numberSymbols() {
        $('#numberSymbols').text($('#generateContent').text().length);
    }

    $("#refresh").click(function() {
        generateContent();
    });

    generateContent();
})