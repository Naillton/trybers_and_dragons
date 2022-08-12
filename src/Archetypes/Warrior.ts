import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _createdArchetypeInstances = 0;
  constructor(name: string) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
  }
    
  get energyType(): EnergyType {
    return this._energyType;
  }
    
  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}

export default Warrior;