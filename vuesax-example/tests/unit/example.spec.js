import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloVuesax from '@/components/HelloVuesax.vue';

describe('HelloVuesax.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Aloha Aloha!';
    const wrapper = shallowMount(HelloVuesax, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
