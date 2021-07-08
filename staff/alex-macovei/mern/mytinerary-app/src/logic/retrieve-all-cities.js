export default async function () {
    const response = await fetch("http://localhost:5000/cities/all");

    if (response.ok) {
        const cities = await response.json();

        return cities
    }

    throw new Error('could not retrieve cities')
}