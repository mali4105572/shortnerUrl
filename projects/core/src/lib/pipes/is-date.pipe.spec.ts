import { IsDatePipe } from './is-date.pipe';

describe('IsDatePipe', () => {
  it('create an instance', () => {
    const pipe = new IsDatePipe();
    expect(pipe).toBeTruthy();
  });
});
