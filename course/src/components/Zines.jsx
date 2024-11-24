import { useState } from "react";
import Backword from "./Backword";
// import Background from "./Background";

function Zines() {
  const [selectedZine, setSelectedZine] = useState(null);

  const data = [
    {
      id: 1,
      title: "Phishing Unveiled",
      img: "https://pbs.twimg.com/media/FXZs8txaQAE1_0H?format=jpg&name=4096x4096",
      desc: "What is Phishing attack?",
      price: 0,
      category: "Security",
    },
    {
      id: 2,
      title: "Network Security Insights",
      img: "https://pbs.twimg.com/media/FRNBfglUYAAyYGL.jpg:large",
      desc: "Network Attacks",
      price: 0,
      category: "Nature",
    },
    // {
    //   id: 3,
    //   title: "Server Vulnerabilities Explained",
    //   img: "https://media.licdn.com/dms/image/v2/D5622AQHBfg8kU53nog/feedshare-shrink_800/feedshare-shrink_800/0/1692330961482?e=1727308800&v=beta&t=yO6-OI_40ponPd-WJfrWE5gxK-l8BlF22OVeMCjl93o",
    //   desc: "Server",
    //   price: 0,
    //   category: "Nature",
    // },
    // {
    //   id: 4,
    //   title: "Understanding Same Origin Policy",
    //   img: "https://media.licdn.com/dms/image/v2/D4E22AQF6sjWCbL225Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1692293701015?e=1727308800&v=beta&t=pw-QQkV-Dei4M684szBtjJdxvWrNENlYFFV_q4bJ1P4",
    //   desc: "Same Origin Policy",
    //   price: 0,
    //   category: "Nature",
    // },
    {
      id: 5,
      title: "Exploring Remote File Inclusion",
      img: "https://user-images.githubusercontent.com/16838353/196878480-c8796673-9fd8-4d4c-89b0-2aa67411cfa4.png",
      desc: "Remote File Inclusion",
      price: 0,
      category: "Nature",
    },
    {
      id: 6,
      title: "An Introduction to XML External Entity (XXE) Attacks",
      img: "https://user-images.githubusercontent.com/16838353/196876341-7f06aaaf-4ff5-4bc5-922b-ead822d6ccbf.png",
      desc: "XXE",
      price: 0,
      category: "Nature",
    },
    {
      id: 7,
      title: "CORS: Cross-Origin Resource Sharing Demystified",
      img: "https://user-images.githubusercontent.com/16838353/196784777-b5ab1c7a-46e9-465f-82c9-4749617dfdd6.png",
      desc: "CORS",
      price: 0,
      category: "Nature",
    },
    // {
    //   id: 8,
    //   title: "PROXY: An In-Depth Analysis",
    //   img: "https://media.licdn.com/dms/image/v2/D5622AQHkk7OoswW2GQ/feedshare-shrink_800/feedshare-shrink_800/0/1687614849918?e=1727308800&v=beta&t=gJQsrtj_umZMfLGDNw2JoE63gYMZ9W3N7rSDjYePgMs",
    //   desc: "PROXY",
    //   price: 0,
    //   category: "Nature",
    // },
    // {
    //   id: 9,
    //   title: "Content Delivery Networks (CDNs) Explained",
    //   img: "https://media.licdn.com/dms/image/v2/D5622AQH1UHyj3s71SQ/feedshare-shrink_800/feedshare-shrink_800/0/1685395658031?e=1727308800&v=beta&t=Nt044zhxvHPK5i2BV2kP_oRFZkgsSCnW0LnR1oIxKSw",
    //   desc: "Content Delivery Network (CDN)",
    //   price: 0,
    //   category: "Nature",
    // },
    // {
    //   id: 10,
    //   title: "Mastering Email Workflow Security",
    //   img: "https://media.licdn.com/dms/image/v2/D5622AQGSgnGHPVbO_g/feedshare-shrink_800/feedshare-shrink_800/0/1685110977612?e=1727308800&v=beta&t=hp8PL32qTICUR58PcoDY-R5woVp_ybyfCpMuy6H_mJw",
    //   desc: "Email Workflow",
    //   price: 0,
    //   category: "Nature",
    // },
    // {
    //   id: 11,
    //   title: "Burp Suite: A Comprehensive Guide",
    //   img: "https://media.licdn.com/dms/image/v2/C4D22AQGFG6izaM8wdA/feedshare-shrink_800/feedshare-shrink_800/0/1670341244939?e=1727308800&v=beta&t=656NpgXzPrN8RS5TrQCTGyD9ns41DFlj7eTSdkffp_Y",
    //   desc: "Burp Suite",
    //   price: 0,
    //   category: "Nature",
    // },
    // {
    //   id: 12,
    //   title: "HTTP Headers: What You Need to Know",
    //   img: "https://media.licdn.com/dms/image/v2/C4D22AQHYbn15Z34UNA/feedshare-shrink_800/feedshare-shrink_800/0/1652983138999?e=1727308800&v=beta&t=tJY7elu2Emezi7aWIhK_plc0-WFFkQuDmHvrXqqhr14",
    //   desc: "HTTP Headers",
    //   price: 0,
    //   category: "Nature",
    // },
    // {
    //   id: 13,
    //   title: "Content Security Policy: Best Practices",
    //   img: "https://media.licdn.com/dms/image/v2/C5622AQHTZaEOOUtbWA/feedshare-shrink_800/feedshare-shrink_800/0/1644412689588?e=1727308800&v=beta&t=MImOX72aNGvx0romiHA_zq74HAFIiVdbmzClMrRues4",
    //   desc: "Content Security Policy",
    //   price: 0,
    //   category: "Nature",
    // },
  ];

  const handleCardClick = (zine) => {
    setSelectedZine(zine);
  };

  const handleDownload = (imgUrl, fileName) => {
    const link = document.createElement("a");
    link.href = imgUrl;
    link.download = fileName;
    link.click();
  };

  const handleCloseModal = () => {
    setSelectedZine(null);
  };

  return (
    <>
      {/* <Background /> */}
      <div className="p-4 bg-zinc-900  min-h-screen bg-[url('https://assets.lummi.ai/assets/QmfEF5VuQ7Tm8JSXm3sp6HHuEm24JWijG6q3sKiVKQQsxf?auto=format&w=1500')]">
        <Backword />
        <div className="flex flex-wrap justify-center gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="p-4 rounded-lg w-64  backdrop-blur-xl   border-blue-600 border-2 hover:-translate-y-4 transform transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h1 className="font-serif text-white text-xl font-bold mb-2">
                {item.title}
              </h1>
              <p className="text-white font-serif mb-4 h-32">{item.desc}</p>
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">${item.price}</h1>
              </div>
            </div>
          ))}
        </div>
        {selectedZine && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
            <div className="bg-black p-6 rounded-lg w-80 relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
              <img
                src={selectedZine.img}
                alt={selectedZine.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h1 className="text-xl font-bold mb-2">{selectedZine.title}</h1>
              <p className="mb-4">{selectedZine.desc}</p>
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">${selectedZine.price}</h1>
                <button
                  onClick={() =>
                    handleDownload(
                      selectedZine.img,
                      `zine-${selectedZine.id}.jpg`
                    )
                  }
                  className="py-1 px-4 bg-blue-500 rounded-lg text-white hover:bg-blue-600"
                >
                  open
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Zines;
