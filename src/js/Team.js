export default class Team {
  constructor() {
    this.characteres = new Set();
  }

  add(obj) {
    if (this.characteres.size < 5) {
      if (this.characteres.has(obj)) {
        throw new Error('Этот персонаж уже в команде!');
      } else {
        this.characteres.add(obj);
      }
    }
  }

  addAll(...objs) {
    objs.forEach((obj) => {
      if (this.characteres.size < 5) {
        this.characteres.add(obj);
      }
    });
  }

  toArray() {
    return [...this.characteres];
  }

  * [Symbol.iterator]() {
    const characteres = this.toArray();
    // сортировка по степени опасности
    characteres.sort((chA, chB) => chB.attack + chB.attackRange - chA.attack - chA.attackRange);
    for (let i = 0; i < characteres.length; i += 1) yield characteres[i];
  }
}
