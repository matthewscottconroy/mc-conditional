<html>
	<head>
<style>
section{
  background-color:blue;
  margin: 10em;
  padding: 10em;
  border-radius: 5px;
  color: white;
}

section > div {
  margin: 10em;
  padding: 10em;
}


</style>
	</head>
	<body>
<header>
<h1> Examples </h1>
<p> This page showcases how wrapping any standard form component in the mc-conditional> tag automatically gives it the ability to hide and show page elements. There are various extra attributes you can use to tailor their behavior to your needs. Consult the documentation for more info!</p>
</header>
<main>
<section>
<mc-conditional>
                                <div>
                                        <input type="radio" id="jalapeno-radio" name="pepper" value="jalapeno">
                                        <label for="jalapeno-radio">Jalapeno</label>
                                </div>
                                <div>
                                        <input type="radio" id="ghost-radio" name="pepper" value="ghost">
                                        <label for="ghost-radio">Ghost</label>
                                </div>
                                <div>
                                        <input type="radio" id="habanero-radio" name="pepper" value="habanero">
                                        <label for="habanero-radio">Habanero</label>
                                </div>
</mc-conditional>
<hr>
			<div id="jalapeno" style="background-color: green; padding: 10em;">
				These green peppers are delicious and spicy!
			</div>
			<div id="ghost" style="background-color: red; padding: 10em;">
				These red peppers are to die for!
			</div>
			<div id="habanero" style="background-color: orange; padding: 10em;">
				These orange peppers are quite the dish!
			</div>

</section>		
<section>
<mc-conditional> <!-- c-value="parrot" visible-element=".form-controls"> -->
<select name="pets" id="pet-select">
    <option value=""> Please choose an option </option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>
</mc-conditional>
<hr>
<div id="dog">
barks
</div>
<div id="cat">
meows
</div>
<div id="hamster">
...
</div>
<div id="parrot">
flies
</div>
<div id="spider">
scuttles
</div>
<div id="goldfish">
swims
</div>
</section>
<section>
<mc-conditional>
  <input type="checkbox" name="vehicle" value="Bike"> I have a bike<br>
  <input type="checkbox" name="vehicle" value="Car"> I have a car<br>
  <input type="checkbox" name="vehicle" value="Boat" checked> I have a boat<br>
</mc-conditional>
<hr>
<div id="Bike">
This is the bike div! spin spin
</div>
<div id="Car">
This is the car div! Vroooom!
</div>
<div id="Boat">
This is the boat div! Blup! Blup! 
</div>
</section>
<section>
<p>Just type the word abracadabra and press ENTER!</p>
<mc-conditional>
	<input type="text" name="magic-word">
</mc-conditional>
<hr>
<div id="abracadabra" class="mc-conditional-out">
	You said the magic word!
</div>
</section>
</main>
<script src="main.js" type="module"></script>
	</body>
</html>
