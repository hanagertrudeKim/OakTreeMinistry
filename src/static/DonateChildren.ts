export interface DonateChild {
  registration_number: string;
  korean_name: string;
  english_name: string;
  age: number;
  gender: "M" | "F";
  date_of_birth: string;
  residence: string;
  future_dream: string;
  prayer_request: string;
  photo: string;
}

export const DONATE_CHILDREN: DonateChild[] = [
  {
    registration_number: "001",
    korean_name: "사무엘",
    english_name: "Jean Jelly Samuel",
    age: 10,
    gender: "M",
    date_of_birth: "2014-01-01",
    residence: "La Gonave",
    future_dream: "의사",
    prayer_request: "학교를 건강히 잘 마칠 수 있도록 기도해주세요. 하나님이 원하시는 예배자가 되기를 원해요.",
    photo: "/image/childrenDonate.jpg"
  },
  {
    registration_number: "002",
    korean_name: "러브",
    english_name: "Love",
    age: 10,
    gender: "M",
    date_of_birth: "2014-01-01",
    residence: "La Gonave",
    future_dream: "의사",
    prayer_request: "학교를 건강히 잘 마칠 수 있도록 기도해주세요. 하나님이 원하시는 예배자가 되기를 원해요.",
    photo: "/image/childrenDonate.jpg"
  },{
    registration_number: "003",
    korean_name: "토니",
    english_name: "Tony",
    age: 10,
    gender: "M",
    date_of_birth: "2014-01-01",
    residence: "La Gonave",
    future_dream: "의사",
    prayer_request: "학교를 건강히 잘 마칠 수 있도록 기도해주세요. 하나님이 원하시는 예배자가 되기를 원해요.",
    photo: "/image/childrenDonate.jpg"
  },
];
