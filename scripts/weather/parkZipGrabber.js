let zip = 



//storage for the call
let parkData = [];
//fetch call from NPS
const getParkData = (codes) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${codes}&api_key=${keys.npsKey}`).then(
        (response) => {
            console.log(codes, "get park data")
            return response.json()

        }
    )
        .then(
            (arrayOfParks) => {
              parkData = arrayOfParks
              return parkData
        }
    )
}