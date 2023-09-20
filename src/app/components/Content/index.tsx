import Button from "../UI/Button";
import Image from "next/image";

export default function Content() {
  return (
    <div className="flex flex-col justify-center mt-12">
      <Image src="assets/image/landing.svg" alt="landing" width={730} height={250} />
      <div className="flex flex-col gap-10 p-10 lg:flex-row">
        <h1 className="text-[#00001A] font-bold text-2xl lg:text-5xl">
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
