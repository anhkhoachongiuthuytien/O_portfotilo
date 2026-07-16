export const planets = [
  { name: "Mercury", label: "Sao Thủy", className: "planet-mercury", note: "Trật tự trong từng tệp" },
  { name: "Venus", label: "Sao Kim", className: "planet-venus", note: "Quan sát kỹ trước khi tin" },
  { name: "Mars", label: "Sao Hỏa", className: "planet-mars", note: "Thử, đo và tinh chỉnh prompt" },
  { name: "Jupiter", label: "Sao Mộc", className: "planet-jupiter", note: "Kết nối một nhóm cùng tiến" },
  { name: "Uranus", label: "Sao Thiên Vương", className: "planet-uranus", note: "Mở lối cho ý tưởng mới" },
  { name: "Neptune", label: "Sao Hải Vương", className: "planet-neptune", note: "Chiều sâu và trách nhiệm" },
] as const;

export function getPlanetForProject(id: number) {
  return planets[(id - 1) % planets.length];
}

export function getPlanetForDetail(id: number) {
  return getPlanetForProject(id);
}
