import { appState } from "../AppState.js";
import { Character } from "../Models/Character.js";



class CharactersService {

  takeDamage(name) {
    console.log('service taking damage', name);
    let character = appState.characters.find(c => c.name == name)
    character.currentHealth--
  }

  healDamage(name) {
    let character = appState.characters.find(c => c.name == name)
    character.currentHealth = character.maxHealth
  }

  createCharacter(playerData) {
    // NOTE taken raw data and classified it
    let newCharacter = new Character(playerData.name, playerData.type, playerData.maxHealth)
    console.log('new', newCharacter);
    // NOTE add to appstate
    appState.characters.push(newCharacter)
    // unshift also adds items but to the front instead
  }
}

export const charactersService = new CharactersService()