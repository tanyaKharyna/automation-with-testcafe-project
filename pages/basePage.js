import {Selector} from 'testcafe';

const basePage = {
	constructor(context, baseClass) {
		this.contextSelector = context ? Selector(context) : Selector(baseClass);
	}

       
}
export default basePage
