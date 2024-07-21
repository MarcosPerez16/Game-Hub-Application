import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

// imports here

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // logic here

  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;
