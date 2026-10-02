type CardBadgeProps = {
  className: string;
};

function CardBadge({ className }: CardBadgeProps): JSX.Element {
  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}

export default CardBadge;
