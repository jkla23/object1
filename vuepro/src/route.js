export const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    component: resolve => require(["./components/login/Login.vue"], resolve)
  },
  { path: "/layout",
  component: resolve => require(["./components/Layout.vue"], resolve),
  name: "layout",
  children: [ 
          {
              path: "/test",
              component: resolve => require(["./components/test.vue"], resolve)
          },
          {
              path: "/home",
              component: resolve => require(["./components/Home.vue"], resolve)
          },
          
          {
              path: "/data",
              component: resolve => require(["./components/data.vue"], resolve)
          }
  ]},
  {
    path: "*",
    component: resolve => require(["./components/Error404.vue"], resolve)
  }  
];
  
