

export default function Heading({heading}) {
  return (
    <div className="mb-10">
      <h2 className="text-xl lg:text-3xl text-center mb-2">{heading}</h2>
      <div className="flex justify-center ">
      <hr className="w-28" />
      </div>
    </div>
  )
}
