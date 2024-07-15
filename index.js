const img = document.querySelector("img");
const button = document.querySelector("#btn");
const searchValue = document.querySelector(".submit");
const inputField = document.querySelector('.input');
const displayError = document.querySelector(".displayError");
console.log(displayError)
// const cats =
//   "https://api.giphy.com/v1/gifs/translate?api_key=xUGeBWKikoUF1sOZRB6a37IK2KhrYt3e&s=cats";

let recentGifSearch = [];

//Get user input 
function getUserInput() {
    
    const userValue = inputField.value;
    console.log(userValue)

    return userValue

}

inputField.addEventListener("input", getUserInput);


//Get gif from the server
function getGifFromApi() {

const value = getUserInput();
    console.log(value)
    recentGifSearch.push(value);

  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=xUGeBWKikoUF1sOZRB6a37IK2KhrYt3e&s=${value}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);

      img.src = response.data.images.original.url;
    })
      .catch(function () {
          console.log('Gif not found!')
          displayError.textContent = "No gif found!";
      })
    img.style.display = 'block';
        inputField.value = "";

    

}
searchValue.addEventListener("click", getGifFromApi);


//Display siimilar gifs
function showSimilarGifs() {
    const value = recentGifSearch[recentGifSearch.length - 1]

    console.log(value)

  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=xUGeBWKikoUF1sOZRB6a37IK2KhrYt3e&s=${value}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);

      img.src = response.data.images.original.url;
    })
      .catch(function () {
          console.log('Gif not found!')
          displayError.textContent = "No gif found!";
      })
    img.style.display = 'block';
}
button.addEventListener("click", showSimilarGifs);
