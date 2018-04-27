import { Recipes } from './scripts.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function getIngredients(meal) {
  // $("#recipe").append("<p>" + response.meals[0].strMeal + response.meals[0].strArea + "</p>");
  // for(let key in response.meals) {
  //   if(key.includes(''))
  // }
  let mealsArray = [];
  $("#ingredients").append('<strong><h2>' + 'Ingredients:' + '</h2></strong></br>');
  for (let key in meal) { //key is a placeholder name for response.meals[0] (called in the submit function)
    if ( (key.includes('strIngredient') && meal[key] !=null) && (key.includes('strIngredient') && meal[key] !='') ){                  //^value^
      //if ( (the key is true & the value is true) && (the key is true & the value is not an empty string))
      $("ul#ingredientsList").append('<li>' + meal[key] + '</li>');
      mealsArray.push(meal[key]); //push the items in the array
    }
  }
  return mealsArray;

}

function getInstructions(meal) {
  let instructionsArray = [];
  for (let instruction in meal){
    if (instruction.includes('strInstructions') && meal[instruction] !=null) {
      // ( (instruction.includes('strInstructions') && meal[instruction] !=null) && (instruction.includes('strInstructions') && meal[instruction] !='') ){
      $("#instructions").append('<strong><h2>' + 'Instructions:' + '</h2></strong></br>' + meal[instruction]);
      instructionsArray.push(meal[instruction]); //push the items in the array
    }
  }
  return instructionsArray;
}


$(document).ready(function(){
  $("#submit-btn").click(function(){

    let classCaller = new Recipes();
    let recipeSearch = $("#food-search").val();
    $("#food-search").val(""); //empty the values
    $("ul").empty();
    // console.log(recipeSearch);
    let promise = classCaller.apiMethod(recipeSearch);//runing the instance on the BL method

    promise.then(function(response){
      // debugger;

      response = JSON.parse(response);
      let meal = response.meals[0];
      getIngredients(meal);
      getInstructions(meal);
    }, function(Error){
      console.log("Sorry there is an Error loading your request!");
    });
  });
});
