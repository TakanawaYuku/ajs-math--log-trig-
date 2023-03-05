import GamePersons from './app';

export default class Magician extends GamePersons {
  constructor(name) {
    super(name);
    this.type = 'Majician';
    this.attack = 10;
  }
}
