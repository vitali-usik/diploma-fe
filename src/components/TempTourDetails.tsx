import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

const TempTourDetails: FunctionComponent<any> = ({ tour }) => (
  <>
    {tour && (
      <div>
        <h3>Details for</h3>
        <p>Start date: {tour.date_start}</p>
        <p>Nights: {tour.nights_amount}</p>
        <p>City: {tour.city}</p>
        <p>Type: {tour.accommodation}</p>
      </div>
    )}
  </>
);

const mapStateToProps = (state: any) => ({
  tour: state.selectedTour,
});

export default connect(mapStateToProps)(TempTourDetails);
