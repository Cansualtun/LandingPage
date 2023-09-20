const Data = [
  {
    url: "assets/image/Bitmap.svg",
    number: "01",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    url: "assets/image/bitmap2.svg",
    number: "02",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
  },
  {
    url: "assets/image/BitmapNew.svg",
    number: "03",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
  },
];

export default function Card() {
  return (
    <div className="flex flex-col lg:flex-row">
      {Data.map((item: any , index:number) => (
        <div key={index} className="flex flex-row p-5 lg:p-0">
          <img src={item.url} alt="landing" />
          <div className="flex flex-col m-5 gap-2">
            <h1 className="text-[#C5C6CE] text-xl font-bold lg:text-3xl">
              {item.number}
            </h1>
            <p className="font-bold hover:text-[#F15D51]">{item.title}</p>
            <p className="text-[#5E607A] text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
