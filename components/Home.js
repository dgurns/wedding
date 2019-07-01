import styled from 'styled-components';
import Collage from './Collage';

const HomeStyles = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 5rem 0;
`;

const Home = props => (
  <HomeStyles>
    <Collage />
  </HomeStyles>
);

export default Home;
