import React from 'react'
import { PlayPage, RefreshCw } from 'lucide-react'

function Footer(
    { updating }
) {
  return (
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
  )
}

export default Footer