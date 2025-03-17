import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className='min-h-screen bg-white dark:bg-black transition-colors duration-200'>
      <div className='fixed top-4 right-4'>
        <ThemeToggle />
      </div>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>
          다크 모드 테스트
        </h1>
      </div>
    </div>
  );
}
