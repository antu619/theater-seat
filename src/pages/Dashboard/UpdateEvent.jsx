
import { useLoaderData } from 'react-router-dom';
import Heading from '../../components/Heading'
import toast from 'react-hot-toast';

export default function UpdateEvent() {
    const data = useLoaderData();

  // Handle Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const time = form.time.value;
    const date = form.date.value;
    const tickets = form.tickets.value;
    const price = form.price.value;
    const imgUrl = form.imgUrl.value;
    const description = form.description.value;

    const eventUpdateData = { title, time, date, tickets, price, imgUrl, description };


    const alert = window.confirm(
      `Do you want to update "${data?.title}`
    );

    if (alert) {
      await fetch(`http://localhost:5000/events/${data?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(eventUpdateData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success(`Successfully Update ${title}`)
        });
    }
  };
  return (
    <div className="p-5 lg:p-10">
      {/* Heading */}
      <Heading heading={"Update Event"} />
      <div className="flex justify-center">
        <form onSubmit={handleUpdate} className="w-full max-w-xl">
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Title:
              <input type="text" name="title" className="grow" required defaultValue={data?.title} />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Time:
              <input type="time" name="time" className="grow" required defaultValue={data?.time}/>
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Date:
              <input type="date" name="date" className="grow" required defaultValue={data?.date}/>
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Tickets:
              <input type="tickets" name="tickets" className="grow" required defaultValue={data?.tickets}/>
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Price:
              <input type="price" name="price" className="grow" required defaultValue={data?.price} placeholder='provide price / free'/>
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Image URL:
              <input type="text" name="imgUrl" className="grow" required defaultValue={data?.imgUrl}/>
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
                defaultValue={data?.description}
              ></textarea>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary text-white"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
