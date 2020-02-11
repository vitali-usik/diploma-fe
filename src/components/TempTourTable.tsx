import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import selectTour from '../actions';

const TempTourTable: FunctionComponent<any> = ({ tours = [], select }) => (
  <div className="ui divided list">
    {tours.map((item: any) => (
      <div className="item" key={item.id}>
        <div className="content">
          {item.id} {item.city}
        </div>
        <div className="right floated content">
          <button
            onClick={() => select(item)}
            className="ui button primary"
            type="button"
          >
            Select
          </button>
        </div>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state: any) => ({
  tours: state.tours,
});

export default connect(mapStateToProps, { select: selectTour })(TempTourTable);
