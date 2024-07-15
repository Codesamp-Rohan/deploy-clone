const Index = () => {
  return (
    <>
      {details.map((detail, index) => {
        return (
          <div
            key={index}
            className="sans px-4 flex flex-col border-b-[1px] border-b-[#bbb] md:flex-row items-start justify-between text-[#022D42]">
            <span className="flex items-center gap-2 pt-[4rem]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#022D42]"></div>
              <h1 className="uppercase md:w-[20vw] font-medium">
                {detail.heading1}
              </h1>
            </span>
            <div className="mt-10 md:mt-0 md:border-r-[1px] md:border-r-[#bbb]">
              <h1 className="text-[12vw] md:text-[6vw] md:ml-10">
                {detail.heading2}
              </h1>
              <p className="px-4 bg-[#B7BC9F] md:ml-14 w-fit rounded-md">
                {detail.tag1}
              </p>
              <img
                className="w-[120vw] md:w-auto"
                src={detail.img}
                alt="garbage image"></img>
            </div>
            <div className="md:w-[40vw] md:px-2 h-full">
              <h1 className="text-[12vw] md:w-[30vw] md:text-[6vw] whitespace-nowrap">
                {detail.heading3}
              </h1>
              <p className="px-2 mx-4 bg-[#B7BC9F] w-fit rounded-md">
                {detail.tag2}
              </p>
              <div
                data-scroll
                data-scroll-speed="-0.1"
                className="md:mx-4 mt-[100px]">
                <h1 className="text-[2rem] font-semibold md:leading-10">
                  {detail.contentHead}
                </h1>
                <p className="text-justify">{detail.contentPara}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const details = [
  {
    heading1: "pet products",
    heading2: "< 50% - 500B",
    tag1: "of pet plastic bottles produced are recycled",
    img: "https://www.depoly.co/static/home/stats/1.jpg",
    heading3: "Only 90%",
    tag2: "of all plastic are being recycled",
    contentHead: "PET (Polyethylene Terephthalate) is a form of polyester",
    contentPara:
      "It is molded into plastic bottles and containers for packaging food and beverages, personal care products or spun into plastic fibers for making textile and fabrics used in garments, household and industrial item.",
  },
  {
    heading1: "landfill & environment",
    heading2: "91%",
    tag1: "of packing waste unrecycled",
    img: "https://www.depoly.co/static/home/stats/2.jpg",
    heading3: "500 yrs",
    tag2: "to degrade",
    contentHead: "The invisible problem of landfills",
    contentPara:
      "We don't see what's been thrown away since their creation. The lifetime of a plastic item to decompose in a landfill is 20 to 500 years which means almost all plastics that have ever been produced are still here.",
  },
  {
    heading1: "incineration",
    heading2: "9 Million Tons",
    tag1: "of plastic on our environment",
    img: "https://www.depoly.co/static/home/stats/3.jpg",
    heading3: "$120 Bn",
    tag2: "worth of plastic only used once",
    contentHead: "Incineration can't solve the circularity problem",
    contentPara:
      "Waste to energy recovery (or incineration), commonly found in the EU, is used to burn anything that cannot be recycled or recovered, including PET plastic items. While this is a good way to avoid landfills - gases produced during this procedure need to be processed properly to avoid CO2, NOx, SOx pollution, and does not solve the need for increased demands of recycled plastic.",
  },
  {
    heading1: "oil required",
    heading2: "20% of all oil",
    tag1: "IN 2050 WILL BE USED TO PRODUCE PLASTIC",
    img: "https://www.depoly.co/static/home/stats/4.jpg",
    heading3: "CO2",
    tag2: "REDUCTION OF CO2 EMISSION FROM PLASTIC NEEDED TO SUPPORT GLOBAL EFFORTS",
    contentHead: "Huge amounts of oil are required",
    contentPara:
      "10% of the oil production worldwide is used to make plastic - with this demand set to increase.",
  },
];

export default Index;
