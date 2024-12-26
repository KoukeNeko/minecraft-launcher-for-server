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
  Play,
  LogOut
} from 'lucide-react';

const MinecraftLauncher = () => {
  const [activeTab, setActiveTab] = useState('play');
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
          <div className="bg-[#1E1E1E]">
            <h1 className="px-6 pt-4 text-2xl font-bold tracking-wide">
              MINECRAFT: JAVA EDITION
            </h1>
            
            {/* 標籤頁 */}
            <div className="px-6 mt-4">
              <div className="flex space-x-8 border-b border-gray-700">
                <button
                  onClick={() => setActiveTab('play')}
                  className={`px-4 py-2 -mb-px font-medium ${
                    activeTab === 'play'
                      ? 'border-b-2 border-white'
                      : 'text-gray-400 border-b-2 border-transparent hover:border-gray-600'
                  }`}
                >
                  開始遊戲
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`px-4 py-2 -mb-px font-medium ${
                    activeTab === 'settings'
                      ? 'border-b-2 border-white'
                      : 'text-gray-400 border-b-2 border-transparent hover:border-gray-600'
                  }`}
                >
                  設定
                </button>
                <button
                  onClick={() => setActiveTab('changelog')}
                  className={`px-4 py-2 -mb-px font-medium ${
                    activeTab === 'changelog'
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
          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === 'play' && (
              <div className="space-y-4">
                <div className="relative w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                  <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h2 className="text-2xl font-bold">歡迎來到我們的伺服器</h2>
                    <p className="text-gray-300">模組生存 - 版本 1.12.2</p>
                  </div>
                </div>

                <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
                  <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold">最新活動：聖誕節限時任務開跑！</h3>
                    <p className="text-gray-300">完成任務獲得特殊獎勵</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="max-w-4xl mx-auto space-y-6">
                {/* 遊戲目錄設定 */}
                <div className="bg-gray-800 p-6 rounded-lg space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    遊戲目錄
                  </h3>
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      value="C:\Users\Username\AppData\Roaming\.minecraft"
                      className="flex-1 px-3 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                      readOnly
                    />
                    <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">
                      瀏覽
                    </button>
                  </div>
                  <p className="text-sm text-gray-400">遊戲檔案、模組和資源包將會儲存在此處</p>
                </div>

                {/* Java 設定 */}
                <div className="bg-gray-800 p-6 rounded-lg space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    Java 設定
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Java 路徑</label>
                      <div className="flex gap-2">
                        <input 
                          type="text"
                          value="C:\Program Files\Java\jre1.8.0_301\bin\java.exe"
                          className="flex-1 px-3 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                          readOnly
                        />
                        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">
                          自動偵測
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">記憶體配置</label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">最小記憶體 (MB)</label>
                          <input 
                            type="number" 
                            value="2048"
                            className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">最大記憶體 (MB)</label>
                          <input 
                            type="number" 
                            value="4096"
                            className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* JVM 參數設定 */}
                <div className="bg-gray-800 p-6 rounded-lg space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    啟動參數
                  </h3>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium mb-1">JVM 參數</label>
                    <textarea 
                      value="-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions"
                      className="w-full h-32 px-3 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-blue-500 font-mono text-sm"
                    />
                    <p className="text-sm text-gray-400">進階使用者可以自訂 JVM 參數以優化遊戲效能</p>
                  </div>
                </div>

                {/* 遊戲啟動設定 */}
                <div className="bg-gray-800 p-6 rounded-lg space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    啟動選項
                  </h3>
                  <div className="space-y-4">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4 bg-gray-900 border-gray-700 rounded" />
                      <span>遊戲啟動後保持啟動器開啟</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4 bg-gray-900 border-gray-700 rounded" />
                      <span>啟動時全螢幕顯示</span>
                    </label>
                  </div>
                </div>

                {/* 設定按鈕 */}
                <div className="flex justify-end gap-4">
                  <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">
                    重設
                  </button>
                  <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded">
                    儲存設定
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'changelog' && (
              <div className="max-w-4xl mx-auto space-y-6">
                {/* 最新版本更新 */}
                <div className="bg-gray-800 p-6 rounded-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">版本 1.12.2-forge-14.23.5.2860</h3>
                    <span className="text-sm text-gray-400">2024/01/15</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-green-500 font-medium mb-2">新增功能</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                        <li>新增自動更新系統</li>
                        <li>優化模組載入速度</li>
                        <li>新增記憶體使用監控</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-blue-500 font-medium mb-2">優化改進</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                        <li>改善遊戲啟動速度</li>
                        <li>優化記憶體使用效率</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-500 font-medium mb-2">錯誤修復</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                        <li>修復某些模組無法正常載入的問題</li>
                        <li>修復啟動器偶爾無回應的問題</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 歷史版本更新 */}
                <div className="bg-gray-800 p-6 rounded-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">版本 1.12.2-forge-14.23.5.2859</h3>
                    <span className="text-sm text-gray-400">2024/01/01</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-green-500 font-medium mb-2">新增功能</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                        <li>加入新的模組包管理系統</li>
                        <li>新增自動備份功能</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-500 font-medium mb-2">錯誤修復</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                        <li>修復記憶體配置無法保存的問題</li>
                        <li>修復部分介面顯示異常的問題</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 底部啟動區域 */}
          <div className="mt-auto p-4 bg-[#1E1E1E] border-t border-gray-700">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-5 h-5 text-green-500 animate-spin" />
                <div className="text-sm">
                  <span className="text-gray-400">目前版本：</span>
                  <span className="text-white">Forge 1.12.2</span>
                  <span className="text-gray-400 ml-2">- 檢查更新中...</span>
                </div>
              </div>
              <button className="px-12 py-3 bg-green-600 hover:bg-green-700 rounded text-white font-medium">
                開始遊戲
              </button>
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

export default MinecraftLauncher;