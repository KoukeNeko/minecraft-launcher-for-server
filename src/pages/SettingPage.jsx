import React from 'react'

function SettingPage() {
    return (
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
    )
}

export default SettingPage