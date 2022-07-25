import styled from "styled-components";

import Flex from "components/Flex";

const Title = styled.div`
  font-size: ${(props) => props.theme.rem(30)};
`;

const Home = function () {
  return (
    <div>
      <Flex justifyContent="center">
        <Title>Home</Title>
      </Flex>
    </div>
  );
};

export default Home;
