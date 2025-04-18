import SocialMedia from "@/app/components/socialmedia";

export default function Events() {
  return (
    <div>
      <div className="page-details">
        <div className="card-details">
          <img
            className="details-img"
            src="concerts-coachella.jpg"
            alt="concerts-coachella-img"
          ></img>
          <div className="details-wrapper">
            <div className="details-group">
              <div className="details-dividerA  border-b-2 border-[#222432]">
                <div className="details-text-group">
                  <h3 className="title">Coachella</h3>
                  <p className="card-text">
                    Stadion Gelora Bung Karno, Jakarta
                  </p>
                  <p className="card-text">6 - 8 Juni 2025 14:00 PM</p>
                </div>
              </div>
              <div className="details-dividerA">
                <div className="details-text-group">
                  <p className="card-text">
                    Coachella is an annual music and arts festival held at the
                    Empire Polo Club in Indio, California, in the Coachella
                    Valley in the Colorado Desert. It was co-founded by Paul
                    Tollett and Rick Van Santen in 1999, and is organized by
                    Goldenvoice, a subsidiary of AEG Presents.[2] The event
                    features musical artists from many genres of music,
                    including rock, pop, indie, hip hop and electronic dance
                    music, as well as art installations and sculptures. Across
                    the grounds, several stages continuously host live music.
                  </p>
                </div>
              </div>
            </div>
            <div className="details-dividerB">
              <div className="details-buy-group">
                <button className="buttonC">Buy Now</button>
                <p className="card-text">Share this event</p>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
