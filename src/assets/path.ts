export const imgNamePath = [
  "Cho-Phan-Thiet.jpeg",
  "Da-Lat.jpeg",
  "Dong-Thap.jpeg",
  "Gia-Lai.jpeg",
  "Hai-Phong.jpeg",
  "Phu-Yen.jpeg",
  "Quang-Ngai.jpeg",
  "ruong-bac-thang-Sapa.jpeg",
  "Tay-Ninh.jpeg",
  "tour-du-lich-cao-bang-2-ngay-1-dem-750x460.webp",
  "Yen-Bai.jpeg",
]

export const getRandImg = (root: string) => {
  return root + imgNamePath[Math.floor(Math.random() * imgNamePath.length)]
}
