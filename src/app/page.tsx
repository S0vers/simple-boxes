import Image from "next/image";
import Link from "next/link";
import { MdOutlineHomeWork } from "react-icons/md";

const componet = {
  title: "Single Family",
  location: "Los Angeles, CA",
  image: "/home.jpg",
  invest: "/",
  optimatized: "Growth",
  IRR: "15.7%",
  Est: "5-7yrs",
};

const balance = {
  current: "$25,215",
  newest: {
    title1: "1124 Los Angles Blvd",
    value1: "$300",
    time1: "Today 10:15am",
    title2: "553 Kingstone",
    value2: "$400",
    time2: "Today 10:15am",
    title3: "Real Extate Fund",
    value3: "$400",
    time3: "Today 10:15am",
  },
};

export default function Home() {
  return (
    <main className="bg-black h-screen w-full">
      <section className="border border-gray-400 py-4 rounded-[16px] max-w-[320px]">
        <div className="px-4 pb-2">
          <h1 className="uppercase text-2xl text-white font-semibold">
            {componet.title}
          </h1>
          <h2 className=" text-white/50">{componet.location}</h2>
        </div>
        <div>
          <Image src={componet.image} alt="home" width={500} height={500} />
        </div>

        <div className="flex justify-between px-4 py-4 text-center">
          <div>
            <h3 className="text-white/50 text-sm">Optimized for</h3>
            <p className=" text-sm  font-semibold text-[#39bb6b]">
              {componet.optimatized}
            </p>
          </div>
          <div>
            <h3 className="text-white/50 text-sm">Avg Hist. IRR</h3>
            <p className="text-sm font-semibold text-[#39bb6b]">
              {componet.IRR}
            </p>
          </div>
          <div>
            <h3 className="text-white/50 text-sm">Ext. exit</h3>
            <p className=" text-sm font-semibold text-[#39bb6b]">
              {componet.Est}
            </p>
          </div>
        </div>
        <Link
          href={componet.invest}
          className="bg-transparent border hover:border-[#29b47f] uppercase tracking-widest border-gray-400 hover:bg-[#29b47f] text-white py-2 px-4 mx-4 flex rounded-[18px] justify-center text-center font-medium"
        >
          Invest
        </Link>
      </section>

      <section className="w-full h-full max-w-[600px] max-h-[400px] overflow-y-clip border rounded-[16px] border-gray-400">
        <div className="py-6 px-4 mx-4 my-4 rounded-[18px] bg-blue-500/25">
          <h2 className="text-white/60 text-sm">Credit Balance</h2>
          <h1 className="text-white text-4xl font-medium tracking-wide leading-10 mt-2">
            {balance.current}
          </h1>
        </div>
        <div className="px-5">
          <p className="uppercase text-white/50 text-xs">Newest</p>
          <div className="flex justify-between align-middle items-center">
            <div className="flex justify-center align-middle items-center gap-2">
              <div className="rounded-full px-4 py-4 my-4 bg-gray-600/50 text-xl text-[#39bb6b]">
                <MdOutlineHomeWork />
              </div>
              <div>
                <h2 className="text-white">{balance.newest.title1}</h2>
                <p className="text-white/50 text-xs">{balance.newest.time1}</p>
              </div>
            </div>
            <div>
              <h2 className="text-white">{balance.newest.value1}</h2>
            </div>
          </div>
          <div className="flex justify-between align-middle items-center">
            <div className="flex justify-center align-middle items-center gap-2">
              <div className="rounded-full px-4 py-4 my-4 bg-gray-600/50 text-xl text-[#39bb6b]">
                <MdOutlineHomeWork />
              </div>
              <div>
                <h2 className="text-white">{balance.newest.title1}</h2>
                <p className="text-white/50 text-xs">{balance.newest.time1}</p>
              </div>
            </div>
            <div>
              <h2 className="text-white">{balance.newest.value1}</h2>
            </div>
          </div>
          <div className="flex justify-between align-middle items-center">
            <div className="flex justify-center align-middle items-center gap-2">
              <div className="rounded-full px-4 py-4 my-4 bg-gray-600/50 text-xl text-[#39bb6b]">
                <MdOutlineHomeWork />
              </div>
              <div>
                <h2 className="text-white">{balance.newest.title1}</h2>
                <p className="text-white/50 text-xs">{balance.newest.time1}</p>
              </div>
            </div>
            <div>
              <h2 className="text-white">{balance.newest.value1}</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
