module.exports = {
    roots: ['./src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    preset: 'ts-jest',
    testEnvironment: 'node',
};
