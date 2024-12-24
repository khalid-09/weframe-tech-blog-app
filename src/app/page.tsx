import NewsLetter from '@/components/newsletter';
import { ThemeToggle } from '@/components/theme-toggle';

const HomePage = () => {
  return (
    <section>
      <NewsLetter />
      <div className="text-4xl font-semibold">HomePage</div>
      <ThemeToggle />
    </section>
  );
};

export default HomePage;
