import CollageStyles from './styles/Collage';

const Collage = props => (
  <CollageStyles>
    <img className="image--center" src="/static/hapenny-bridge.jpg" />
    <img className="image--top-left" src="/static/fiddle-drawing.jpg" />
    <img className="image--left" src="/static/flowers.jpg" />
    <img className="image--bottom-left" src="/static/mason-jars.jpg" />
    <img className="image--top-right" src="/static/dan-christina-door.jpeg" />
    <img className="image--right" src="/static/kehoes-sign-evening.jpg" />
    <img className="image--bottom-right" src="/static/guinness-kehoes.jpg" />
  </CollageStyles>
);

export default Collage;
