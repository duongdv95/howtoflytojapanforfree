export default function CreditInfoCards({ props }) {
  const { creditCardInfoArray } = props;
  const cardMap = creditCardInfoArray.map((element) => {
    const { color, image, title, benefits, referralLink } = element;
    return (
      <div className="column" key={title}>
        <div className={`card is-background-${color}`}>
          <div className="card-content">
            <div className="columns is-mobile">
              <div className="column card-image is-flex">
                <figure className="image">
                  <img src={image} alt="cfu" />
                </figure>
              </div>
              <div className="column is-flex is-align-items-center">
                <h5 className="title is-4 has-text-centered">{title}</h5>
              </div>
            </div>
            <div>
              <div className="content">
                <ul>
                  {benefits.map((number, index) => (
                    <li key={index}>{number}</li>
                  ))}
                </ul>
              </div>
              <div className="has-text-centered">
                <button className="button is-danger">
                  <a href={referralLink} target="_blank">
                    More Info
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div className="columns">{cardMap}</div>;
}
