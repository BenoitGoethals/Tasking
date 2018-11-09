import Vuex from "vuex";
import Vue from "vue";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedTasks: []
    },
    mutations: {
      setTasks(state, tasks) {
        state.loadedTasks = tasks;
      },

      addItem: (state, task) => {
        state.cartTotal++;
        state.loadedTasks.push(task);
      },

      deleteItem: (state, task) => {
        state.cartTotal--;
        alert(task)
        Vue.delete(task,state.loadedTasks)

      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setTasks",  [

              {
                id: 0,
                Status: 'Idle',
                Security: 'Private',
                Name: 'benoit',
                Description: 'rtrter',
                StartDate: null,
                EndDate: null
              },
              {
                id: 1,
                Status: 'Idle',
                Security: 'Private',
                Name: 'imse',
                Description: 'yuytuytutyu',
                StartDate: null,
                EndDate: null
              },
              {
                id: 2,
                Status: 'Idle',
                Security: 'Private',
                Name: 'Geert',
                Description: 'yuytuytutyu',
                StartDate: null,
                EndDate: null
              },
              {
                id: 3,
                Status: 'Idle',
                Security: 'Private',
                Name: 'qezez',
                Description: 'yuytuytutyu',
                StartDate: null,
                EndDate: null
              },
              {
                id: 4,
                Status: 'Idle',
                Security: 'Private',
                Name: 'qezez',
                Description: 'yuytuytutyu',
                StartDate: null,
                EndDate: null
              },
              {
                id: 5,
                Status: 'Idle',
                Security: 'Private',
                Name: 'qezez',
                Description: 'yuytuytutyu',
                StartDate: null,
                EndDate: null
              },
              {
                id: 6,
                Status: 'Idle',
                Security: 'Private',
                Name: 'qezez',
                Description: 'yuytuytutyu',
                StartDate: null,
                EndDate: null
              },
              {
                id: 7,
                Status: 'Idle',
                Security: 'Private',
                Name: 'qezez',
                Description: 'yuytuytutyu',
                StartDate: null,
                EndDate: null
              },
              {
                id: 8,
                Status: 'Idle',
                Security: 'Private',
                Name: 'qezez',
                Description: 'yuytuytutyu',
                StartDate: null,
                EndDate: null
              }
            ]);
            resolve();
          }, 1000);
        });
      },
      setTasks(vuexContext, tasks) {
        vuexContext.commit("setTasks", tasks);
      }
    },
    getters: {
      loadedTasks(state) {
        return state.loadedTasks;
      }
    }
  });
};

export default createStore;
