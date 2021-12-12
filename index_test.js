
const expect = chai.expect;


// This test makes sure that the names being passed into the playername fields are strings 
describe( 'MyFunctions', function() {
    describe( "#Playername", function() {
        it( "should check to see if a string was passed in", function() {
            let test = new Player( "Heath" );
            expect( test.playerName ).to.be.a( "string" );
        });

        it( "Testing will pass if name isnt a string", function() {
            let testTwo = new Player( "Tom" );
            expect( testTwo.playerName ).is.not.a( "string" );
        })
    });
});