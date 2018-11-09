import Vuex from "vuex";
import Vue from "vue";
function arrayRemove(arr, value) {

  return arr.filter(function(ele){
    return ele != value;
  });

}
function check(id) {
  return id==id;
}


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

      deleteItem: (state, taskNrs) => {
        state.cartTotal--;
      var i=0;

       for(; i<=taskNrs.length; i++){


         var index=  state.loadedTasks.findIndex(valer =>valer.id==taskNrs[i].id);

        if(index!=-1)  state.loadedTasks.splice(index, 1);
        }


      }

    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setTasks",  [


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
