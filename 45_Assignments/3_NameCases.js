//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var f_name = "daenerys targaryen, the mother of dragons";
console.log(f_name.toUpperCase());
console.log(f_name.toLowerCase());
function TitleCase(value) {
    if (!value)
        return null;
    var words = value.split(' ');
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        // skip first word preposition
        if (i > 0 && isPreposition(word))
            words[i] = word.toLowerCase();
        else
            words[i] = toTitleCase(word);
    }
    return words.join(' ');
}
function toTitleCase(word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
}
function isPreposition(word) {
    var prepositions = ['if', 'the', 'a', 'on', 'in', 'of', 'or', 'and'];
    return prepositions.indexOf(word.toLowerCase()) !== -1;
}
console.log(TitleCase(f_name));
