export interface YelpData {
  total: number;
  businesses: Business[];
}

export interface Business {
  rating: number;
  review_count: number;
  url: string;
  image_url: string;
  location: Location;
}

export interface Location {
  city: string;
  country: string;
  address1: string;
  address2: string;
  address3: string;
  state: string;
  zip_code: string;
}