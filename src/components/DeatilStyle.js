import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f5f5f5;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 20px 0;
`;

export const CoverImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin: 20px 0;
  text-align: center;
  max-width: 600px;
`;

export const Genres = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Genre = styled.span`
  background: #ddd;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px;
`;

export const MovieDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
