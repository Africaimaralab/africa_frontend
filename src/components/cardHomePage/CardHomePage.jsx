import "./cardHomePage.css";
const CardHomePage = ({ icon }) => {
  return (
    <div className="bids-card-home">
      <div className="bids-top">
        <div>icon</div>
      </div>
      <div className="bids-card-top">
        <img src={icon} alt={icon} />
      </div>
      <div className="card-bottom">
        <div className="card-name">
          <div className="card-name__main">Lorem #33 </div>
          <div className="card-name__submain">Lorem Collection</div>
        </div>
        <div className="card-price">$ 5345</div>
        <div className="buy-and-love">
          <button className="card-btn-buy">Buy now </button>
          <div className="love">
            <div className="love-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33801 10.4312L8.55247 15.3296L8.55248 15.3296C8.65088 15.422 8.70008 15.4683 8.75051 15.4973C8.90495 15.5862 9.09505 15.5862 9.24949 15.4973C9.29992 15.4683 9.34913 15.422 9.44753 15.3296L14.662 10.4312C16.1291 9.05294 16.3073 6.78495 15.0734 5.19455L14.8413 4.89551C13.3652 2.99294 10.4022 3.31201 9.365 5.48524C9.21849 5.79222 8.78151 5.79222 8.635 5.48524C7.59778 3.31201 4.63479 2.99294 3.15866 4.89551L2.92664 5.19455C1.69271 6.78495 1.87087 9.05294 3.33801 10.4312Z"
                  stroke="#482B08"
                  stroke-opacity="0.8"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div className="love-number">235</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHomePage;