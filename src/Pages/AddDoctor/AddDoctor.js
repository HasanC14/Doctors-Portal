import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = "3dd6fea33316e5f70208f3a11da2960b";

  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/AppointmentSpecial");
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };

          //   save doctor information to the database
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then(() => {
              navigate("/dashboard/allDoctors");
              swal({
                title: "Doctor Added Successfully",
                button: "OK",
              });
            });
        }
      });
  };

  if (isLoading) {
    return (
      <div>
        <div className="flex justify-center">
          <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin dark:border-gray-800"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-96 p-7">
      <h2 className="text-4xl">Add A Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select input-bordered w-full max-w-xs"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        <input
          className="btn btn-accent w-full mt-4"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;

// import React from "react";

// const AddDoctor = () => {
//   const imagehostKey = "3dd6fea33316e5f70208f3a11da2960b";
//   const { data: specialties = [], isLoading } = useQuery({
//     queryKey: ["specialties"],
//     queryFn: async () => {
//       const res = await fetch(`http://localhost:5000/AppointmentSpecial`);
//       const data = await res.json();
//       return data;
//     },
//   });
//   const HandleForm = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const specialty = form.specialty.value;
//     const image = form.img.value;
//     const doctor = {
//       name: name,
//       email: email,
//       specialty: specialty,
//       image: image,
//     };
//     console.log(doctor);
//   };
//   if (isLoading) {
//     return (
//       <div>
//         <div className="flex justify-center">
//           <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin dark:border-gray-800"></div>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <section className="py-6 dark:text-gray-50">
//         <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x mt-14">
//           <form
//             className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid items-center justify-center"
//             onSubmit={HandleForm}
//           >
//             <label className="block w-96">
//               <span className="mb-1">Full name</span>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Hasan Chowdhury"
//                 className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 text-black"
//               />
//             </label>

//             <label className="block w-96">
//               <span className="mb-1">Email address</span>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="hasan@gmail.com"
//                 className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 text-black"
//               />
//             </label>
//             <label className="block w-96 text-black">
//               <select
//                 className="select select-bordered w-full "
//                 name="specialty"
//               >
//                 <option defaultValue>Pick a Specialty</option>
//                 {specialties.map((specialty) => (
//                   <option value={specialty.name}>{specialty.name}</option>
//                 ))}
//               </select>
//             </label>
//             <label className="block w-96 text-black">
//               {/* <input type="file" name="img" /> */}
//               <FileUploaded
//                 onFileSelectSuccess={(file) => setSelectedFile(file)}
//                 onFileSelectError={({ error }) => alert(error)}
//               />
//             </label>
//             <button type="submit" className="btn  w-96">
//               SING UP
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AddDoctor;
