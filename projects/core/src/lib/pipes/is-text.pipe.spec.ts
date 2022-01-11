import { IsTextPipe } from './is-text.pipe';

describe('IsTextPipe', () => {
  it('create an instance', () => {
    const pipe = new IsTextPipe();
    expect(pipe).toBeTruthy();
  });
});
