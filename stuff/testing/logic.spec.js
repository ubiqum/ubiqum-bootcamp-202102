describe('logic', function () {
    describe('search vehicles', function () {
        var query

        describe('when query matches results', function () {
            beforeEach(function () {
                query = 'batman'
            })

            it('should succeed with results', function (done) {
                searchVehicles(query, function (error, vehicles) {
                    if (error) return done(error)

                    expect(vehicles).to.exist
                    expect(vehicles).not.to.be.empty

                    done()
                })
            })
        })

        describe('when query does not match any result', function () {
            beforeEach(function () {
                query = 'asdfa789sdfasf'
            })

            it('should succeed with no results', function (done) {
                searchVehicles(query, function (error, vehicles) {
                    if (error) return done(error)

                    expect(vehicles).to.exist
                    expect(vehicles).to.be.empty

                    done()
                })
            })
        })

        describe('when non-string query', function () {
            var nonStrings = [1, true, {}, function() {}, [], null, undefined]

            beforeEach(function() {
                var index = Math.floor(Math.random() * nonStrings.length)

                query = nonStrings[index]
            })
            
            it('should fail on non-string query', function () {
                var _error

                try {
                    searchVehicles(query)
                } catch (error) {
                    _error = error
                }

                expect(_error).to.be.defined
                expect(_error.message).to.equal(query + ' is not a string')
            })
        })

        describe('when non-function callback', function () {
            var nonFunctions = [1, true, {}, '', [], null, undefined]
            var callback

            beforeEach(function() {
                var index = Math.floor(Math.random() * nonFunctions.length)

                callback = nonFunctions[index]

                query = ''
            })
            
            it('should fail on non-function callback', function () {
                var _error

                try {
                    searchVehicles(query, callback)
                } catch (error) {
                    _error = error
                }

                expect(_error).to.be.defined
                expect(_error.message).to.equal(callback + ' is not a function')
            })
        })
    })
})