import React from 'react';
import PropTypes from 'prop-types';
import styles from './TripListOptions.scss';

import {Row, Col} from 'react-flexbox-grid';

class TripListOptions extends React.Component {
  handleTags(tag, checked){
    if(checked) {
      console.log('Adding tag', tag);
      // TODO - use action dispatcher from props
      this.props.addTag(tag);
    } else {
      console.log('Removing tag', tag);
      // TODO - use action dispatcher from props
      this.props.removeTag(tag);
    }
  }

  handleDuration(type, value){
    console.log('Changing duration', type, value);
    // TODO - use action dispatcher from props
    this.props.changeDuration(type, value);
  }

  handleSearch(phrase){
    this.props.changeSearchPhrase(phrase);
  }

  handleRegions(reg, checked, checkedRegion){
    if(checked) {
      console.log('Adding region', reg);
      this.props.addRegion(reg);
      this.props.checkRegion(checkedRegion);
    } else {
      console.log('Removing region', reg);
      this.props.removeRegion(reg);
      this.props.uncheckRegion(checkedRegion);
    }
  }

  render(){
    const {tags, filters, regions} = this.props;
    return (
      <div className={styles.component}>
        <Row around="lg">
          <Col lg={3}>
            <div className={styles.filter}>
              <label>
                <input className={`${styles.input} ${styles.search}`} type='text' placeholder='Search...' value={filters.phrase} onChange={event => this.handleSearch(event.currentTarget.value)} />
              </label>
            </div>
          </Col>
          <Col lg={3}>
            <div className={styles.filter}>
              <label>
                Duration from:
                <input className={`${styles.input} ${styles.number}`} type='number' value={filters.duration.from} min='1' max='14' onChange={event => this.handleDuration('from', event.currentTarget.value)} />
              </label>
              <label>
                to:
                <input className={`${styles.input} ${styles.number}`} type='number' value={filters.duration.to} min='1' max='14' onChange={event => this.handleDuration('to', event.currentTarget.value)} />
              </label>
            </div>
          </Col>
          <Col lg={3}>
            <div className={styles.filter}>
              <details>
                <summary className={styles.toggle}>Filter by tags</summary>
                <div className={styles.dropdown}>
                  {Object.keys(tags).map(tag => (
                    <label key={tag} className={styles.option}>
                      <input type='checkbox' checked={filters.tags.indexOf(tag) > -1} onChange={event => this.handleTags(tag, event.currentTarget.checked)} />
                      {tag}
                    </label>
                  ))}
                </div>
              </details>
            </div>
          </Col>
          <Col lg={3}>
            <div className={styles.filter}>
              <details>
                <summary className={styles.toggle}>Filter by regions</summary>
                <div className={styles.dropdown}>
                  {Object.keys(regions).map(reg => (
                    <label key={reg} className={styles.option}>
                      <input type='checkbox' checked={filters.checkedRegions.indexOf(reg) > -1} onChange={event => this.handleRegions(regions[reg].countries, event.currentTarget.checked, reg)}/>
                      {reg}
                    </label>
                  ))}
                </div>
              </details>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

TripListOptions.propTypes = {
  tags: PropTypes.object,
  filters: PropTypes.object,
  changeSearchPhrase: PropTypes.func,
  changeDuration: PropTypes.func,
  addTag: PropTypes.func,
  removeTag: PropTypes.func,
  regions: PropTypes.object,
  addRegion: PropTypes.func,
  removeRegion: PropTypes.func,
  checkRegion: PropTypes.func,
  uncheckRegion: PropTypes.func,
};

export default TripListOptions;
