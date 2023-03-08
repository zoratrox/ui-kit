// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.css';

import { tv } from 'tailwind-variants';

const base = tv({ base: 'bg-blue-500 text-white rounded-full' });

const button = tv({
  base: 'font-medium active:opacity-80 ' + base(),
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-purple-500 text-white',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg',
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export function App() {
  return (
    <>
      <h1>
        <span className="text-blue-500"> Hello there, </span>
        Welcome demos-website 👋
        <button className={button({ size: 'sm', color: 'secondary' })}>
          Click me
        </button>
      </h1>
      <div />
    </>
  );
}

export default App;

if (import.meta.vitest) {
  // add tests related to your file here
  // For more information please visit the Vitest docs site here: https://vitest.dev/guide/in-source.html

  const { it, expect, beforeEach } = import.meta.vitest;
  let render: any;

  beforeEach(async () => {
    render = (await import('@testing-library/react')).render;
  });

  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome demos-website/gi)).toBeTruthy();
  });
}
