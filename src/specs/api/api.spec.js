var request = require("request");

describe("JService Category API", ()=> {
    var base_url = "http://jservice.io/api"
    var endpoint = "/category"

     describe("GET /category?id=1", ()=> {
         it("returns status code 200", (done)=> {
             var url = base_url + endpoint + "?id=1"
             request.get(url, function(error, response, body) {
             expect(response.statusCode).toBe(200);
             done();
            });
        });
    });

    describe("GET /category?id=500", ()=> {
        it("returns status code 500 for no existent category", (done)=> {
            var url = base_url + endpoint + "?id=9999999999"

            request.get(url, function(error, response, body) {
            expect(response.statusCode).toBe(500);
            done();
           });
       });
   });
});