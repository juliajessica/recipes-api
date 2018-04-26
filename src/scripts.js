class Recipe() {
  constructor() {

  }

  apiMethod() {
    return new Promise(function(resolve, reject) {

      let recipeRequest = new XMLHttpRequest();
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeSearch}`;

      recipeRequest.onload = function() {
        if (this.status === 200) {
          resolve(recipeRequest.response);
        }else {
          reject(Error(recipeRequest.statusText));
        }
      }
      recipeRequest.open("GET", url, true);
      recipeRequest.send();
    });
  }
} // closing class
 export { Recipes };
