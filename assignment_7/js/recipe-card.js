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
		],
		displayIngredients: function() {
			window.console.log("\n" + this.name + "\n\n" +
							  "Serves: " + this.serves + "\n");
			for (var i = 0; i < this.ingredients.length; i++) {
				window.console.log("-" +
								   this.ingredients[i][0] + " " + this.ingredients[i][1] + " " + (this.ingredients[i][2] || "") );
			}
		} // end displayIngredients
	}, // end Guacamole object

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
		],
		displayIngredients: function() {
			window.console.log("\n" + this.name + "\n\n" +
							  "Serves: " + this.serves + "\n");
			for (var i = 0; i < this.ingredients.length; i++) {
				window.console.log("-" +
								   this.ingredients[i][0] + " " + this.ingredients[i][1] + " " + (this.ingredients[i][2] || ""));

		    }
		} // end displayIngredients
	} // end BananCake object

}

Recipe.Guacamole.displayIngredients();
Recipe.BananaCake.displayIngredients();
