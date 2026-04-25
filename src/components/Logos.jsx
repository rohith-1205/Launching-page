const Logos = () => {
  return (
    <div className="header-logos">
      <img src="/logo1.png" alt="Logo 1" onError={(e) => e.target.style.display='none'} />
      <img src="/logo2.png" alt="Logo 2" onError={(e) => e.target.style.display='none'} />
    </div>
  );
};

export default Logos;
