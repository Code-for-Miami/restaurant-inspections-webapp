import React from 'react';

const InspectionRow = ({ inspection }) => (<tr>
                        <td>{ inspection.businessName }</td>
                        <td>{ inspection.inspectionType}</td>
                        <td>{ inspection.inspectionDate }</td>
                        <td>{ inspection.totalViolations }</td>
                    </tr>);

InspectionRow.propTypes = {
  inspection: React.PropTypes.object.isRequired
};

const InspectionsTable = ({ from, to, inspections }) => (
    <div>
        <h1>Inspections</h1>
        <h2>From: from, to: from</h2>
        <table>
            <thead>
                <tr>
                    <th>Business</th>
                    <th>Inspection Type</th>
                    <th>Inspection Date</th>
                    <th>Total Violations</th>
                </tr>
            </thead>
            <tbody>{ inspections.map(inspection => (<InspectionRow key={ inspection.id } inspection={ inspection } />)) }</tbody>
        </table>
    </div>
);

InspectionsTable.propTypes = {
  from: React.PropTypes.number.isRequired,
  to: React.PropTypes.number.isRequired,
  inspections: React.PropTypes.array.isRequired
};

export default InspectionsTable;
