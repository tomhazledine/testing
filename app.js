/**
 * -----------------------------------------------------------
 * BUILD LARGEST NUMBER
 * 
 * Write a function accepting a list of non negative integers, 
 * and returning their largest possible combined number
 * as a string.
 * 
 * For example:
 * given [50, 2, 1, 9] it returns "95021"    (9 + 50 + 2 + 1)
 * given [5, 50, 56]   it returns "56550"    (56 + 5 + 50)
 * given 420, 42, 423] it returns "42423420" (42 + 423 + 420)
 * -----------------------------------------------------------
 */
function build_largest_number(array){

    // parse our input values.
    array = array || [];

    // Sort our array based on the first character/digit.
    var sorted_array = array.sort();

    // Pre-join numbers that start with the same digit but one ends in zero...???

    // Invert the order of the sorted array.
    sorted_array.reverse();

    // Join the sorted array to get our result.
    var result = parseInt(sorted_array.join(''));

    // Return our results, as well as the
    // intermediate sorted array (so we can
    // test it).
    return {
        sorted_array: sorted_array,
        result: result
    };
}


/**
 * The following functions are baby-steps toward actually solving the
 * problem fully. Currently it doesn't work for numbers that start with
 * the same digit where one of them has multiple digits that are lower
 * than the first digit (e.g. `5` and `50`).
 */

function bubble_sort(array) {
    var n = array.length;
    for (var i = n - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {

            // Extra case for our specific problem
            var a = array[j - 1];
            var b = array[j]
            var a_1 = get_first_character(a);
            var b_1 = get_first_character(b);
            
            if (a_1 == b_1) {
                
                var a_length = a.toString().split('').length;
                var b_length = b.toString().split('').length;
            
            } else if (array[j - 1] > array[j]) {
                
                // Normal bubble sort
                var temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            
            }
        }
    }
    return array;
}

function get_first_character(input) {
    var array_of_characters = input.toString().split('');
    return parseInt(array_of_characters[0]);
}