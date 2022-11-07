import { CharactersController } from "./Controllers/CharactersController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  charactersController = new CharactersController()
}

window["app"] = new App();
