/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// DONE - add other action types
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
export const ADD_REGION = createActionName('ADD_REGION');
export const REMOVE_REGION = createActionName('REMOVE_REGION');
export const CHECK_REGION = createActionName('CHECK_REGION');
export const UNCHECK_REGION = createActionName('UNCHECK_REGION');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// DONE - add other action creators
export const changeDuration = payload => ({payload, type: CHANGE_DURATION});
export const addTag = payload => ({payload, type: ADD_TAG});
export const removeTag = payload => ({payload, type: REMOVE_TAG});
export const addRegion = payload => ({payload, type: ADD_REGION});
export const removeRegion = payload => ({payload, type: REMOVE_REGION});
export const checkRegion = payload => ({payload, type: CHECK_REGION});
export const uncheckRegion = payload => ({payload, type: UNCHECK_REGION});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // DONE - handle other action types
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          [action.payload.type]:action.payload.value,
        },
      };
    case ADD_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        tags: statePart.tags.filter(tag => tag != action.payload),
      };
    case ADD_REGION:
      return {
        ...statePart,
        regions: [...statePart.regions, ...action.payload],
      };
    case REMOVE_REGION: {
      const pattern = new RegExp(action.payload, 'i');
      console.log(pattern);
      return {
        ...statePart,
        regions: statePart.regions.filter(reg => pattern.exec(reg)),
      };
    }
    case CHECK_REGION:
      return {
        ...statePart,
        checkedRegions: [...statePart.checkedRegions, action.payload],
      };
    case UNCHECK_REGION:
      return {
        ...statePart,
        checkedRegions: statePart.checkedRegions.filter(reg => reg != action.payload),
      };
    default:
      return statePart;
  }
}
