import { Container, Group, Header, Title } from '@mantine/core';
import DarkThemeChange from '../DarkThemeChange';

const HeaderComponont = () => {
  const sx = {
    height: '100%',
  };
  return (
    <Header height={70} bg="#ffff">
      <Container sx={sx}>
        <Group position="apart" noWrap align={'center'} sx={sx}>
          <Title order={2}>Yunes Noronha</Title>
          <DarkThemeChange />
        </Group>
      </Container>
    </Header>
  );
};

export default HeaderComponont;
