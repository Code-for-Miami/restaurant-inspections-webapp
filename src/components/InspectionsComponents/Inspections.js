import React from 'react';
import InspectionsAPI from '../../api/inspections';
import InspectionsTable from './InspectionsTable';

export default class Inspections extends React.Component {
    constructor(props, context){
        super(props, context);
        const now         = new Date();
        const oneMonthAgo = new Date((new Date()).setMonth(now.getMonth() - 1));

        this.state = { from        : oneMonthAgo.getTime(),
                       to          : now.getTime(),
                       inspections : [],
                       selected    : void 0 };
    }
    componentDidMount() {
        InspectionsAPI.getBetween(this.state.from, this.state.to)
            .then(inspections => this.setState({ inspections }));

    }
    render() {
        return (
            <InspectionsTable from={ this.state.from }
                              to={ this.state.to }
                              inspections={ this.state.inspections } />);
    }
}
