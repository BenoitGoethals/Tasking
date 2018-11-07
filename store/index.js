import Vuex from "vuex";

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
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setTasks",  [

              {
                id: 0,
                status: 'Idle',
                Security: 'Private',
                Name: 'sdsdsqdsqd',
                Description: 'rtrter',
                StartDate: null,
                EndDate: null
              },
              {
                id: 2,
                status: 'Idle',
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
