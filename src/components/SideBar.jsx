import React from 'react'
import { Book, Download, Globe, LogOut, Map, MessageSquare, Settings } from 'lucide-react'

import steve_head from '../assets/head-steve.jpg'

function SideBar(
    { username, handleLogout }
) {
    return (
        <div className={`w-64 bg-[#1b1b1b] p-4 ${navigator.platform.includes('Mac') ? 'pt-10' : ''} space-y-4 shadow-lg relative z-10 border-zinc-700`}>
            {/* 玩家資訊 */}
            <div className="flex items-center space-x-2 p-2 bg-zinc-700 rounded">
                <div className="w-8 h-8 rounded bg-zinc-600" style={{ backgroundImage: `url(${steve_head})`, backgroundSize: 'cover' }}></div>
                <span className="flex-1">{username || '未登入'}</span>
                <button
                    onClick={handleLogout}
                    className="p-1 hover:bg-zinc-600 rounded"
                >
                    <LogOut className="w-4 h-4" />
                </button>
            </div>

            {/* 導航項目 */}
            <div className="space-y-1">
                <button className="w-full flex items-center space-x-2 p-2 hover:bg-zinc-700 rounded">
                    <Book className="w-5 h-5" />
                    <div className="flex flex-col text-left">
                        <span>模組教學</span>
                        <span className="text-sm text-zinc-400">Wiki</span>
                    </div>
                </button>

                <button className="w-full flex items-center space-x-2 p-2 hover:bg-zinc-700 rounded">
                    <Globe className="w-5 h-5 text-green-500" />
                    <div className="flex flex-col text-left">
                        <span>伺服器狀態</span>
                        <span className="text-sm text-green-500">線上 - 32/100</span>
                    </div>
                </button>

                <button className="w-full flex items-center space-x-2 p-2 hover:bg-zinc-700 rounded">
                    <Map className="w-5 h-5" />
                    <div className="flex flex-col text-left">
                        <span>線上地圖</span>
                        <span className="text-sm text-zinc-400">Dynmap</span>
                    </div>
                </button>

                <button className="w-full flex items-center space-x-2 p-2 hover:bg-zinc-700 rounded">
                    <MessageSquare className="w-5 h-5 text-indigo-400" />
                    <div className="flex flex-col text-left">
                        <span>Discord</span>
                        <span className="text-sm text-zinc-400">加入社群</span>
                    </div>
                </button>
            </div>

            {/* 底部按鈕 */}
            <div className="absolute bottom-4 left-4 flex space-x-2">
                <button className="p-2 hover:bg-zinc-700 rounded">
                    <Settings className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-zinc-700 rounded">
                    <Download className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

export default SideBar