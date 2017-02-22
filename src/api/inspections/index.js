import request from '../request';
import {
  map,
  serializeQS,
  formatDate
} from '../../utils';

// Endpoint for all businesses
const endpoint = 'inspections';

// Object a ~> (a) => a
const mapInspectionsData = inspection => ({ ...inspection });

// Array a ~> (a) => a
const mapInspections = map(mapInspectionsData);


export default {
  get() {
    return request.get(`${endpoint}`)
      .then(mapInspections);
  },
  getBetween(oldest = Date.now(), newest = Date.now()) {
    const startDate = formatDate(oldest);
    const endDate = formatDate(newest);
    const qs = serializeQS({ startDate, endDate });

    return request.get(`${endpoint}${qs}`)
      .then(mapInspections);
  }
};
