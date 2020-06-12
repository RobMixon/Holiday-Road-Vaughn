
//storage for the call
let parkData = [];

//fetch call from NPS
const getParkData = (codes) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${codes}&api_key=${keys.npsKey}`).then(
        (response) => {
            return response.json()
        }
    )
        .then(
            (objOfData) => {
                parkData = objOfData
                return parkData
            }
        )
}

let parkDataSelector = document.querySelector(".park__list").addEventListener("change", e => {
    let target = e.target.value
    getParkData(target).then(
        (parkData) => {
            showParkData(parkData)
            return parkData
        }

    ).then(
        (parkData) => {
            let latlon = parkData.data[0].latLong
            let [lat, lon] = latlon.split(",")
            //console.log("lattitude is", lat, "and longitude is", lon)
            let [latString, latNum] = lat.split(":")
            let [lonString, lonNum] = lon.split(":")
            console.log("The lattitude is", latNum)
            console.log("But the longitude is", lonNum)
            weatherProvider(latNum, lonNum).then(
                () => {
                    weatherList()
                }
            )
            
        } 
        
        
    )
})
