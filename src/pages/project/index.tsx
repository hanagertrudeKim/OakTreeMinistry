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
            우리는 이런 일을 하고 있어요
          </div>
          <div className="text-[20px] mt-[2vw] ml-[6vw] text-white">
            모든 어린이가 부족함 없이 자랄 수 있도록 돕습니다.
          </div>
        </div>
        <div className="w-[400px]"></div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center font-bold text-[19px] mt-[50px] mb-[150px] text-center font-NSK gap-[120px]">
          <button
            className={`w-[280px] h-[55px] border border-black rounded-full ${
              isClickRight ? "bg-[#175a41] text-white" : "text-black"
            }`}
            onClick={() => setIsClickRight(true)}
          >
            아이티 라고나브
          </button>
          <button
            className={`w-[280px] h-[55px] border border-black rounded-full ${
              isClickRight ? "text-black" : "bg-[#175a41] text-white"
            }`}
            onClick={() => setIsClickRight(false)}
          >
            도미니카 공화국
          </button>
        </div>
        {isClickRight ? (
          <>
            <div className="flex justify-center">
              <div className="font-NSK pr-[6vw] w-[650px]">
                <div className="text-[27px] font-extrabold ">소망학교</div>
                <div className="text-[18px] font-normal mt-[35px]">
                  가난한 섬 라고나브 섬에서 하루 2달러 이하 수입으로 아이들을
                  학교에 보내는 것이 결코 쉽지 않은 상황입니다. 힘겹게 학교를
                  보내지만 열악한 교육 환경과 교육자원의 부재로 아이들이 배우는
                  것이 매우 제한적입니다. 제대로 된 교육이 없으면 아이티 미래는
                  없을 것입니다. 그래서 이들에게 양질의 교육 환경을 제공하는
                  것이 가장 우선시되는 일입니다. 그래서 우리는 지금 쉽지 않은
                  상황이지만 아이들이 안전하게 공부할 수 있는 초. 중고등학교
                  크리스찬 학교를 짓고 있습니다. 이 학교를 통해 청소년들에게
                  성경을 가르치고 예수의 비전을 심어 주고 하나님 나라에 소망을
                  갖게 하여 이들을 주님의 군사로 준비 시키고자 합니다. 이 학교를
                  통해 이들이 예수님의 소망이 되고 이들이 또한 세상의 소망이
                  되길 고대합니다
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
            <div className="flex justify-center mt-[150px]">
              <Image
                src={"/image/project-clinic.jpg"}
                alt="project-school"
                width={550}
                height={550}
                className="w-[500px] sm:w-[90vw] object-scale-down"
              />
              <div className="font-NSK pl-[6vw] w-[600px]">
                <div className="text-[27px] font-extrabold ">소망 클리닉</div>
                <div className="text-[18px] font-normal mt-[60px]">
                  2017년 개원한 소망 클리닉을 통해 의료 인프라가 매우 열악한
                  라고나브 섬에 기초 의료 및 긴급의료, 예방교육 교육과 마을
                  보건요원 훈련 센터로 사용되고 있습니다. 10여명의 의료 스텝들이
                  주민들에게 최상의 의료 서비서를 제공하고 있으며 예방접종,
                  청소년 의료 보험 제도, 최신 의료 장비 등을 갖추고 라고나브
                  섬에 의료 사역의 중추적인 역활을 감당하고 있습니다
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[150px]">
              <div className="font-NSK pr-[6vw] w-[600px]">
                <div className="text-[27px] font-extrabold ">
                  도르가 미혼모 사역
                </div>
                <div className="text-[18px] font-normal mt-[35px]">
                  라고나브와 같이 매우 가난한 지역에서는 여자 아이들 경우 적절한
                  가정의 보호가 없어 쉽게 성적 폭행 당하게 되는 경우가 많고
                  식량을 얻기 위해 일찍 남자와 동거함으로 임신을 일찍 하게
                  됩니다. 이 곳에서 미성년으로 미혼모가 된다는 것은 가정에서
                  버림받고 사회적, 경제적 고립되며 학업도 중단하며 아무것도 할
                  수 없는 평생 어려움 가운데 살아가게 된다는 뜻입니다.이들은
                  또한 자녀들을 제대로 교육시킬 수 없고 적절한 의료 서비스도
                  받을 수 없는 상황이어서 절대적으로 외부의 도움 없이는 생존 할
                  수 없는 상황이 됩니다. 도르가 사역을 통해 절망과 무력감 가운데
                  있는 미성년 싱글 맘들에게 영적, 정서적, 물질적 적절한 도움을
                  주어 스스로 그들의 가정을 지키며 아름다운 신앙 공동체를 이루어
                  나가길 소망합니다
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
            <div className="font-NSK mt-[100px] flex flex-col justify-center items-center">
              <div className="text-[25px] font-semibold mb-[50px]">
                도르가 미혼모 사역의 목적
              </div>
              <div className="text-[17px] whitespace-pre-wrap leading-loose mb-[50px]">
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
                className="w-[400px] sm:w-[90vw] object-scale-down"
              />
            </div>
            <div className="flex justify-center mt-[150px]">
              <Image
                src={"/image/project-disability.jpg"}
                alt="project-school"
                width={550}
                height={550}
                className="w-[450px] sm:w-[90vw] object-scale-down"
              />
              <div className="font-NSK pl-[6vw] w-[600px]">
                <div className="text-[27px] font-extrabold ">
                  만나 프로젝트 (장애우 사역)
                </div>
                <div className="text-[18px] font-normal mt-[60px]">
                  만나프로젝트는 아이티 라고나브 섬에 방치되어 있고 절대 빈곤
                  있는 지극히 작은 자들 맹인, 지체 부자유자, 거지, 정신 이상
                  등의 많은 장애우들이 있습니다. 아무도 돌봐 줄 사람이 없어
                  육신적으로, 정서적, 영적으로 매우 취약한 환경에 놓여 있습니다.
                  이들에게 정기적인 기초 식량 공급과 의료 서비스, 돌봄이 매우
                  필요한 상황입니다. 이들을 정기적으로 찾아가 그들을 주님의
                  손길로 돕고 섬기는 사역입니다
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="font-NSK m-auto px-[20vw] mb-[100px]">
              <div className="text-[27px] font-extrabold ">
                도미니카 공화국 산티아고에서는...
              </div>
              <div className="text-[18px] font-normal mt-[60px]">
                최근 몇 년간 치안부재와 갱단에 의해 아이티의 국가 시스템이 거의
                다 붕괴가 된 상태입니다. 이로 인해 현재 아이티 사람들은 극심한
                고립과 굶주림, 경제적 빈곤과 살해 위협 가운데 살고 있으며 이로
                인해 100만명 가까운 사람들이 이웃나라인 도미니카 공화국으로
                이주하여 살고 있지만 불법 이주로 인해 많은 차별과 인권침해가
                만연하고 있습니다. 특히 이주자의 70% 이상이 정식 비자 서류가
                없어 많은 사람들이 의료와 교육 혜택을 제대로 받을 수가 없는 매우
                심각한 상황에 처해 있습니다. 신분과 재정 문제로 아파도 제대로
                병원에서 치료 받을 수 없으며 자녀들은 제대로 교육을 받을 수 없는
                환경이며, 이들에게 적절한 의료서비스 제공과 양질의 아동교육
                지원을 통하여 삶의 질을 향상시키고, 건강한 공동체를 만들고
                미래에 대한 희망을 갖게 하고자 한다.
              </div>
              <div className="text-[27px] font-extrabold mt-[100px]">
                Clinic de salud integral (CSI)
              </div>
              <div className="text-[18px] font-normal my-[60px] whitespace-pre-wrap leading-relaxed">
                Oak Tree Ministry 팀은 아이티 라고나브 섬 사역과 함께 또한
                도미니카 공화국에 거주하는 아이티 이주민들의 건강한 삶을 누리기
                위해 산티아고 외곽지역인 Pontezuela 에 작은 클리닉을 운영하면서
                아래 사역들을 진행하고 있습니다.
                {`
                

1. 소외된 아이티인의 건강한 삶을 위한 이동 진료 
2. 현지에서 교육받은 아이티 의료인 임상실습 기회 제공 
3. 진료공백 보완을 위한 SNS를 통한 긴급 의료 지원 
4. 향상된 보건환경 구축을 위한 주민 기초 의료 교육 
5. 아동 교육 기회 확대를 위한 프로그램 운영`}
              </div>
              <Image
                src={"/image/pontezuela.jpg"}
                alt="pontezuela"
                width={550}
                height={550}
                className="w-[900px] sm:w-[90vw] object-scale-down"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
