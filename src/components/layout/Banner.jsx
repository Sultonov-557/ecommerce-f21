import bannerImage from "../../image/banner.png";
import avatar from '../../assets/icons/avatar.png'
function Banner() {
  return (  
    <section className="banner">
      <div className="container">
        <div className="banner-row">
          <div className="banner-left">
            <ul className="banner-list">
              <li className="banner-list-item active">Automobiles</li>
              <li className="banner-list-item active">Clothes and wear</li>
              <li className="banner-list-item active">Home interiors</li>
              <li className="banner-list-item active">Computer and tech</li>
              <li className="banner-list-item active">Tools, equipments</li>
              <li className="banner-list-item active">Sports and outdoor</li>
              <li className="banner-list-item active">Animal and pets</li>
              <li className="banner-list-item active">Machinery tools</li>
              <li className="banner-list-item active">More category</li>
            </ul>
          </div>
          <div className="banner-center">
            <div className="banner-banner">
              <div className="banner-banner__info">
                <h3 className="banner-banner__info-toptitle">
                  Latest trending
                </h3>
                <h2 className="banner-banner__info-title">Electronic items</h2>
                <button className="banner-banner__info-btn">Learn more</button>
              </div>
              <div className="banner-banner__image">
                <img src={bannerImage} alt="" />
              </div>
            </div>
          </div>
          <div className="banner-right">
            <div className="banner__content">
                <div className="banner__content-userpanel">
                    <div className="banner__content-userpanel-wrap">
                        <div className="banner__content-userpanel-image">
                            <img src={avatar} alt="" />
                        </div>
                        <div className="banner__content-userpanel-info">
                            <p className="banner__content-userpanel-info-text">Hi, user </p>
                            <p className="banner__content-userpanel-info-text">let’s get stated</p>
                        </div>
                    </div>
                    <div className="banner__content-userpanel__buttons">
                        <button className="banner__content-userpanel__buttons-btn">Join now</button>
                        <button className="banner__content-userpanel__buttons-btn2">Log in</button>
                    </div>
                </div>
                <div className="banner__content-panel panel-one">
                    <p className="banner__content-panel-text">Get US $10 off with a new supplier</p>
                </div>
                <div className="banner__content-panel panel-two">
                    <p className="banner__content-panel-text">Get US $10 off with a new supplier</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
