import React from 'react';
import { connect } from 'react-redux';
import NumberOfDots from './NumberOfDots';

const NumberOfDotsContainer = props => <NumberOfDots {...props} />;

const mapStateToProps = ({ numberOfDots }) => ({
  numberOfDots
});

export default connect(mapStateToProps)(NumberOfDotsContainer);
