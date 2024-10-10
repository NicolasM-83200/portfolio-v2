import { Wrapper } from './Wrapper';

export const Footer = () => {
  return (
    <footer>
      <Wrapper className='grid'>
        <p className='p-6 place-self-center text-center'>
          © Manigand Nicolas - {new Date().getFullYear()} - Tous droits réservés
        </p>
      </Wrapper>
    </footer>
  );
};
