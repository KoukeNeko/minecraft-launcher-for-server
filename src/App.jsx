import "./App.css";
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
        <div className={`w-64 bg-[#1b1b1b] p-4 ${navigator.platform.includes('Mac') ? 'pt-10' : ''} space-y-4 shadow-lg relative z-10`}>
          {/* 玩家資訊 */}
          <div className="flex items-center space-x-2 p-2 bg-gray-700 rounded">
            <div className="w-8 h-8 rounded bg-gray-600"></div>
            <span className="flex-1">{username || '未登入'}</span>
            <button
              onClick={handleLogout}
              className="p-1 hover:bg-gray-600 rounded"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          {/* 導航項目 */}
          <div className="space-y-1">
            <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <Book className="w-5 h-5" />
              <div className="flex flex-col text-left">
                <span>模組教學</span>
                <span className="text-sm text-gray-400">Wiki</span>
              </div>
            </button>

            <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <Globe className="w-5 h-5 text-green-500" />
              <div className="flex flex-col text-left">
                <span>伺服器狀態</span>
                <span className="text-sm text-green-500">線上 - 32/100</span>
              </div>
            </button>

            <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <Map className="w-5 h-5" />
              <div className="flex flex-col text-left">
                <span>線上地圖</span>
                <span className="text-sm text-gray-400">Dynmap</span>
              </div>
            </button>

            <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <MessageSquare className="w-5 h-5 text-indigo-400" />
              <div className="flex flex-col text-left">
                <span>Discord</span>
                <span className="text-sm text-gray-400">加入社群</span>
              </div>
            </button>
          </div>

          {/* 底部按鈕 */}
          <div className="absolute bottom-4 left-4 flex space-x-2">
            <button className="p-2 hover:bg-gray-700 rounded">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 主要內容區 */}
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          {/* 頂部區域 */}
          <div id="header" className="bg-[#1E1E1E]">
            <div className="flex items-center gap-4">
              <h1 className="pl-6 pt-4 text-2xl font-bold tracking-wide">
                MINECRAFT: JAVA EDITION
              </h1>
              <p className="pt-4 text-sm text-gray-400 opacity-20">
                FOR DOESHING'S SERVER
              </p>
            </div>

            {/* 標籤頁 */}
            <div className="px-6 mt-4">
              <div className="flex space-x-8 border-b border-gray-700">
                <button
                  onClick={() => setActiveTab('play')}
                  className={`px-4 py-2 -mb-px font-medium ${activeTab === 'play'
                    ? 'border-b-2 border-white'
                    : 'text-gray-400 border-b-2 border-transparent hover:border-gray-600'
                    }`}
                >
                  開始遊戲
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`px-4 py-2 -mb-px font-medium ${activeTab === 'settings'
                    ? 'border-b-2 border-white'
                    : 'text-gray-400 border-b-2 border-transparent hover:border-gray-600'
                    }`}
                >
                  設定
                </button>
                <button
                  onClick={() => setActiveTab('changelog')}
                  className={`px-4 py-2 -mb-px font-medium ${activeTab === 'changelog'
                    ? 'border-b-2 border-white'
                    : 'text-gray-400 border-b-2 border-transparent hover:border-gray-600'
                    }`}
                >
                  更新日誌
                </button>
              </div>
            </div>
          </div>

          {/* 內容區域 */}
          <div id="content" className="flex-1 overflow-y-auto p-6">
            {activeTab === 'play' && (
              <PlayPage />
            )}

            {activeTab === 'settings' && (
              <SettingPage />
            )}

            {activeTab === 'changelog' && (
              <ChangeLogPage />
            )}
          </div>

          {/* 底部啟動區域 */}
          <div id="footer" className="mt-auto p-4 bg-[#1E1E1E] border-t border-gray-700">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center space-x-2">
                {updating ?
                  <RefreshCw className="w-5 h-5 text-green-500 animate-spin" />
                  :
                  <PlayPage className="w-5 h-5 text-green-500" />
                }

                <div className="text-sm">
                  <span className="text-gray-400">目前版本：</span>
                  <span className="text-white">Fabric-1.21.1</span>
                  <span className="text-gray-400 ml-2">- 檢查更新中...</span>
                </div>
              </div>
              {updating
                ?
                <button
                  className="px-12 py-3 bg-green-700 rounded text-white font-medium button-loader relative cursor-default">
                  <span className="button__text relative z-10">請稍候...</span>
                </button>
                :
                <button
                  className="px-12 py-3 bg-green-600 hover:bg-green-700 rounded text-white font-medium">
                  開始遊戲
                </button>
              }
            </div>
          </div>
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