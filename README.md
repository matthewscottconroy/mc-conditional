# mc-conditional

[mc-conditional in action](https://matthewscottconroy.github.io/mc-conditional/) 

mc-conditional is a web component that augments the behavior of traditional html form elements so that when certain values are chosen or entered into the form, the visibility of certain elements of the page are altered.

You might find this web component useful if:

- You want to simplify a long form by hiding questions that are only relevant to users that have answered a certain question
- You want to display certain messages based on the way a user has filled out a form
- Your page consists of a sequence of slides, tabs or branching paths that you want to display without having to transition to other pages or without having to build out a single page application
- You want a simple way of managing conditional visibility for situations where the added complexity or technical debt of using a framework with mvc or reactive components isn't warranted


## To Install

Run:

`npm install mc-conditional`

Then include the file in your html:

`&lt;script src="./node_modules/mc-conditional/McConditional.js" type="module"&gt;&lt;/script&gt;`


## To Use

To use the component, simply wrap any of your standard form elements with the `<mc-conditional>` tag like so:

`
<pre>
&lt;mc-conditional&gt;
&lt;div&gt;
&lt;input type="radio" id="jalapeno-radio" name="pepper" value="jalapeno"&gt;
&lt;label for="jalapeno-radio"&gt;Jalapeno&lt;/label&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;input type="radio" id="ghost-radio" name="pepper" value="ghost"&gt;
&lt;label for="ghost-radio"&gt;Ghost&lt;/label&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;input type="radio" id="habanero-radio" name="pepper" value="habanero"&gt;
&lt;label for="habanero-radio"&gt;Habanero&lt;/label&gt;
&lt;/div&gt;
&lt;/mc-conditional&gt;

&lt;div id="jalapeno"&gt;
These green peppers are delicious and spicy!
&lt;/div&gt;
&lt;div id="ghost"&gt;
These red peppers are to die for!
&lt;/div&gt;
&lt;div id="habanero"&gt;
These orange peppers are quite the dish!
&lt;/div&gt;

&lt;mc-conditional&gt; &lt;!-- c-value="parrot" visible-element=".form-controls"&gt; --&gt;
&lt;select name="pets" id="pet-select"&gt;
    &lt;option value=""&gt; Please choose an option &lt;/option&gt;
    &lt;option value="dog"&gt;Dog&lt;/option&gt;
    &lt;option value="cat"&gt;Cat&lt;/option&gt;
    &lt;option value="hamster"&gt;Hamster&lt;/option&gt;
    &lt;option value="parrot"&gt;Parrot&lt;/option&gt;
    &lt;option value="spider"&gt;Spider&lt;/option&gt;
    &lt;option value="goldfish"&gt;Goldfish&lt;/option&gt;
&lt;/select&gt;
&lt;/mc-conditional&gt;

&lt;div id="dog"&gt;
barks
&lt;/div&gt;

&lt;div id="cat"&gt;
meows
&lt;/div&gt;

&lt;div id="hamster"&gt;
...
&lt;/div&gt;

&lt;div id="parrot"&gt;
flies
&lt;/div&gt;

&lt;div id="spider"&gt;
scuttles
&lt;/div&gt;

&lt;div id="goldfish"&gt;
swims
&lt;/div&gt;





&lt;mc-conditional&gt;
  &lt;input type="checkbox" name="vehicle" value="Bike"&gt; I have a bike&lt;br&gt;
  &lt;input type="checkbox" name="vehicle" value="Car"&gt; I have a car&lt;br&gt;
  &lt;input type="checkbox" name="vehicle" value="Boat" checked&gt; I have a boat&lt;br&gt;
&lt;/mc-conditional&gt;


&lt;div id="Bike"&gt;
This is the bike div! spin spin
&lt;/div&gt;

&lt;div id="Car"&gt;
This is the car div! Vroooom!
&lt;/div&gt;

&lt;div id="Boat"&gt;
This is the boat div! Blup! Blup!
&lt;/div&gt;




&lt;p&gt;Just type the word abracadabra&lt;/p&gt;

&lt;mc-conditional&gt;
&lt;input type="text" name="magic-word"&gt;
&lt;/mc-conditional&gt;

&lt;div id="abracadabra" class="mc-conditional-out"&gt;
        You said the magic word!
&lt;/div&gt;
</pre>
`

Notice that some of the conditionals have some attributes commented out. You can use these custom attributes to provide some additional customization to the behavior of your elements (by for instance explicitly stating which values should alter visibility (`c-value`) and which html elements your component should target the visibility of (`visible-element`).)

As you can see, mc-conditional works on selects, inputs, checkboxes, radio buttons, and more.

If you want to see the code above in action, please visit [this mc-conditional example page](https://matthewscottconroy.github.io/mc-conditional/) 
