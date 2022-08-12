import Race from './Race';

class Orc extends Race {
  private static _creacreatedRacesInstances = 0;
  private _maxLifePoints = 74;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._creacreatedRacesInstances += 1;
  }
    
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
    
  static createdRacesInstances(): number {
    return this._creacreatedRacesInstances;
  }
}

export default Orc;