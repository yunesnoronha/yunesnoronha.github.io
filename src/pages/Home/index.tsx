import {
  ActionIcon,
  AppShell,
  Avatar,
  Button,
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
  useMantineColorScheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconDownload,
  IconFileCertificate,
  IconMailForward,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import CardPortfolio from '../../components/CardPortfolio';
import HeaderNav from '../../components/Header';

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
    name: 'MBA in Information Technology Management',
    avatar: '/img/impacta.jfif',
    date: '2018 - 2019',
    company: 'College Impacta Tecnologia',
    description: 'Masters Degree in Information Technology Management.',
  },
  {
    name: 'Technologist Systems analysis and development',
    avatar: '/img/fatec.jfif',
    date: '2014 - 2017',
    company: 'Fatec - Praia Grande',
    description: 'Graduated in Systems Analysis and Development by Fatec',
  },
  {
    name: 'IT Technician - Systems Development',
    avatar: '/img/etec.png',
    date: '2011 - 2012',
    company: 'Etec - Praia Grande',
    description: 'IT technician with a focus on systems development',
  },
];
const experience = [
  {
    name: 'Fullstack developer Reactjs/Python',
    avatar: '/img/claro.jfif',
    date: '2018 - actual',
    company: 'Claro - São Paulo',
    description:
      'Fullstack Developer at Claro. Create and support React applications. RPA Digital - Create and support RPA Digital applications.',
  },
  {
    name: 'Developer at TCS',
    avatar: '/img/tcs.jfif',
    date: '2018 - 2018',
    company: 'Tata Consultancy Services · São Paulo',
    description:
      'Fullstack Developer at TCS. Build solutions in ASP.net MVC and Microsoft SQL Server. Build RPA solutions to legacy systems.',
  },
  {
    name: 'Developer at Indigosoft',
    avatar: '/img/indigo.jfif',
    date: '2017 - 2018',
    company: 'Indigosoft',
    description: 'C# developer at Indigosoft. Build RPA solutions in C# applications at Telecom customers.',
  },
  {
    name: 'Developer at GSF Service',
    avatar: '/img/gsf.jfif',
    date: '2013 - 2016',
    company: 'GSF Service',
    description: 'Build solutions in ASP.net MVC and Microsoft SQL Server at Retail Customer. ',
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
        <Flex direction={'column'} sx={{ width: `${isMobile ? `300px` : `400px`}` }}>
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
  const { colorScheme } = useMantineColorScheme();
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
      <Container bg={colorScheme === 'dark' ? 'dark' : '#F8F9FA'} mb={'lg'}>
        <Stack align={'center'} mt={'md'}>
          <Image
            width={256}
            radius={256}
            sx={{ border: '3px solid #E9ECEF', borderRadius: 256 }}
            src={process.env.PUBLIC_URL + 'img/yunes-cover.jpeg'}
            alt="Yunes Noronha"
          />
          <Group>
            <ActionIcon
              color={'cyan'}
              variant="subtle"
              size={48}
              component="a"
              href={'https://www.linkedin.com/in/yunesnoronha/'}
            >
              <IconBrandLinkedin stroke={1.5} />
            </ActionIcon>
            <ActionIcon color={'cyan'} variant="subtle" size={48} component="a" href={'mailto:yunesnoronha@gmail.com'}>
              <IconMailForward stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              color={'cyan'}
              variant="subtle"
              size={48}
              component="a"
              href={'https://github.com/yunesnoronha'}
            >
              <IconBrandGithub stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              color={'cyan'}
              variant="subtle"
              size={48}
              component="a"
              href={'https://api.whatsapp.com/send?phone=5513981949758'}
            >
              <IconBrandWhatsapp stroke={1.5} />
            </ActionIcon>
          </Group>
          <Title order={1}>Hey, I´m Yunes Noronha</Title>
          <Text size={'lg'} color={'dimmed'}>
            Hi, I´m <b>Yunes Noronha</b> Fullstack Developer from <b>Brazil</b> with {yearExperience}+ years of
            experience.
          </Text>
          <Group>
            <Button
              color={'cyan'}
              leftIcon={<IconDownload />}
              component="a"
              href={process.env.PUBLIC_URL + '/CV/CV.pdf'}
              download
            >
              Download CV
            </Button>
            <Button color={'cyan'} leftIcon={<IconFileCertificate />} component={Link} to={'/CV'}>
              CV Online
            </Button>
          </Group>
        </Stack>
      </Container>
      <Flex bg={colorScheme === 'dark' ? 'dark' : '#ffff'}>
        <Container mb={'md'}>
          <Stack align={'center'} mt={'md'}>
            <Title order={1}>Know Me More</Title>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
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
      <Flex bg={colorScheme === 'dark' ? 'dark' : '#F8F9FA'} mb={'md'}>
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
      <Flex bg={colorScheme === 'dark' ? 'dark' : '#ffff'} mb={'md'} p={'md'} wrap="wrap">
        <Container>
          <Title align="center" m={'md'} order={1}>
            My Skills
          </Title>
          <Flex wrap={'wrap'} gap={'xl'} justify={'space-around'}>
            <RenderSkills isMobile={isMobile} skills={skills} />
          </Flex>
        </Container>
      </Flex>
      <Flex bg={colorScheme === 'dark' ? 'dark' : '#F8F9FA'} mb={'md'} p={'md'} wrap="wrap">
        <Container>
          <Title align="center" m={'md'} order={1}>
            Personal Skills
          </Title>
          <Flex wrap={'wrap'} gap={'xl'} justify={'space-around'}>
            <RenderSkills isMobile={isMobile} skills={personalSkills} />
          </Flex>
        </Container>
      </Flex>
      <Flex bg={colorScheme === 'dark' ? 'dark' : '#ffff '} gap="md">
        <Container mb={'md'}>
          <Stack align={'center'} mt={'md'}>
            <Title order={1}>Portfolio</Title>
          </Stack>
          <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            <CardPortfolio
              img={'img/port-site.png'}
              p="xl"
              radius={'xs'}
              sx={{ boxShadow: '2px 2px 5px  #74717143' }}
              children={undefined}
              title="Site Pessoal"
              text="Desenvolvido por Yunes Noronha, 2023."
              link="https://yunesnoronha.com/"
              linkText="Yunes Noronha"
            />
            <CardPortfolio
              img={'img/port-gsf.png'}
              p="xl"
              radius={'xs'}
              sx={{ boxShadow: '2px 2px 5px  #74717143' }}
              children={undefined}
              title="GSF Service"
              text="Desenvolvido por Yunes Noronha e Andrey Naldoni, 2018."
              link="https://gsfservice.com.br/"
              linkText="GSF Service"
            />
          </SimpleGrid>
        </Container>
      </Flex>
    </AppShell>
  );
}
