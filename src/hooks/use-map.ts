import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import { City } from '@/types/offer';
import { TILE_LAYER_ATTRIBUTION, TILE_LAYER_URL } from '@/components/map/const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(TILE_LAYER_URL, {
        attribution: TILE_LAYER_ATTRIBUTION,
      });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
