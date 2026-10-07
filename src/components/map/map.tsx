import { useEffect, useRef } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';
import clsx from 'clsx';
import { City, Offers } from '@/types/offer';
import { URL_MARKER_DEFAULT } from '@/const';
import useMap from '@/hooks/use-map';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  className: string;
  city: City;
  offers: Offers;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map({ className, city, offers }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(defaultCustomIcon).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers]);

  return <section className={clsx(className, 'map')} ref={mapRef}></section>;
}

export default Map;
