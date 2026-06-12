export default function TravelSearchBox() {
  return (
    <div className="bg-white text-black rounded-b-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center">
        {/* FROM */}
        <div className="border rounded-xl p-4 md:p-5">
          <label className="text-sm text-gray-500 mb-1 block">From</label>
          <select className="w-full text-base md:text-lg font-semibold outline-none bg-transparent">
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>
        </div>

        {/* SWAP */}
        <div className="hidden md:flex justify-center items-center text-xl">
          ⇄
        </div>

        {/* TO */}
        <div className="border rounded-xl p-4 md:p-5">
          <label className="text-sm text-gray-500 mb-1 block">To</label>
          <select className="w-full text-base md:text-lg font-semibold outline-none bg-transparent">
            <option>France</option>
            <option>Germany</option>
            <option>Italy</option>
            <option>Spain</option>
            <option>Netherlands</option>
          </select>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-6 md:mt-8">
        <button className="bg-orange-500 px-8 md:px-10 py-3 md:py-4 rounded-full text-white text-base md:text-lg font-medium hover:bg-orange-600 transition">
          Search
        </button>
      </div>
    </div>
  );
}
``;
