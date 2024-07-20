import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

// imports here
const GameCardSkeleton = () => {
  // logic here
  return (
    <Card>
      <Skeleton height='200px' />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
