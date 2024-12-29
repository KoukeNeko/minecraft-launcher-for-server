import React, { useState } from 'react';

function SettingPage() {
    const [gameDirectory, setGameDirectory] = useState("C:\\Users\\Username\\AppData\\Roaming\\.minecraft");
    const [javaPath, setJavaPath] = useState("C:\\Program Files\\Java\\jre1.8.0_301\\bin\\java.exe");
    const [minMemory, setMinMemory] = useState("2048");
    const [maxMemory, setMaxMemory] = useState("4096");
    const [jvmArgs, setJvmArgs] = useState("-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions");
    const [keepLauncherOpen, setKeepLauncherOpen] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);

    const handleSave = () => {
        // Example save function, implement actual file write via Electron or Node
        const newConfig = {
            gameDirectory,
            javaPath,
            minMemory: Number(minMemory),
            maxMemory: Number(maxMemory),
            jvmArgs,
            keepLauncherOpen,
            fullscreen
        };
        console.log("Saving config:", newConfig);
        // ...write to config.json...
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 p-6">
            {/* 遊戲目錄設定 */}
            <div className="bg-zinc-800 p-6 rounded-lg space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                    遊戲目錄
                </h3>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={gameDirectory}
                        onChange={(e) => setGameDirectory(e.target.value)}
                        className="flex-1 px-3 py-2 bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:border-blue-500"
                    />
                    <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded">
                        瀏覽
                    </button>
                </div>
                <p className="text-sm text-zinc-400">遊戲檔案、模組和資源包將會儲存在此處</p>
            </div>

            {/* Java 設定 */}
            <div className="bg-zinc-800 p-6 rounded-lg space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                    Java 設定
                </h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Java 路徑</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={javaPath}
                                onChange={(e) => setJavaPath(e.target.value)}
                                className="flex-1 px-3 py-2 bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:border-blue-500"
                            />
                            <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded">
                                自動偵測
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">記憶體配置</label>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1">最小記憶體 (MB)</label>
                                <input
                                    type="number"
                                    value={minMemory}
                                    onChange={(e) => setMinMemory(e.target.value)}
                                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1">最大記憶體 (MB)</label>
                                <input
                                    type="number"
                                    value={maxMemory}
                                    onChange={(e) => setMaxMemory(e.target.value)}
                                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* JVM 參數設定 */}
            <div className="bg-zinc-800 p-6 rounded-lg space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                    啟動參數
                </h3>
                <div className="space-y-2">
                    <label className="block text-sm font-medium mb-1">JVM 參數</label>
                    <textarea
                        value={jvmArgs}
                        onChange={(e) => setJvmArgs(e.target.value)}
                        className="w-full h-32 px-3 py-2 bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:border-blue-500 font-mono text-sm"
                    />
                    <p className="text-sm text-zinc-400">進階使用者可以自訂 JVM 參數以優化遊戲效能</p>
                </div>
            </div>

            {/* 遊戲啟動設定 */}
            <div className="bg-zinc-800 p-6 rounded-lg space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                    啟動選項
                </h3>
                <div className="space-y-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={keepLauncherOpen}
                            onChange={(e) => setKeepLauncherOpen(e.target.checked)}
                            className="w-4 h-4 bg-zinc-900 border-zinc-700 rounded"
                        />
                        <span>遊戲啟動後保持啟動器開啟</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={fullscreen}
                            onChange={(e) => setFullscreen(e.target.checked)}
                            className="w-4 h-4 bg-zinc-900 border-zinc-700 rounded"
                        />
                        <span>啟動時全螢幕顯示</span>
                    </label>
                </div>
            </div>

            {/* 設定按鈕 */}
            <div className="flex justify-end gap-4">
                <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded">
                    重設
                </button>
                <button onClick={handleSave} className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded">
                    儲存設定
                </button>
            </div>
        </div>
    )
}

export default SettingPage