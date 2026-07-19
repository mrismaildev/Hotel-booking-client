import { testimonials } from '../assets/assets';
import StarRatings from './StarRatings';
import Title from './Title';

const Teastimonial = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
      <Title
        title={'What Our Guests Say'}
        subTitle={
          'Discover why discerning travelers choose QuickStay for their luxury accommodations around the world.'
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <StarRatings />
            </div>
            <p className="text-gray-500 max-w-90 mt-4">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teastimonial;
