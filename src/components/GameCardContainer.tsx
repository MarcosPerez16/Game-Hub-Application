import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

// imports here
const GameCardContainer = ({ children }: Props) => {
  // logic here
  return (
    <Box width='300px' borderRadius={10} overflow={'hidden'}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
