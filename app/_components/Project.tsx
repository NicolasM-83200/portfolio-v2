import { Badge, badgeVariants } from '@/components/ui/badge';
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
      <PopoverTrigger className='inline-flex items-center gap-2 hover:bg-accent/50 rounded transition-colors p-1'>
        <span
          className={`bg-accent text-accent-foreground rounded-sm ${
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
              className='w-10 rounded-sm aspect-square object-cover'
            />
          )}
        </span>
        <div className='w-[80%] text-start'>
          <p className='text-sm font-semibold'>{props.title}</p>
          <p className='text-xs text-muted-foreground'>{props.description}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className='w-80 flex flex-col items-center gap-4'>
        {props.Logo && <props.Logo size={24} />}
        {props.image && (
          <Image
            src={props.image}
            width={600}
            height={600}
            alt={props.title}
            className='rounded-sm aspect-square object-cover'
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
              className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
            />
          </Link>
        )}
      </PopoverContent>
    </Popover>
  );
};
