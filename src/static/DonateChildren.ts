export interface DonateChild {
  registration_number: string;
  korean_name: string;
  english_name: string;
  grade: string;
  age: number;
  gender: "M" | "F";
  school: string;
  family: {
    ko: string;
    en: string;
  };
  story: {
    ko: string;
    en: string;
  };
  photo: string;
}

export const DONATE_CHILDREN: DonateChild[] = [
  {
    registration_number: "001",
    korean_name: "사무엘",
    english_name: "Jean Jelly Samuel",
    grade: "4",
    age: 10,
    gender: "M",
    school: "La Gonave",
    family: {
      ko: "부모님과 여동생 2명과 함께 살고 있습니다",
      en: "Lives with parents and two younger sisters"
    },
    story: {
      ko: "라고나브 섬 앙스아갈레 마을에서 태어났습니다. 의사가 되어서 우리 마을의 아픈 사람들을 돕고 싶습니다. 특히 영어 공부를 열심히 하고 있어요.",
      en: "I was born in Anse-à-Galets, La Gonave. I want to become a doctor to help sick people in our village. I'm especially working hard to study English."
    },
    photo: "/image/childrenDonate.jpg"
  },
  {
    registration_number: "002",
    korean_name: "러브",
    english_name: "Love",
    grade: "3",
    age: 9,
    gender: "M",
    school: "Hope Christian",
    family: {
      ko: "할머니와 남동생과 함께 살고 있습니다",
      en: "Lives with grandmother and younger brother"
    },
    story: {
      ko: "라고나브 섬 중심가에서 자랐습니다. 선생님이 되어서 마을의 아이들에게 희망을 전하고 싶어요. 음악을 매우 좋아하고 찬양 부르기를 좋아합니다.",
      en: "I grew up in central La Gonave. I want to become a teacher to give hope to children in our village. I love music and singing worship songs."
    },
    photo: "/image/childrenDonate.jpg"
  },
  {
    registration_number: "003",
    korean_name: "토니",
    english_name: "Tony",
    grade: "5",
    age: 11,
    gender: "M",
    school: "Grace Academy",
    family: {
      ko: "부모님과 형 1명과 함께 살고 있습니다",
      en: "Lives with parents and one older brother"
    },
    story: {
      ko: "라고나브 섬 팔미스트 지역에서 자랐습니다. 축구를 매우 좋아하고 운동선수가 되어 우리 마을을 전 세계에 알리고 싶어요.",
      en: "I grew up in the Palmiste area of La Gonave. I love playing soccer and want to become an athlete to make our village known to the world."
    },
    photo: "/image/childrenDonate.jpg"
  }
];
