import React from 'react';
import businessesRequest from '../../api/businesses';
import Select from '../Select/index.jsx';

export default class BusinessSelect extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { businesses: [] };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
   businessesRequest.get().then(businesses => this.setState({ businesses }));
  }

  handleChange(evt) {
  }

  render() {
    const optionsProps = ({ name, license }) => ({ value: license, key: license, text: name });
    return (<Select name="businesses"
                    label="Businesses"
                    options={ this.state.businesses.map(optionsProps) }
                    onChange={ this.handleChange } />);
  }
}
