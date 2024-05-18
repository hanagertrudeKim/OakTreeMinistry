import { DONATE, DONATION_PROGRAM } from "@/static/Donate";
import { DONATE_CARD } from "@/static/Home";
import { PROJECT } from "@/static/PROJECT";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Program() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <div
        className={`h-[450px] px-[10vw] flex justify-center bg-[url('/image/projectBanner.jpg')] sm:px-0 sm:w-[100vw] sm:object-cover text-white`}
      >
        <div>
          <div className="flex items-baseline">
            <div className="w-[5vw] border-b-2 border-white" />
            <div className="text-white mt-[80px] pl-[1vw] text-[1vw] font-bold sm:text-[3vw]">
              후원 프로그램
            </div>
          </div>
          <div className="w-[600px] text-[45px] font-bold ml-[6vw] mt-[80px] leading-snug">
            {router.query.title}
          </div>
          <div className="text-[20px] mt-[2vw] ml-[6vw]">
            {router.query.description}
          </div>
        </div>
        <div className="w-[400px] sm:w-0"></div>
      </div>
      <div className="font-NSK m-auto px-[20vw] my-[100px] sm:px-[5vw]">
        <div className="text-[30px] font-extrabold sm:text-[28px]">
          {PROJECT.dominica_project.info.title}
        </div>
        <div className="text-[20px] font-normal mt-[60px] sm:mt-[30px] sm:text-[18px]">
          {PROJECT.dominica_project.info.text}
        </div>
        <div className="text-[30px] font-extrabold mt-[100px] sm:mt-[80px] sm:text-[28px]">
          {PROJECT.dominica_project.clinic.title}
        </div>
        <div className="text-[20px] font-normal my-[60px] whitespace-pre-wrap leading-relaxed sm:text-[17px] sm:my-[30px]">
          {PROJECT.dominica_project.clinic.text}
        </div>
        <Image
          src={"/image/pontezuela.jpg"}
          alt="pontezuela"
          width={550}
          height={550}
          className="w-[900px] sm:w-[90vw] object-scale-down m-auto"
        />
      </div>
    </div>
  );
}
