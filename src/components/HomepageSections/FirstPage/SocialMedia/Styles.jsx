import styled from 'styled-components';

export const SocialContainer = styled.div`
  display: flex;
  margin: 10px 0;

  > a {
    background-color: rgb(37, 41, 52);
    width: 40px;
    height: 38px;
    border-radius: 6px;
    cursor: pointer;
    display: block;
    z-index: 10;
    transition: all 0.6s;
    font-size: 30px;
    color: white;
    display: block;
    text-align: center;

    &:not(:first-child) {
      margin-left: 0.5em;
    }
  }
  > a:hover {
    background-color: rgb(5, 161, 167);
    text-decoration: none;
  }
`;
