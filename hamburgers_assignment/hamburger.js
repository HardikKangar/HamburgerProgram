javascript
function createHamburger() {
  // Retrieve the selected values from the dropdown menus and input fields
  var bun = document.getElementById("bun").value;
  var garnish = document.getElementById("garnish").value;
  var cheese = document.getElementById("cheese").value;
  var sauce = document.getElementById("sauce").value;
  var patty = document.getElementById("patty").value;
  var pattyCount = document.getElementById("pattyCount").value;

  // Retrieve the selected toppings from the checkboxes and store them in an array
  var toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(function(item) {
    return item.value;
  });

  // Create a hamburger object with the selected options
  var hamburger = {
    bun: bun,
    garnish: garnish,
    cheese: cheese,
    sauce: sauce,
    patty: patty,
    pattyCount: pattyCount,
    toppings: toppings,
    // Define a method to assemble the hamburger and display the selected options
    assemble: function() {
      var output = "Assembling hamburger with the following options:<br>";
      output += "Bun: " + this.bun + "<br>";
      output += "Garnish: " + this.garnish + "<br>";
      output += "Cheese: " + this.cheese + "<br>";
      output += "Sauce: " + this.sauce + "<br>";
      output += "Patty: " + this.patty + "<br>";
      output += "Patty Count: " + this.pattyCount + "<br>";
      output += "Toppings: " + this.toppings.join(", ") + "<br>";
      // Display the selected options in the output div
      document.getElementById("output").innerHTML = output;
    }
  };

  // Call the assemble method of the hamburger object to display the selected options
  hamburger.assemble();
}