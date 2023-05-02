import { Box, Button, Container, Divider, Flex, Group, List, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconDeviceMobile, IconMail, IconMapPin, IconWorld } from '@tabler/icons-react';
import HeaderNav from '../../components/Header';

const textIcon = { display: 'flex', alignItems: 'center', gap: 4 };
const iconSize = 14;

const Contact = () => {
  const theme = useMantineTheme();
  const color = theme.colors.cyan[6];

  const contacts = [
    {
      icon: <IconMapPin size={iconSize} style={{ color }} />,
      text: 'Sao Paulo, Brazil',
    },
    {
      icon: <IconDeviceMobile size={iconSize} style={{ color }} />,
      text: '+55 13 98194-9758',
    },
    {
      icon: <IconMail size={iconSize} style={{ color }} />,
      text: 'yunesnoronha@gmail.com',
    },
    {
      icon: <IconWorld size={iconSize} style={{ color }} />,
      text: 'yunesnoronha.com',
    },
  ];

  return (
    <Box mb="md">
      {contacts.map((c) => (
        <Text size="sm" sx={textIcon} key={c.text}>
          {c.icon} {c.text}
        </Text>
      ))}
    </Box>
  );
};

type ExperienceProps = {
  title: string;
  date: string;
  company: string;
  activities: string[];
  technologies: string[];
};

const Experience = ({ title, date, company, activities, technologies }: ExperienceProps) => {
  return (
    <Box mb="sm" p={'sm'}>
      <Title order={5}>{title}</Title>
      <Text mb={4} color={'cyan'} weight={500}>
        {company} | {date}
      </Text>
      <Text mb={4} color={'black'} weight={500}>
        Technologies
      </Text>
      {technologies.map((tech) => (
        <Button color={'cyan'} m={2} variant="outline" radius="xl" size="xs" key={tech}>
          {tech}
        </Button>
      ))}
      <List mt={10}>
        {activities.map((activity) => (
          <List.Item key={activity}>{activity}</List.Item>
        ))}
      </List>
    </Box>
  );
};

const TitleSection = ({ children }: { children: React.ReactNode }) => (
  <>
    <Title order={4} mb="lg">
      {children}
    </Title>
  </>
);

type SkillsProps = {
  title: string;
  skills: string[];
};

const Skills = ({ title, skills }: SkillsProps) => {
  return (
    <Box mb="xl">
      <Title order={5} mb={4}>
        {title}
      </Title>
      <Flex wrap="wrap" gap={4}>
        {skills.map((skill) => (
          <Button color={'cyan'} variant="outline" radius="xl" size="xs" key={skill}>
            {skill}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

const CV = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      <HeaderNav />
      <Container
        my={40}
        sx={{
          '@media print': {
            margin: 0,
          },
        }}
      >
        <Flex>
          <Flex direction="column" miw={isMobile ? '50%' : '70%'}>
            <Title weight={600} mb="xs">
              Yunes Noronha
            </Title>
            <Title order={4} weight={400} sx={{ letterSpacing: 2 }} mb="xl">
              Full-Stack Developer
            </Title>

            <TitleSection>RECENT EXPERIENCE</TitleSection>

            <Experience
              title="Full-Stack Developer"
              date="Jan 2020 – Present"
              company="Claro Brazil"
              activities={[
                'Developed and maintaining an onboarding app available for 20k new customers daily.',
                'Digital onboarding - Exclusive welcome site for the arrival of new customers, where it is possible to have a first contact with the chosen plan and validation of registration data. Built on React js and Node js with Graphql',
              ]}
              technologies={['React', 'Next.js', 'Typescript', 'Node.js', 'PostgreSQL', 'AWS']}
            />
            <Divider mb={'lg'} />
            <Experience
              title="Software Engineer"
              date="Nov 2018 – Dec 2019"
              company="Nextel Brazil"
              activities={[
                'Develop and maintain a Backoffice application available to all operators and support staff in the company.',
                'Designed and developed an anti-fraud system using biometrics validation with 70% efficiency;',
                'Supported and guided 500+ automated process (RPA) with more than $50 million estimated savings.',
              ]}
              technologies={[
                'React',
                'Next.js',
                'Typescript',
                'Node.js',
                'Python',
                'Django',
                'Flask',
                'Mysql',
                'PostgreSQL',
                'Redis',
                'RPA',
                'AWS',
              ]}
            />
            <Divider mb={'lg'} />
            <Experience
              title="Analyst developer"
              date="ago 2018 – Dec 2018"
              company="Tata Consultancy Services - Sao Paulo, Brazil"
              activities={[
                'Website development in ASP.net MVC for the accounting area of a large bank.',
                'Key resource of the squads, facilitating the understanding and development of projects in the accounting area',
              ]}
              technologies={['C#', 'Asp.Net', 'MSQL', 'Oracle', 'IIS', 'MVC', 'ETL Process', 'RPA']}
            />
            <Divider mb={'lg'} />
            <Experience
              title="Software developer"
              date="Nov 2017 – Ago 2018"
              company="Indigosoft"
              activities={[
                'Process automation in C# for telecom customers, internal and external processes, automating manual operations.',
              ]}
              technologies={['C#', 'Asp.Net', 'MSQL', 'Oracle', 'IIS', 'MVC', 'RPA']}
            />
            <Divider mb={'lg'} />
            <Experience
              title="Software Developer"
              date="Set 2013 – Apr 2016"
              company="GSF Service"
              activities={['Development of programs for retail, fiscal and tax solutions in C#.']}
              technologies={['C#', 'Asp.Net', 'MSQL', 'Oracle', 'IIS']}
            />
            <Divider mb={'lg'} />
            <Experience
              title="Software Developer"
              date="Jun 2012 – Set 2013"
              company="Nortia It - Sao Paulo, Brazil"
              activities={[
                'Development of C# programs for the retail area.',
                'Creation of new applications for the retail area. Mobile applications for issuing labels, direct sales and other facilitators.',
              ]}
              technologies={['C#', 'Asp.Net', 'MSQL', 'Oracle', 'IIS']}
            />
            <Divider mb={'lg'} />
          </Flex>
          <Divider orientation="vertical" size="xs" ml={'xl'} />
          <Flex direction="column" w={isMobile ? '50%' : '30%'} pl="lg">
            <Contact />

            <TitleSection>KEY SKILLS</TitleSection>

            <Skills title="Front-end" skills={['React', 'Next.js', 'TypeScript', 'JavaScript']} />

            <Skills title="Back-end" skills={['Node.js', 'Express', 'NestJS', 'Python', 'Flask', 'Django']} />

            <Skills
              title="Database"
              skills={['SQL', 'NoSQL', 'MySQL', 'PostgreeSQL', 'Oracle', 'MS SQL', 'MongoDB', 'Firestore']}
            />

            <Skills title="Cloud" skills={['GCP', 'AWS']} />

            <TitleSection>LANGUAGES</TitleSection>

            <Group position="apart">
              <Text>English</Text>
              <Text color="cyan">Basic</Text>
            </Group>
            <Group position="apart">
              <Text>Portuguese</Text>
              <Text color="cyan">Native</Text>
            </Group>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default CV;
