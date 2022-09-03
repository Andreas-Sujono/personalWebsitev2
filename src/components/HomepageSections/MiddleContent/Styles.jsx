import styled from 'styled-components';
import media from 'media';

export const Container = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('https://wallpaperaccess.com/full/824718.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100px;
  z-index: 2;
  position: relative;

  .text {
    padding: 20px;
    text-align: center;
    color: white;
    font-size: 30px;
    font-weight: 600;
    /* background-color: rgba(255, 240, 250, 0.1); */
    width: 100%;
    height: 100px;
    vertical-align: middle;
    padding-top: 20px;
  }

  ${media.lessThan('md')`
    height: 240px;
    padding-top: 60px;
    .text{font-size: 24px;}
  `}
`;
