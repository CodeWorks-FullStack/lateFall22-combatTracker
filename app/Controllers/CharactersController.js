import { appState } from "../AppState.js"
import { charactersService } from "../Services/CharactersService.js";





export class CharactersController {

  // NOTE controllers constructor runs on page load
  constructor() {
    console.log('this runs when the keyword "new" is used');
    this.drawCharacters()
  }

  drawCharacters() {
    console.log('drawing characters');
    // TODO i need the characts
    let template = ''
    appState.characters.forEach(c => template += c.Template)
    document.getElementById('app').innerHTML = template

  }

  takeDamage(name) {
    console.log('taking damage', name);
    charactersService.takeDamage(name)
    this.drawCharacters()
  }

  healDamage(name) {
    console.log('healing', name);
    charactersService.healDamage(name)
    this.drawCharacters()
  }

  createCharacter() {
    // NOTE VERY IMPORTANT PART OF FORM METHODS
    // prevent default keeps the page form reloading when the form submits
    window.event.preventDefault()
    console.log('creating character');
    // NOTE collect data from form
    const form = window.event.target
    // @ts-ignore
    console.log(form.name.value, form.type.value, form.maxHealth.value);
    let characterData = {
      // @ts-ignore
      name: form.name.value,
      // @ts-ignore
      type: form.type.value,
      // @ts-ignore
      maxHealth: form.maxHealth.value
    }
    console.log('character data', characterData);
    charactersService.createCharacter(characterData)
    // note reset form
    // @ts-ignore
    form.reset()
    this.drawCharacters()
  }


}