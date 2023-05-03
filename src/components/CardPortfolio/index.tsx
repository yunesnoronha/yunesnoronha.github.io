import { Card, Text, Image, CardProps } from '@mantine/core';
import { Link } from 'react-router-dom';

const CardPortfolio = ({ text, link, linkText, title, img, ...props }: CardPortfolioProps) => {
  return (
    <Card {...props}>
      <Card.Section>
        <Image radius={'xs'} src={process.env.PUBLIC_URL + img} height={260} alt={title} />
      </Card.Section>

      <Text weight={600} align={'center'} size="lg" mt="md">
        {title}
      </Text>

      <Text mt="xs" color="dimmed" size="sm">
        {text}
      </Text>
      <Link to={link}>{linkText}</Link>
    </Card>
  );
};

interface CardPortfolioProps extends CardProps {
  img: string;
  title: string;
  text: string;
  link: string;
  linkText: string;
}
export default CardPortfolio;
