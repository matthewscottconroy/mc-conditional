import template from './template.js';
import style from './style.js';

document.head.appendChild(style.cloneNode(true));

class McConditional extends HTMLElement {
	/*Trace and Debug/////////////////////////////////////////////////////*/
	status(){
		console.log("inputs", this.inputs);
		console.log("visibles", this.visibles);
		console.log("vRoot", this.vRoot);
	}

  /*Event Hooks/////////////////////////////////////////////////////////*/

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(style.cloneNode(true));
    shadow.appendChild(template.content.cloneNode(true));

		this.inputs;		//the input element(s) whose value(s) determine(s) visibility
		this.visibles;	//the node(s) that is(are) made visible or invisible
		this.vRoot; //the node from which to begin looking for conditionally visible nodes	
		
		this._setVroot();
		this._setInputs();
		this._setVisibles();
	
		//users set c-required on visible-element and descendents
		this._clearConditionalVisibility();
		this._setConditionalVisibility();

		
		//add an onChange event to inputs that toggles visibility based on currentvalue
		this._setOnChanges();
    console.log(this);
  }




  /*Getters////////////////////////////////////////////////////////////////*/
	
	//value of input that determines visibility
	get cValue(){
		return this.hasAttribute('c-value') ? this.getAttribute('c-value') : this.currentValue;
	}


	//query selector that determines element(s) that become(s) visibile
	get vElement(){
		return this.hasAttribute('visible-element') ? this.getAttribute('visible-element') : '#' + this.cValue;
	}


	//name of input that determines visibility
	get cName(){
		return this.hasAttribute('c-name') ? this.getAttribute('c-name') : this.querySelector('input[name], textarea[name], select[name]').name;
	}


	//root node of query selector operation for determining visibility
	get visibleRoot(){
		return this.hasAttribute('visible-root') ? this.getAttribute('visible-root') : 'document';
	}


	//determines if this element is a root or a branch in a visibility tree
	get base(){
		return this.hasAttribute('base');
	}	


	//returns the nodes that are required
	get requireds(){
		return Array.from(this.vRoot.querySelectorAll('input, select, textarea')).filter(e => e.hasAttribute('c-required'));
	}


	get type(){
		return this.inputs[0].type;
	}


	get currentValue(){
		let inputValue = "";
		let boxString = "";
		let arr;

		switch(this.type){
			case 'radio':
				arr = Array.from(this.inputs).filter(i => i.checked);

				if(arr.length > 0){
					inputValue = arr[0].value;
				}

				break;
			case 'checkbox':
				Array.from(this.inputs).filter(i => i.checked).forEach(x => boxString += (x.value + "&"));
				inputValue = boxString.substring(0, boxString.length - 1);
				break;
			case 'select-one':
				inputValue = this.inputs[0].options[this.inputs[0].selectedIndex].value;	
				break;

			case 'select-multiple':
				Array.from(this.inputs[0].options).filter(e => e.selected).forEach(x => boxString += (x.value + "&"));
				inputValue = boxString.substring(0, boxString.length - 1);
				break;

			default:
				//treat as text
				inputValue = this.inputs[0].value;
				break;
		}

		return inputValue;
	}




	/*Setters//////////////////////////////////////////////////////////////////*/

	//set value that toggles visibility
	set cValue(cVal){

		this._clearConditionalVisibility();
	
		//set the new conditional value
		this.setAttribute('c-value', cVal);

		this._setConditionalVisibility();
	}


	//set element whose visibility is toggled
	set vElement(cEl){
		this.setAttribute('visible-element', cEl);
		this._setVisibles();
	}


	//set input group that determines visibility
	set cName(cNm){
		this._clearOnChanges();
		this.setAttribute('c-name', cNm);
		this._setInputs();
	}


	//the root for searching for the element whose visibility is to be toggled
	set visibleRoot(srchrt){
		this.setAttribute('visible-root', srchrt);
		this._setVroot();
	}




	/*Private Utilities//////////////////////////////////////////////////////////*/
  //set the actual elements whose visibility is to be set (not just the property string)
	_setVisibles(){
		if(this.hasAttribute('visible-element')){
			this.visibles = this.vRoot.querySelectorAll(this.vElement);
		} else{
			this.visibles = this._getVisiblesWhenNoVisibleElementAttribute();
		}
	}


  //set the actual inputs whose values determine if visibility is toggled
	_setInputs(){
		this.inputs = this.querySelectorAll(`input[name='${this.cName}'], select[name='${this.cName}'], textarea[name='${this.cName}']`);
		this._setOnChanges();
	}


  //set the actual element from which searching for elements to be toggled should start
	_setVroot(){
		this.vRoot = this.visibleRoot === 'document' ? document : document.querySelector(this.visibleRoot); 
	}


	_clearConditionalVisibility(){
  	//make all visibles invisible based on cvalue before change
		this.visibles.forEach(v => {
						if(v !== null){
						v.classList.remove("mc-conditional-in");
						v.classList.add("mc-conditional-out");
					}
				 });

		//remove required from all c-required
		this.inputs.forEach(i => i.required = false);

		//find all mc-conditionals in each visible element and clear it
		this.visibles.forEach(v => {
			if(v !== null){
				let linkedMcConditionals = v.querySelectorAll('mc-conditional');
		
				//add the root of the visible node itself if it is mc-conditional
				if(v.tagName === 'MC-CONDITIONAL'){
					if(linkedMcConditionals.length === 0){
						linkedMcConditionals = [];
						linkedMcConditionals.push(v);
					} else{
						linkedMcConditionals = Array.from(linkedMcConditionals).push(v);
					}
				}

				//clear choices
				McConditional._clearElementChoices(linkedMcConditionals);
			}
		});
	}

	
	_getVisiblesWhenNoVisibleElementAttribute(){
		let result = this.querySelectorAll(`input[name='${this.cName}'], textarea[name='${this.cName}'], select[name='${this.cName}']`);	
		
		if(this.type === "select-one" || this.type === "select-multiple"){
		  result = Array.from(result[0].querySelectorAll('option'));	
		}
 
		result = Array.from(result).map(r => r.value).map(e => e.trim() === "" ? null : this.vRoot.querySelector("#" + e));
		
		return result;
	}


	_setConditionalVisibility(){
		//if the new conditional value is equal to the current value...
			if(this.currentValue === this.cValue){
				//make the visibles visible 
		  	this.visibles.forEach(v => {
							if(v !== null){
								if(!this.hasAttribute('visible-element')){
									if(false){ //TODO: replace with: (this.type === 'select-multiple'){
										//possible bug for this one
									} else if(this.type === 'checkbox' || this.type === 'select-multiple'){
										let arr = this.cValue.split('&');
										if(arr.includes(v.id)){
											v.classList.remove("mc-conditional-out");
											v.classList.add("mc-conditional-in");
										} 
									} else {//type equals radio, select-one, textarea, or text and its affiliates
										if("#" + v.id === this.vElement){
											v.classList.remove("mc-conditional-out");
											v.classList.add("mc-conditional-in"); 
										}
									}
								} else{ 																					
									v.classList.remove("mc-conditional-out");
									v.classList.add("mc-conditional-in"); 
								}
							}
						});
		 	 //tag all c-required inputs with required
			this.inputs.forEach(i => {
							if(i.hasAttribute('c-required')){
								i.required = true;
							}
					});
			}
	}


	_updateConditionalVisibility(){
		if(this.currentValue === this.cValue){
			if(!this.hasAttribute('visible-element')){
				this._clearConditionalVisibility();
				this._setConditionalVisibility();
			}else{
				this._setConditionalVisibility();
			}
		} else{
			this._clearConditionalVisibility();
		}
	}


  //clear change event listeners
	_clearOnChanges(){
		this.inputs.forEach(i => i.removeEventListener('change', this._onChange.bind(this)));
	}


  //set change event listeners
	_setOnChanges(){
		this.inputs.forEach(i => i.addEventListener('change', this._onChange.bind(this)));	
	}


	_onChange(){
		console.log("on change fired");
		if(!this.hasAttribute('visible-element') && (this.type !== "button" && 
								 this.type !== "checkbox" && 
								 this.type !== "radio" && 
								 this.type !== 'select-one' &&
								 this.type !== 'select-multiple')){
			this._clearConditionalVisibility();
      			this._setVisibles();
		}
 
	  	this._updateConditionalVisibility();
	}


	static _clearElementChoices(mc){
		let arr;

		Array.from(mc).forEach(c => {
		switch(c.type){
 	      		case 'radio':
  	       			arr = Array.from(c.inputs).filter(i => i.checked);
 
				if(arr.length > 0){
      	     				arr[0].checked = false;
 	        		}
  	       			break;

 	     		case 'checkbox':
        			Array.from(c.inputs).filter(i => i.checked).forEach(x => x.checked = false);
        			break;

      			case 'select':
        			c.inputs[0].options.forEach(o => o.selected = false);
        			break;

      			default:
         			//treat as text
         			c.inputs[0].value = "";
         			break;
      	}

	c._updateConditionalVisibility(); //now that the input is cleared, update visibility
	  });
  }
}

window.customElements.define("mc-conditional", McConditional);

export default McConditional;


/*
https://alligator.io/web-components/attributes-properties/
https://dev.to/jamesrweb/an-introduction-to-custom-elements-5327
https://html.spec.whatwg.org/multipage/custom-elements.html
https://developers.google.com/web/fundamentals/web-components/shadowdom
*/
