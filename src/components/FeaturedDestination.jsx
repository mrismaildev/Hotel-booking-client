import { useNavigate } from 'react-router-dom';
import { roomsDummyData } from '../assets/assets';
import HotelCard from './HotelCard';
import Title from './Title';

const FeaturedDestination = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
      <Title
        title={'Featured Destination'}
        subTitle={
          'Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences'
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/rooms');
          scrollTo(0, 0);
        }}
        className="mt-12 px-8 py-3 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all"
      >
        View All Destination
      </button>
    </div>
  );
};

export default FeaturedDestination;
