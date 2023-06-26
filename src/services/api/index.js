
export const getCars = async(query={
    make: 'tesla'
}) => {

    let url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?';

    let arr =['limit=15']

    Object.keys(query).length && Object.keys(query).forEach(el => {
        if(query[el].length > 2){
          arr.push(`${el}=${query[el]}`)
        }
    })

    if(arr.length > 0){
        url = url  + arr.join('&')
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4919ec3d94mshc5986b5245062b2p1ee1acjsn4bd7dddfb4b4',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        },
        // cache: 'no-store'
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