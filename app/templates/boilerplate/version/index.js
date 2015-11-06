import Dummy from './components/Dummy';
import VersionIndex from './components/VersionIndex';
export default () => {
  return {
    description: 'The version description',
    routes: [
      // {
      //   label: 'Dummy Label1',
      //   path: 'dummy',
      //   component: Dummy,
      // },
      {
        label: 'Version Index',
        path: 'version-index',
        component: VersionIndex,
      },
    ],
  };
};
