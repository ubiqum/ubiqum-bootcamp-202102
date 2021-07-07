import { setActivities } from "../actions/itineraryActions";

const initialState = {
  activities: [
    {
      _id: "5d03638f3033dd5020794e1b",
      city: "London",
      title: "Camden Pub Crawl",
      img: "https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1488291445/the-red-lion-best-london-pubs-FT-SS0217.jpg?itok%3DGDxR8p6d&imgrefurl=https://www.foodandwine.com/travel/bars/londons-best-pubs&docid=jI6FQ9Nb6UQy0M&tbnid=ZVJ9egiFU7lCFM:&vet=1&w=1125&h=844&source=sh/x/im",
      summary:
        "Camden Pub Crawl is the original alternative London Pub Crawl, taking you away from the tourist haunts and around some of the best bars, clubs and live music venues London has to offer. Great people, great music and outrageously good times await any Camden Crawler, with free shots, free entry, queue jump and loads of money saving drinks discounts on offer - it's not hard to see why this credible London Bar Crawl is so popular!",
      duration: "5 hours",
      price: "£14",
      rating: "4",
      __v: 0,
    },
  ],
};

export default function itineraryReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ACTIVITIES": {
      return {
        ...state,
        activities: action.payload,
      };
    }
    default:
      return state;
  }
}

export const loadActivities = (city) => async (dispatch, getState) => {
  const res = await fetch(`http://localhost:5000/itineraries/${city}`);
  const data = await res.json();
  dispatch(setActivities(data));
};
