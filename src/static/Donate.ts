export const DONATE = [
  {
    title: "donate-program1-title",
    description: "donate-program1-description",
  },
  {
    title: "donate-program2-title",
    description: "donate-program2-description",
  },
  {
    title: "donate-program3-title",
    description: "donate-program3-description",
  },
  {
    title: "donate-program4-title",
    description: "donate-program4-description",
  },
];

export const DONATION_PROGRAM = {
  main: [
    {
      id: 'child',
      title: 'donation_child',
      titleKo: '1:1 어린이 후원',
      titleEn: 'Child Sponsorship',
      descriptionKo: '라고나브 지역 어린이들의 교육과 생계를 위한 1:1 결연 후원',
      descriptionEn: '1:1 sponsorship for education and livelihood of children in Lagonav',
      donationLink: '/donate-program',
      donorboxLink: '',
    },
    {
      id: 'hope-school',
      title: 'donation_hope_school',
      titleKo: '소망 학교 후원',
      titleEn: 'Hope School Sponsorship',
      descriptionKo: '라고나브 소망학교 학생들의 교육 환경 개선 및 급식 지원',
      descriptionEn: 'Support for educational environment and meals for Hope School students',
      donationLink: '/donate?program=hope-school',
      donorboxLink: 'https://donorbox.org/embed/oaktree-support-hope-school',
    },
    {
      id: 'college-students',
      title: 'donation_college_students',
      titleKo: '아이티 대학생 후원',
      titleEn: 'Haitian College Student Sponsorship',
      descriptionKo: '아이티 청년들의 고등교육 기회 제공을 위한 장학금 지원',
      descriptionEn: 'Scholarship support for higher education opportunities for Haitian youth',
      donationLink: '/donate?program=college-students',
      donorboxLink: 'https://donorbox.org/embed/oaktree-support-college-students',
    }
  ],
  minor: [
    {
      id: 'hope-clinic',
      title: 'donation_hope_clinic',
      titleKo: '소망 클리닉 후원',
      titleEn: 'Hope Clinic Sponsorship',
      descriptionKo: '소망 클리닉에 필요한 약품 공급 및 현지 의료인 후원',
      descriptionEn: 'Support for medical supplies and local medical staff at Somang Clinic',
      donationLink: '/donate?program=hope-clinic',
      donorboxLink: 'https://donorbox.org/embed/hope-clinic-donation',
    },
    {
      id: 'single-mothers',
      title: 'donation_single_mothers',
      titleKo: '미혼모 후원',
      titleEn: 'Single Mother Sponsorship',
      descriptionKo: '라고나브 미혼모들의 자립을 돕는 직업 훈련, 생계 지원',
      descriptionEn: 'Vocational training and livelihood support for single mothers in Lagonav',
      donationLink: '/donate?program=single-mothers',
      donorboxLink: 'https://donorbox.org/embed/support-single-mother?language=en',
    },
    {
      id: 'theological-school',
      title: 'donation_theological_school',
      titleKo: '라고나브 소망 신학교 후원',
      titleEn: 'Hope Theological School Sponsorship',
      descriptionKo: '라고나브 소망 신학교 신학생들의 학비 및 생계 지원',
      descriptionEn: 'Tuition and living expenses support for Somang Seminary students in Lagonav',
      donationLink: '/donate?program=theological-school',
      donorboxLink: 'https://donorbox.org/embed/support-hope-theological-seminary',
    }
  ]
};
