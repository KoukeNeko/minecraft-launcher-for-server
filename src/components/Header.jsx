import React from 'react'
import { getCurrentWindow } from '@tauri-apps/api/window';


function Header(
    { activeTab, setActiveTab }
) {

    React.useEffect(() => {
        const appWindow = getCurrentWindow();

        document.getElementById('header')?.addEventListener('mousedown', (e) => {
            appWindow.startDragging();
        });
        return () => {
            document.getElementById('header')?.removeEventListener('mousedown', () => { });
        };
    }, []);

    return (
        <div id="header" className="bg-[#1E1E1E]">
            <div className="flex items-center gap-4">
                <h1 className="pl-6 pt-6 text-2xl font-bold tracking-wide">
                    MINECRAFT: JAVA EDITION
                </h1>
            </div>

            {/* 標籤頁 */}
            <div className="px-6 mt-4 border-b border-zinc-700">
                <div className="flex space-x-8 ">
                    <button
                        onClick={() => setActiveTab('play')}
                        className={`px-4 py-2 -mb-px font-medium ${activeTab === 'play'
                            ? 'border-b-2 border-white'
                            : 'text-zinc-400 border-b-2 border-transparent hover:border-zinc-600'
                            }`}
                    >
                        開始遊戲
                    </button>
                    <button
                        onClick={() => setActiveTab('settings')}
                        className={`px-4 py-2 -mb-px font-medium ${activeTab === 'settings'
                            ? 'border-b-2 border-white'
                            : 'text-zinc-400 border-b-2 border-transparent hover:border-zinc-600'
                            }`}
                    >
                        設定
                    </button>
                    <button
                        onClick={() => setActiveTab('changelog')}
                        className={`px-4 py-2 -mb-px font-medium ${activeTab === 'changelog'
                            ? 'border-b-2 border-white'
                            : 'text-zinc-400 border-b-2 border-transparent hover:border-zinc-600'
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