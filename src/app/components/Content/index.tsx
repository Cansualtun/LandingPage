import Button from "../UI/Button";

export default function Content() {
  return (
    <div className="flex flex-col justify-center mt-12">
      <img src="assets/image/landing.svg" />
      <div className="flex flex-col gap-10 p-10 lg:flex-row">
        <h1 className="text-[#00001A] text-6xl font-bold">
          The Bright Future of Web 3.0?
        </h1>
        <div>
          <p className="text-[#5E607A]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <div className="flex mt-8">
            <Button>Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
