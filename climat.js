const wrapper = document.querySelector(".wrapper"),
inputPart = wrapper.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".infoText"),
inputField = inputPart.querySelector("input")
locationBtn = inputPart.querySelector("button");


inputField.addEventListener("keyup", e =>{
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value);
    }
} );

function onSucess(position){
    const {latitude, longitude} = position.coords;
    let api =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&api=${apikey}`
    fectchData()
}

function onError(error){
    infoTxt.innerText = error.message;
    infoTxt.classList.add("error");
}

locationBtn.addEventListener("click", () =>{
    if(navigator.geolocation){ // if browser support geolocation api
        navigator.geolocation.getCurrentPosition(onSucess, onError);
    }else{
        alert("your browser is not support geolocation api")
        
    }

} );

function requestApi(city){
    
    console.log(city);
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid${apikey}`;
    fectchData()
   }

   function fectchData(){
    infoTxt.innerText = "Getting weather details...";
    infoTxt.classList.add("pending");

    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
}
   
function weatherDetails(info){
    infoTxt.classList.replace("pending", "error");
    if(info.cod == "404"){
        infoTxt.innerText = `${inputField.value} is not a valid city name`;
    }
    else{
        info.classList.remove("pending", "error");

        console.log(info)
    }

}