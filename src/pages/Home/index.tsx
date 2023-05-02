import {
  ActionIcon,
  AppShell,
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Group,
  Image,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconDownload,
  IconFileCertificate,
  IconMailForward,
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import HeaderNav from '../../components/Header';
import { Link } from 'react-router-dom';

const skills = [
  {
    name: 'React',
    level: 70,
  },
  {
    name: 'TypeScript',
    level: 60,
  },
  {
    name: 'JavaScript',
    level: 60,
  },
  {
    name: 'Node JS',
    level: 80,
  },
  {
    name: 'HTML',
    level: 90,
  },
  {
    name: 'CSS',
    level: 50,
  },
  {
    name: 'Python',
    level: 70,
  },
  {
    name: 'C#',
    level: 80,
  },
  {
    name: 'SQL',
    level: 90,
  },
  {
    name: 'NoSQL',
    level: 90,
  },
];
const personalSkills = [
  {
    name: 'Problem solving',
    level: 90,
  },
  {
    name: 'Teamwork',
    level: 80,
  },
  {
    name: 'Written communication',
    level: 70,
  },
  {
    name: 'Leadership',
    level: 80,
  },
];
const education = [
  {
    name: 'MBA em Gestão da tecnologia da informação',
    avatar: '/img/impacta.jfif',
    date: '2018 - 2019',
    company: 'Faculdade Impacta Tecnologia',
    description: 'Pós graduação em Gestão da tecnologia da informação.',
  },
  {
    name: 'Tecnólogo Análise e desenvolvimento de sistemas ',
    avatar: '/img/fatec.jfif',
    date: '2014 - 2017',
    company: 'Fatec - Praia Grande',
    description: 'Formado em Análise e desenvolvimento de sistemas pela fatec',
  },
  {
    name: 'Técnico de informatica - Desenvolvimento de sistemas',
    avatar: '/img/etec.png',
    date: '2011 - 2012',
    company: 'Etec - Praia Grande',
    description: 'Técnico de informatica com foco em desenvolvimento de sistemas',
  },
];
const experience = [
  {
    name: 'Fullstack developer Reactjs/Python',
    avatar: '/img/claro.jfif',
    date: '2018 - actual',
    company: 'Claro - São Paulo',
    description: 'Full Stack Developer',
  },
  {
    name: 'Analista de desenvolvimento de sistemas',
    avatar: '/img/tcs.jfif',
    date: '2018 - 2018',
    company: 'Tata Consultancy Services · São Paulo',
    description: 'Full Stack Developer',
  },
  {
    name: 'Desenvolvedor de software',
    avatar: '/img/indigo.jfif',
    date: '2017 - 2018',
    company: 'Indigosoft',
    description: 'Full Stack Developer',
  },
  {
    name: 'Analista de software',
    avatar: '/img/gsf.jfif',
    date: '2013 - 2016',
    company: 'GSF Service',
    description: 'Full Stack Developer',
  },
];
const RenderEducation = () => {
  return (
    <>
      {education.map((e) => (
        <Flex key={e.name} justify={'center'} gap={'md'}>
          <Avatar mt={'sm'} src={process.env.PUBLIC_URL + e.avatar} />
          <Stack>
            <Text fz="xl" fw={500}>
              {e.name}
            </Text>
            <Text c="dimmed">
              {e.company} / {e.date}
            </Text>
            <Text lineClamp={3}>{e.description}</Text>
            <Divider />
          </Stack>
        </Flex>
      ))}
    </>
  );
};
const RenderXp = () => {
  return (
    <>
      {experience.map((e) => (
        <Flex key={e.name} justify={'center'} gap={'md'}>
          <Avatar mt={'sm'} src={process.env.PUBLIC_URL + e.avatar} />
          <Stack key={e.name}>
            <Text fz="xl" fw={500}>
              {e.name}
            </Text>
            <Text c="dimmed">
              {e.company} / {e.date}
            </Text>
            <Text lineClamp={3}>{e.description}</Text>
            <Divider />
          </Stack>
        </Flex>
      ))}
    </>
  );
};
const RenderSkills = ({ isMobile, skills }: { isMobile: boolean; skills: any }) => {
  return (
    <>
      {skills.map((skill: any) => (
        <Flex direction={'column'} sx={{ width: `${isMobile ? `350px` : `400px`}` }}>
          <Flex justify={'space-between'}>
            <Text size={'md'}>{skill.name}</Text>
            <Text size={'md'}> {skill.level}</Text>
          </Flex>
          <Progress mt={0} value={skill.level} color={'cyan'} />
        </Flex>
      ))}
    </>
  );
};
export default function Home() {
  const yearExperience = new Date().getFullYear() - 2012;
  const isMobile: boolean = useMediaQuery('(max-width: 767px)');

  return (
    <AppShell
      header={<HeaderNav />}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          paddingLeft: 0,
          paddingRight: 0,
        },
      })}
    >
      <Container bg={'#F8F9FA'} mb={'lg'}>
        <Stack align={'center'} mt={'md'}>
          <Image
            width={256}
            radius={256}
            sx={{ border: '3px solid #E9ECEF', borderRadius: 256 }}
            src={process.env.PUBLIC_URL + 'img/yunes-cover.jpeg'}
            alt="Yunes Noronha"
          />
          <Group>
            <ActionIcon color={'cyan'} variant="subtle" size={48}>
              <IconBrandLinkedin stroke={1.5} />
            </ActionIcon>
            <ActionIcon color={'cyan'} variant="subtle" size={48}>
              <IconMailForward stroke={1.5} />
            </ActionIcon>
            <ActionIcon color={'cyan'} variant="subtle" size={48}>
              <IconBrandGithub stroke={1.5} />
            </ActionIcon>
            <ActionIcon color={'cyan'} variant="subtle" size={48}>
              <IconBrandWhatsapp stroke={1.5} />
            </ActionIcon>
          </Group>
          <Title order={1}>Hey, I´m Yunes Noronha</Title>
          <Text size={'lg'} color={'dimmed'}>
            Hi, I´m <b>Yunes Noronha</b> Fullstack Developer from <b>Brazil</b> with {yearExperience}+ years of
            experience.
          </Text>
          <Group>
            <Button color={'cyan'} leftIcon={<IconDownload />} component="a" href="/CV.pdf" download>
              Download CV
            </Button>
            <Button color={'cyan'} leftIcon={<IconFileCertificate />} component={Link} to={'/CV'}>
              CV Online
            </Button>
          </Group>
        </Stack>
      </Container>
      <Flex bg={'#ffff'}>
        <Container mb={'md'}>
          <Stack align={'center'} mt={'md'}>
            <Title order={1}>Know Me More</Title>
            <SimpleGrid cols={2}>
              <Text size="lg" ta="justify">
                I'm a Fullstack developer passionate about technology. I like to develop simple, clean and elegant
                websites that provide real value to the end user. Simple is always the best. <br />I have{' '}
                {yearExperience}+ years of experience with software development in various technologies on the market,
                great experience with web development with React/Node js and database design. Great knowledge in other
                languages like C#, Python, Js, Typescript etc. <br />
                All this time I have seen major programming paradigm shifts as well as project management methodologies.
              </Text>
              <Stack align={'Center'} justify={'flex-start'}>
                <Avatar alt="10" color="cyan" size={100} radius="xl">
                  {yearExperience}
                </Avatar>
                <Title order={3}>
                  Years of <b>Experience</b>
                </Title>
              </Stack>
            </SimpleGrid>
          </Stack>
        </Container>
      </Flex>
      <Flex bg={'#F8F9FA'} mb={'md'}>
        <Container mb={'md'}>
          <Stack align={'center'} mt={'md'}>
            <Title order={1}>A summary of My Resume</Title>
          </Stack>
          <SimpleGrid cols={2} mt={'md'} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            <Flex gap={'md'}>
              <Divider size="xl" color={'cyan'} orientation="vertical" />
              <Stack align={'flex-start'}>
                <Title order={3}>My Education</Title>
                <RenderEducation />
              </Stack>
            </Flex>
            <Flex gap={'md'}>
              <Divider size="xl" color={'cyan'} orientation="vertical" />
              <Stack align={'flex-start'}>
                <Title order={3}>My Experience</Title>
                <RenderXp />
              </Stack>
            </Flex>
          </SimpleGrid>
        </Container>
      </Flex>
      <Flex bg={'#ffff'} mb={'md'} p={'md'} wrap="wrap">
        <Container>
          <Title align="center" m={'md'} order={1}>
            My Skills
          </Title>
          <Flex wrap={'wrap'} gap={'xl'} justify={'space-around'}>
            <RenderSkills isMobile={isMobile} skills={skills} />
          </Flex>
        </Container>
      </Flex>
      <Flex bg={'#F8F9FA'} mb={'md'} p={'md'} wrap="wrap">
        <Container>
          <Title align="center" m={'md'} order={1}>
            Personal Skills
          </Title>
          <Flex wrap={'wrap'} gap={'xl'} justify={'space-around'}>
            <RenderSkills isMobile={isMobile} skills={personalSkills} />
          </Flex>
        </Container>
      </Flex>
      <Flex bg={'#ffff '} gap="md">
        <Container mb={'md'}>
          <Stack align={'center'} mt={'md'}>
            <Title order={1}>Portfolio</Title>
          </Stack>
          <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            <Card shadow="sm" p="xl">
              <Card.Section>
                <Image src={process.env.PUBLIC_URL + 'img/port-site.png'} height={260} alt="Meu site" />
              </Card.Section>

              <Text weight={600} align={'center'} size="lg" mt="md">
                Site Pessoal
              </Text>

              <Text mt="xs" color="dimmed" size="sm">
                Desenvolvido por Yunes Noronha, 2023.
              </Text>
            </Card>
          </SimpleGrid>
        </Container>
      </Flex>
    </AppShell>
  );
}
