import { Character } from "./Models/Character.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {





  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  // NOTE create a spot to save our data

  characters = [
    new Character('George', 'Dwarf Druid', 24),
    new Character('Strahd', 'Vampire', 240),
  ]





}


// NOTE what's this do? Don't worry about it.  At least not now
export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
