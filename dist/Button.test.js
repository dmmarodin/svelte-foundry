import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Button from './Button.svelte';
describe('Button', () => {
    it('renders with the correct text', () => {
        const { getByText } = render(Button, { props: { text: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });
    it('applies custom styles when useCustomStyle is true', () => {
        const { getByText } = render(Button, { props: { text: 'Styled', useCustomStyle: true } });
        const button = getByText('Styled');
        expect(button.classList.contains('custom-button')).toBe(true);
    });
});
