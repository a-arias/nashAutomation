const nock = require('nock');

describe('Mocking API calls from JSERVICE.IO', () => {
    let serviceApi = nock("http://jservice.io/api/");
    
    describe('Should return 200 status', () => {
        it('should allow category requests', () => {
            let expectedCategory = "Any kind of category";

            serviceApi.get('/category?id=10044"')
            .reply(200, {
                title: expectedCategory
            })
        });

        it('Should get random questions ', () => {
            let expectedQuestion = "This is an specific question";

            serviceApi.get("/random")
            .reply(200, [{
                question: expectedQuestion
            }])
        });
    });

    describe('Should return 404 status', () =>{
        it('Should get random questions ', () => {
            serviceApi.get('/usersssss/1')
            .reply(404)
        });
    });
});