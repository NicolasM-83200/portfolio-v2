import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrapper } from './Wrapper';
import { SCHOOL_PROJECTS, SIDE_PROJECTS } from '@/data/datas';
import { Project } from './Project';

export const Status = () => {
  return (
    <Wrapper className='flex gap-4 max-md:flex-col'>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Projets de Formations</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-2'>
          {SCHOOL_PROJECTS.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </CardContent>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Projets Perso</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-2'>
          {SIDE_PROJECTS.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </CardContent>
      </Card>
    </Wrapper>
  );
};
