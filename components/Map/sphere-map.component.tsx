import { useEffect } from "react";
import { DEFAULT_COLOR, PICKED_COLOR } from "./theme";
import { UseMap } from "./use-map.hook";
import { MapType } from "./map.types";

export interface MapProps {
  visible: boolean;
}

export const SphereMap = ({ visible }: MapProps) => {
  const pickedCountries: string[] = []

  const onPolygonClick = (name: string) => {
    console.log("clicked", name)

    if (pickedCountries.includes(name)) {
      pickedCountries.splice(pickedCountries.indexOf(name), 1)
      highlightCountry.current ? highlightCountry.current(name, DEFAULT_COLOR) : null
      return
    }

    pickedCountries.push(name)

    highlightCountry.current ? highlightCountry.current(name, PICKED_COLOR) : null
    focusOnCountry.current ? focusOnCountry.current(name) : null
  }

  const { ref, highlightCountry, focusOnCountry } = UseMap({ onCountryPicked: onPolygonClick, mapType: MapType.sphere, isNotInteractive: false })

  useEffect(() => {
    highlightCountry.current("Соединённые Штаты Америки")
  })

  return (
    <>
      <div ref={ref} style={{ width: '100%', height: '100%', display: visible ? "block" : "none" }} />
    </>
  )
}
