import './index.css';

import numeral from "numeral";

const value = numeral(1000).format('$0,0.00');
// eslint-disable-next-line no-console
console.log(`I would pay ${value} for this course`)
