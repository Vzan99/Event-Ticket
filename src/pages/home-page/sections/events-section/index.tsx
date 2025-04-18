import Link from "next/link";

export default function EventsSection() {
  return (
    <div>
      <section className="content-events">
        <h2 className="discover-events title">
          Concerts
          <button className="buttonB">View More</button>
        </h2>
        <div className="discover-events">
          <div className="card-events">
            <img
              className="card-img"
              src="concerts-coachella.jpg"
              alt="concerts-coachella-img"
            ></img>
            <div className="card-text-group">
              <h3 className="card-title">Coachella</h3>
              <p className="card-text">Stadion Gelora Bung Karno, Jakarta</p>
              <p className="card-text">6 - 8 Juni 2025 14:00 PM</p>
              <Link href="/" className="links">
                Event Details
              </Link>
            </div>
          </div>
          <div className="card-events">
            <img
              className="card-img"
              src="concerts-bruno-mars.jpg"
              alt="concerts-bruno-mars-img"
            ></img>
            <div className="card-text-group">
              <h3 className="card-title">Bruno Mars</h3>
              <p className="card-text">Stadion Gelora Bung Karno, Jakarta</p>
              <p className="card-text">4 - 5 Juli 2025 14:00 PM</p>
              <Link href="/" className="links">
                Event Details
              </Link>
            </div>
          </div>
          <div className="card-events">
            <img
              className="card-img"
              src="concerts-atma-asta.jpg"
              alt="concerts-atma-asta-img"
            ></img>
            <div className="card-text-group">
              <h3 className="card-title">Atma Asta</h3>
              <p className="card-text">
                Gedung Sabuga, Institut Teknologi Bandung
              </p>
              <p className="card-text">12 - 13 Juli 2025 14:00 PM</p>
              <Link href="/" className="links">
                Event Details
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="content-events">
        <div className="content-events">
          <h2 className="discover-events title">
            Festivals
            <button className="buttonB">View More</button>
          </h2>
          <div className="discover-events">
            <div className="card-events">
              <img
                className="card-img"
                src="festivals-bali-spirit.jpg"
                alt="festivals-bali-spirit-img"
              ></img>
              <div className="card-text-group">
                <h3 className="card-title">Bali Spirit Festivals</h3>
                <p className="card-text">Yoga Barn, Ubud, Bali</p>
                <p className="card-text">7 - 11 Mei 2025 12:00 PM</p>
                <Link href="/" className="links">
                  Event Details
                </Link>
              </div>
            </div>
            <div className="card-events">
              <img
                className="card-img"
                src="festival-java-jazz.jpg"
                alt="festival-java-jazz-img"
              ></img>
              <div className="card-text-group">
                <h3 className="card-title">
                  Jakarta International Java Jazz Festival 2025
                </h3>
                <p className="card-text">
                  Jakarta International Expo Kemayoran, Jakarta
                </p>
                <p className="card-text">30 Mei - 1 Juni 2025 12:00 PM</p>
                <Link href="/" className="links">
                  Event Details
                </Link>
              </div>
            </div>
            <div className="card-events">
              <img
                className="card-img"
                src="festival-pangaea.jpg"
                alt="festival-pangaea-img"
              ></img>
              <div className="card-text-group">
                <h3 className="card-title">Pangaea Festival</h3>
                <p className="card-text">Naya Veda Vastu, Ubud, Bali</p>
                <p className="card-text">20 Juli 2025 12:00 PM</p>
                <Link href="/" className="links">
                  Event Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
