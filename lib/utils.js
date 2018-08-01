// Utilities
//
// Created by ywu on 15/7/18.
//

import {
  PixelRatio,
  TouchableWithoutFeedback,
  Platform,
  processColor,
  View,
  ViewPropTypes as RNViewPropTypes,
} from 'react-native';

// Add some is-Type methods:
// `isArguments`, `isFunction`, `isString`, `isNumber`, `isDate`, `isRegExp`, `isError`.
['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'].forEach((name) => {
  exports[`is${name}`] = (obj) => toString.call(obj) === `[object ${name}]`;
});

const ViewPropTypes = RNViewPropTypes || View.propTypes;

// ## Public interface
export {
  processColor as parseColor,  // parse stringified color as int
  ViewPropTypes,
};
