import { useEffect, useRef } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';
import clsx from 'clsx';
import { City, Offers } from '@/types/offer';
import useMap from '@/hooks/use-map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  className: string;
  city: City;
  offers: Offers;
  activeOfferId: string | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map({
  className,
  city,
  offers,
  activeOfferId,
}: MapProps): JSX.Element {
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

        marker
          .setIcon(
            offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon,
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOfferId]);

  return <section className={clsx(className, 'map')} ref={mapRef}></section>;
}

export default Map;
