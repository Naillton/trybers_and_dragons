import Race from './Race';

class Halfling extends Race {
  private static _creacreatedRacesInstances = 0;
  private _maxLifePoints = 60;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._creacreatedRacesInstances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return this._creacreatedRacesInstances;
  }
}

export default Halfling;