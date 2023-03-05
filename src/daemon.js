import GamePersons from './app';

export default class Daemon extends GamePersons {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.attack = 10;
  }
}
