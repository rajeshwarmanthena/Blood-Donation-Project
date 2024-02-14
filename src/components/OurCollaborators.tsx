"use client";
import { useState, useEffect } from 'react';
import { FaUser, FaTint, FaPhoneAlt, FaHospital } from 'react-icons/fa';

const OurCollaborators = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/Requestblood');
        const data = await res.json();
        if (data.success) {
          setRequests(data.patients);
        } else {
          console.error('Failed to fetch data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 m-auto p-auto">
      <h1 className="py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-center text-4xl text-gray-800 dark:text-white">Blood Requests</h1>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
          {requests.map((request:any) => (
            <div key={request.id} className="inline-block px-3">
              <div className="relative flex flex-col mt-6 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 shadow-md bg-clip-border rounded-xl w-96 h-80"> {/* Set fixed card size here */}
                <div className="p-6">
                  <FaUser className="w-12 h-12 mb-4 text-gray-900" />
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 dark:text-white">Patient Name: {request.patientName}</h5>
                  <div className="flex items-center mb-2">
                    <FaTint className="w-6 h-6 mr-2 text-red-500" />
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">Blood Type: {request.bloodType}</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <FaPhoneAlt className="w-6 h-6 mr-2 text-blue-500" />
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">Mobile Number: {request.mobileNumber}</p>
                  </div>
                  <div className="flex items-center">
                    <FaHospital className="w-6 h-6 mr-2 text-green-500" />
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">Hospital: {request.hospital}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a href={`https://www.google.com/maps/search/${encodeURIComponent(request.hospital)}`} target="_blank" className="inline-block">
                    <button className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 dark:text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                      view in maps
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCollaborators;
