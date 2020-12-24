import React from 'react';
import Footer from '../component/Footer';
import {create} from 'react-test-renderer';


describe('SnapShot Footer TEst',() => {
    test('Testing Footer',() => {
        let tree = create(<Footer/>)
        expect(tree.toJSON()).toMatchSnapshot()
    });
});
