import PageContent from '../components/styles/PageContent';
import ContentSection from '../components/styles/ContentSection';
import theme from '../utils/theme';

const Lodging = () => (
  <PageContent>
    <div className="heading">Hotels</div>
    <ContentSection>
      <img src="/static/central-hotel.jpg" style={theme.rotateStyle(-2)} />
      <div className="content">
        <div className="subtitle">The Central Hotel</div>
        This venerable Dublin institution is located right next door to the
        wedding venue. We've block booked rooms, so if you'd like to reserve a
        room there, just email info@centralhotel.ie and include "For Isobel's
        attention" and mention our wedding. They should be discounted off the
        public rate for Thurs, Fri, and Sat (Sept 26 - 28).
        <div className="address">
          1-5 Exchequer Street, Dublin 2<br />
          <a href="https://www.centralhoteldublin.com/">
            centralhoteldublin.com
          </a>
        </div>
      </div>
    </ContentSection>
    <ContentSection>
      <img src="/static/kellys-hotel.jpg" style={theme.rotateStyle(1)} />
      <div className="content">
        <div className="subtitle">Kelly's Hotel</div>
        Also quite close to the venue and accessible to a bunch of restaurants,
        bars, and attractions on the south side.
        <div className="address">
          36 South Great Georges Street, Dublin 2<br />
          <a href="http://kellysdublin.com">kellysdublin.com</a>
        </div>
      </div>
    </ContentSection>
    <ContentSection>
      <img src="/static/mercantile-hotel.jpg" style={theme.rotateStyle(-1)} />
      <div className="content">
        <div className="subtitle">The Mercantile Hotel</div>
        The Mercantile is also just a few blocks from the venue, and closer to
        the Temple Bar area... if you dare.
        <div className="address">
          28 Dame Street, Dublin 2<br />
          <a href="https://www.mercantilehotel.ie/en/">mercantilehotel.ie</a>
        </div>
      </div>
    </ContentSection>
    <div className="heading">Airbnbs</div>
    <ContentSection>
      <img src="/static/airbnb-dublin.jpg" style={theme.rotateStyle(2)} />
      <div className="content">
        <div className="subtitle">Various Airbnb options</div>
        Some of the best value accommodation in Dublin is probably found via
        Airbnb. There should be a number of places within a short walk of Fallon
        & Byrne / Grafton Street, and the area is a fun place for sightseeing
        and food.
        <div className="address">
          <a href="https://www.airbnb.ie/">airbnb.ie</a>
        </div>
      </div>
    </ContentSection>
  </PageContent>
);

export default Lodging;
