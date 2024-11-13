import { echoHello } from "../source/echo";

test('echo hello test', () => {
    expect(echoHello('Nancy')).toBe('Hello, Nancy');
});