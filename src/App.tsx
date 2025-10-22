import { Outlet } from 'react-router-dom';
import { Navigation } from './modules/navigation';
import { Header } from './components/Header';
import { Layout, MainContent } from './components/Layout';
import { appConfig } from './config/app.config';

export const App = () => {
  return (
    <Layout>
      <Header title={appConfig.title} />
      <Navigation />
      <MainContent>
        <Outlet />
      </MainContent>
    </Layout>
  );
};
