import { planets } from "@/src/data/planets";

export function PlanetLegend() {
  return <div className="planet-legend" aria-label="Bản đồ hành trình theo hành tinh"><span className="planet-legend-label">Bản đồ hành trình</span><div className="planet-legend-track">{planets.map((planet) => <span className={`planet-legend-item ${planet.className}`} key={planet.name}><span className="planet-chip-orb" />{planet.label}</span>)}</div></div>;
}
