const card = Array.from(document.getElementsByClassName('single_block'));
const symbol_classes = ['pair_symbol_one', 'pair_symbol_two', 'pair_symbol_three', 'pair_symbol_four', 'pair_symbol_five',
                        'pair_symbol_six', 'pair_symbol_seven', 'pair_symbol_eight', 'pair_symbol_nine', 'pair_symbol_ten',
                        'pair_symbol_eleven', 'pair_symbol_twelve', 'pair_symbol_thirteen', 'pair_symbol_fourteen', 
                        'pair_symbol_fifteen', 'pair_symbol_sixteen', 'pair_symbol_seventeen', 'pair_symbol_eighteen', 
                        'pair_symbol_nineteen', 'pair_symbol_twenty' ];

// Removes any previously assigned 'symbol'-classes and assigns a new one.
function changeColor(el, color) {
    el.forEach(element => {element.classList.remove(...symbol_classes);});
    el.forEach(element => {element.classList.add(color);});
}

// Returns an array with nested Pair-Arrays.
function assignPairs(array) {

    let  group = array;
    let pair = [];
    let all_pairs = [];
    let used_group_numbers = [];

    for(i = 0; i < array.length; i++) {

        let group_number = Math.floor(Math.random()*group.length);
        
        if(used_group_numbers.includes(group_number)) {
            i--
        } else {
        
            used_group_numbers.push(group_number);
            pair.push(group[group_number]);
        }
        if(pair.length === 2) {

            all_pairs.push(pair);
            pair = [];
        }
    
    }
    return all_pairs;
}

// Goes through the pairs and assigns them a class(symbol).
function assignClasses(pair) {
    for(i = 0; i < pair.length; i++) {
        switch (i) {
            case 0: changeColor(pair[i], 'pair_symbol_one');
                break;
            case 1: changeColor(pair[i], 'pair_symbol_two');
                break;
            case 2: changeColor(pair[i], 'pair_symbol_three');
                break;
            case 3: changeColor(pair[i], 'pair_symbol_four');
                break;
            case 4: changeColor(pair[i], 'pair_symbol_five');
                break;
            case 5: changeColor(pair[i], 'pair_symbol_six');
                break;
            case 6: changeColor(pair[i], 'pair_symbol_seven');
                break;
            case 7: changeColor(pair[i], 'pair_symbol_eight');
                break;
            case 8: changeColor(pair[i], 'pair_symbol_nine');
                break;
            case 9: changeColor(pair[i], 'pair_symbol_ten');
                break;
            case 10: changeColor(pair[i], 'pair_symbol_eleven');
                break;
            case 11: changeColor(pair[i], 'pair_symbol_twelve');
                break;
            case 12: changeColor(pair[i], 'pair_symbol_thirteen');
                break;
            case 13: changeColor(pair[i], 'pair_symbol_fourteen');
                break;
            case 14: changeColor(pair[i], 'pair_symbol_fifteen');
                break;
            case 15: changeColor(pair[i], 'pair_symbol_sixteen');
                break;
            case 16: changeColor(pair[i], 'pair_symbol_seventeen');
                break;
            case 17: changeColor(pair[i], 'pair_symbol_eighteen');
                break;
            case 18: changeColor(pair[i], 'pair_symbol_nineteen');
                break;
            case 19: changeColor(pair[i], 'pair_symbol_twenty');
                break;
            default: console.log('Something went wrong...');

        }
        
    }
}


function push() {
    
    assignClasses(assignPairs(card));
}



/*
1. Assign a different class to each pair of elements in the array. (1)
    

2. Add event-listeners for each element, so that they react to clicks and to every second element clicked. (0)
    - Make the cursor change, when over a card. (0)
    - Clicking on a card should toggle the conceal class. (0) !-Maybe play around with 'position'-!
    - Clicking on a second card should re-toggle both the c-class on both cards after 1000ms. (0)

3. 'Disappear' opened cards after a match has been made. (0)
    - Make a function to detect matches. (0)
    - Assign a 'hidden' class to every match made. (0)

*/
