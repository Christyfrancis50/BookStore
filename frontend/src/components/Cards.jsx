import "./FreeBook";

const Cards = ({item}) => {
  return (
    <>
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 w-92 shadow-xl py-8 hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.Image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           ${item.name}
            <div className="badge badge-secondary">${item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-lg border-[2px] hover:bg-pink-500 duration:">Buy Now</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cards;
