import PageContent from '../components/styles/PageContent';
import ContentSection from '../components/styles/ContentSection';
import theme from '../utils/theme';

const Schedule = () => (
  <PageContent>
    <div className="heading">Thursday Sept. 26</div>
    <ContentSection>
      <img
        src="/static/hairy-lemon-building.jpg"
        style={theme.rotateStyle(-1)}
      />
      <div className="content">
        <div className="subtitle">8pm at The Hairy Lemon</div>
        Gathering for drinks to catch up and welcome everyone to Dublin!
        <div className="address">
          Stephen St. Lower, Dublin 2<br />
          <a href="https://goo.gl/maps/fw5YY9w6Xpdvoysp7">
            goo.gl/maps/fw5YY9w6Xpdvoysp7
          </a>
        </div>
      </div>
    </ContentSection>
    <div className="heading">Friday Sept. 27</div>
    <ContentSection>
      <img src="/static/flowers.jpg" style={theme.rotateStyle(2)} />
      <div className="content">
        <div className="subtitle">2pm at Fallon & Byrne</div>
        Wedding ceremony, Joshua Dukes presiding.
        <div className="address">
          11-17 Exchequer Street (2nd floor), Dublin 2<br />
          <a href="https://goo.gl/maps/rmBZKMB2FDN2zx7b7">
            goo.gl/maps/rmBZKMB2FDN2zx7b7
          </a>
        </div>
      </div>
    </ContentSection>
    <ContentSection>
      <img src="/static/kehoes.jpg" style={theme.rotateStyle(-1)} />
      <div className="content">
        <div className="subtitle">3:30pm at Kehoe's Pub</div>
        Stroll up Grafton Street for pints and cocktails at Kehoe’s – some say
        the best pint of Guinness in Dublin.
        <div className="address">
          9 Anne St South, Dublin 2<br />
          <a href="https://goo.gl/maps/B7QS2akVkzpokmZd7">
            goo.gl/maps/B7QS2akVkzpokmZd7
          </a>
        </div>
      </div>
    </ContentSection>
    <ContentSection>
      <img
        src="/static/fallon-and-byrne-wedding.jpg"
        style={theme.rotateStyle(1)}
      />
      <div className="content">
        <div className="subtitle">5:30pm at Fallon & Byrne</div>
        Dinner and reception back at Fallon & Byrne. Bring your instruments!
        <div className="address">
          11-17 Exchequer Street (2nd floor), Dublin 2<br />
          <a href="https://goo.gl/maps/rmBZKMB2FDN2zx7b7">
            goo.gl/maps/rmBZKMB2FDN2zx7b7
          </a>
        </div>
      </div>
    </ContentSection>
    <div className="heading">Saturday Sept. 28</div>
    <ContentSection>
      <img src="/static/brother-hubbard.jpg" style={theme.rotateStyle(-2)} />
      <div className="content">
        <div className="subtitle">12pm at Brother Hubbard North</div>
        Brunch at Brother Hubbard, delicious Middle Eastern/Irish restaurant on
        Capel Street.
        <div className="address">
          153 Capel Street, Dublin 1<br />
          <a href="https://goo.gl/maps/kGWfndhEgxHTDDzH6">
            goo.gl/maps/kGWfndhEgxHTDDzH6
          </a>
        </div>
      </div>
    </ContentSection>
    <ContentSection>
      <img src="/static/spoons.jpg" style={theme.rotateStyle(-2)} />
      <div className="content">
        <div className="subtitle">2pm onwards</div>
        Tunes and hang
        <div className="address">
          TBD
          <br />
          <a>link</a>
        </div>
      </div>
    </ContentSection>
  </PageContent>
);

export default Schedule;
