const Data = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export default function Sidebar() {
  return (
    <div className="bg-[#00001A] lg:w-[350px] mt-12 divide-y divide-blue-200 w-screen">
      <h1 className="font-bold text-[#E9AA52] text-4xl p-6">New</h1>
      {Data.map((item: any) => (
        <div className="flex flex-col p-3 m-3">
          <h1 className="font-bold text-[#FFFDFA] hover:text-[#E9AA52]">
            {item.title}
          </h1>
          <p className="text-[#C5C6CE] mt-6">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
