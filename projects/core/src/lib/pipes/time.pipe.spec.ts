import { MyTimePipe } from './time.pipe';

describe('TimePipe', () => {
  it('create an instance', () => {
    const pipe = new MyTimePipe();
    expect(pipe).toBeTruthy();
  });
});
