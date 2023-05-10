import { Box, Button, Container, Divider, Flex, Group, List, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconDeviceMobile, IconMail, IconMapPin, IconWorld } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import HeaderNav from '../../components/Header';

const textIcon = { display: 'flex', alignItems: 'center', gap: 4 };
const iconSize = 14;

const Contact = () => {
  const theme = useMantineTheme();
  const color = theme.colors.cyan[6];
  const { t } = useTranslation();
  const contacts = [
    {
      icon: <IconMapPin size={iconSize} style={{ color }} />,
      text: t('phisicalResume.contact.city'),
    },
    {
      icon: <IconDeviceMobile size={iconSize} style={{ color }} />,
      text: t('phisicalResume.contact.phone'),
    },
    {
      icon: <IconMail size={iconSize} style={{ color }} />,
      text: t('phisicalResume.contact.email'),
    },
    {
      icon: <IconWorld size={iconSize} style={{ color }} />,
      text: t('phisicalResume.contact.site'),
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
  t: any;
};

const Experience = ({ title, date, company, activities, technologies, t }: ExperienceProps) => {
  return (
    <Box mb="sm" p={'xs'}>
      <Title order={5}>{title}</Title>
      <Text mb={4} color={'cyan'} weight={500}>
        {company}
      </Text>
      <Text mb={4} color={'black'} weight={500}>
        {t('phisicalResume.technologiesTitle')}
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
  const { t } = useTranslation();
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
              {t('phisicalResume.titleResume')}
            </Title>
            <Title order={4} weight={400} sx={{ letterSpacing: 2 }} mb="xl">
              {t('phisicalResume.description')}
            </Title>

            <TitleSection>{t('phisicalResume.titleExperience')}</TitleSection>

            <Experience
              title={t('phisicalResume.experience.claro.title')}
              date=""
              company={t('phisicalResume.experience.claro.employee')}
              activities={t('phisicalResume.experience.claro.description', { returnObjects: true })}
              technologies={['React', 'Next.js', 'Typescript', 'Node.js', 'PostgreSQL', 'AWS']}
              t={t}
            />
            <Divider mb={'md'} />
            <Experience
              title={t('phisicalResume.experience.nextel.title')}
              date=""
              company={t('phisicalResume.experience.nextel.employee')}
              activities={t('phisicalResume.experience.nextel.description', { returnObjects: true })}
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
              t={t}
            />
            <Divider mb={'md'} />
            <Experience
              title={t('phisicalResume.experience.tcs.title')}
              date=""
              company={t('phisicalResume.experience.tcs.employee')}
              activities={t('phisicalResume.experience.tcs.description', { returnObjects: true })}
              technologies={['C#', 'Asp.Net', 'MSQL', 'Oracle', 'IIS', 'MVC', 'ETL Process', 'RPA']}
              t={t}
            />
            <Divider mb={'md'} />
            <Experience
              title={t('phisicalResume.experience.indigo.title')}
              date=""
              company={t('phisicalResume.experience.indigo.employee')}
              activities={t('phisicalResume.experience.indigo.description', { returnObjects: true })}
              technologies={['C#', 'Asp.Net', 'MSQL', 'Oracle', 'IIS', 'MVC', 'RPA']}
              t={t}
            />
            <Divider mb={'md'} />
            <Experience
              title={t('phisicalResume.experience.gsf.title')}
              date=""
              company={t('phisicalResume.experience.gsf.employee')}
              activities={t('phisicalResume.experience.gsf.description', { returnObjects: true })}
              technologies={['C#', 'Asp.Net', 'MSQL', 'Oracle', 'IIS']}
              t={t}
            />
            <Divider mb={'md'} />
            <Experience
              title={t('phisicalResume.experience.nortia.title')}
              date=""
              company={t('phisicalResume.experience.nortia.employee')}
              activities={t('phisicalResume.experience.nortia.description', { returnObjects: true })}
              technologies={['C#', 'Asp.Net', 'MSQL', 'Oracle', 'IIS']}
              t={t}
            />
            <Divider mb={'md'} />
          </Flex>
          <Divider orientation="vertical" size="xs" ml={'xl'} />
          <Flex direction="column" w={isMobile ? '50%' : '30%'} pl="lg">
            <Contact />

            <TitleSection>{t('phisicalResume.skillTitle')}</TitleSection>

            <Skills title="Front-end" skills={['React', 'Next.js', 'TypeScript', 'JavaScript']} />

            <Skills title="Back-end" skills={['Node.js', 'Express', 'NestJS', 'Python', 'Flask', 'Django']} />

            <Skills
              title="Database"
              skills={['SQL', 'NoSQL', 'MySQL', 'PostgreeSQL', 'Oracle', 'MS SQL', 'MongoDB', 'Firestore']}
            />

            <Skills title="Cloud" skills={['GCP', 'AWS']} />

            <TitleSection>{t('phisicalResume.languageTitle')}</TitleSection>

            <Group position="apart">
              <Text>{t('phisicalResume.languages.englishTitle')}</Text>
              <Text color="cyan">{t('phisicalResume.languages.englishLevel')}</Text>
            </Group>
            <Group position="apart">
              <Text>{t('phisicalResume.languages.portugueseTitle')}</Text>
              <Text color="cyan">{t('phisicalResume.languages.portugueseLevel')}</Text>
            </Group>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default CV;
