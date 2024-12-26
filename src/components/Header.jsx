import React from 'react'

function Header(
    { activeTab, setActiveTab }
) {
  return (
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

  )
}

export default Header