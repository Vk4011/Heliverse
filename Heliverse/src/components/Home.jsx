import React, { useState, useEffect } from "react";
import search from "../assets/search.png";

function Home() {
  const [userData, setUserData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [domainFilter, setDomainFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  useEffect(() => {
  
    const mockData = [
      {
        id: 4,
        first_name: "Brett",
        last_name: "Ivetts",
        email: "bivetts3@netlog.com",
        gender: "Agender",
        avatar: "https://robohash.org/ullamsuntet.png?size=50x50&set=set1",
        domain: "Finance",
        available: true,
      },
      {
        id: 5,
        first_name: "Horst",
        last_name: "Grastye",
        email: "hgrastye4@dmoz.org",
        gender: "Male",
        avatar: "https://robohash.org/utquirepudiandae.png?size=50x50&set=set1",
        domain: "Finance",
        available: false,
      },
      {
        id: 6,
        first_name: "Monique",
        last_name: "Wilbud",
        email: "mwilbud5@state.gov",
        gender: "Female",
        avatar: "https://robohash.org/maximequiomnis.png?size=50x50&set=set1",
        domain: "IT",
        available: true,
      },
      {
        id: 7,
        first_name: "Kalindi",
        last_name: "Vinson",
        email: "kvinson6@g.co",
        gender: "Female",
        avatar:
          "https://robohash.org/occaecatinihilquos.png?size=50x50&set=set1",
        domain: "Management",
        available: true,
      },
      {
        id: 8,
        first_name: "Janos",
        last_name: "Le Noire",
        email: "jlenoire7@sakura.ne.jp",
        gender: "Male",
        avatar:
          "https://robohash.org/praesentiumquasicorporis.png?size=50x50&set=set1",
        domain: "Management",
        available: true,
      },
      {
        id: 9,
        first_name: "Corella",
        last_name: "Coniff",
        email: "cconiff8@guardian.co.uk",
        gender: "Bigender",
        avatar:
          "https://robohash.org/nihilexcepturiomnis.png?size=50x50&set=set1",
        domain: "UI Designing",
        available: false,
      },
      {
        id: 10,
        first_name: "Cecilia",
        last_name: "Waldocke",
        email: "cwaldocke9@gmpg.org",
        gender: "Female",
        avatar:
          "https://robohash.org/commodiestvoluptatem.png?size=50x50&set=set1",
        domain: "Management",
        available: true,
      },
      {
        id: 11,
        first_name: "Suellen",
        last_name: "Bretton",
        email: "sbrettona@mapquest.com",
        gender: "Female",
        avatar:
          "https://robohash.org/cupiditatemaioresaut.png?size=50x50&set=set1",
        domain: "Sales",
        available: false,
      },
      {
        id: 12,
        first_name: "Deloris",
        last_name: "Evered",
        email: "deveredb@ovh.net",
        gender: "Female",
        avatar:
          "https://robohash.org/blanditiiscumqueimpedit.png?size=50x50&set=set1",
        domain: "UI Designing",
        available: false,
      },
      {
        id: 13,
        first_name: "Candice",
        last_name: "Harbar",
        email: "charbarc@home.pl",
        gender: "Female",
        avatar:
          "https://robohash.org/autarchitectotenetur.png?size=50x50&set=set1",
        domain: "Sales",
        available: true,
      },
      {
        id: 14,
        first_name: "John",
        last_name: "Fine",
        email: "jfined@facebook.com",
        gender: "Male",
        avatar:
          "https://robohash.org/etvoluptatemoccaecati.png?size=50x50&set=set1",
        domain: "UI Designing",
        available: true,
      },
      {
        id: 15,
        first_name: "Gonzalo",
        last_name: "Tilliard",
        email: "gtilliarde@marketwatch.com",
        gender: "Agender",
        avatar:
          "https://robohash.org/voluptatemfacilisodit.png?size=50x50&set=set1",
        domain: "Sales",
        available: false,
      },
      {
        id: 16,
        first_name: "Hertha",
        last_name: "Sterrick",
        email: "hsterrickf@nationalgeographic.com",
        gender: "Female",
        avatar:
          "https://robohash.org/rerumoptiorepudiandae.png?size=50x50&set=set1",
        domain: "Marketing",
        available: true,
      },
    ];

   
    setUserData(mockData);
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

       
        <button
          className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500"
          onClick={handleCreateTeamClick}
        >
          Create a Team
        </button>

        <br />
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-h-[800px] overflow-y-auto scrollbar-hide">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="w-full md:w-[calc((100vw - 24px) / 2)] lg:w-[calc((100vw - 48px) / 3)] h-80 relative
               bg-gradient-to-b from-blue-300 via-blue-400 to-blue-200 rounded-lg 
              shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 mx-auto mb-4"
            >
              <div className="Userdata flex items-center justify-center flex-col text-white">
                <br />
                <img src={user.avatar} alt="" className="w-[80px] h-[80px]" />
                <br />
                <h1 className="text-base md:text-lg lg:text-lg font-bold">
                  First Name: {user.first_name}
                </h1>
                <h1 className="text-base md:text-lg lg:text-lg font-bold">
                  Last Name: {user.last_name}
                </h1>
                <h1 className="text-base md:text-lg lg:text-lg font-bold">
                  Email: {user.email}
                </h1>
                <h1 className="text-base md:text-lg lg:text-lg font-bold">
                  Gender: {user.gender}
                </h1>
                <h1 className="text-base md:text-lg lg:text-lg font-bold">
                  Domain: {user.domain}
                </h1>
                <h1 className="text-base md:text-lg lg:text-lg font-bold">
                  Available: {user.available.toString()}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;


