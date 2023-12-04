import Image from "next/image";
import Link from "next/link";
import { MdOutlineHomeWork } from "react-icons/md";
import styles from "./ComponentStyles.module.css";
import styles2 from "./BoxStyles.module.css";
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

      {/* css build */}
      {/* border py_4 rounded_18px max_w_320px */}
      <section
        className={`${styles.sectionbg} ${styles.border} ${styles.py4} ${styles.rounded18px} ${styles.maxw320px}`}
      >
        <div className={`${styles.px4} ${styles.pb2}`}>
          <h1
            className={`${styles.uppercase} ${styles.text2xl} ${styles.textwhite} ${styles.fontsemibold}`}
          >
            {componet.title}
          </h1>
          <h2 className={`${styles.textwhite50}`}>{componet.location}</h2>
        </div>
        <div>
          <Image src={componet.image} alt="home" width={500} height={500} />
        </div>

        <div
          className={`${styles.flex} ${styles.justifybetween} ${styles.px4} ${styles.py4} ${styles.textcenter}`}
        >
          <div>
            <h3 className={`${styles.textwhite50} ${styles.textsm}`}>
              Optimized for
            </h3>
            <p
              className={`${styles.textsm} ${styles.fontsemibold} ${styles.text39bb6b}`}
            >
              {componet.optimatized}
            </p>
          </div>
          <div>
            <h3 className={`${styles.textwhite50} ${styles.textsm}`}>
              Avg Hist. IRR
            </h3>
            <p
              className={`${styles.textsm} ${styles.fontsemibold} ${styles.text39bb6b}`}
            >
              {componet.IRR}
            </p>
          </div>
          <div>
            <h3 className={`${styles.textwhite50} ${styles.textsm}`}>
              Ext. exit
            </h3>
            <p
              className={`${styles.textsm} ${styles.fontsemibold} ${styles.text39bb6b}`}
            >
              {componet.Est}
            </p>
          </div>
        </div>
        <Link
          href={componet.invest}
          className={`${styles.flex} ${styles.justifycenter} ${styles.textcenter} ${styles.py2} ${styles.px4} ${styles.mx4} ${styles.rounded18px} ${styles.uppercase} ${styles.fontmedium} ${styles.trackingwidest} ${styles.textwhite} ${styles.border29b47f} ${styles.bg29b47f}`}
        >
          Invest
        </Link>
      </section>

      <section
        className={`${styles2.wfull} ${styles2.hfull} ${styles2.maxw600px} ${styles2.maxh400px} ${styles2.overflowyclip} ${styles2.border} ${styles2.rounded16px} ${styles2.bordergray400}`}
      >
        <div
          className={`${styles2.py6} ${styles2.px4} ${styles2.mx4} ${styles2.my4} ${styles2.rounded18px} ${styles2.bgblue50025}`}
        >
          <h2 className={`${styles2.textwhite60} ${styles2.textsm}`}>
            Credit Balance
          </h2>
          <h1
            className={`${styles2.textwhite} ${styles2.text4xl} ${styles2.fontmedium} ${styles2.trackingwide} ${styles2.leading10} ${styles2.mt2}`}
          >
            {balance.current}
          </h1>
        </div>
        <div className={`${styles2.px5}`}>
          <p
            className={`${styles2.uppercase} ${styles2.textwhite50} ${styles2.textxs}`}
          >
            Newest
          </p>
          <div
            className={`${styles2.flex} ${styles2.justifybetween} ${styles2.alignmiddle} ${styles2.itemscenter}`}
          >
            <div
              className={`${styles2.flex} ${styles2.justifycenter} ${styles2.alignmiddle} ${styles2.itemscenter} ${styles2.gap2}`}
            >
              <div
                className={` ${styles2.roundedfull} ${styles2.px4} ${styles2.py4} ${styles2.my4} ${styles2.bggray60050} ${styles2.textxl} ${styles2.text39bb6b}`}
              >
                <MdOutlineHomeWork />
              </div>
              <div>
                <h2 className={`${styles2.textwhite}`}>
                  {balance.newest.title1}
                </h2>
                <p className={`${styles2.textwhite50} ${styles2.textxs}`}>
                  {balance.newest.time1}
                </p>
              </div>
            </div>
            <div>
              <h2 className={`${styles2.textwhite}`}>
                {balance.newest.value1}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
