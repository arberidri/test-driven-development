import { play } from './rock-paper-scissors';

describe('rock-paper-scissors', () => {
    it('should return 0 for a tie (rock vs rock)', () => {
        expect(play('rock', 'rock')).toBe(0);
    });

    it('should return 1 when player 1 wins (rock vs scissors)', () => {
        expect(play('rock', 'scissors')).toBe(1);
    });

    it('should return 2 when player 2 wins (rock vs paper)', () => {
        expect(play('rock', 'paper')).toBe(2);
    });

    it('should throw an error for invalid moves (invalid vs rock)', () => {
        expect(() => play('invalid', 'rock')).toThrow('Invalid move');
    });
});
