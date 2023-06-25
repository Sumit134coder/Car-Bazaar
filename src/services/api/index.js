
export const getCars = async(query) => {

    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4919ec3d94mshc5986b5245062b2p1ee1acjsn4bd7dddfb4b4',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };

    console.log(process.env.API_KEY)

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        return result
    } catch (error) {
        console.error(error);
    }

}