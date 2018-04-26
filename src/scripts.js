class Recipes {
  constructor() {
  }

  apiMethod(recipeSearch) {
    return new Promise(function(resolve, reject) {

      let recipeRequest = new XMLHttpRequest();
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeSearch}`;

      recipeRequest.onload = function() {
        console.log(recipeRequest);
        if (this.status === 200) {
          console.log(recipeRequest.response);
          resolve(recipeRequest.response);
        } else {
          reject(Error(recipeRequest.statusText));
        }
      }
      recipeRequest.open("GET", url, true);
      recipeRequest.send();
    });
  }
} // closing class
export { Recipes };
