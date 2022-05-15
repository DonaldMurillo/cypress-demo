import { cypressCommands } from './cypress-commands';

describe('cypressCommands', () => {
  it('should work', () => {
    expect(cypressCommands()).toEqual('cypress-commands');
  });
});
