import { Spacing } from '../_components/Spacing';
import { Wrapper } from '../_components/Wrapper';

export const About = () => {
  return (
    <Wrapper>
      <Spacing size='md' />
      <div className='mx-auto flex max-w-[60ch] flex-col space-y-6 text-justify text-sm *:first-letter:text-xl'>
        <p className='leading-snug'>
          👩🏻‍💼 Je suis Nicolas, Développeur Full-Stack spécialisé en technologies
          React et Node.js.👇
        </p>
        <p className='leading-snug'>
          ⚡ Je me suis plongé dans le monde du développement en suivant ma
          passion pour la création de solutions innovantes. Mon parcours a
          débuté avec un intérêt marqué pour la programmation lorsque
          j&apos;étudiais pour mon BTS électronique puis ensuite en hobby sur
          divers langages tels que JavaScript, C (Arduino), un peu de Python
          (Raspberry Pi) et MQL4 (spécifique aux plateformes de trading, ex.
          robot de trading).
        </p>
        <p className='leading-snug'>
          👩🏻‍💻 Avec une formation solide en JavaScript / React et une expérience
          pratique dans la réalisation de mes projets de formation, j&apos;ai
          consolidé mes compétences en développement full-stack.
        </p>
        <p className='leading-snug'>
          💡 Au fil de mon parcours, j&apos;ai acquis une expertise dans :
        </p>
        <ul className='ml-8 space-y-1'>
          <li className='list-["🌐"]'>
            <p className='ml-4'>Développement front-end avec React</p>
          </li>
          <li className='list-["🔧"]'>
            <p className='ml-4'>Développement back-end avec Node.js</p>
          </li>
          <li className='list-["📦"]'>
            <p className='ml-4'>
              Conception et développement de solutions web robustes
            </p>
          </li>
          <li className='list-["🛠️"]'>
            <p className='ml-4'>
              Intégration de fonctionnalités innovantes et conviviales
            </p>
          </li>
          <li className='list-["👥"]'>
            <p className='ml-4'>
              Collaboration au sein d&apos;équipes dynamiques et
              multidisciplinaires
            </p>
          </li>
        </ul>
        <p className='leading-snug'>
          🎯 Mon objectif professionnel actuel est de mettre mes compétences au
          service de projets stimulants dans le domaine du développement web. Je
          suis particulièrement intéressé par les opportunités où je pourrais
          contribuer à des solutions innovantes et à forte valeur ajoutée.
        </p>
        <p className='leading-snug'>
          🚀 Je suis animé par la volonté de rester à la pointe des dernières
          technologies et pratiques de développement, tout en continuant à
          apprendre et à évoluer dans un environnement dynamique.
        </p>
        <p>À très bientôt !</p>
        <p>Nicolas ✨</p>
      </div>
      <Spacing size='md' />
    </Wrapper>
  );
};
