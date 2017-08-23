var should = chai.should();

var test_array = [1,2,3,4,5];

describe('app', function(){

    it('sorts the array by first digit', function(){
    	build_largest_number([7,2,4,3,1,9,6,5,8]).sorted_array.should.deep.equal([9,8,7,6,5,4,3,2,1]);
    	build_largest_number([4,39,299,1999]).sorted_array.should.deep.equal([4,39,299,1999]);
    	build_largest_number([1999,299,39,4]).sorted_array.should.deep.equal([4,39,299,1999]);
    });

    it('outputs the correct number', function(){
    	build_largest_number([1,2,3,4]).result.should.equal(4321);

    	// Provided scenarios:
    	build_largest_number([50, 2, 1, 9]).result.should.equal(95021);
    	build_largest_number([5, 50, 56]).result.should.equal(56550);
    	build_largest_number([420, 42, 423]).result.should.equal(42423420);
    });
});