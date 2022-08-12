// import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _playerOne: Fighter;
  private _playerTwo: Fighter;
  constructor(
    player: Fighter,
    playerOne: Fighter,
  ) {
    super(player);
    this._playerOne = playerOne;
    this._playerTwo = player;
  }

  fight(): number {
    const p1 = this._playerOne.lifePoints;
    const p2 = this._playerTwo.lifePoints;
    if (p1 !== -1 || p2 !== -1) {
      this._playerOne.attack(this._playerTwo);
      this._playerTwo.attack(this._playerOne);
    }
    return super.fight();
  }
}

export default PVP;