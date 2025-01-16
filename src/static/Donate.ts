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
      donationLink: '/donate-program',
      donorboxLink: '',
    },
    {
      id: 'hope-school',
      title: 'donation_hope_school',
      titleKo: '소망 학교 후원',
      titleEn: 'Hope School Sponsorship',
      donationLink: '/donate?program=hope-school',
      donorboxLink: 'https://donorbox.org/embed/oaktree-support-hope-school',
    },
    {
      id: 'college-students',
      title: 'donation_college_students',
      titleKo: '아이티 대학생 후원',
      titleEn: 'Haitian College Student Sponsorship',
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
      donationLink: '/donate?program=hope-clinic',
      donorboxLink: 'https://donorbox.org/embed/hope-clinic-donation',
    },
    {
      id: 'single-mothers',
      title: 'donation_single_mothers',
      titleKo: '미혼모 후원',
      titleEn: 'Single Mother Sponsorship',
      donationLink: '/donate?program=single-mothers',
      donorboxLink: 'https://donorbox.org/embed/support-single-mother?language=en',
    },
    {
      id: 'theological-school',
      title: 'donation_theological_school',
      titleKo: '라고나브 소망 신학교 후원',
      titleEn: 'Hope Theological School Sponsorship',
      donationLink: '/donate?program=theological-school',
      donorboxLink: 'https://donorbox.org/embed/support-hope-theological-seminary',
    }
  ]
};
