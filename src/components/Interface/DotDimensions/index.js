import React from 'react';
import { connect } from 'react-redux';
import DotSelectorAndForm from './DotSelectorAndForm';

const DotDimensions = props => <DotSelectorAndForm {...props} />;

const mapStateToProps = ({
  dotHeight,
  dotWidth,
  dotMortar,
  dotDimensionsPopup
}) => ({
  dotHeight,
  dotWidth,
  dotMortar,
  dotDimensionsPopup
});

export default connect(mapStateToProps)(DotDimensions);
