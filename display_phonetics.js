function digit_to_word (digit) {
    switch(digit) {
        case '0' || 0 : 
            return 'Zero';
        case '1' || 1:
            return 'One';
        case '2' || 2:
            return 'Two';
        case '3' || 3:
            return 'Three';
        case '4' || 4:
            return 'Four';
        case '5' || 5:
            return 'Five';
        case '6' || 6:
            return 'Six';
        case '7' || 7:
            return 'Seven';
        case '8' || 8:
            return 'Eight';
        case '9' || 9:
            return 'Nine';
        default:
            return '';
    };
}

function number_to_phonetic(num) {
    let phonetic = '';
    String(num).split('').forEach(digit => {
        phonetic += digit_to_word(digit);
    });
    return phonetic;
}


function display_phonetics(nums) {
    const result = nums.map(n => 
        number_to_phonetic(n)
    );
    console.log(result.join(', '));
}

module.exports = display_phonetics;