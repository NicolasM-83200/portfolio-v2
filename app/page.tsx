import { Hero } from './_components/Hero';
import { Spacing } from './_components/Spacing';
import { Status } from './_components/Status';

export default function Home() {
  return (
    <>
      <Spacing size='sm' />
      <Hero />
      <Spacing size='sm' />
      <Status />
      <Spacing size='sm' />
    </>
  );
}
