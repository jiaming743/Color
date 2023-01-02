import React from 'react';
import ReactDOM from 'react-dom/client';
// import { fade } from '../src/index';

import './index.less';

const WelcomeDevColor: React.FC = () => {
  return (
    <div class="welcome-container">
      <div class="brand">@jiaminghi/color</div>

      <div class="brand-desc">TypeScript Color Extension</div>

      <div class="dev-tip-container">Modify COLOR/.dev/index.tsx for Development</div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <WelcomeDevColor />
  </React.StrictMode>
);
