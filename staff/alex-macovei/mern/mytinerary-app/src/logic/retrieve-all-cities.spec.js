import retrieveAllCities from './retrieve-all-cities'

describe('retrieveAllCities', () => {
    it('should successfully retrieve all cities', async () => {
        const cities = await retrieveAllCities()

        expect(cities).toBeDefined()
        expect(cities).toHaveLength(5)
    })
})