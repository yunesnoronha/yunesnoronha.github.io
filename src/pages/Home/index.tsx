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
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
    name: 'Communication',
    level: 70,
  },
  {
    name: 'Leadership',
    level: 80,
  },
];
const education = [
  {
    name: 'home.resume.education.impacta.title',
    avatar: '/img/impacta.jfif',
    date: '2018 - 2019',
    company: 'home.resume.education.impacta.employee',
    description: 'home.resume.education.impacta.description',
  },
  {
    name: 'home.resume.education.fatec.title',
    avatar: '/img/fatec.jfif',
    date: '2014 - 2017',
    company: 'home.resume.education.fatec.employee',
    description: 'home.resume.education.fatec.description',
  },
  {
    name: 'home.resume.education.etec.title',
    avatar: '/img/etec.png',
    date: '2011 - 2012',
    company: 'home.resume.education.etec.employee',
    description: 'home.resume.education.etec.description',
  },
];
const experience = [
  {
    name: 'home.resume.experience.claro.title',
    avatar: '/img/claro.jfif',
    date: '2018 - actual',
    company: 'home.resume.experience.claro.employee',
    description: 'home.resume.experience.claro.description',
  },
  {
    name: 'home.resume.experience.tcs.title',
    avatar: '/img/tcs.jfif',
    date: '2018 - 2018',
    company: 'home.resume.experience.tcs.employee',
    description: 'home.resume.experience.tcs.description',
  },
  {
    name: 'home.resume.experience.indigo.title',
    avatar: '/img/indigo.jfif',
    date: '2017 - 2018',
    company: 'home.resume.experience.indigo.employee',
    description: 'home.resume.experience.indigo.description',
  },
  {
    name: 'home.resume.experience.gsf.title',
    avatar: '/img/gsf.jfif',
    date: '2013 - 2016',
    company: 'home.resume.experience.gsf.employee',
    description: 'home.resume.experience.gsf.description',
  },
];
const RenderEducation = ({ t }: { t: any }) => {
  return (
    <>
      {education.map((e) => (
        <Flex key={e.name} justify={'center'} gap={'md'}>
          <Avatar mt={'sm'} src={process.env.PUBLIC_URL + e.avatar} />
          <Stack>
            <Text fz="xl" fw={500}>
              {t(e.name)}
            </Text>
            <Text c="dimmed">{t(e.company)}</Text>
            <Text lineClamp={3}>{t(e.description)}</Text>
            <Divider />
          </Stack>
        </Flex>
      ))}
    </>
  );
};
const RenderXp = ({ t }: { t: any }) => {
  return (
    <>
      {experience.map((e) => (
        <Flex key={e.name} justify={'center'} gap={'md'}>
          <Avatar mt={'sm'} src={process.env.PUBLIC_URL + e.avatar} />
          <Stack key={e.name}>
            <Text fz="xl" fw={500}>
              {t(e.name)}
            </Text>
            <Text c="dimmed">{t(e.company)}</Text>
            <Text lineClamp={3}>{t(e.description)}</Text>
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
            <Text size={'md'}> {skill.level}%</Text>
          </Flex>
          <Progress mt={0} value={skill.level} color={'cyan'} />
        </Flex>
      ))}
    </>
  );
};

const RenderHome = ({ yearExperience, t }: { yearExperience: number; t: any }) => {
  return (
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
        <ActionIcon color={'cyan'} variant="subtle" size={48} component="a" href={'https://github.com/yunesnoronha'}>
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
      <Title order={1}>{t('home.content.titlePresentation')}</Title>
      <Text size={'lg'} color={'dimmed'}>
        {t('home.content.subTitlePresentation', { yearExperience })}
      </Text>
      <Group>
        <Button
          color={'cyan'}
          leftIcon={<IconDownload />}
          component="a"
          href={process.env.PUBLIC_URL + '/CV/CV.pdf'}
          download
        >
          {t('button.DownloadResume.title')}
        </Button>
        <Button color={'cyan'} leftIcon={<IconFileCertificate />} component={Link} to={'/CV'}>
          {t('button.ShowCv.title')}
        </Button>
      </Group>
    </Stack>
  );
};
const RenderAbout = ({ yearExperience, t }: { yearExperience: number; t: any }) => {
  return (
    <Container mb={'md'}>
      <Stack align={'center'} mt={'md'}>
        <Title order={1}> {t('home.about.titleAbout')}</Title>
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          <Text size="lg" ta="justify">
            {t('home.about.subTitleAbout')}
          </Text>
          <Stack align={'Center'} justify={'flex-start'}>
            <Avatar alt="10" color="cyan" size={100} radius="xl">
              {yearExperience}
            </Avatar>
            <Title order={3}>{t('home.about.avatarTitle')}</Title>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

const RenderSummary = ({ t }: { t: any }) => {
  return (
    <Container mb={'md'}>
      <Stack align={'center'} mt={'md'}>
        <Title order={1}>{t('home.resume.titleResume')}</Title>
      </Stack>
      <SimpleGrid cols={2} mt={'md'} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        <Flex gap={'md'}>
          <Divider size="xl" color={'cyan'} orientation="vertical" />
          <Stack align={'flex-start'}>
            <Title order={3}>{t('home.resume.education.title')}</Title>
            <RenderEducation t={t} />
          </Stack>
        </Flex>
        <Flex gap={'md'}>
          <Divider size="xl" color={'cyan'} orientation="vertical" />
          <Stack align={'flex-start'}>
            <Title order={3}>{t('home.resume.experience.title')}</Title>
            <RenderXp t={t} />
          </Stack>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};
const RenderPortfolio = ({ t }: { t: any }) => {
  return (
    <Container mb={'md'}>
      <Stack align={'center'} mt={'md'}>
        <Title order={1}>{t('home.portfolio.titlePortfolio')}</Title>
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
  );
};
export default function Home() {
  const yearExperience = new Date().getFullYear() - 2012;
  const isMobile: boolean = useMediaQuery('(max-width: 767px)');
  const { colorScheme } = useMantineColorScheme();
  const { t } = useTranslation();
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
        <RenderHome yearExperience={yearExperience} t={t} />
      </Container>
      <Flex bg={colorScheme === 'dark' ? 'dark' : '#ffff'}>
        <RenderAbout yearExperience={yearExperience} t={t} />
      </Flex>
      <Flex bg={colorScheme === 'dark' ? 'dark' : '#F8F9FA'} mb={'md'}>
        <RenderSummary t={t} />
      </Flex>
      <Flex bg={colorScheme === 'dark' ? 'dark' : '#ffff'} mb={'md'} p={'md'} wrap="wrap">
        <Container>
          <Title align="center" m={'md'} order={1}>
            {t('home.skill.titleSkill')}
          </Title>
          <Flex wrap={'wrap'} gap={'xl'} justify={'space-around'}>
            <RenderSkills isMobile={isMobile} skills={skills} />
          </Flex>
        </Container>
      </Flex>
      <Flex bg={colorScheme === 'dark' ? 'dark' : '#F8F9FA'} mb={'md'} p={'md'} wrap="wrap">
        <Container>
          <Title align="center" m={'md'} order={1}>
            {t('home.personal.titlePersonal')}
          </Title>
          <Flex wrap={'wrap'} gap={'xl'} justify={'space-around'}>
            <RenderSkills isMobile={isMobile} skills={personalSkills} />
          </Flex>
        </Container>
      </Flex>
      <Flex bg={colorScheme === 'dark' ? 'dark' : '#ffff '} gap="md">
        <RenderPortfolio t={t} />
      </Flex>
    </AppShell>
  );
}
