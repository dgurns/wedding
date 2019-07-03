import PageContent from '../components/styles/PageContent';
import ContentSection from '../components/styles/ContentSection';
import theme from '../utils/theme';

const Story = () => (
  <PageContent>
    <div className="heading">How we met...</div>
    <img
      className="hero-image"
      src="/static/dan-christina-bk-bridge.jpg"
      style={theme.rotateStyle(-1)}
    />
    <ContentSection>
      <div className="content">
        Dan first came across Christina on the back cover of a Comhaltas
        magazine, modelling a purple velvet dress (pictures have all been
        destroyed). Later, he tried chatting her up at a music festival and was
        completely ignored. Luckily, the third time was the charm when they met
        at The Cobblestone in Dublin and began a transatlantic relationship.
      </div>
    </ContentSection>
    <ContentSection>
      <img src="/static/july-4th.jpg" style={theme.rotateStyle(2)} />
      <div className="content">
        Christina moved to New York and quickly became a "real American"! Before
        long she was working on a rooftop farm, playing on Broadway, and wearing
        silly Walmart t-shirts.
        <br />
        <br />
        After a whirlwind road trip around the western U.S., and a brief but
        unsuccessful attempt to move to Ireland, Dan and Christina moved upstate
        to the beautiful small town of New Paltz, New York. They became avid
        gardeners and enjoyed hiking the nearby Shawangunks and fostering a dog.
      </div>
      <img src="/static/carrots.jpg" style={theme.rotateStyle(-1)} />
    </ContentSection>
    <ContentSection>
      <img src="/static/engagement-drinks.jpg" style={theme.rotateStyle(-2)} />
      <div className="content">
        After a trip to Ireland and just before the Catskills festival, Dan
        popped the question to Christina during a hike at Lake Minnewaska,
        barely avoiding a very unpredictable group of Chinese tourists. Luckily
        she said yes!
        <br />
        <br />
        Now they are living in Dublin, Ireland and can't wait to celebrate with
        you!
      </div>
    </ContentSection>
  </PageContent>
);

export default Story;
