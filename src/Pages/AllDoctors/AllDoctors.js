import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllDoctors = () => {
  const { data: doctors = [], isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allDoctor");
      const data = await res.json();
      return data;
    },
  });
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
    <div>
      {doctors.map((doctor) => (
        <p>{doctor.email}</p>
      ))}
    </div>
  );
};

export default AllDoctors;
