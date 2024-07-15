const Index = () => {
  return (
    <footer className="p-4 md:p-10 bg-[#a9b1af]">
      <div className="flex flex-wrap justify-between gap-10 border-b-[1px] border-b-[#022d42] py-10">
        <div className="flex flex-col gap-4 text-[1.4rem]">
          <a>Home</a>
          <a>Technology</a>
          <a>About Us</a>
          <a>Careers</a>
          <a>Contact</a>
        </div>
        <div className="flex flex-col gap-4 text-[1.4rem]">
          <a>GitHub</a>
          <a>LinkedIn</a>
          <a>Portfolio</a>
          <a>Dribbble</a>
          <a>BuyMeACoffee</a>
        </div>
        <div className="md:w-[50vw] flex flex-col gap-2">
          <h1 className="font-bold text-[2rem]">
            Our newsletters are a concentrated blast of all the latest insights
            from DePoly.
          </h1>
          <p>No spam – Unsubscribe anytime.</p>
          <span className="flex flex-wrap gap-2">
            <input
              className="w-full bg-transparent outline-none ring-1 ring-[#022d42] text-[#022d42] md:w-auto px-4 py-2 rounded-lg"
              type="text"
              placeholder="Name"></input>
            <input
              className="w-full bg-transparent outline-none ring-1 ring-[#022d42] text-[#022d42] md:w-auto px-4 py-2 rounded-lg"
              type="email"
              placeholder="Email"></input>
            <button
              className="w-full md:w-auto px-4 py-2 bg-[#022D42] text-[#ecece2] rounded-lg"
              type="button">
              Subscribe
            </button>
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-between py-10 gap-10 border-b-[1px] border-b-[#022d42]">
        <div>
          <h1 className="font-bold">Email</h1>
          <a href="mailto:rohanchaudhary.bkbiet2022@gmail.com">
            rohanchaudhary.bkbiet2022@gmail.com
          </a>
        </div>
        <div>
          <h1 className="font-bold">Got a Project?</h1>
          <a href="mailto:rohanchaudhary.bkbiet2022@gmail.com">
            Request a Sample?
          </a>
        </div>
        <div>
          <h1 className="font-bold">Location</h1>
          <a href="mailto:rohanchaudhary.bkbiet2022@gmail.com">
            Behal, Haryana, India.
          </a>
        </div>
      </div>
      <div className="py-10">
        <h1 className="rohan--msg text-[4rem] md:text-[14rem] text-[#022d42] whitespace-nowrap overflow-x-scroll">
          AWWWARDS WEBSITE CLONE | ROHAN CHAUDHARY
        </h1>
      </div>
    </footer>
  );
};

export default Index;
