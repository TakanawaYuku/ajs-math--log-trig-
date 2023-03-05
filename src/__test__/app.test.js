import Daemon from '../daemon';
import Magician from '../magician';

test('attack + stoned', () => {
  const daemon = new Daemon('Griffith');
  daemon.stoned = true;
  daemon.attack = 100;
  daemon.distance = 2;
  expect(daemon.attack).toBe(85);
});

test('attack without stoned', () => {
  const magician = new Magician('Guts');
  magician.stoned = false;
  magician.attack = 200;
  magician.distance = 2;
  expect(magician.attack).toBe(180);
});
