import { Button, buttonVariants } from '@/components/ui/button';
import { Wrapper } from './Wrapper';
import { GithubIcon } from './icons/GithubIcon';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from './icons/MenuIcon';

export const Header = () => {
  return (
    <header className='py-4'>
      <Sheet>
        <Wrapper className='flex items-end'>
          <span className='relative text-xl font-bold tracking-wider text-foreground'>
            ManiganD
            <span className='absolute left-1/2 top-[-15px] -translate-x-1/2 font-caption font-normal tracking-normal'>
              Nicolas
            </span>
          </span>

          <ul className='ml-auto flex gap-1 sm:gap-3'>
            <li>
              <Link
                href={'/CV_Nicolas_MANIGAND.pdf'}
                download={'/CV_Nicolas_MANIGAND.pdf'}
                className={cn(buttonVariants({ variant: 'default' }), 'px-2')}
              >
                Download CV
              </Link>
            </li>
            <li>
              <Link
                href='https://github.com/nicolasm-83200'
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'size-9 p-0'
                )}
              >
                <GithubIcon size={18} className='text-foreground' />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.linkedin.com/in/nicolas-manigand'
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'size-9 p-0'
                )}
              >
                <LinkedinIcon size={18} className='text-foreground' />
              </Link>
            </li>
            <li>
              <SheetTrigger asChild>
                <Button variant={'outline'} className='px-2'>
                  <MenuIcon size={18} className='text-foreground' />
                </Button>
              </SheetTrigger>
            </li>
          </ul>
        </Wrapper>

        <SheetContent side={'right'}>
          <div className='mt-16 flex flex-col items-center gap-16 font-caption text-4xl'>
            <Link href={'/'}>HOME</Link>
            <Link href={'/about'}>ABOUT</Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
