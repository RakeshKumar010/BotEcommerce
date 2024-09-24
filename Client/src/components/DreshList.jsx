// import Banner from "../assets/image/banner1.webp";

const DreshList = ({ banner }) => {
 console.log(banner);
  return (
    <>
      {banner ? (
        <div className="bg-white pb-3">
          <img
            src={`https://ecserver.estatebot.in/${banner}`}
            alt="..."
            className="w-full"
          />
        </div>
      ) :<div className="bg-white pb-3">
      <img
        src={`https://www.smallseotools.co.uk/placeholder/600x300/D5D5D5/584959`}
        alt="..."
        className="w-full"
      />
    </div>}
    </>
  );
};

export default DreshList;
