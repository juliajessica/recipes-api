import { Recipes } from './scripts.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function getRecipes(meal) {
  // $("#recipe").append("<p>" + response.meals[0].strMeal + response.meals[0].strArea + "</p>");
  // for(let key in response.meals) {
  //   if(key.includes(''))
  // }
  let mealsArray = [];
  for (let key in meal) { //key is a placeholder name for response.meals[0] (called in the submit function)
    if ( (key.includes('strIngredient') && meal[key] !=null) && (key.includes('strIngredient') && meal[key] !='') ){                  //^value^
      //if ( (the key is true & the value is true) && (the key is true & the value is not an empty string))


      $("ul#recipe").append('<li>' + meal[key] + '</li>');
      mealsArray.push(meal[key]); //push the items in the array
    }
  }
  return mealsArray;
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
      getRecipes(meal);
    }, function(Error){
      console.log("Sorry there is an Error loading your request!");
    });
  });
});
