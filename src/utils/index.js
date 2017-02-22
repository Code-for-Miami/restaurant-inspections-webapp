export const isArray     = (target) => typeof target === 'object' && target.length >= 0;
export const isObject    = (target) => typeof target === 'object' && !isArray(target);
export const compose     = (...fns) => (arg) => fns.reduceRight((composed, fn)=> fn(composed),arg);
export const map         = (fn) => (target) => isArray(target) ? target.map(fn) :
                                           isObject(target) ? Object.keys(target).map((key) => fn(key, target[key])) :
                                           [].map(fn);
export const thread      = (value, ...fns) => compose.apply(null, fns.reverse())(value);

// String a ~> (a, b) => a
const jointParam         = (key, value) => [ encodeURIComponent(key), encodeURIComponent(value) ].join('=');

// Array a, String b ~> (a) => b
const jointQS            = kv       => kv.join('&');

// Object a, String b ~> (a) => b
export const serializeQS = (obj) => '?'.concat(thread(obj, map(jointParam), jointQS));

// Number a, String b ~> (a) => b
export const formatDate  = date => (new Date(date)).toISOString().split('T')[0];

export default {
    compose,
    map,
    thread,
    serializeQS,
    formatDate
};
