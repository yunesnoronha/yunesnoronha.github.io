import { Container, Group, Header, Title, useMantineColorScheme } from '@mantine/core';
import ChangeLanguageButton from '../ChangeLanguageButton';
import DarkThemeChange from '../DarkThemeChange';

const noPrint = {
  '@media print': {
    margin: 0,

    display: 'none',
  },
};
const HeaderNav = () => {
  const { colorScheme } = useMantineColorScheme();
  const sx = {
    height: '100%',
  };
  return (
    <Header height={70} bg={colorScheme === 'dark' ? 'dark' : '#ffff'} sx={noPrint}>
      <Container sx={sx}>
        <Group position="apart" noWrap align={'center'} sx={sx}>
          <Title order={2}>Yunes Noronha</Title>
          <DarkThemeChange />
          <ChangeLanguageButton />
        </Group>
      </Container>
    </Header>
  );
};

export default HeaderNav;
