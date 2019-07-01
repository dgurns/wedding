import styled from 'styled-components';
import { tablet, mobile } from '../../utils/mediaQueries';
import theme from '../../utils/theme';

const CollageStyles = styled.div`
  position: relative;
  height: 447px;
  width: 360px;
  img {
    border: 16px solid ${theme.white};
    box-shadow: 3px 18px 11px 0 rgba(0, 0, 0, 0.2);
    ${mobile} {
      border: 10px solid ${theme.white};
    }
  }
  .image--center {
    left: 0;
    position: absolute;
    top: 0;
    width: 360px;
    z-index: 4;
    ${mobile} {
      width: 200px;
    }
  }
  .image--top-left {
    left: -200px;
    position: absolute;
    top: -40px;
    transform: rotate(-2deg);
    width: 350px;
    z-index: 3;
    ${mobile} {
      left: -101px;
      top: -29px;
      width: 180px;
    }
  }
  .image--left {
    left: -160px;
    position: absolute;
    top: 141px;
    width: 190px;
    z-index: 2;
    ${mobile} {
      left: -98px;
      top: 64px;
      width: 119px;
    }
  }
  .image--bottom-left {
    left: -183px;
    position: absolute;
    bottom: -67px;
    transform: rotate(1deg);
    width: 225px;
    z-index: 5;
    ${mobile} {
      bottom: -29px;
      left: -96px;
      width: 119px;
    }
  }
  .image--top-right {
    right: -200px;
    position: absolute;
    top: -37px;
    transform: rotate(3deg);
    width: 270px;
    z-index: 5;
    ${mobile} {
      right: -131px;
      top: -29px;
      width: 178px;
    }
  }
  .image--right {
    right: -167px;
    position: absolute;
    top: 141px;
    width: 228px;
    z-index: 2;
    ${mobile} {
      right: -106px;
      top: 79px;
      width: 128px;
    }
  }
  .image--bottom-right {
    right: -183px;
    position: absolute;
    bottom: -58px;
    transform: rotate(-2deg);
    width: 282px;
    z-index: 3;
    ${mobile} {
      bottom: -24px;
      right: -88px;
      width: 123px;
    }
  }
  ${mobile} {
    height: 250px;
    width: 200px;
  }
`;

export default CollageStyles;
