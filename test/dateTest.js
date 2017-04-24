var assert = require('assert');
var dateString = require("../dateString");

describe('DateString', function(){
    describe('#dateFromString()', function(){
        it('should return an array of tokens [Apr,25,2016] from the string Apr-25-2016',function(){
          assert.deepEqual(['Apr','25','2016'], dateString.dateFromString("Apr-25-2016"));
        });      
    });
});