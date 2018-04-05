// eslint-disable-next-line import/no-extraneous-dependencies
import Enzyme from 'enzyme';
// eslint-disable-next-line import/no-extraneous-dependencies
import Adapter from 'enzyme-adapter-react-16';
// eslint-disable-next-line import/no-extraneous-dependencies
import ShallowWrapper from 'enzyme/ShallowWrapper.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import until from 'enzyme-shallow-until';


Enzyme.configure({ adapter: new Adapter() });
ShallowWrapper.prototype.until = until;
