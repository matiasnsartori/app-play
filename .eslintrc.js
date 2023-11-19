module.exports = {
    root: true,
    extends: [
        'universe/native',
        'universe/node',
        'universe/shared/typescript-analysis',
        'eslint-config-prettier'
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.d.ts'],
            parserOptions: {
                project: './tsconfig.json'
            }
        }
    ]
};
