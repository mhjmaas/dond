export default function TeamGrid( props ) {
  return (
    <div data-w-id={props.id} className="w-layout-grid grid team-grid interaction2">
    <div className="team-block">
      <div className="player-image-wrapper"><img srcSet="images/s1-p-500.png 500w, images/s1.png 512w" loading="lazy" sizes="(max-width: 479px) 90vw, (max-width: 767px) 91vw, 92vw" src="images/s1.png" alt="" className="player-image"/></div>
      <div className="team-detail">
        <h5>s-1</h5>
        <div className="subheading-small-white">Professional Medic and Commander</div>
      </div>
    </div>
    <div className="team-block">
      <div className="player-image-wrapper"><img src="images/joker.png" loading="lazy" alt="" className="player-image"/></div>
      <div className="team-detail">
        <h5>LIGE</h5>
        <div className="subheading-small-white">Joker SQUAD Leader</div>
      </div>
    </div>
    <div className="team-block">
      <div className="player-image-wrapper"><img srcSet="images/gog-p-500.png 500w, images/gog.png 512w" loading="lazy" sizes="(max-width: 479px) 90vw, (max-width: 767px) 91vw, 92vw" src="images/gog.png" alt="" className="player-image"/></div>
      <div className="team-detail">
        <h5>GOG</h5>
        <div className="subheading-small-white">Vector SQuad Engineer</div>
      </div>
    </div>
    <div className="team-block">
      <div className="player-image-wrapper"><img srcSet="images/falcon-p-500.png 500w, images/falcon.png 512w" loading="lazy" sizes="(max-width: 479px) 90vw, (max-width: 767px) 91vw, 92vw" src="images/falcon.png" alt="" className="player-image"/></div>
      <div className="team-detail">
        <h5>Falcon</h5>
        <div className="subheading-small-white">Vector Squad Assault</div>
      </div>
    </div>
    <div className="team-block">
      <div className="player-image-wrapper"><img src="images/ancient.png" loading="lazy" alt="" className="player-image"/></div>
      <div className="team-detail">
        <h5><strong>Anci3nTKnowLedg3</strong></h5>
        <div className="subheading-small-white">Tank commander PACE Squad</div>
      </div>
    </div>
    <div className="team-block">
      <div className="player-image-wrapper"><img srcSet="images/mimikiwi-p-500.png 500w, images/mimikiwi.png 512w" loading="lazy" sizes="(max-width: 479px) 90vw, (max-width: 767px) 91vw, 92vw" src="images/mimikiwi.png" alt="" className="player-image"/></div>
      <div className="team-detail">
        <h5>MIMIKIWI</h5>
        <div className="subheading-small-white">Vector Squad Leader and SUPPORT</div>
      </div>
    </div>
    <div className="team-block">
      <div className="player-image-wrapper"><img srcSet="images/bullseye-p-500.png 500w, images/bullseye.png 512w" loading="lazy" sizes="(max-width: 479px) 90vw, (max-width: 767px) 91vw, 92vw" src="images/bullseye.png" alt="" className="player-image"/></div>
      <div className="team-detail">
        <h5>BULLSEYE</h5>
        <div className="subheading-small-white">BOOMERS Squad Lead</div>
      </div>
    </div>
    <div className="team-block">
      <div className="player-image-wrapper"><img src="images/legend.png" loading="lazy" alt="" className="player-image"/></div>
      <div className="team-detail">
        <h5>LEGENDSNIPER</h5>
        <div className="subheading-small-white">Vector Squad RECON</div>
      </div>
    </div>
  </div>);
}