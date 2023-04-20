describe("The courseCost function", function() {
    
it (" should be able to check for the course and calculate accordingly", function(){

    assert.deepEqual(
	{"status" : "success", 
    "code": "r1", 
    "description" : "Ruby on Rails intro", 
    "cost" : "5675", 
    "discount" : "2270", 
    "amountDue" : "3405"}, courseCost("r1", "2023-05-21"))
})

it (" should be able to check for the course and if not it should return a status of invalid", function(){
    assert.deepEqual(
    {"status" : "Invalid code"}, courseCost("g1","2023-05-21")

    )

})

const cost = courseCost("r1", "2023-05-21");
    console.log(cost);

const cost2 = courseCost("g1", "2023-05-21")
    console.log(cost2)
})