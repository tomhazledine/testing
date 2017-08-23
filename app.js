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

    // console.log(sorted_array);

    // Invert the order of the sorted array.
    sorted_array.reverse();

    // var leading_numbers = [];
    // var temp_objects = [];
    // var max_length = 0;




    // for (var i = 0; i < array.length; i++) {
    //     var temp_object = {};
    //     var array_of_characters = array[i].toString().split('');

    //     if ( array_of_characters.length > max_length) {
    //         max_length = array_of_characters.length;
    //     }

    //     leading_numbers.push(parseInt(array_of_characters[0]));
    //     temp_object.leading_number = array_of_characters[0];
    //     temp_object.digit_count = array_of_characters.length;
    //     temp_object.original_number = array[i];
    //     temp_objects.push(temp_object);
    // }

    // for (var i = 0; i < sorted_array.length; i++) {
    //     var array_of_characters = sorted_array[i].toString().split('');

    // }
    // console.log(temp_objects);
    // console.log(max_length);

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


function bubble_sort(array) {
    var n = array.length;
    for (var i = n - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            var a = array[j - 1];
            var b = array[j]
            var a_1 = get_first_character(a);
            var b_1 = get_first_character(b);
            
            if (a_1 == b_1) {
                
                var a_length = a.toString().split('').length;
                var b_length = b.toString().split('').length;
            
            } else if (array[j - 1] > array[j]) {
                
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