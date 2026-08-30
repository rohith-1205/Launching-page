const getPseudoRandom = (seed) => {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
};

const STARS = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  top: `${(getPseudoRandom(i * 1.1) * 100).toFixed(2)}%`,
  left: `${(getPseudoRandom(i * 2.3 + 1) * 100).toFixed(2)}%`,
  minOp: (getPseudoRandom(i * 3.7 + 2) * 0.2 + 0.05).toFixed(2),
  maxOp: (getPseudoRandom(i * 4.1 + 3) * 0.6 + 0.2).toFixed(2),
  dur: `${(getPseudoRandom(i * 5.9 + 4) * 3 + 2).toFixed(1)}s`,
  delay: `${(getPseudoRandom(i * 6.3 + 5) * 5).toFixed(1)}s`,
}));

const StarField = () => {
  return (
    <div className="starfield">
      {STARS.map(s => (
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
