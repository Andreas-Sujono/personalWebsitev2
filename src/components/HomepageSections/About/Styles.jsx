import styled from 'styled-components';
import media from 'media';

export const Container = styled.div`
  min-height: 600px;
  padding: 50px 0 100px 0;
  width: 80%;
  max-width: 1280px;
  margin: auto;

  > h2 {
    margin-top: 30px;
    text-align: center;
    font-size: 42px;
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  > hr {
    width: 200px;
    border: 2px double grey;
    margin-bottom: 80px;
  }

  ${media.lessThan('md')`
    >h2{
      font-size: 32px;
    }
    > hr{
      margin-bottom: 40px;
    }
  `}
`;

export const Row = styled.div`
  margin: 0;
  padding: 0;
  .left-content {
    text-align: center;
    margin: auto;
    img {
      width: 250px;
    }
    h4 {
      margin-top: 10px;
      color: black;
    }
    .about-me-content {
      color: grey;
      padding-bottom: 40px;
    }
  }

  .right-content {
    display: inline;
    margin-left: auto;
    margin-right: auto;
    > h4 {
      font-size: 28px;
      text-align: left;
      margin-bottom: 20px;
    }
  }

  ${media.lessThan('md')`
    .left-content {
      img {
        width: 220px;
      }
      h4 {
        margin-top: 24px;
      }
    }
    .right-content {
      width: 100%;
      min-width: 320px;
      margin: 0;
      padding: 0;
      position: relative;
      left: -10px;
    }
  `}
`;

export const SkillBar = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 20px;
  height: 24px;

  .skill-title {
    float: left;
    width: 20%;
    max-width: 120px;
    height: 100%;
    background-color: rgba(65, 199, 204, 0.8);
    color: white;
    text-align: center;
  }
  .progress {
    width: 60%;
    float: left;
    background-color: lightgrey;
    height: 100%;
    padding: 0;
    border-radius: 0;
    .progress-bar {
      background-color: rgba(5, 161, 167, 1);
      transition: all 1s;
    }
  }
  .skill-proficiency {
    width: 20%;
    background-color: grey;
    text-align: center;
    color: white;
    font-size: 16px;
    padding: 1px;
    height: 100%;
  }

  ${media.lessThan('md')`
    .skill-title {
      width: 70px;
      font-size: 12px;
      padding: 3px;
    }
    .skill-proficiency {
      font-size: 12px;
      padding: 3px;
    }    
  `}
`;

export const SkillImagesContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  img {
    display: block;
    margin: auto;
    max-width: 200px;
    margin-top: 30px;
  }

  .skill-image-individual {
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1, 1.1);
    }
  }

  .skill-image-individual > div,
  h4 {
    text-align: center;
    color: grey;
    margin-top: 10px;
  }
  .skill-image-individual > div {
    width: 250px;
    margin: auto;
  }
  h4 {
    font-weight: bold;
  }

  ${media.lessThan('md')`
    margin-top: 24px;
    h4{font-size: 20px;}
    img {
      max-width: 140px;
      margin-top: 30px;
    }
  `}
`;
