// ─────────────────────────────────────────────────────────────────────────────
// 숨표 더미 데이터
// TODO: 데이터팀 API 완성 시 각 export를 실제 fetch 함수로 교체
// ─────────────────────────────────────────────────────────────────────────────

export const dummyWeather = {
  condition: "맑음",
  temp: 22,
  location: "서울 강남구",
  icon: "sunny",
  isOutdoorOk: true,
}

export const dummyRecommendation = {
  weather: "맑음",
  noiseLevel: 45,
  wellnessScore: 82,
  location: "남산 백범광장 공원 벤치",
  bookTitle: "불안",
  bookAuthor: "알랭 드 보통",
  message: "오늘 같이 햇살 좋은 날엔 45dB의 조용한 벤치에서 사색을 즐겨보세요.",
}

export const dummyPlaces = [
  {
    id: "1",
    name: "남산 백범광장 공원",
    category: "공원",
    address: "서울 용산구 후암동 산 1-3",
    noiseLevel: 45,
    wellnessScore: 82,
    greenRate: 68,
    crowd: "낮음",
    distance: 500,
    isOpen: true,
    hours: "연중무휴 24시간",
    facilities: ["화장실", "그늘", "벤치", "wifi"],
    moodTags: ["조용함", "녹음", "사색"],
    bookIds: ["1", "2"],
    lat: 37.5512,
    lng: 126.9882,
  },
  {
    id: "2",
    name: "유어마인드 서점",
    category: "독립서점",
    address: "서울 마포구 망원동 441-1",
    noiseLevel: 38,
    wellnessScore: 91,
    greenRate: 12,
    crowd: "낮음",
    distance: 1200,
    isOpen: true,
    hours: "화~일 12:00–21:00 (월 휴무)",
    facilities: ["화장실", "에어컨"],
    moodTags: ["독립적", "빈티지", "창가"],
    bookIds: ["3", "1"],
    lat: 37.5567,
    lng: 126.9108,
  },
  {
    id: "3",
    name: "마포중앙도서관",
    category: "공공도서관",
    address: "서울 마포구 독막로 170",
    noiseLevel: 62,
    wellnessScore: 61,
    greenRate: 20,
    crowd: "보통",
    distance: 800,
    isOpen: false,
    hours: "화~일 09:00–22:00 (월 휴무)",
    facilities: ["화장실", "wifi", "냉방"],
    moodTags: ["집중", "조용함"],
    bookIds: ["2", "3"],
    lat: 37.5498,
    lng: 126.9066,
  },
]

export const dummyBooks = [
  {
    id: "1",
    title: "불안",
    author: "알랭 드 보통",
    publisher: "청미래",
    year: 2011,
    coverBg: "#EEEDFE",
    coverText: "#3C3489",
    tags: ["철학", "사색", "고요함"],
    description:
      "현대인이 일상에서 느끼는 '불안'의 원인을 철학·예술·문학을 통해 탐구하는 책. 지위와 성공에 집착하는 사회에서 자신만의 평온을 찾는 법을 이야기합니다.",
    placeIds: ["1"],
    purchaseUrl: "https://search.kakao.com/search?q=불안+알랭드보통",
    weatherMessage: "맑고 조용한 날, 공원 벤치에서 읽기 딱 좋은 책이에요.",
  },
  {
    id: "2",
    title: "연을 쫓는 아이",
    author: "할레드 호세이니",
    publisher: "현대문학",
    year: 2004,
    coverBg: "#E1F5EE",
    coverText: "#085041",
    tags: ["잔잔함", "감동", "서사"],
    description:
      "아프가니스탄을 배경으로 두 소년의 우정과 배신, 속죄의 긴 여정을 그린 소설. 잔잔하지만 깊은 감동을 주는 작품.",
    placeIds: ["1", "3"],
    purchaseUrl: "https://search.kakao.com/search?q=연을쫓는아이",
    weatherMessage: "흐린 날 실내에서 몰입해서 읽기 좋은 책이에요.",
  },
  {
    id: "3",
    title: "채식주의자",
    author: "한강",
    publisher: "창비",
    year: 2007,
    coverBg: "#FAEEDA",
    coverText: "#633806",
    tags: ["국내소설", "독립적", "감성"],
    description:
      "어느 날 갑자기 채식을 선언한 여성을 중심으로 펼쳐지는 세 편의 이야기. 욕망과 억압, 자유와 폭력을 섬세한 문체로 풀어낸 맨부커상 수상작.",
    placeIds: ["2"],
    purchaseUrl: "https://search.kakao.com/search?q=채식주의자+한강",
    weatherMessage: "조용한 독립서점 창가 자리에서 읽기 좋은 책이에요.",
  },
]

export const getNoiseColor = (dB: number) => {
  if (dB < 40) return { bg: "bg-teal-50", text: "text-teal-800", label: "매우 조용" }
  if (dB < 50) return { bg: "bg-amber-50", text: "text-amber-800", label: "조용" }
  if (dB < 60) return { bg: "bg-orange-50", text: "text-orange-800", label: "보통" }
  return { bg: "bg-red-50", text: "text-red-800", label: "시끄러움" }
}
