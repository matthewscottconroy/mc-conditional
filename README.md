#mc-conditional

mc-conditional is a web component that augments the behavior of traditional html form elements so that when certain values are chosen or entered into the form the visibility of certain elements are the page can be altered.

You might find this web component useful if:

- You want to simplify a long form by hiding questions that are only relevant to users that have answered a certain question
- You want to display a certain messages based on the way a user has filled out a form
- Your page consists of a sequence of slides, tabs or branching paths that you want to display without having to transition to other pages or having to build out a single page application
- You want a simple way of managing conditional visibility for situations where the added complexity or technical debt of using a framework with mvc or reactive components isn't warranted

To use the component, simply wrap any of your standard form elements with the `<mc-conditional>` tag like so:

`
<pre>
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

<div id="jalapeno">
These green peppers are delicious and spicy!
</div>
<div id="ghost">
These red peppers are to die for!
</div>
<div id="habanero">
These orange peppers are quite the dish!
</div>

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




<p>Just type the word abracadabra</p>

<mc-conditional>
<input type="text" name="magic-word">
</mc-conditional>

<div id="abracadabra" class="mc-conditional-out">
        You said the magic word!
</div>
</pre>
`

Notice that some of the conditionals have some attributes commented out. You can use these custom attributes to provide some additional customization to the behavior of your elements (by for instance explicitly stating which values should alter visibility (`c-value`) and which html elements your component should target the visibility of (`visible-element`).)

As you can see, mc-conditional works on selects, inputs, checkboxes, radio buttons, and more.

If you want to see the code above in action, please visit [this mc-conditional example page](https://matthewscottconroy.github.io/mc-conditional/) 
