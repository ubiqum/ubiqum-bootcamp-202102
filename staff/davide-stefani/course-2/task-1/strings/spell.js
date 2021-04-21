function spell(text) {
    for (var i = 0; i < text.length; i++) {
        console.log(text[i]);
    }
}
spell('Enjoy the Day')

spell('Testing the Function Spell')

function spell(text) {
    for (var i = 0; i < text.length; i++) {
        console.log(text.charAt(i));
    }
}
spell('Enjoy the Day')

spell('Testing the Function Spell')



function spell(text) {
    var spelling = text.split('');

    for (var i = 0; i < text.length; i++)
        console.log(text[i]);
}
spell('Testing the Function Spell')
