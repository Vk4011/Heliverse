import React, { useState, useEffect } from "react";
import search from "../assets/search.png";
import ReactPaginate from "react-paginate";
import next from "../assets/next.png";
import previous from "../assets/previous.png";

function Home() {
  const [userData, setUserData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [domainFilter, setDomainFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://heliverse-czlh.onrender.com/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { data } = await response.json();
        console.log(data);

        setUserData(data);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDomainFilterChange = (e) => {
    setDomainFilter(e.target.value);
  };

  const handleGenderFilterChange = (e) => {
    setGenderFilter(e.target.value);
  };

  const handleAvailabilityFilterChange = (e) => {
    setAvailabilityFilter(e.target.value);
  };

  const filteredUsers = userData
    ? userData.filter((user) => {
        const nameMatch =
          user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.last_name.toLowerCase().includes(searchQuery.toLowerCase());
        const domainMatch = !domainFilter || user.domain === domainFilter;
        const genderMatch = !genderFilter || user.gender === genderFilter;
        const availabilityMatch =
          !availabilityFilter ||
          user.available.toString() === availabilityFilter;
        return nameMatch && domainMatch && genderMatch && availabilityMatch;
      })
    : [];

  const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const currentUsers = filteredUsers.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleCreateTeamClick = () => {
    console.log("Creating a team...");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-500 to-pink-300 hover:from-blue-300 shadow-lg hover:shadow-xl p-4">
        <h1 className="text-3xl font-bold text-gray-600">Heliverse</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <center>
          <div className="flex max-w-[340px] items-center bg-blue-200 rounded-full relative p-[10px]">
            <input
              className="searchInput flex-grow w-full bg-transparent text-white text-base px-6 py-4 outline-none mr-4"
              type="text"
              placeholder="Search something"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button className="searchButton flex items-center justify-center w-16 h-12 rounded-[360px] bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 hover:shadow-md">
              <img src={search} alt="" className="w-[30px]" />
            </button>
          </div>
        </center>

        <br />
        <div className="flex flex-wrap gap-4 mb-4">
          <select
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={domainFilter}
            onChange={handleDomainFilterChange}
          >
            <option value="">All Domains</option>
          </select>

          <select
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={genderFilter}
            onChange={handleGenderFilterChange}
          >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <select
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={availabilityFilter}
            onChange={handleAvailabilityFilterChange}
          >
            <option value="">All Availability</option>
            <option value="true">Available</option>
            <option value="false">Unavailable</option>
          </select>
        </div>
        <br />

        <ReactPaginate
  previousLabel={
    <img src={previous} alt="Previous" style={{ width: "26px" }} />
  }
  nextLabel={<img src={next} alt="Next" style={{ width: "26px" }} />}
  breakLabel={"..."}
  pageCount={pageCount}
  onPageChange={handlePageChange}
  containerClassName={
    "pagination flex flex-wrap justify-center  items-center px-4 gap-2 md:gap-4"
  }
  activeClassName={"active"}
  previousClassName={"bg-gray-200 px-4 py-2 mr-2 rounded-md"}
  nextClassName={"bg-gray-200 px-4 py-2 ml-2 rounded-md"}
  breakClassName={"bg-gray-200 px-4 py-2 mx-1 rounded-md"}
  pageClassName={"mx-1"}
  pageLinkClassName={
    "px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
  }
/>

        <br />
        <button
          className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500"
          onClick={handleCreateTeamClick}
        >
          Create a Team
        </button>

        <br />
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 max-h-[800px] overflow-y-auto scrollbar-hide p-[40px]">
          {currentUsers &&
            currentUsers.map((user) => (
              <div
                key={user.id}
                className="w-full md:w-[calc((100vw - 64px) / 5)] h-72 relative
            bg-gradient-to-b from-blue-300 via-blue-400 to-blue-200 rounded-lg 
            shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 mx-auto mb-4"
              >
                <div className="Userdata flex items-center justify-center flex-col text-white p-8">
                  <img src={user.avatar} alt="" className="w-16 h-16 mb-2" />
                  <p className="text-xs font-bold mb-1">
                    First Name: {user.first_name}
                  </p>
                  <p className="text-xs font-bold mb-1">
                    Last Name: {user.last_name}
                  </p>
                  <p className="text-xs font-bold mb-1">Email: {user.email}</p>
                  <p className="text-xs font-bold mb-1">
                    Gender: {user.gender}
                  </p>
                  <p className="text-xs font-bold mb-1">
                    Domain: {user.domain}
                  </p>
                  <p className="text-xs font-bold mb-1">
                    Available: {user.available.toString()}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
