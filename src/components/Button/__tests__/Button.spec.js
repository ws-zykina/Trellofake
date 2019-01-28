import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../';
describe('Button component', () => { 

    it('Should be styled correctly', () => {
        const component = shallow(<Button onClick={()=>{}}>123</Button>);
        expect(component).toMatchSnapshot();
    });

    it('Should be named correctly', () => {
        const component = shallow(<Button onClick={()=>{}}>123</Button>);
        expect(component.text()).toEqual('123')
    });

    it('Should have onclick', () => {
        const mockCallBack = jest.fn();

        const component = shallow(<Button onClick={mockCallBack}>123</Button>);
        component.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('Should have default title', () => {
        const component = shallow(<Button onClick={()=>{}} />);
        console.log(component.debug())
        expect(component.text()).toEqual('Button')
    });

})