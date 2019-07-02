import styled from 'styled-components';
import { mobile } from '../../utils/mediaQueries';
import theme from '../../utils/theme';

const ScheduleSection = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 5rem;
  img {
    margin-right: 2.5rem;
    width: 200px;
  }
  a {
    color: ${theme.lightSage};
    text-decoration: underline;
  }
  .content {
    flex: 1;
    flex-direction: column;
  }
  .time {
    font-weight: bold;
  }
  .address {
    font-style: italic;
    padding-top: 2rem;
  }
  ${mobile} {
    flex-direction: column;
    margin-bottom: 7rem;
    img {
      margin-bottom: 2rem;
    }
  }
`;

export default ScheduleSection;
