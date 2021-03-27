import { Business } from './yelpData';

interface YelpReviewProps {
  business: Business;
}

const YelpReview = (props: YelpReviewProps) => {

  let score = (props.business.review_count * props.business.rating) / (props.business.review_count + 1)

  return (
    <div>
      <div>Star Rating: {props.business.rating}</div>
      <div>Review Count: {props.business.review_count}</div>
      <div>Address: {props.business.location.address1}</div>
      <div><a href={props.business.url}>Yelp Link</a></div>
      <div>{props.business.image_url && <img src={props.business.image_url} />}</div>
      <div>Score: {score}</div>
    </div>
  );
}

export default YelpReview;
