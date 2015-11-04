import Dummy from './components/Dummy';
export default () => {
  return {
    description: 'The version description',
    routes: [
      {
        label: 'Dummy Label',
        path: 'dummy',
        component: Dummy,
      },
    ],
  };
};
