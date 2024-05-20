import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BackgroundImage,
  Container,
  CoverImage,
  Description,
  Genre,
  Genres,
  MovieDetail,
  Title,
} from "../components/DeatilStyle";

/**
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie);
      setLoading(false);
    };
    getMovie();
  }, [id]);
  console.log(movie);
  return <div>{loading ? "Loading..." : <h1>{movie.title}</h1>}</div>;
}
 */
const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
      } catch (error) {
        console.log(`Error ${error}`);
        setLoading(false);
      }
    };
    getMovie();
  }, [id]);
  if (loading) {
    return <Container>Loading...</Container>;
  }
  return (
    <Container>
      <BackgroundImage bgImage={movie.background_iamge_original} />
      <MovieDetail>
        <CoverImage src={movie.large_cover_image} alt={movie.title} />
        <Title>{movie.title_long}</Title>
        <Description>{movie.description_full}</Description>
        <Genres>
          {movie.genres &&
            movie.genres.map((genre, index) => (
              <Genre key={index}>{genre}</Genre>
            ))}
        </Genres>
      </MovieDetail>
    </Container>
  );
};
export default Detail;
