import environment from 'src/environment.js';


const { create } = require('axios');


export default create({
  baseURL: environment.gateway
});
