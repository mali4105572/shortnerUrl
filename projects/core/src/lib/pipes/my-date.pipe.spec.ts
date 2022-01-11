import { MyDatePipe } from './my-date.pipe';

describe('DatePipe', () => {
  it('create an instance', () => {
    const pipe = new MyDatePipe();
    expect(pipe).toBeTruthy();
  });
});
