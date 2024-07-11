import { IProps } from './types';
import { StarContainer, Star } from './styles';

export const SerasaRatingReview = ({ error, rating, setRating }: IProps) => {
  const setError = error ? 'error' : '';
  const setFillColor = (stars: number) => (rating >= stars ? 'gold' : 'white');

  return (
    <StarContainer>
      {[1, 2, 3, 4, 5].map((stars) => (
        <Star
          fillColor={setFillColor(stars)}
          className={setError}
          margin="0 5px"
          height="40px"
          width="40px"
          onClick={() => {
            setRating(stars);
          }}
        />
      ))}
    </StarContainer>
  );
};
