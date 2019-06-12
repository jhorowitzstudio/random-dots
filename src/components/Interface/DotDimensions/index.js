import React from 'react';
import { connect } from 'react-redux';
import DotSelectorAndForm from './DotSelectorAndForms';

const DotDimensions = props => <DotSelectorAndForm {...props} />;

const mapStateToProps = ({ dotRadiusMin, dotRadiusMax }) => ({
  dotRadiusMin,
  dotRadiusMax
});

export default connect(mapStateToProps)(DotDimensions);
