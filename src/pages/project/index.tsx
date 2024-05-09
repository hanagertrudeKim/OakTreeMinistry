/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import React, { useState } from "react";

export default function index() {
  const [isClickRight, setIsClickRight] = useState(true);
  return (
    <div>
      <div className="h-[450px] px-[10vw] flex justify-center bg-[url('/image/projectBackground.jpg')]">
        <div>
          <div className="flex items-baseline">
            <div className="w-[5vw] border-b-2 border-white" />
            <div className="text-white mt-[50px] pl-[1vw] text-[1vw] font-bold sm:text-[3vw]">
              프로젝트
            </div>
          </div>
          <div className="w-[600px] text-[45px] font-bold ml-[6vw] mt-[85px] leading-snug text-white">
            What We do
          </div>
          <div className="text-[20px] mt-[2vw] ml-[6vw] text-white">
            모든 어린이가 부족함 없이 자랄 수 있도록 돕습니다.
          </div>
        </div>
        <div className="w-[400px]"></div>
      </div>
      <div className="flex flex-col items-center px-[10vw] py-[5vw]">
        {/* <div className="flex w-[100vw] h-[80px] items-center font-bold text-[25px] px-[15vw] mt-[30px]">
          <div
            className={`w-[50vw] text-center font-NSK  border-r-2 ${
              isClickRight ? "text-[#F3851D]" : "text-black"
            } cursor-pointer`}
            onClick={() => setIsClickRight(true)}
          >
            La Gonave Project
          </div>
          <div
            className={`w-[50vw] text-center font-NSK ${
              isClickRight ? "text-black" : "text-[#F3851D]"
            } cursor-pointer`}
            onClick={() => setIsClickRight(false)}
          >
            Dominica Republic
          </div>
        </div> */}
        <div className="flex items-center justify-center">
          <div className="font-NSK px-[6vw] w-[650px]">
            <div className="text-[27px] font-extrabold ">소망학교</div>
            <div className="text-[18px] font-normal mt-[35px]">
              가난한 섬 라고나브 섬에서 하루 2달러 이하 수입으로 아이들을 학교에
              보내는 것이 결코 쉽지 않은 상황입니다. 힘겹게 학교를 보내지만
              열악한 교육 환경과 교육자원의 부재로 아이들이 배우는 것이 매우
              제한적입니다. 제대로 된 교육이 없으면 아이티 미래는 없을 것입니다.
              그래서 이들에게 양질의 교육 환경을 제공하는 것이 가장 우선시되는
              일입니다. 그래서 우리는 지금 쉽지 않은 상황이지만 아이들이
              안전하게 공부할 수 있는 초. 중고등학교 크리스찬 학교를 짓고
              있습니다. 이 학교를 통해 청소년들에게 성경을 가르치고 예수의
              비전을 심어 주고 하나님 나라에 소망을 갖게 하여 이들을 주님의
              군사로 준비 시키고자 합니다. 이 학교를 통해 이들이 예수님의 소망이
              되고 이들이 또한 세상의 소망이 되길 고대합니다
            </div>
          </div>
          <Image
            src={"/image/project-school.jpg"}
            alt="project-school"
            width={550}
            height={550}
            className="w-[500px] sm:w-[90vw] object-scale-down"
          />
        </div>
        <div className="flex items-center justify-center mt-[150px]">
          <Image
            src={"/image/project-clinic.jpg"}
            alt="project-school"
            width={550}
            height={550}
            className="w-[500px] sm:w-[90vw] object-scale-down"
          />
          <div className="font-NSK px-[6vw] w-[650px]">
            <div className="text-[27px] font-extrabold ">소망 클리닉</div>
            <div className="text-[18px] font-normal mt-[60px]">
              2017년 개원한 소망 클리닉을 통해 의료 인프라가 매우 열악한
              라고나브 섬에 기초 의료 및 긴급의료, 예방교육 교육과 마을 보건요원
              훈련 센터로 사용되고 있습니다. 10여명의 의료 스텝들이 주민들에게
              최상의 의료 서비서를 제공하고 있으며 예방접종, 청소년 의료 보험
              제도, 최신 의료 장비 등을 갖추고 라고나브 섬에 의료 사역의
              중추적인 역활을 감당하고 있습니다
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[150px]">
          <div className="font-NSK px-[6vw] w-[650px]">
            <div className="text-[27px] font-extrabold ">
              도르가 미혼모 사역
            </div>
            <div className="text-[18px] font-normal mt-[35px]">
              라고나브와 같이 매우 가난한 지역에서는 여자 아이들 경우 적절한
              가정의 보호가 없어 쉽게 성적 폭행 당하게 되는 경우가 많고 식량을
              얻기 위해 일찍 남자와 동거함으로 임신을 일찍 하게 됩니다. 이
              곳에서 미성년으로 미혼모가 된다는 것은 가정에서 버림받고 사회적,
              경제적 고립되며 학업도 중단하며 아무것도 할 수 없는 평생 어려움
              가운데 살아가게 된다는 뜻입니다.이들은 또한 자녀들을 제대로
              교육시킬 수 없고 적절한 의료 서비스도 받을 수 없는 상황이어서
              절대적으로 외부의 도움 없이는 생존 할 수 없는 상황이 됩니다.
              도르가 사역을 통해 절망과 무력감 가운데 있는 미성년 싱글 맘들에게
              영적, 정서적, 물질적 적절한 도움을 주어 스스로 그들의 가정을
              지키며 아름다운 신앙 공동체를 이루어 나가길 소망합니다
            </div>
          </div>
          <Image
            src={"/image/project-dorega.jpg"}
            alt="project-school"
            width={550}
            height={550}
            className="w-[500px] sm:w-[90vw] object-scale-down"
          />
        </div>
        <div className="w-[900px] font-NSK mt-[100px] flex flex-col items-center">
          <div className="text-[23px] font-semibold mb-[50px]">
            {"< 도르가 미혼모 사역의 목적 >"}
          </div>
          <div className="text-[18px] whitespace-pre-wrap leading-loose mb-[50px]">
            {`(1) 아이티 라고나브 섬, 미성년 미혼모들에게 적절한 직업 훈련과 경제 생계 유지에 필요한 식량과 의료 서비스를 제공한다 
(2) 미혼모 가정을 돕고 지지하여 건강한 가정을 만들게 한다 
(3) 여성들의 자립 경제 활동 지원을 통해 지역 경제 활성을 돕는다 
(4) 미혼모 신앙 공동체를 통해 소외된 여성들을 참된 그리스도의 제자로 만든다`}
          </div>
          <Image
            src={"/image/dorega-graph.jpg"}
            alt="project-school"
            width={550}
            height={550}
            className="w-[500px] sm:w-[90vw] object-scale-down"
          />
        </div>
        <div className="flex items-center justify-center mt-[150px]">
          <Image
            src={"/image/project-disability.jpg"}
            alt="project-school"
            width={550}
            height={550}
            className="w-[450px] sm:w-[90vw] object-scale-down"
          />
          <div className="font-NSK px-[6vw] w-[650px]">
            <div className="text-[27px] font-extrabold ">
              만나 프로젝트 (장애우 사역)
            </div>
            <div className="text-[18px] font-normal mt-[60px]">
              만나프로젝트는 아이티 라고나브 섬에 방치되어 있고 절대 빈곤 있는
              지극히 작은 자들 맹인, 지체 부자유자, 거지, 정신 이상 등의 많은
              장애우들이 있습니다. 아무도 돌봐 줄 사람이 없어 육신적으로,
              정서적, 영적으로 매우 취약한 환경에 놓여 있습니다. 이들에게
              정기적인 기초 식량 공급과 의료 서비스, 돌봄이 매우 필요한
              상황입니다. 이들을 정기적으로 찾아가 그들을 주님의 손길로 돕고
              섬기는 사역입니다
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
