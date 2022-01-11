import { MyDateTimePipe } from './my-date-time.pipe';

describe('myDateTimePipe', () => {
  it('create an instance', () => {
    const pipe = new MyDateTimePipe('');
    expect(pipe).toBeTruthy();
  });
});
