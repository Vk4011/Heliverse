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
        id: 134,
        first_name: "Cornela",
        last_name: "Southerill",
        email: "csoutherill3p@deviantart.com",
        gender: "Polygender",
        avatar: "https://robohash.org/beataeipsumatque.png?size=50x50&set=set1",
        domain: "Finance",
        available: false,
      },
      {
        id: 135,
        first_name: "Erwin",
        last_name: "MacSkeagan",
        email: "emacskeagan3q@diigo.com",
        gender: "Male",
        avatar: "https://robohash.org/etillumest.png?size=50x50&set=set1",
        domain: "Finance",
        available: true,
      },
      {
        id: 136,
        first_name: "Keary",
        last_name: "Phizackarley",
        email: "kphizackarley3r@va.gov",
        gender: "Male",
        avatar:
          "https://robohash.org/doloremillumautem.png?size=50x50&set=set1",
        domain: "Management",
        available: false,
      },
      {
        id: 137,
        first_name: "Rae",
        last_name: "Oleksiak",
        email: "roleksiak3s@hubpages.com",
        gender: "Female",
        avatar: "https://robohash.org/remplaceatodit.png?size=50x50&set=set1",
        domain: "Sales",
        available: false,
      },
      {
        id: 138,
        first_name: "Stafford",
        last_name: "Napoleone",
        email: "snapoleone3t@vinaora.com",
        gender: "Male",
        avatar:
          "https://robohash.org/veniammolestiaevoluptatibus.png?size=50x50&set=set1",
        domain: "Business Development",
        available: false,
      },
      {
        id: 139,
        first_name: "Winfield",
        last_name: "Crawforth",
        email: "wcrawforth3u@skyrock.com",
        gender: "Male",
        avatar:
          "https://robohash.org/ducimusdoloresaliquam.png?size=50x50&set=set1",
        domain: "Management",
        available: true,
      },
      {
        id: 140,
        first_name: "Hildy",
        last_name: "Witherby",
        email: "hwitherby3v@blinklist.com",
        gender: "Female",
        avatar: "https://robohash.org/nobisaperiamet.png?size=50x50&set=set1",
        domain: "Marketing",
        available: false,
      },
      {
        id: 141,
        first_name: "Jessamyn",
        last_name: "Forsdyke",
        email: "jforsdyke3w@princeton.edu",
        gender: "Female",
        avatar: "https://robohash.org/etducimusquas.png?size=50x50&set=set1",
        domain: "Finance",
        available: true,
      },
      {
        id: 142,
        first_name: "Osbert",
        last_name: "Pinnegar",
        email: "opinnegar3x@dot.gov",
        gender: "Non-binary",
        avatar: "https://robohash.org/etveniamrerum.png?size=50x50&set=set1",
        domain: "UI Designing",
        available: true,
      },
      {
        id: 143,
        first_name: "Lydon",
        last_name: "Radbond",
        email: "lradbond3y@tinyurl.com",
        gender: "Male",
        avatar: "https://robohash.org/sedquodexpedita.png?size=50x50&set=set1",
        domain: "Finance",
        available: false,
      },
      {
        id: 144,
        first_name: "Anneliese",
        last_name: "Eldridge",
        email: "aeldridge3z@mtv.com",
        gender: "Female",
        avatar: "https://robohash.org/aetcorporis.png?size=50x50&set=set1",
        domain: "Management",
        available: false,
      },
      {
        id: 145,
        first_name: "Northrop",
        last_name: "Skerme",
        email: "nskerme40@baidu.com",
        gender: "Male",
        avatar:
          "https://robohash.org/autemducimusnulla.png?size=50x50&set=set1",
        domain: "Management",
        available: true,
      },
      {
        id: 146,
        first_name: "Mart",
        last_name: "Corballis",
        email: "mcorballis41@canalblog.com",
        gender: "Male",
        avatar: "https://robohash.org/autidculpa.png?size=50x50&set=set1",
        domain: "IT",
        available: false,
      },
      {
        id: 147,
        first_name: "Marylou",
        last_name: "Pech",
        email: "mpech42@hostgator.com",
        gender: "Genderqueer",
        avatar: "https://robohash.org/itaqueestautem.png?size=50x50&set=set1",
        domain: "Management",
        available: false,
      },
      {
        id: 148,
        first_name: "Gunar",
        last_name: "Balf",
        email: "gbalf43@bigcartel.com",
        gender: "Male",
        avatar:
          "https://robohash.org/culpapraesentiumomnis.png?size=50x50&set=set1",
        domain: "IT",
        available: true,
      },
      {
        id: 149,
        first_name: "Charlotta",
        last_name: "Buddington",
        email: "cbuddington44@nytimes.com",
        gender: "Female",
        avatar: "https://robohash.org/velitoditnon.png?size=50x50&set=set1",
        domain: "Marketing",
        available: false,
      },
      {
        id: 150,
        first_name: "Morris",
        last_name: "Waddams",
        email: "mwaddams45@pagesperso-orange.fr",
        gender: "Male",
        avatar:
          "https://robohash.org/laboriosamautoptio.png?size=50x50&set=set1",
        domain: "Finance",
        available: true,
      },
      {
        id: 151,
        first_name: "Roi",
        last_name: "Povall",
        email: "rpovall46@ow.ly",
        gender: "Male",
        avatar: "https://robohash.org/nonnostrumquis.png?size=50x50&set=set1",
        domain: "Management",
        available: false,
      },
      {
        id: 152,
        first_name: "Shawn",
        last_name: "Swalwell",
        email: "sswalwell47@google.fr",
        gender: "Male",
        avatar:
          "https://robohash.org/consecteturcumqueaut.png?size=50x50&set=set1",
        domain: "Management",
        available: false,
      },
      {
        id: 153,
        first_name: "Armstrong",
        last_name: "Hysom",
        email: "ahysom48@themeforest.net",
        gender: "Male",
        avatar: "https://robohash.org/doloremeosfugiat.png?size=50x50&set=set1",
        domain: "Business Development",
        available: true,
      },
      {
        id: 154,
        first_name: "Dorella",
        last_name: "Auty",
        email: "dauty49@list-manage.com",
        gender: "Female",
        avatar: "https://robohash.org/suntuteius.png?size=50x50&set=set1",
        domain: "Business Development",
        available: true,
      },
      {
        id: 155,
        first_name: "Rheta",
        last_name: "Hildrew",
        email: "rhildrew4a@amazon.de",
        gender: "Female",
        avatar: "https://robohash.org/remsuntlabore.png?size=50x50&set=set1",
        domain: "Sales",
        available: false,
      },
      {
        id: 156,
        first_name: "Dietrich",
        last_name: "Gowanlock",
        email: "dgowanlock4b@wp.com",
        gender: "Male",
        avatar: "https://robohash.org/enimsunteum.png?size=50x50&set=set1",
        domain: "Sales",
        available: false,
      },
      {
        id: 157,
        first_name: "Yetta",
        last_name: "Davey",
        email: "ydavey4c@timesonline.co.uk",
        gender: "Female",
        avatar:
          "https://robohash.org/voluptatemnonofficiis.png?size=50x50&set=set1",
        domain: "Marketing",
        available: true,
      },
      {
        id: 158,
        first_name: "Jordanna",
        last_name: "McAmish",
        email: "jmcamish4d@woothemes.com",
        gender: "Female",
        avatar: "https://robohash.org/eateneturenim.png?size=50x50&set=set1",
        domain: "Sales",
        available: false,
      },
      {
        id: 159,
        first_name: "Faydra",
        last_name: "Onslow",
        email: "fonslow4e@theguardian.com",
        gender: "Agender",
        avatar: "https://robohash.org/illomodiearum.png?size=50x50&set=set1",
        domain: "UI Designing",
        available: true,
      },
      {
        id: 160,
        first_name: "Kane",
        last_name: "Arlet",
        email: "karlet4f@ftc.gov",
        gender: "Male",
        avatar:
          "https://robohash.org/pariaturnondolorum.png?size=50x50&set=set1",
        domain: "Sales",
        available: false,
      },
      {
        id: 161,
        first_name: "Carlyle",
        last_name: "Bolver",
        email: "cbolver4g@fda.gov",
        gender: "Male",
        avatar:
          "https://robohash.org/molestiaemolestiaeet.png?size=50x50&set=set1",
        domain: "Finance",
        available: false,
      },
      {
        id: 162,
        first_name: "Ezra",
        last_name: "Postance",
        email: "epostance4h@intel.com",
        gender: "Male",
        avatar: "https://robohash.org/ipsaveniamsed.png?size=50x50&set=set1",
        domain: "UI Designing",
        available: false,
      },
      {
        id: 163,
        first_name: "Leila",
        last_name: "Isaksson",
        email: "lisaksson4i@hao123.com",
        gender: "Female",
        avatar: "https://robohash.org/facilissedtotam.png?size=50x50&set=set1",
        domain: "Marketing",
        available: true,
      },
      {
        id: 164,
        first_name: "Rogers",
        last_name: "Tomkies",
        email: "rtomkies4j@reverbnation.com",
        gender: "Male",
        avatar: "https://robohash.org/namminuserror.png?size=50x50&set=set1",
        domain: "Sales",
        available: true,
      },
      {
        id: 165,
        first_name: "Elianore",
        last_name: "de Zamora",
        email: "edezamora4k@sohu.com",
        gender: "Female",
        avatar: "https://robohash.org/quodsedharum.png?size=50x50&set=set1",
        domain: "Finance",
        available: false,
      },
      {
        id: 166,
        first_name: "Agneta",
        last_name: "Slamaker",
        email: "aslamaker4l@github.io",
        gender: "Female",
        avatar: "https://robohash.org/quomolestiasqui.png?size=50x50&set=set1",
        domain: "IT",
        available: false,
      },
      {
        id: 167,
        first_name: "Marie",
        last_name: "Imms",
        email: "mimms4m@unblog.fr",
        gender: "Female",
        avatar: "https://robohash.org/quoddolorquo.png?size=50x50&set=set1",
        domain: "IT",
        available: false,
      },
      {
        id: 168,
        first_name: "Kaia",
        last_name: "Measom",
        email: "kmeasom4n@auda.org.au",
        gender: "Female",
        avatar:
          "https://robohash.org/suscipitvoluptatemet.png?size=50x50&set=set1",
        domain: "Marketing",
        available: true,
      },
      {
        id: 169,
        first_name: "Alister",
        last_name: "Spehr",
        email: "aspehr4o@thetimes.co.uk",
        gender: "Male",
        avatar: "https://robohash.org/possimusabiste.png?size=50x50&set=set1",
        domain: "Business Development",
        available: true,
      },
      {
        id: 170,
        first_name: "Benedikt",
        last_name: "Stobbe",
        email: "bstobbe4p@pinterest.com",
        gender: "Male",
        avatar:
          "https://robohash.org/voluptatumexpeditapraesentium.png?size=50x50&set=set1",
        domain: "IT",
        available: false,
      },
      {
        id: 171,
        first_name: "Nicky",
        last_name: "Keyson",
        email: "nkeyson4q@prweb.com",
        gender: "Non-binary",
        avatar: "https://robohash.org/autdoloresquis.png?size=50x50&set=set1",
        domain: "Marketing",
        available: true,
      },
      {
        id: 172,
        first_name: "Taylor",
        last_name: "Atyea",
        email: "tatyea4r@spotify.com",
        gender: "Male",
        avatar: "https://robohash.org/porroeostenetur.png?size=50x50&set=set1",
        domain: "IT",
        available: true,
      },
      {
        id: 173,
        first_name: "Pearl",
        last_name: "Mustarde",
        email: "pmustarde4s@google.de",
        gender: "Female",
        avatar:
          "https://robohash.org/consequunturrerumperferendis.png?size=50x50&set=set1",
        domain: "Business Development",
        available: true,
      },
      {
        id: 174,
        first_name: "Vivianna",
        last_name: "Kuhl",
        email: "vkuhl4t@godaddy.com",
        gender: "Female",
        avatar:
          "https://robohash.org/repudiandaerationeofficia.png?size=50x50&set=set1",
        domain: "Finance",
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
          containerClassName={"pagination flex justify-center"}
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
          {currentUsers.map((user) => (
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
