import { Offers } from '@/types/offer';
import PlaceCard from '@/components/place-card/place-card';

type PlacesListProps = {
  offers: Offers;
  onActiveOfferChange: (id: string | null) => void;
};

function PlacesList({
  offers,
  onActiveOfferChange,
}: PlacesListProps): JSX.Element {
  const handleCardMouseEnter = (id: string) => {
    onActiveOfferChange(id);
  };

  const handleCardMouseLeave = () => {
    onActiveOfferChange(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          type="cities"
          onMouseEnter={() => handleCardMouseEnter(offer.id)}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
}

export default PlacesList;
