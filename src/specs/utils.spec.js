import utils from '../utils';

test('it should exist', () => {
    expect(utils).toBeDefined();
});

test('compose should compose the function', () => {
    const f1 = (n) => (x) => x + n;
    const f2 = (n) => (x) => x * n;

    let f3;

    f3 = utils.compose(f1(2), f2(2));

    expect(f3(1)).toBe(4);

    f3 = utils.compose(f2(2), f1(2));

    expect(f3(1)).toBe(6);
});

test('thread should return the value after going through all the functions', () => {
    const f1 = (n) => (x) => x + n;
    const f2 = (n) => (x) => x * n;

    expect(utils.thread(1, f1(2), f2(2))).toBe(6);

    expect(utils.thread(1, f2(2), f1(2))).toBe(4);
})

test('', () => {
    expect(utils.serializeQS({a:1,b:2})).toBe('?a=1&b=2');
});
