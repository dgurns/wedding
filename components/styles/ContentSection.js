import styled from 'styled-components';
import { tablet, mobile } from '../../utils/mediaQueries';
import theme from '../../utils/theme';

const ContentSection = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  img {
    margin-bottom: 5rem;
    margin-right: 2.5rem;
    width: 200px;
  }
  img:last-child {
    margin-left: 2rem;
  }
  .content {
    flex: 1;
    flex-direction: column;
    margin-bottom: 5rem;
  }
  .subtitle {
    font-weight: bold;
  }
  .address {
    font-style: italic;
    padding-top: 2rem;
  }
  ${tablet} {
    img:last-child {
      display: none;
    }
  }
  ${mobile} {
    flex-direction: column;
    margin-bottom: 5rem;
    img {
      margin-bottom: 2rem;
    }
    img:last-child {
      display: block;
    }
    .content {
      margin-bottom: 2rem;
    }
  }
`;

export default ContentSection;
