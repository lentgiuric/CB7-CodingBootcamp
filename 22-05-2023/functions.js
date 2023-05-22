export let cE = (el) => document.createElement(el);
export let qS = (el) => document.querySelector(el);
export let insertCity = cE("input");


export const meteoCall = async (city) => {


	const response = await fetch(
		`https://goweather.herokuapp.com/weather/${city}`
		);
	const data = await response.json(); 

    console.log(data);
	meteoSection(data)
	

    // return data
}

meteoCall("palermo");






export const meteoSection = (pippo) => {
// console.log(pippo);


let meteoContainer = cE("div");
meteoContainer.className = "meteoContainer";

let submit = cE("button");
submit.textContent = "Submit";

let temperature = cE("h2");
console.log(temperature);
temperature.textContent = pippo.temperature;




meteoContainer.append(insertCity, submit, temperature);


return meteoContainer

}