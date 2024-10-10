import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export const Wrapper = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={cn('lg:max-w-4xl px-4 mx-auto', props.className)}>
      {props.children}
    </div>
  );
};
