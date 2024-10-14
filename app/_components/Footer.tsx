import { Wrapper } from './Wrapper';

export const Footer = () => {
  return (
    <footer>
      <Wrapper className='grid'>
        <p className='place-self-center p-6 text-center'>
          © Manigand Nicolas - {new Date().getFullYear()} - Tous droits réservés
        </p>
      </Wrapper>
    </footer>
  );
};
