import styled from 'styled-components';
import { tablet, mobile } from '../../utils/mediaQueries';
import theme from '../../utils/theme';

const CollageStyles = styled.div`
  position: relative;
  height: 447px;
  width: 360px;
  img {
    border: 16px solid ${theme.white};
    box-shadow: ${theme.boxShadow};
    ${mobile} {
      border: 10px solid ${theme.white};
    }
  }
  .image--center {
    animation-name: center-image;
    animation-duration: 0.5s;
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
    animation-name: outer-image;
    animation-duration: 1.5s;
    left: -200px;
    position: absolute;
    top: -40px;
    transform: rotate(-2deg);
    width: 350px;
    z-index: 3;
    ${mobile} {
      left: -115px;
      top: -29px;
      width: 185px;
    }
  }
  .image--left {
    animation-name: outer-image;
    animation-duration: 2s;
    left: -160px;
    position: absolute;
    top: 149px;
    width: 190px;
    z-index: 2;
    ${mobile} {
      left: -106px;
      top: 72px;
      width: 122px;
    }
  }
  .image--bottom-left {
    animation-name: outer-image;
    animation-duration: 1s;
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
    animation-name: outer-image;
    animation-duration: 1s;
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
    animation-name: outer-image;
    animation-duration: 3s;
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
    animation-name: outer-image;
    animation-duration: 1.5s;
    bottom: -58px;
    position: absolute;
    right: -183px;
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
  @keyframes center-image {
    from {
      opacity: 0;
      top: -10px;
    }
    to {
      opacity: 1;
      top: 0;
    }
  }
  @keyframes outer-image {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default CollageStyles;
