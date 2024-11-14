import { echoHello, echoGoodbye } from "../source/echo";

test('echo hello test', () => {
    expect(echoHello('Nancy')).toBe('Hello, Nancy');
});

test('echo goodbye test', () => {
    expect(echoGoodbye('Nancy')).toBe('Goodbye, Nancy');
});