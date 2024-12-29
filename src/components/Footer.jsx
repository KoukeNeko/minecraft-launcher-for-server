import React from 'react'
import { PlayIcon, RefreshCw } from 'lucide-react'

import { Command } from '@tauri-apps/plugin-shell';
import { invoke } from '@tauri-apps/api/core';

function Footer(
    { updating }
) {
    return (
        <div id="footer" className="mt-auto p-4 bg-[#1E1E1E] border-t border-zinc-700">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                <div className="flex items-center space-x-2">
                    {updating ?
                        <RefreshCw className="w-5 h-5 text-green-500 animate-spin" />
                        :
                        <PlayIcon className="w-5 h-5 text-green-500" />
                    }

                    <div className="text-sm">
                        <span className="text-zinc-400">目前版本：</span>
                        <span className="text-white">Fabric-1.21.1</span>
                        <span className="text-zinc-400 ml-2">- 檢查更新中...</span>
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
                        onClick={async () => {
                            // try {
                            //     const result = await invoke('run_jar');
                            //     console.log("JAR Execution Output:", result);
                            //   } catch (error) {
                            //     console.error("Error occurred while running JAR:", error);
                            //   }
                            try {
                                let result = await Command.create('exec-sh', [
                                    'java -jar',
                                    "/Users/doeshing/Library/CloudStorage/SynologyDrive-MBP20241206/minecraft server/for_testing/arclight-fabric-1.21.1-1.0.0-SNAPSHOT.jar",
                                  ]).execute();
                                  console.log(result);
                            }catch (error) {
                                console.error("Error occurred while running JAR:", error);
                            }
                        }}
                        className="px-12 py-3 bg-green-600 hover:bg-green-700 rounded text-white font-medium">
                        開始遊戲
                    </button>
                }
            </div>
        </div>
    )
}

export default Footer