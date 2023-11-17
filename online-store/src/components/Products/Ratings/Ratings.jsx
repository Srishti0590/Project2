import FullStar from "../../Icons/FullStar";
import HalfStar from "../../Icons/HalfStar";

const Ratings = (props) => {
  const { rate, count } = props.rating;

  const roundedRating = Math.round(rate * 2) / 2;

  let incrementalValue = 0;
  const ratings = [];

  for (let i = 1; i <= roundedRating; ++i) {
    incrementalValue++;

    ratings.push(<FullStar key={i} className="star" />);
  }

  if (incrementalValue < roundedRating)
    ratings.push(<HalfStar key={roundedRating} className="star" />);

  return (
    <li className="d-flex align-items-center gap-2 fw-bold">
      {ratings.map((rating) => rating)}
      <span>({count})</span>
    </li>
  );
};

export default Ratings;
