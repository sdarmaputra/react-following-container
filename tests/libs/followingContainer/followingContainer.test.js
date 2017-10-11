import { expect } from 'chai';
import { renderComponent } from './utils';
import basicTest from './basicTest';
import customConfigurationsTest from './customConfigurationsTest';

describe('followingContainer', function() {
	basicTest();
	customConfigurationsTest();	
});
