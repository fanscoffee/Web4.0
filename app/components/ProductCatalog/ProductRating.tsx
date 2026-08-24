interface ProductRatingProps {
  rating: 1 | 2 | 3
}

export function ProductRating({ rating }: ProductRatingProps) {
  return (
    <span
      className='inline-flex items-center gap-0.5 text-brand-gold'
      role='img'
      aria-label={`Top ${rating}: ${rating} ${rating === 1 ? 'estrella' : 'estrellas'}`}
    >
      {Array.from({ length: rating }, (_, index) => (
        <span key={index} aria-hidden='true'>
          ★
        </span>
      ))}
    </span>
  )
}
