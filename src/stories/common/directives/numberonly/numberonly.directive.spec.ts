import { NumberOnlyDirective } from './numberonly.directive';

describe('NumberonlyDirective', () => {
  it('should create an instance', () => {
    // @ts-ignore
    const directive = new NumberOnlyDirective();
    expect(directive).toBeTruthy();
  });
});
