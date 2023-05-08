import { Box, Center, Group, SegmentedControl, Image } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ChangeLanguageButton() {
  const { i18n } = useTranslation();
  const [changeLanguage, setChangeLanguage] = useState<string>('pt');

  useEffect(() => {
    i18n.changeLanguage(changeLanguage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeLanguage]);

  return (
    <Group position="center" my="xl">
      <SegmentedControl
        value={changeLanguage}
        onChange={(value) => setChangeLanguage(value)}
        data={[
          {
            value: 'pt',
            label: (
              <Center>
                <Image height={'1rem'} width={'1rem'} src={process.env.PUBLIC_URL + '/icon/br.png'} alt="Português" />

                <Box ml={10}>Port</Box>
              </Center>
            ),
          },
          {
            value: 'us',
            label: (
              <Center>
                <Image height={'1rem'} width={'1rem'} src={process.env.PUBLIC_URL + '/icon/us.png'} alt="Português" />
                <Box ml={10}>Eng</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}
