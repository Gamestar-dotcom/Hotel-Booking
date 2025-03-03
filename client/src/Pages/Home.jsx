import React, { useState } from "react";
import {
  Link, // Import Link from react-router-dom
} from "react-router-dom";
import {
  Menu,
  X,
  Search,
  User,
  ChevronRight,
  Star,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
} from "lucide-react";
import heroBanner from "/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg";

const Home = () => {
  // State for date picker
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(2);

  // Featured rooms data
  const featuredRooms = [
    {
      id: 1,
      name: "Deluxe King Suite",
      description:
        "Luxurious suite with panoramic city views and premium amenities.",
      price: 299,
      image: "/api/placeholder/600/400",
      stars: 5,
      size: "45m²",
      guests: 2,
    },
    {
      id: 2,
      name: "Executive Ocean View",
      description:
        "Elegant room with breathtaking ocean views and private balcony.",
      price: 359,
      image: "/api/placeholder/600/400",
      stars: 5,
      size: "52m²",
      guests: 2,
    },
    {
      id: 3,
      name: "Premium Family Room",
      description:
        "Spacious accommodation perfect for families, with connecting rooms.",
      price: 429,
      image: "/api/placeholder/600/400",
      stars: 4,
      size: "65m²",
      guests: 4,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Alexandra Smith",
      location: "New York, USA",
      text: "The attention to detail at Spectrum Hotel is unmatched. From the moment we arrived, the staff made us feel like royalty. The room exceeded our expectations, and the dining experience was exceptional.",
      rating: 5,
    },
    {
      id: 2,
      name: "James Wilson",
      location: "London, UK",
      text: "A truly remarkable experience. The amenities are world-class, and the location is perfect for both business and leisure. I particularly enjoyed the spa facilities and rooftop bar views.",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      location: "Madrid, Spain",
      text: "We celebrated our anniversary at Spectrum, and they made it unforgettable. The personalized service and attention to our special requests were impressive. We'll definitely return.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header would be here */}
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Hero Image */}
        <div
          className="absolute inset-0 "
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          {/* Placeholder for hero image */}
          <div className="w-full h-full bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-4">
              Experience Luxury Beyond Imagination
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover the ultimate retreat at Spectrum Hotel, where exceptional
              service meets unparalleled comfort.
            </p>
            <Link
              to="/rooms" // Replace with your desired route
              className="bg-white text-gray-900 px-8 py-3 font-medium hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
            >
              Explore Our Rooms <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Booking Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white shadow-lg transform translate-y-1/2">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check In
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-black"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                  />
                  <Calendar
                    size={18}
                    className="absolute right-3 top-2.5 text-gray-500"
                  />
                </div>
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check Out
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-black"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                  />
                  <Calendar
                    size={18}
                    className="absolute right-3 top-2.5 text-gray-500"
                  />
                </div>
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Guests
                </label>
                <div className="relative">
                  <select
                    className="w-full border border-gray-300 p-2 bg-white focus:outline-none focus:ring-1 focus:ring-black"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5+ Guests</option>
                  </select>
                  <Users
                    size={18}
                    className="absolute right-3 top-2.5 text-gray-500"
                  />
                </div>
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Promo Code
                </label>
                <input
                  type="text"
                  placeholder="Enter code"
                  className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              <div className="md:col-span-1">
                <label className="invisible block text-sm font-medium text-gray-700 mb-1">
                  Search
                </label>
                <button className="w-full bg-black text-white p-2 font-medium hover:bg-gray-800 transition-colors duration-200">
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <img
                src="/api/placeholder/600/800"
                alt="Luxury hotel interior"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                Welcome to Spectrum Hotel
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nestled in the heart of the city, Spectrum Hotel offers a
                harmonious blend of timeless elegance and contemporary luxury.
                Our commitment to excellence ensures that every aspect of your
                stay exceeds expectations.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With meticulously designed rooms, world-class amenities, and
                personalized service, we create an atmosphere of sophisticated
                comfort for both business and leisure travelers. Experience the
                pinnacle of hospitality where every detail is crafted to
                perfection.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border-l-2 border-gray-900 pl-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-1">
                    120
                  </h3>
                  <p className="text-gray-600">Luxury Rooms</p>
                </div>
                <div className="border-l-2 border-gray-900 pl-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-1">4</h3>
                  <p className="text-gray-600">Fine Restaurants</p>
                </div>
                <div className="border-l-2 border-gray-900 pl-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-1">
                    1,500 m²
                  </h3>
                  <p className="text-gray-600">Spa & Wellness</p>
                </div>
                <div className="border-l-2 border-gray-900 pl-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-1">
                    24/7
                  </h3>
                  <p className="text-gray-600">Concierge Service</p>
                </div>
              </div>
              <Link
                to="/about" // Replace with your desired route
                className="text-gray-900 font-medium flex items-center hover:text-gray-700 transition-colors duration-200"
              >
                Discover Our Story <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Featured Accommodations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select from our finest rooms and suites, each thoughtfully
              designed to provide an unparalleled experience of comfort and
              luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 text-gray-900 font-medium">
                    ${room.price}{" "}
                    <span className="text-sm text-gray-600">/ night</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {room.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < room.stars ? "text-yellow-500" : "text-gray-300"
                        } fill-current`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-6">
                    <span>Size: {room.size}</span>
                    <span>Guests: {room.guests}</span>
                  </div>
                  <Link
                    to={`/rooms/${room.id}`} // Replace with your desired route
                    className="w-full border border-gray-900 text-gray-900 py-2 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200 block text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/rooms" // Replace with your desired route
              className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors duration-200 inline-flex items-center"
            >
              View All Rooms <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Exceptional Amenities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Indulge in our wide range of premium facilities designed to
              elevate your stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/api/placeholder/32/32"
                  alt="Spa"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Luxurious Spa
              </h3>
              <p className="text-gray-600">
                Rejuvenate your senses with our award-winning spa treatments and
                facilities.
              </p>
            </div>

            <div className="text-center p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/api/placeholder/32/32"
                  alt="Restaurant"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Fine Dining
              </h3>
              <p className="text-gray-600">
                Experience culinary excellence at our gourmet restaurants and
                elegant bars.
              </p>
            </div>

            <div className="text-center p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/api/placeholder/32/32"
                  alt="Pool"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Infinity Pool
              </h3>
              <p className="text-gray-600">
                Swim in our stunning infinity pool with panoramic views of the
                city skyline.
              </p>
            </div>

            <div className="text-center p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/api/placeholder/32/32"
                  alt="Fitness"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Fitness Center
              </h3>
              <p className="text-gray-600">
                Maintain your fitness routine in our state-of-the-art gym with
                personal trainers.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/amenities" // Replace with your desired route
              className="text-gray-900 font-medium flex items-center mx-auto hover:text-gray-700 transition-colors duration-200"
            >
              Explore All Amenities <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Guest Experiences
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover what our guests have to say about their stays at Spectrum
              Hotel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-800 p-8 relative">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < testimonial.rating
                          ? "text-yellow-500"
                          : "text-gray-600"
                      } fill-current`}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Stay updated with our latest offers, promotions, and experiences.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 sm:rounded-l-md rounded-md sm:rounded-r-none mb-2 sm:mb-0 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
              />
              <button className="bg-black text-white px-6 py-3 font-medium sm:rounded-r-md rounded-md sm:rounded-l-none hover:bg-gray-800 transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive hotel news and special offers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
