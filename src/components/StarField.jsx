const StarField = () => {
  const stars = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    top:    `${Math.random() * 100}%`,
    left:   `${Math.random() * 100}%`,
    minOp:  (Math.random() * 0.2 + 0.05).toFixed(2),
    maxOp:  (Math.random() * 0.6 + 0.2).toFixed(2),
    dur:    `${(Math.random() * 3 + 2).toFixed(1)}s`,
    delay:  `${(Math.random() * 5).toFixed(1)}s`,
  }));

  return (
    <div className="starfield">
      {stars.map(s => (
        <span
          key={s.id}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            '--min-op': s.minOp,
            '--max-op': s.maxOp,
            '--dur':    s.dur,
            '--delay':  s.delay,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
