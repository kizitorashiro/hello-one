import { echoHello } from "../source/echo";

test('echo hello test', () => {
    expect(echoHello('Nancy')).toBe('Hello, Nancy');
});

test('echo hello ng test', () => {
    expect(echoHello('Nancy')).toBe('Hello, Nancy2');
});