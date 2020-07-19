import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDuration, addTag, removeTag, addRegion, removeRegion, checkRegion, uncheckRegion} from '../../../redux/filtersRedux';
import { getAllRegions } from '../../../redux/regionsRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
  regions: getAllRegions(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDuration: (type, value) => dispatch(changeDuration({type, value})),
  addTag: tag => dispatch(addTag(tag)),
  removeTag: tag => dispatch(removeTag(tag)),
  addRegion: reg => dispatch(addRegion(reg)),
  removeRegion: reg => dispatch(removeRegion(reg)),
  checkRegion: reg => dispatch(checkRegion(reg)),
  uncheckRegion: reg => dispatch(uncheckRegion(reg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
