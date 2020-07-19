/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // DONE - filter by duration
  const durationDays = parseInt(filters.duration.to)-parseInt(filters.duration.from);

  if(durationDays >= 0){
    output = output.filter(trip => trip.days >= parseInt(filters.duration.from) && trip.days <= parseInt(filters.duration.to));
  } else {
    output = [];
  }

  // DONE - filter by tags
  if(filters.tags) {
    const pattern = new RegExp(filters.tags, 'i');
    output = output.filter(trip => pattern.test(trip.tags));
  }

  // DONE - filter by regions
  if(filters.regions.length > 0) {
    const regionConc = filters.regions.join();
    output = output.filter(trip => regionConc.includes(trip.country.code));
  }

  // DONE - sort by cost descending (most expensive goes first)
  output = output.sort((a, b) => {
    const aCost = parseFloat(a.cost.replace('$','').replace(',',''));
    const bCost = parseFloat(b.cost.replace('$','').replace(',',''));

    return bCost - aCost;
  });

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => trip.id == tripId);

  // DONE - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => trip.country.code == countryCode);

  // DONE - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
