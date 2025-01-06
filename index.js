const fetchAllCountryData = () => {

    fetch("https://www.apicountries.com/countries", {
        method: "GET",
        headers:{
            "Content-Type" : "application/json"
        }
    })
    .then((res) => {
        if(res.status !== 200){
            res.json({message:"Data Not Found."})
        }
        res.json(res.data)
    })
    .catch((error) => {
        console.log(error.message);
    })
}