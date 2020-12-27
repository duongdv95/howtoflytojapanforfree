import Head from "next/head";
import CreditInfoCards from "../components/creditcard";
import data from "../data/websitedata.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>How To Fly To Japan For Free</title>
        <script
          src="https://kit.fontawesome.com/a5ab9cb639.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section id="landing" className="hero is-fullheight has-bg-img">
        <div className="hero-body container">
          <div className="has-text-centered">
            <h1 className="has-text-white hero-title">
              FLY TO JAPAN
              <br />
              FOR FREE
            </h1>
            <button className="button is-large is-danger">
              <a href="#introduction">LEARN MORE 👇</a>
            </button>
          </div>
        </div>
      </section>

      <section id="introduction" className="hero is-fullheight section">
        <div className="columns">
          <div className="column is-three-quarters container">
            <h1 className="title has-text-centered is-1">THE STRATEGY</h1>
            <hr />
            <h1 className="subtitle has-text-centered is-4">
              GET THESE 3 CREDIT CARDS 💳
            </h1>
            <h1 className="subtitle has-text-centered is-5 description">
              They share the same Ultimate Rewards (UR) Points System!
            </h1>
            {/* Earning the sign-up bonus for each card will net you 100,000+ points. These points can be redeemed for $1000+ value OR redeemed for travel for EXTRA value using the Sapphire Preferred/Reserve. */}
            <CreditInfoCards
              props={{ creditCardInfoArray: data.creditCardInfoArray }}
            />
            <h1 className="title has-text-centered is-3">Here's the math 🤓</h1>
            <span></span>
            <h1 className="subtitle has-text-centered is-4">
              <mark>$200 + $200 + $600 = $1000</mark>
            </h1>
            <h1 className="subtitle has-text-centered is-4 description">
              $1000 x 1.25 (Sapphire Preferred multiplier) = $1250 when redeemed
              for travel ✈️
            </h1>
            <h1 className="subtitle has-text-centered is-4 rebut">
              you: BUT WAIT! IT’S NOT REALLY FREE IF I HAVE TO SPEND MONEY TO
              GET THE BONUS 😠
            </h1>
            <h1 className="subtitle has-text-centered is-4 response">
              me: You won't have to spend extra money!
            </h1>
            <div className="has-text-centered">
              <button className="button is-danger is-medium">
                <a href="#everydayspend">Keep reading 👇</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="everydayspend" className="hero is-fullheight section">
        <div className="columns">
          <div className="column is-one-third container">
            <h1 className="title has-text-centered is-1 is-text-color-white">
              EVERYDAY SPEND
            </h1>
            <hr />
            <h1 className="subtitle has-text-centered is-4">
              GROCERIES, DINING, TRANSPORATION, AND MORE
            </h1>
            <div>
              <div>
                <div className="columns is-mobile">
                  <div className="column is-two-fifths-desktop">
                    <figure className="image">
                      <img src="/grocery.png" alt="grocery" />
                    </figure>
                  </div>
                  <div className="column is-flex is-align-items-center">
                    Spend on groceries &#38; supplies that you were going to buy
                    anyway
                  </div>
                </div>
              </div>

              <div>
                <div className="columns is-mobile">
                  <div className="column is-flex is-align-items-center">
                    Pay the bill when dining out and have friends Venmo you back
                  </div>
                  <div className="column is-two-fifths-desktop">
                    <figure className="image">
                      <img src="/dining.png" alt="eating" />
                    </figure>
                  </div>
                </div>
              </div>

              <div>
                <div className="columns is-mobile">
                  <div className="column is-two-fifths-desktop">
                    <figure className="image">
                      <img src="/transporation.png" alt="gas" />
                    </figure>
                  </div>
                  <div className="column is-flex is-align-items-center">
                    Pay for commuting or transportation costs
                  </div>
                </div>
              </div>

              <div>
                <div className="columns is-mobile">
                  <div className="column is-flex is-align-items-center">
                    Spend money on gifts for the holidays
                  </div>
                  <div className="column is-two-fifths-desktop">
                    <figure className="image">
                      <img src="/holiday.png" alt="gas" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <h4 className="title is-4 has-text-centered">
              A couple more ideas..
            </h4>
            <div className="content">
              <ul>
                <li>Get reimbursed for work-related expenses</li>
                <li>Buying major appliances you were already going to buy</li>
                <li>Paying for car repairs/paying bills</li>
              </ul>
            </div>
            <h4 className="title is-4 has-text-centered">
              Convinced? Make sure you read the strategy BEFORE applying!
            </h4>
            <div className="has-text-centered">
              <button className="button is-danger is-medium">
                <a href="#strategy">Strategy 👇</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="strategy" className="section hero is-fullheight">
        <div className="columns">
          <div className="column is-one-third container">
            <h1 className="title is-1 has-text-centered">
              STRATEGY FOR APPLYING
            </h1>
            <hr />
            <h1 className="subtitle has-text-centered is-3"></h1>
            <div className="information">
              <div>
                <h1 className="title is-4">Credit History</h1>
                <p>
                  5+ newly opened credit card accounts in the past 2 years{" "}
                  <span className="denial">will result in a denial.</span>
                </p>
                <br />
                <p>
                  You want to have at least{" "}
                  <span className="history">ONE year of credit history</span>{" "}
                  before applying and{" "}
                  <span className="credit">good credit score.</span>
                </p>
              </div>
              <br />
              <div className="content">
                <h1 className="title is-4">Recommended Application Rate</h1>
                <p>I recommend applying once every 3 months.</p>
                <ul>
                  <li className="month">
                    May -{" "}
                    <a href={data.chaseFreedomFlexReferralLink} target="_blank">
                      Apply for Chase Freedom Unlimited
                    </a>
                  </li>
                  <li className="month">
                    August -{" "}
                    <a href={data.chaseFreedomFlexReferralLink} target="_blank">
                      Apply for Chase Freedom Flex
                    </a>
                  </li>
                  <li className="month">
                    November -{" "}
                    <a
                      href={data.chaseSapphirePreferredReferralLink}
                      target="_blank"
                    >
                      Apply for Chase Sapphire Preferred
                    </a>
                  </li>
                </ul>
                <p>If everything is going according to plan..</p>
                <p>
                  By December or January, you should have enough points to book
                  a flight to Japan for April (🌸 cherry blossom season
                  post-covid).
                </p>
              </div>
              <div className="content">
                <h1 className="title is-4">Not automatically approved?</h1>
                <p>
                  If you are not automatically approved, check out the{" "}
                  <a href="https://imgur.com/a/oXlPW" target="_blank">
                    approval guide.
                  </a>
                </p>
                <p>
                  Sometimes you just need to call 1-888-270-2127 (recon line) to
                  verify your identity or push your case.
                </p>
                <p>
                  *Tip you can get a card expedited this way, just say you have
                  a major purchase and you need the card ASAP
                </p>
                <p>
                  <mark>
                    As always, do your research! I'm not responsible for any
                    issues or mishaps you run into.
                  </mark>
                </p>
              </div>
            </div>
            <br />
            <div className="has-text-centered">
              <button className="button is-danger">
                <a href="#bookflight">Combine Points 👇</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="bookflight" className="section hero is-fullheight">
        <div className="columns">
          <div className="column is-one-third container">
            <h1 className="title is-1 has-text-centered">
              COMBINE POINTS &#38; BOOK YOUR FLIGHT
            </h1>
            <hr />
            <figure className="image">
              <img src="/ultimaterewards.png" />
            </figure>
            <div className="content">
              <ol>
                <li>Log into your Chase account.</li>
                <li>Go to your Ultimate Rewards Portal.</li>
                <li>
                  Click <span>Combine Points</span> and transfer points from
                  your Freedom cards to your Chase Sapphire Preferred.
                </li>
                <li>
                  Click <span>Travel</span> and book your flight!
                </li>
              </ol>
            </div>
            <p className="totalpoints">
              You should have over 100,000 ($1000) points &#38; additional
              points from cashback.
            </p>
            <br />
            <p>
              Remember points are <span>worth 1.25 times</span> more when
              redeemed for
            </p>
            <div className="content">
              <ul>
                <li>
                  ✈️ Flights - 64k points could pay for $800 plane ticket! ($640
                  x 1.25 = $800)
                </li>
                <li>🏨 Hotels &#38; Hostels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
