

export default function EventCard({event}) {
    const {title, imgUrl, time, date, tickets, price} = event
  return (
    <div style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} className="card card-compact bg-base-200 rounded-none">
  <figure><img src={imgUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{time}</p>
    <p>{date}</p>
    <p>{tickets}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full uppercase">Book Now</button>
    </div>
  </div>
</div>
  )
}
