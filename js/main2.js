// this js file is being used by weatherApi.html 

        function getWeather() {

            function displayLoader(){
                let promise = new Promise(function(resolve,reject){
                    document.getElementById("loader").style.display = "block";
                    document.getElementById("loader").src="https://giphy.com/embed/y1ZBcOGOOtlpC";

                    setTimeout(() => {
                        document.getElementById("loader").style.display = "none";
                        resolve(true);
                        }, 1000);
                    })
                return promise;
   
            }

            async function fetchText() {

                await displayLoader();
                let city =  document.getElementById("city").value;
                var address = 'http://api.weatherapi.com/v1/current.json?key=ca6896b5d01c4203b1654947221804&q=' + city + '&aqi=yes';
                let response = await fetch(address);
                let data = await response.json();
                return data;

            }

            fetchText().then((result)=>{

                document.getElementById("table1").style.display = "block";      
                document.getElementById("celcius").innerHTML = result.current.temp_c;
                document.getElementById("fahr").innerHTML = result.current.temp_f;
                document.getElementById("country").innerHTML = result.location.country;
                document.getElementById("time").innerHTML = result.location.localtime;
                document.getElementById("condition").innerHTML = result.current.condition.text;
                document.getElementById("icon").src = 'https:'+result.current.condition.icon;

            });
    }
    