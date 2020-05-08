import styled from 'styled-components';

export const PagePolaroid = styled.div`
  margin: 0 auto 25px auto ;
  width: 60%;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(#000, .2), 0 6px 20px 0 rgba(#000, .19);
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const PolaroidVideo = styled.video`
  width: 100%;
  min-height: 500px;
  border: none;
  @media (max-width: 700px) {
    min-height: 400px;
  }
  @media (max-width: 400px) {
    min-height: 300px;
  }
`;

export const PolaroidImg = styled.img`
  width: 100%;
  min-height: 500px;
  border: none;
  @media (max-width: 700px) {
    min-height: 400px;
  }
  @media (max-width: 400px) {
    min-height: 300px;
  }
`;

export const PolaroidTextContainer = styled.div`
  text-align: center;
  padding: 10px 20px;
`;
