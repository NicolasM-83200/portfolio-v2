import Image from 'next/image';
import { Wrapper } from './Wrapper';

export const Hero = () => {
  return (
    <Wrapper className='flex items-center gap-6 max-md:flex-col'>
      <div className='flex-[2]'>
        <h2 className='font-caption text-5xl font-bold text-primary'>
          Nicolas Manigand
        </h2>
        <h3 className='font-caption text-xl'>
          Développeur Full-Stack / React . NodeJS
        </h3>
      </div>
      <div className='custom-shadow flex-1'>
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
