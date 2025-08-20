const MenuItems = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
      <div className=" flex  grid-cols-3">
          <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={image}
        />
      </figure>
         <p className="bg-black px-2 right-0 mr-4 mt-4 absolute text-white w-14">${price}</p>
      <div className="card-body">
        <h2 className="card-title text-center justify-center">{name}</h2>
        <p className="text-center">
            {recipe}
        </p>
     
        <div className="card-actions justify-end">
          <p className="btn btn-primary uppercase">Add a cart</p>
        </div>
      </div>
    </div>
        
      </div>
 
  );
};

export default MenuItems;
