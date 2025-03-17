'use client';

import { useTheme } from 'next-themes';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
      aria-label='테마 변경'
    >
      <span className='text-sm font-medium text-gray-900 dark:text-white'>
        {theme === 'light' ? '다크 모드' : '라이트 모드'}
      </span>
      <span className='text-lg'>{theme === 'light' ? '🌙' : '☀️'}</span>
    </button>
  );
}

export default ThemeToggle;
