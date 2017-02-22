import axios from 'axios';

// Host for restaurant-inspections-api
const host                  = 'http://45.55.191.140/';

// Function a, String b, Object c ~> (a) => (b) => c
const createRequestInstance = creator => config  => creator.apply(null, [config]);

// Object a ~> (a) => a
const getResponseData       = response => response.data.data;

// Object a, Promise b ~> (a) => b
const handleResponseError   = error    => Promise.reject(error);

// Axios instance for the restaurant-inspections-api
// See that Axios Instance function gets injected to decouple logic
// though it still asumes some basic config and behavior for the request engine object
// For example:
//  - it asumes it is a Pure Function or Static Method that doesn't depend
//    on any previous state
//  - it asumes a certaing structure to configure the request
const instance              = createRequestInstance(axios.create)({ baseURL: host });

// Removes the wrapper around the actual data
// It would be handy to allow plug this in or not
instance.interceptors.response.use(getResponseData, handleResponseError);

export default instance;

