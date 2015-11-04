import Dummy from './components/Dummy';
export default () => {
  return {
    description: 'The version description',
    routes: [
      {
        label: 'Dummy Label1',
        path: 'dummy',
        component: Dummy,
      },
    ],
  };
};
