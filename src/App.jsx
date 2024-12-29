import "./App.css";
import React, { useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import PlayPage from './pages/PlayPage';
import SettingPage from "./pages/SettingPage";
import ChangeLogPage from "./pages/ChangeLogPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import LoginModal from "./components/Modals/LoginModal";

const App = () => {
  const [activeTab, setActiveTab] = useState('play');
  const [updating, setUpdating] = useState(false);
  const [username, setUsername] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    if (username) {
      setUsername(username);
      setShowLoginModal(false);
    }
  };

  const handleLogout = () => {
    setUsername('');
    setShowLoginModal(true);
  };



  return (
    <div className="bg-gray-900 text-white relative h-screen">
      <div className="flex h-full">
        {/* 左側邊欄 */}
        <SideBar username={username} handleLogout={handleLogout} />

        {/* 主要內容區 */}
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          {/* 頂部區域 */}
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
          {/* 內容區域 */}
          <div
            id="content"
            className="flex-1 overflow-y-auto bg-[#333333] h-full"
          >
            {(() => {
              switch (activeTab) {
                case 'play':
                  return <PlayPage />;
                case 'settings':
                  return <SettingPage />;
                case 'changelog':
                  return <ChangeLogPage />;
                default:
                  return null;
              }
            })()}
          </div>

          {/* 底部啟動區域 */}
          <Footer updating={updating} />
        </div>
      </div>

      {/* 登入彈窗 */}
      {showLoginModal && (
        <LoginModal handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;