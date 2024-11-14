import { EchoMessages } from "../source/echo"; // 修正箇所

test('echo hello test', () => {
    expect(EchoMessages.hello('Nancy')).toBe('Hello, Nancy'); // 修正箇所
});

test('echo goodbye test', () => {
    expect(EchoMessages.goodbye('Nancy')).toBe('Goodbye, Nancy'); // 修正箇所
});

test('echo good morning test', () => {
    expect(EchoMessages.goodMorning('Nancy')).toBe('GoodMorning, Nancy'); // 修正箇所
});

test('echo sorry test', () => {
    expect(EchoMessages.sorry('Nancy')).toBe('Sorry, Nancy'); // 新規追加
});
