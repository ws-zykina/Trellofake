import React from 'react';
import { shallow, mount } from 'enzyme';
import LoginForm from '..';

describe('LoginForm component', () => {

    it('Should be submit event when click submit', () => {
        const mockCallBack = jest.fn();
        
        const wrapper = mount(
            <LoginForm onSubmit={mockCallBack}/>
        );
        
        wrapper.setState({ email: 'bar', password: '123' });
        wrapper.find('[type="submit"]').simulate('click');

        expect(mockCallBack).toHaveBeenCalledWith({ email: 'bar', password: '123' });
    });

    it('Should be submit event when click submit', () => {

        
        const wrapper = mount(
            <LoginForm/>
        );
        const instance = wrapper.instance()

        const spy = jest.spyOn(instance, "handleGoToSU");

        wrapper.instance().forceUpdate();
        wrapper.find('button').at(1).simulate('click');

        expect(spy).toHaveBeenCalled()
    });
});