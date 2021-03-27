
import { useState } from 'react';
import YelpReview from './yelpReview';
import axios, { AxiosResponse } from 'axios';
import { Business, YelpData } from './yelpData';

const Dashboard = () => {

  const [searchText, setSearchText] = useState("");
  const [yelpReviews, setYelpReviews] = useState(new Array<Business>());


  const sumbitHandler = (event: any) => {
    console.log(searchText);
    sendRequest();
    event.preventDefault();
  }

  const sendRequest = () => {
    let params = { location: searchText };
    return axios.get('/lowestratedparkinglots', { params }).then((data: AxiosResponse<YelpData>) => {
      setYelpReviews(data.data.businesses);
    });
  }

  const handleChange = (event: any) => {
    setSearchText(event.target.value);
  }

  return (
    <div>
      Search Yelp Reviews By Location
      <br/>
      <form onSubmit={sumbitHandler}>
        <input type="text" value={searchText} onChange={handleChange} />
        <button type="submit" onClick={sumbitHandler}>Search</button>
      </form>
      <div>
        {yelpReviews && yelpReviews.length > 0 && yelpReviews.map((yr, i) => (
          <div>
            <YelpReview business={yr} key={`YelpReivew${i}`} />
            <br />
          </div>
        ))}
      </div>
    </div >
  );
}

export default Dashboard;

