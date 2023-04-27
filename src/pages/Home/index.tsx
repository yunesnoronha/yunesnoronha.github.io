import {
  AppShell,
  Container,
  Title,
  Image,
  Avatar,
  Center,
  Stack,
  Text,
  ActionIcon,
  Group,
  Flex,
  Card,
  SimpleGrid,
} from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp, IconMailForward } from '@tabler/icons-react';
import HeaderComponont from '../../components/Header';

export default function Home() {
  return (
    <AppShell
      header={<HeaderComponont />}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          paddingLeft: 0,
          paddingRight: 0,
        },
      })}
    >
      <Container bg={'#F8F9FA'} mb={'md'}>
        <Stack align={'center'} mt={'md'}>
          <Image
            width={256}
            radius={256}
            sx={{ border: '3px solid #E9ECEF', borderRadius: 256 }}
            src={process.env.PUBLIC_URL + 'img/yunes-cover.jpeg'}
            alt="Yunes Noronha"
          />
          <Group>
            <ActionIcon variant="subtle" size={48}>
              <IconBrandLinkedin stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="subtle" size={48}>
              <IconMailForward stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="subtle" size={48}>
              <IconBrandGithub stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="subtle" size={48}>
              <IconBrandWhatsapp stroke={1.5} />
            </ActionIcon>
          </Group>
          <Title order={1}>Hey, I´m Yunes Noronha</Title>
          <Text size={'lg'} color={'dimmed'}>
            I´m Developer, tech lover and trying to be fitness
          </Text>
        </Stack>
      </Container>
      <Flex bg={'#ffff'}>
        <Container mb={'md'}>
          <Stack align={'center'} mt={'md'}>
            <Title order={1}>A summary of My Resume</Title>
          </Stack>
        </Container>
      </Flex>
      <Flex bg={'#F8F9FA'}>
        <Container mb={'md'}>
          <Stack align={'center'} mt={'md'}>
            <Title order={1}>Know Me More</Title>
          </Stack>
        </Container>
      </Flex>
      <Flex bg={'#ffff'}>
        <Container mb={'md'}>
          <Stack align={'center'} mt={'md'}>
            <Title order={1}>My Skills</Title>
          </Stack>
        </Container>
      </Flex>
      <Flex bg={'#F8F9FA'} gap="md">
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
