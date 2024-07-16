const Chat = () => {
  return (
    <>
      <div class="flex flex-col max-w-xs mx-auto" style={{ marginLeft: 1300 }}>
        <div class="self-end mb-2">
          <div class="flex items-center justify-end">
            <div class="w-10 h-10 rounded-full overflow-hidden">
              <img
                class="w-full h-full object-cover"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Avatar"
              />
            </div>
            <div class="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2">
              It was said that you would, destroy the Sith, not join them.
            </div>
          </div>
        </div>

        <div class="self-end mb-2">
          <div class="flex items-center justify-end">
            <div class="w-10 h-10 rounded-full overflow-hidden">
              <img
                class="w-full h-full object-cover"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Avatar"
              />
            </div>
            <div class="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2">
              It was you who would bring balance to the Force
            </div>
          </div>
        </div>

        <div class="self-end mb-2">
          <div class="flex items-center justify-end">
            <div class="w-10 h-10 rounded-full overflow-hidden">
              <img
                class="w-full h-full object-cover"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Avatar"
              />
            </div>
            <div class="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2">
              Not leave it in Darkness
            </div>
          </div>
        </div>

        <div class="self-end mt-2">
          <div class="flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-2 rounded-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
