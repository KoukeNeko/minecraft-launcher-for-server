import React from 'react'

function ChangeLogPage() {
    return (
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
    )
}

export default ChangeLogPage