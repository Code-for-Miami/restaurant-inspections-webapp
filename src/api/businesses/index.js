import request from '../request';
import { map } from '../../utils';

// Endpoint for all businesses
const endpoint        = 'businesses';

// Object a ~> (a) => a
const mapBusinessData = business => ({ countyId      : business.county_number,
                                       address       : business.location_address,
                                       licenseType   : business.license_type_code,
                                       name          : business.business_name,
                                       license       : business.license_number,
                                       zipCode       : business.location_zipcode,
                                       location      : { latitude  : business.location_latitude,
                                                         longitude : business.location_longitude } });

// Array a ~> (a) => a
const mapBusinesses   = map(mapBusinessData);

export default {
  get() {
    return request.get(`${endpoint}`)
      .then(mapBusinesses);
  }
};
