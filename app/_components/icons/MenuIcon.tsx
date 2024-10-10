import { ComponentPropsWithoutRef } from 'react';

export const MenuIcon = (
  props: ComponentPropsWithoutRef<'svg'> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        stroke='currentColor'
        d='M4 6h16M4 12h16M4 18h16'
      ></path>
    </svg>
  );
};
