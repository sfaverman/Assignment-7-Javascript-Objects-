/*eslint env-browser*/

var Recipe = {
        Guacamole: {
			name: "Guacamole",
			serves: 4,
			ingredients: [
				[3, "Avocados"],
				[1, "Lime"],
				[1, "Teaspoon","Salt"],
				["1/2", "Cup","Onion"],
				[3, "Tablespoons","Cilantro"],
				[2, "Diced","Tomatos"],
				[1, "Teaspoon","Garlic"],
				[1,"Pinch","Ground Pepper"]
				] // end of ingedients
		}, // end of Guacamole object
		BananaCake: {
			name: "BananaCake",
			serves: 16,
			ingredients: [
				[3, "Eggs"],
				[3, "Ripe","Bananas"],
				["2 1/4", "Melted","Butter"],
				["3", "Cups","Flour"],
				["1 1/4", "Cups","Sugar"],
				[1, "Teaspoon","Soda"],
				["1/2","Teaspoon","Salt"],
				["1","Squized","Tangerine"],
				] // end of ingedients
		}, // end of BananaCake object

	displayIngredients: function(menuItem) {
		window.console.log("\n" + this[menuItem].name + "\n\n" +
						  "Serves: " + this[menuItem].serves + "\n");
		for (var i = 0; i < this[menuItem].ingredients.length; i++) {
		window.console.log("-" +
				   this[menuItem].ingredients[i][0] + " " + this[menuItem].ingredients[i][1] + " " + (this[menuItem].ingredients[i][2] || "") );
			}
	} // end displayIngredients

} //end of Recipe object

Recipe.displayIngredients("Guacamole");
Recipe.displayIngredients("BananaCake");
