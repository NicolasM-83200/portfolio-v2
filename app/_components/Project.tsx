import { badgeVariants } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { ArrowUpRight, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type ProjectProps = {
  Logo?: LucideIcon;
  image?: string;
  title: string;
  description: string;
  url?: string;
};

export const Project = (props: ProjectProps) => {
  return (
    <Popover>
      <PopoverTrigger className='inline-flex items-center gap-2 rounded p-1 transition-colors hover:bg-accent/50'>
        <span
          className={`rounded-sm bg-accent text-accent-foreground ${
            props.Logo ? 'p-2' : 'p-0'
          }`}
        >
          {props.Logo && <props.Logo size={24} />}
          {props.image && (
            <Image
              src={props.image}
              width={600}
              height={600}
              alt={props.title}
              className='aspect-square w-10 rounded-sm object-cover'
            />
          )}
        </span>
        <div className='w-4/5 text-start'>
          <p className='text-sm font-semibold'>{props.title}</p>
          <p className='text-xs text-muted-foreground'>{props.description}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className='flex w-80 flex-col items-center gap-4'>
        {props.Logo && <props.Logo size={24} />}
        {props.image && (
          <Image
            src={props.image}
            width={600}
            height={600}
            alt={props.title}
            className='aspect-square rounded-sm object-cover'
          />
        )}
        {props.url && (
          <Link
            href={props.url}
            className={cn(
              badgeVariants({ variant: 'default' }),
              'flex gap-2 py-1 px-2 group'
            )}
          >
            {props.url}
            <ArrowUpRight
              size={16}
              className='transition-transform group-hover:-translate-y-1 group-hover:translate-x-1'
            />
          </Link>
        )}
      </PopoverContent>
    </Popover>
  );
};
