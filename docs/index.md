<!DOCTYPE html>
<html>
	<head>
		<title>Mc-Conditional Examples</title>
	</head>
	<body>
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
                        <mc-conditional>
                                <input type="checkbox" name="vehicle" value="Bike"> I have a bike<br>
                                <input type="checkbox" name="vehicle" value="Car"> I have a car<br>
                                <input type="checkbox" name="vehicle" value="Boat" checked> I have a boat<br>

</mc-conditional>
<div id="Bike">
This is the bike div! spin spin
</div>
<div id="Car">
This is the car div! Vroooom!
</div>
<div id="Boat">
This is the boat div! Blup! Blup! 
</div>
<mc-conditional>
	<input type="text" name="magic-word">
</mc-conditional>
<div id="abracadabra">
	You said the magic word!
</div>
<script src="main.js" type="module"</script>
	</body>
</html>
