import { useState } from 'react';
import { Offers } from '@/types/offer';
import PlaceCard from '@/components/place-card/place-card';

type PlacesListProps = {
  offers: Offers;
}

function PlacesList({ offers }: PlacesListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleCardMouseEnter = (id: string) => {
    setActiveOfferId(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOfferId(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content" data-active-offer-id={activeOfferId ?? ''}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => handleCardMouseEnter(offer.id)}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
}

export default PlacesList;
