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
};

const Experience = ({ title, date, company, activities }: ExperienceProps) => {
  return (
    <Box mb="sm">
      <Title order={5}>{title}</Title>
      <Text mb={4} color={'cyan'} weight={500}>
        {company} | {date}
      </Text>
      <List>
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
              activities={['Developed and maintaining an onboarding app available for 20k new customers daily.']}
            />
            <Divider mb={'lg'} />
            <Experience
              title="Software Engineer"
              date="Nov 2018 – Dec 2019"
              company="Nextel Brazil"
              activities={[
                'Integrated and maintained ANATEL (Equivalent to US FCC) Consumidor with Zendesk attending about 1k customers daily;',
                'Designed and developed an anti-fraud system using biometrics validation with 70% efficiency;',
                'Supported and guided 500+ automated process with more than $50 million estimated savings.',
              ]}
            />
            <Divider mb={'lg'} />
            <Experience
              title="Analyst developer"
              date="ago 2018 – Dec 2018"
              company="Tata Consultancy Services - Sao Paulo, Brazil"
              activities={[
                'Technical leadership of automation initiatives and the quality team;',
                'Test architecture development using TDD (Test Driven Development) and KDT (Keyword Driven Development) resulting in a decrease of approximately 90% in the incidence of bugs and 70% in maintenance costs;',
                'Automated data collection with real time results available in cloud.',
              ]}
            />
            <Divider mb={'lg'} />
            <Experience
              title="Software developer"
              date="Nov 2017 – Ago 2018"
              company="Indigosoft"
              activities={['Developed and maintained new features in retail ERP system for Leroy Merlin.']}
            />
            <Divider mb={'lg'} />
            <Experience
              title="Software Developer"
              date="Set 2013 – Apr 2016"
              company="GSF Service"
              activities={[
                'Digital inclusion project aimed at children, teenagers, elderly and people with special needs in public schools.',
              ]}
            />
            <Divider mb={'lg'} />
            <Experience
              title="Software Developer"
              date="Jun 2012 – Set 2013"
              company="Nortia It - Sao Paulo, Brazil"
              activities={[
                'Digital inclusion project aimed at students and teachers of state public schools, focusing on collaboration trough technology.',
              ]}
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
