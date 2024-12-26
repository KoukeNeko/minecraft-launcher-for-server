import "./App.css";
import bg_minecraft_dirt from "./assets/bg-minecraft-dirt.jpeg";
import React, { useState } from 'react';
import {
  Settings,
  Book,
  Globe,
  Map,
  MessageSquare,
  Download,
  Users,
  RefreshCw,
  LogOut
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import PlayPage from './pages/PlayPage';
import SettingPage from "./pages/SettingPage";
import ChangeLogPage from "./pages/ChangeLogPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

const App = () => {
  const [activeTab, setActiveTab] = useState('play');
  const [updating, setUpdating] = useState(true);
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
    <div className="h-screen bg-gray-900 text-white relative">
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
            className="flex-1 overflow-y-auto p-6 bg-[#333333]"
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gray-800 rounded mx-auto mb-4"></div>
              <h2 className="text-2xl font-bold">登入 Minecraft</h2>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  玩家名稱
                </label>
                <input
                  name="username"
                  type="text"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                  placeholder="輸入你的玩家名稱"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-green-600 hover:bg-green-700 rounded font-medium"
              >
                開始遊戲
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;