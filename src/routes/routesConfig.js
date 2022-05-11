import HomePage from '@containers/HomePage'
import TodoList from '@containers/TodoList'
import NotFoundPage from '@containers/NotFoundPage';


const routesConfig = [
   {
      path: '/',
      element: HomePage
   },
   {
      path: '/todolist',
      element: TodoList
   },
   {
      path: '/not-found',
      element: NotFoundPage
   },
   {
      path: '*',
      exact: false,
      element: NotFoundPage
   }
]

export default routesConfig;