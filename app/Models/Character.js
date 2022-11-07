


export class Character {
  constructor(name, type, maxHealth) {
    this.name = name
    this.type = type
    this.maxHealth = maxHealth
    this.currentHealth = maxHealth
    console.log('new character');
  }

  get Template() {
    return `
  <div class="col-6 text-center p-3 shadow rounded">
    <h3 class="text-primary">${this.name}</h3>
    <h4>${this.type}</h4>
    <h4 class="text-danger">${this.currentHealth}/${this.maxHealth} :${this.PercentHealth} %</h4>
    <button class="btn btn-black" onclick="app.charactersController.takeDamage('${this.name}')">take damage</button>
    <button class="btn btn-outline-success" onclick="app.charactersController.healDamage('${this.name}')">heal damage</button>
  </div>
    `
  }

  get PercentHealth() {
    return Math.round((this.currentHealth / this.maxHealth) * 100)
  }
}