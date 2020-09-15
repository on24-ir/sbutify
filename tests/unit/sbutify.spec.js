import Vue from "vue"
import { mount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import App from '@/App'
import Vuetify from 'vuetify';
import VueRouter from 'vue-router'
// import flushPromises from "flush-promises";

const localVue = createLocalVue()

localVue.use(Vuex)


Vue.use(Vuetify);
localVue.use(VueRouter);

const store = new Vuex.Store({
  state: {
    error: true,
    errorMessage: 'error occured',
  },
  getters:{

  }
})
const router = new VueRouter()

/*const $router ={
  redirect : jest.fn()
}*/

describe('App', () => {
  let vuetify
  beforeEach(() => {

  })
  vuetify = new Vuetify()
  let wrapper=mount(App, {
    localVue,
    vuetify,
    store,
    router
  })

  it('should syncing errorMessage and element ', () => {
    let elm=wrapper.find('#topMsgPar');
    expect(elm.text()).toBe("error occured")
  })

  /*let elm=wrapper.find('.welcome');
  console.log(elm);
  it("should redirect called after login",async ()=>{
    elm.trigger('click');
    await flushPromises();
    expect($router.redirect).lastCalledWith('profile')
  })*/
})
