import Image from 'next/image';
import { Wrapper } from './Wrapper';

export const Hero = () => {
  return (
    <Wrapper className='flex max-md:flex-col gap-6 items-center'>
      <div className='flex-[2]'>
        <h2 className='font-caption font-bold text-5xl text-primary'>
          Nicolas Manigand
        </h2>
        <h3 className='text-xl font-caption'>
          Développeur Full-Stack / React . NodeJS
        </h3>
      </div>
      <div className='flex-1 custom-shadow'>
        <Image
          className='clip-path max-md:w-56'
          src='/images/profil-picture.webp'
          alt='Nicolas Manigand'
          width={600}
          height={600}
        />
      </div>
    </Wrapper>
  );
};
