import { ConfigProvider } from 'antd';
import { AppRouter } from '@renderer/router';
import './style/tailwind.css';
import './style/base.css';
import './style/widget.css';

function App(): JSX.Element {
  return <ConfigProvider>
    <AppRouter />
  </ConfigProvider>;
}

export default App;
