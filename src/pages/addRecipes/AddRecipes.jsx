import Swal from "sweetalert2";

const AddRecipes = () => {

    const handleAddRecipe = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.valueOf;
        const details = form.details.value;
        const category = form.category.value;
        const video = form.video.value;
         const country = form.country.value;
        const photo = form.photo.value;
    
        const newRecipe = { name,  details, category ,video , country,photo };
    
        console.log(newRecipe);
    
        fetch("http://localhost:5000/recipe", {
        // fetch("https://event-360-server-nine.vercel.app/service", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newRecipe),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Recipe added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      };

// Recepe Name, Image , Detalils , Category,
// youtobe code  country



    return (
        <div>
             <div className="bg-[#e4dbea] p-24">
      <h2 className="text-3xl font-extrabold">Add Recipes</h2>
      <form onSubmit={handleAddRecipe} >
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text "> Recipe Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder=" Recipe Name"
                className="input input-bordered w-full rounded p-2"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text"> Recipe Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder=" Recipe Details"
                className="input input-bordered w-full rounded p-2"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          {/* <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder=" Category"
                className="input input-bordered w-full rounded p-2"
              />
                
            </label>
 

          </div> */}












<div className="flex-1 form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  className="select select-bordered w-full focus:outline-none font-normal"
                  name="category"
                  defaultValue=""
                >
                  <option value="" disabled>
                    category
                  </option>
                  <option>Thai</option>
                  <option>Indian</option>
                  <option>Italian</option>
                  <option>Japanese</option>
                  <option>Mexican</option>
                </select>
              </div>





      







          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text"> Embedded Video</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="video"
                placeholder="Embedded Video"
                className="input input-bordered w-full rounded p-2"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Country</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="input input-bordered w-full p-2 rounded"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full p-2 rounded"
              />
            </label>
          </div>
        </div>

        {/* <input type="submit" value="Add Service" className="btn btn-block" /> */}

        <button type="submit" className="btn btn-secondary w-full" value="Add Recipe">
          {" "}
          Add Recipe{" "}
        </button>
      </form>
    </div>
        </div>
    );
};

export default AddRecipes;