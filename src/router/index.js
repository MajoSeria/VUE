
import Vue from 'vue';
import VueRouter from 'vue-router';
import TaskList from '../views/TaskList.vue';
import AddTask from '../views/AddTask.vue';
import CombinedView from '../views/CombinedView.vue';
import TodoItem from '../views/TodoItem.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: TodoItem },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/addtask', name: 'AddTask', component: AddTask },
  { path: '/tasklist', name: 'TaskList', component: TaskList },
  { path: '/combinedview', name: 'CombinedView', component: CombinedView },
  { path: '/todoitem', name: 'TodoItem', component: TodoItem },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
