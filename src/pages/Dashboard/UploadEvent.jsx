
import toast from "react-hot-toast";
import Heading from "../../components/Heading";

export default function UploadEvent() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const time = form.time.value;
        const date = form.date.value;
        const tickets = form.tickets.value;
        const price = form.price.value;
        const imgUrl = form.imgUrl.value;
        const description = form.description.value;
    
        const postData = { title, time, date, tickets, price, imgUrl, description};
        console.log(postData);
    
        // Upload post api
        await fetch('https://theater-seat-server.vercel.app/events', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(postData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success('Successfully added a event')
            form.reset();
          });
      };
  return (
    <div className="p-5 lg:p-10">
      {/* Heading */}
      <Heading heading={"Upload Event"} />
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-xl">
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Title:
              <input
                type="text"
                name="title"
                className="grow"
                required
              />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Time:
              <input
                type="time"
                name="time"
                placeholder="20:00"
                className="grow"
                required
              />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Date:
              <input
                type="date"
                name="date"
                className="grow"
                required
              />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Tickets:
              <input
                type="number"
                name="tickets"
                className="grow"
                required
              />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Price:
              <input
                type="text"
                name="price"
                className="grow"
                required
              />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Image:
              <input
                type="text"
                name="imgUrl"
                placeholder="URL"
                className="grow"
                required
              />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="textarea textarea-bordered flex items-center gap-2">
              Description:
              <textarea
                type="text"
                name="description"
                className="grow"
                required
              />
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary text-white"
              type="submit"
              value="Upload"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
