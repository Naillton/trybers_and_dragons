import Race from './Race';

class Elf extends Race {
  private static _creacreatedRacesInstances = 0;
  private _maxLifePoints = 99;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._creacreatedRacesInstances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return this._creacreatedRacesInstances;
  }
}

export default Elf;