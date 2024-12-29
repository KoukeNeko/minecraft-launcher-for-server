import React from 'react'

function LoginModal() {
  return (
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
  )
}

export default LoginModal