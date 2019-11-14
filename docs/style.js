const style = document.createElement('style');
style.textContent = `

.mc-conditional-in{
  visibility:  visible;
  opacity: 1;
  transition: 1.3s;
/*  transition: visibility 0s, opacity 0.5s linear;*/

}

.mc-conditional-out {
  visibility: hidden;
  opacity: 0;
/*  transition: visibility 0s, opacity 0.5s linear;*/
  transition: 1.3s;
  background-color: var(--bmcc-light-light-baby-blue);
  color: var(--bmcc-light-light-baby-blue);
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px; width: 1px;
  margin: -1px; padding: 0; border: 0;
}

`;



export default style;

