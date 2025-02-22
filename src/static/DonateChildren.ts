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
    "registration_number": "001",
    "korean_name": "에타씨앙카",
    "english_name": "Joseph Ethacianca",
    "grade": "7",
    "age": 13,
    "gender": "M",
    "school": "Quisqueya",
    "family": {
      "ko": "부모님은 정원사 일을 하시고, 우리 가족은 13명입니다.",
      "en": "My parents work as gardeners, and my family consists of 13 members."
    },
    "story": {
      "ko": "컴퓨터 엔지니어가 되는 것이 꿈입니다. 열심히 공부해서 꿈을 이루고 좋은 크리스천으로 살아가도록 기도해주세요.",
      "en": "My dream is to become a computer engineer. Please pray for me to achieve my dream and live as a good Christian."
    },
    "photo": "/image/students-picture/001.png"
  },
  {
    "registration_number": "002",
    "korean_name": "스탠리",
    "english_name": "Francois Peter Stanley",
    "grade": "7",
    "age": 13,
    "gender": "M",
    "school": "Lestandard",
    "family": {
      "ko": "아버지는 돌아가셨고 어머니가 장사를 하며 다섯 식구를 부양하고 있습니다.",
      "en": "My father has passed away, and my mother supports our family of five by running a small business."
    },
    "story": {
      "ko": "영어를 좋아하고 의사가 되는 것이 꿈입니다. 가정 형편이 어렵지만 열심히 공부해서 꿈을 이룰 수 있도록 기도해주세요.",
      "en": "I love English and dream of becoming a doctor. Although my family is struggling financially, I am studying hard to achieve my dream. Please pray for me."
    },
    "photo": "/image/students-picture/002.png"
  },
  {
    "registration_number": "003",
    "korean_name": "두들리",
    "english_name": "Tranchant Doodley",
    "grade": "7",
    "age": 13,
    "gender": "M",
    "school": "Quisqueya",
    "family": {
      "ko": "아버지는 목수 일을 하시고 어머니는 재봉 일을 하십니다.",
      "en": "My father is a carpenter, and my mother is a seamstress."
    },
    "story": {
      "ko": "축구를 좋아하고 컴퓨터 엔지니어나 축구 선수가 되는 것이 꿈입니다. 우리 가족 모두 좋은 크리스천이 되도록 기도해주세요.",
      "en": "I love soccer, and my dream is to become a computer engineer or a soccer player. Please pray for my family to be good Christians."
    },
    "photo": "/image/students-picture/003.png"
  },
  {
    "registration_number": "004",
    "korean_name": "이스마엘",
    "english_name": "Lapointe Isemael",
    "grade": "7",
    "age": 13,
    "gender": "M",
    "school": "Lestandard",
    "family": {
      "ko": "아버지는 목수 일을 하시고 어머니는 길거리에서 장사를 하십니다.",
      "en": "My father is a carpenter, and my mother sells goods on the street."
    },
    "story": {
      "ko": "의사가 되는 것이 꿈입니다. 가정 형편이 어렵지만 열심히 공부해서 의사가 될 수 있도록 기도해주세요.",
      "en": "My dream is to become a doctor. Although my family struggles financially, I am working hard to achieve my goal. Please pray for me."
    },
    "photo": "/image/students-picture/004.png"
  },
  {
    "registration_number": "005",
    "korean_name": "시나이달리",
    "english_name": "Lapey Shnaidalie",
    "grade": "7",
    "age": 13,
    "gender": "F",
    "school": "Luc-Elizer",
    "family": {
      "ko": "아버지께서 소일거리를 하시면서 생계를 유지하고 있습니다.",
      "en": "My father does small jobs to support our family."
    },
    "story": {
      "ko": "영화를 보는 것을 좋아하고 수학과 프랑스어를 잘합니다. 열심히 공부해서 의사가 될 수 있도록 기도해주세요.",
      "en": "I love watching movies and excel in math and French. Please pray for me to study hard and become a doctor."
    },
    "photo": "/image/students-picture/005.png"
  },
  {
    "registration_number": "006",
    "korean_name": "킴벌리",
    "english_name": "Joseph Kimberly",
    "grade": "7",
    "age": 13,
    "gender": "F",
    "school": "Sainte Bernadette",
    "family": {
      "ko": "어머니께서 식당에서 일하면서 생계를 유지하고 있습니다.",
      "en": "My mother works at a restaurant to support us."
    },
    "story": {
      "ko": "영화를 보는 것을 좋아하고 수학과 프랑스어를 잘합니다. 그리고 의사가 되는 것이 꿈입니다. 우리 가족 모두 예수님을 잘 믿을 수 있도록 기도해주세요.",
      "en": "I enjoy watching movies and excel in math and French. And my dream is Doctor. Please pray for my family to grow in faith."
    },
    "photo": "/image/students-picture/006.png"
  },
  {
    "registration_number": "007",
    "korean_name": "로잘리에",
    "english_name": "Moleon Rosalie",
    "grade": "7",
    "age": 13,
    "gender": "F",
    "school": "Institute Guerrier",
    "family": {
      "ko": "아버지는 농부이시고 어머니는 길거리에서 장사를 하십니다.",
      "en": "My father is a farmer, and my mother sells goods on the street."
    },
    "story": {
      "ko": "간호사가 되는 것이 꿈입니다. 우리 가족 모두 크리스천이 되도록 기도해주세요.",
      "en": "My dream is to become a nurse. Please pray for my family to become strong Christians."
    },
    "photo": "/image/students-picture/007.png"
  },
  {
      "registration_number": "008",
      "korean_name": "나이카",
      "english_name": "Fleuvil Mege Naica",
      "grade": "7",
      "age": 13,
      "gender": "F",
      "school": "Luc-Elizer",
      "family": {
        "ko": "집에는 여섯 식구가 같이 살고 있습니다. 아버지는 목수이시고 어머니는 길거리에서 장사를 하십니다.",
        "en": "Lives with six family members. Father is a carpenter, and mother is a street vendor."
      },
      "story": {
        "ko": "영어와 스페인어를 좋아합니다. 저는 간호사가 되는 것이 꿈입니다. 제가 열심히 공부해서 꿈을 이룰 수 있도록 기도해주세요.",
        "en": "I like English and Spanish. My dream is to become a nurse. Please pray that I can study hard and achieve my dream."
      },
      "photo": "/image/students-picture/008.jpg"
    },
    {
      "registration_number": "009",
      "korean_name": "쉐들리손",
      "english_name": "Jean Paul Shedlison",
      "grade": "8",
      "age": 14,
      "gender": "M",
      "school": "Institute Guerrier",
      "family": {
        "ko": "저의 가족은 7명입니다. 아버지는 정원사이시고 어머니는 농부이십니다.",
        "en": "My family consists of seven members. My father is a gardener, and my mother is a farmer."
      },
      "story": {
        "ko": "저는 친구와 축구하는 것을 좋아하고 영어와 스페인어를 잘합니다. 저는 축구선수가 되는 것이 꿈입니다.",
        "en": "I like playing soccer with friends and am good at English and Spanish. My dream is to become a soccer player."
      },
      "photo": "/image/students-picture/009.png"
    },
    {
      "registration_number": "010",
      "korean_name": "미시칼린",
      "english_name": "Jean Michecaline",
      "grade": "8",
      "age": 14,
      "gender": "F",
      "school": "Luc-Elizer",
      "family": {
        "ko": "집에는 10명이 함께 살고 있고, 부모님은 정원 일을 하십니다.",
        "en": "Lives with ten family members. Parents work as gardeners."
      },
      "story": {
        "ko": "저는 친구들과 학교에서 노는 것을 좋아하고 수학과 프랑스어를 잘합니다. 저희 부모님의 건강을 지켜주시도록, 간호사가 되고 싶은 꿈을 이룰 수 있도록 기도해주세요.",
        "en": "I enjoy playing with friends at school and am good at math and French. Please pray for my parents' health and for me to achieve my dream of becoming a nurse."
      },
      "photo": "/image/students-picture/010.png"
    },
    {
      "registration_number": "011",
      "korean_name": "루씨에",
      "english_name": "Charles Loucie",
      "grade": "8",
      "age": 14,
      "gender": "F",
      "school": "Sainte-Bernadette",
      "family": {
        "ko": "일곱 식구가 같이 살고 있습니다. 어머니께서는 길거리에서 장사를 하십니다.",
        "en": "Lives with seven family members. Mother is a street vendor."
      },
      "story": {
        "ko": "저는 영화보는 것을 좋아하고, 의사가 되는 것이 꿈입니다. 저희 부모님이 강건하시도록, 제가 꿈을 이룰 수 있도록 기도해주세요.",
        "en": "I enjoy watching movies, and my dream is to become a doctor. Please pray for my parents' strength and for me to achieve my dream."
      },
      "photo": "/image/students-picture/011.png"
    },
    {
      "registration_number": "012",
      "korean_name": "루드나이카",
      "english_name": "Elysee Lounaica",
      "grade": "8",
      "age": 14,
      "gender": "F",
      "school": "Luc-Elizer",
      "family": {
        "ko": "저희 집에는 일곱 식구가 같이 살고 있습니다. 아버지는 벽돌공이시고 어머니는 장사를 하십니다.",
        "en": "Lives with seven family members. Father is a bricklayer, and mother is a vendor."
      },
      "story": {
        "ko": "저는 건축가가 되는 것이 꿈입니다. 저희 부모님이 강건하시도록, 제가 꿈을 이룰 수 있도록 기도해주세요.",
        "en": "My dream is to become an architect. Please pray for my parents' strength and for me to achieve my dream."
      },
      "photo": "/image/students-picture/012.png"
  },
  {
    "registration_number": "013",
    "korean_name": "지벤손",
    "english_name": "Singel Jivenson",
    "grade": "11",
    "age": 17,
    "gender": "M",
    "school": "Mixe Emmanuel",
    "family": {
      "ko": "저희 가족은 8명이고 아버지께서는 농삿일을 하십니다.",
      "en": "My family consists of eight members, and my father is a farmer."
    },
    "story": {
      "ko": "저는 축구와 역사를 좋아하고, 컴퓨터 엔지니어가 되는 것이 꿈입니다.",
      "en": "I love soccer and history, and my dream is to become a computer engineer."
    },
    "photo": "/image/students-picture/013.png"
  }
];
