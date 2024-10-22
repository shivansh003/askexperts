// components/Testimonials.tsx
import React from "react";
import Image from "next/image";
interface Testimonial {
  id: number;
  name: string;
  description: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    description: "I like it gets to do the less complex things without the need of individual having to chat and is helpful in pointing to the needful resources to gather the information needed.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    description: "I like it gets to do the less complex things without the need of individual having to chat and is helpful in pointing to the needful resources to gather the information needed.",
    rating: 5,
  },
  {
    id: 3,
    name: "Bob Johnson",
    description: "I like it gets to do the less complex things without the need of individual having to chat and is helpful in pointing to the needful resources to gather the information needed.",
    rating: 5,
  },
  {
    id: 4,
    name: "Alice Brown",
    description: "I like it gets to do the less complex things without the need of individual having to chat and is helpful in pointing to the needful resources to gather the information needed.",
    rating: 5,
  },
  {
    id: 5,
    name: "Charlie Davis",
    description: "I like it gets to do the less complex things without the need of individual having to chat and is helpful in pointing to the needful resources to gather the information needed.",
    rating: 5,
  },
  {
    id: 6,
    name: "Eva White",
    description: "I like it gets to do the less complex things without the need of individual having to chat and is helpful in pointing to the needful resources to gather the information needed.",
    rating: 5,
  },
  {
    id: 7,
    name: "Eva White",
    description: "I like it gets to do the less complex things without the need of individual having to chat and is helpful in pointing to the needful resources to gather the information needed.",
    rating: 5,
  },
  {
    id: 8,
    name: "Eva White",
    description: "I like it gets to do the less complex things without the need of individual having to chat and is helpful in pointing to the needful resources to gather the information needed.",
    rating: 5,
  },
  {
    id: 9,
    name: "Eva White",
    description: "I like it gets to do the less complex things without the need of individual having to chat and is helpful in pointing to the needful resources to gather the information needed.",
    rating: 5,
  },
  {
    id: 10,
    name: "Eva White",
    description: "I like it gets to do the less complex things without the need of individual having to chat and is helpful in pointing to the needful resources to gather the information needed.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-2">
      <div className="flex flex-col space-y-8">
        {/* Row 1 */}
        <div className="flex animate-scroll1 space-x-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white min-w-[450px] p-4 rounded-lg shadow-md transition duration-300 hover:bg-[#DC143C] hover:text-white flex flex-col justify-between"
            >
              <div className="flex items-center mb-1 max-w-[100px]">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="190.000000pt"
                  height="33.000000pt"
                  viewBox="0 0 190.000000 33.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,33.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      d="M132 265 c-16 -34 -28 -45 -44 -45 -37 0 -68 -11 -68 -24 0 -7 13
-25 29 -40 27 -26 29 -33 24 -77 -3 -27 -3 -49 1 -49 4 0 25 9 46 20 l40 20
40 -20 c21 -11 42 -20 46 -20 4 0 4 22 1 49 -5 44 -3 51 24 77 16 15 29 33 29
40 0 13 -31 24 -68 24 -16 0 -28 11 -44 45 -12 25 -25 45 -28 45 -3 0 -16 -20
-28 -45z"
                    />
                    <path
                      d="M542 297 c-5 -6 -17 -26 -25 -43 -13 -25 -24 -32 -57 -37 -23 -3 -44
-8 -48 -11 -3 -4 9 -22 27 -40 31 -32 33 -37 26 -85 -4 -28 -4 -51 -1 -51 4 0
25 9 46 20 l40 20 41 -21 c23 -11 45 -17 49 -12 5 4 5 27 1 50 -8 39 -6 44 25
74 19 18 34 36 34 41 0 4 -22 10 -49 14 -45 6 -50 9 -67 46 -21 46 -28 52 -42
35z"
                    />
                    <path
                      d="M919 267 c-20 -42 -25 -45 -70 -51 -27 -4 -49 -10 -49 -14 0 -5 15
-23 34 -41 31 -30 33 -35 25 -74 -4 -23 -4 -46 1 -51 5 -4 26 2 48 14 l39 22
41 -21 c23 -12 44 -21 47 -21 4 0 4 24 0 52 -6 50 -5 55 24 82 17 17 31 33 31
37 0 4 -20 11 -45 15 -40 6 -48 11 -65 45 -28 54 -37 55 -61 6z"
                    />
                    <path
                      d="M1312 265 c-16 -34 -28 -45 -44 -45 -38 0 -68 -12 -68 -26 0 -7 14
-24 30 -36 30 -21 31 -25 24 -75 -3 -29 -3 -53 0 -53 4 0 25 9 46 20 l40 20
40 -20 c21 -11 42 -20 46 -20 4 0 4 21 1 48 -5 44 -3 50 30 84 l36 37 -27 11
c-15 5 -38 10 -52 10 -19 0 -29 10 -46 45 -12 25 -25 45 -28 45 -3 0 -16 -20
-28 -45z"
                    />
                    <path
                      d="M1722 297 c-5 -6 -17 -26 -25 -43 -14 -26 -24 -33 -62 -38 -25 -4
-45 -11 -45 -15 0 -4 14 -20 31 -37 29 -27 31 -32 25 -81 -3 -29 -4 -53 -1
-53 3 0 24 9 47 21 l40 21 44 -23 c23 -13 46 -20 49 -17 4 4 3 27 -3 52 -9 43
-8 46 24 77 19 18 34 36 34 41 0 4 -22 10 -49 14 -45 6 -50 9 -67 46 -21 46
-28 52 -42 35z"
                    />
                  </g>
                </svg>
              </div>
              <p className="mb-2">{testimonial.description}</p>
              <p className="font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex animate-scroll2 space-x-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-4 min-w-[450px] rounded-lg shadow-md transition duration-10 hover:bg-[#DC143C] hover:text-white flex flex-col justify-between"
            >
              <div className="flex items-center mb-1 max-w-[100px]">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="190.000000pt"
                  height="33.000000pt"
                  viewBox="0 0 190.000000 33.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,33.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      d="M132 265 c-16 -34 -28 -45 -44 -45 -37 0 -68 -11 -68 -24 0 -7 13
-25 29 -40 27 -26 29 -33 24 -77 -3 -27 -3 -49 1 -49 4 0 25 9 46 20 l40 20
40 -20 c21 -11 42 -20 46 -20 4 0 4 22 1 49 -5 44 -3 51 24 77 16 15 29 33 29
40 0 13 -31 24 -68 24 -16 0 -28 11 -44 45 -12 25 -25 45 -28 45 -3 0 -16 -20
-28 -45z"
                    />
                    <path
                      d="M542 297 c-5 -6 -17 -26 -25 -43 -13 -25 -24 -32 -57 -37 -23 -3 -44
-8 -48 -11 -3 -4 9 -22 27 -40 31 -32 33 -37 26 -85 -4 -28 -4 -51 -1 -51 4 0
25 9 46 20 l40 20 41 -21 c23 -11 45 -17 49 -12 5 4 5 27 1 50 -8 39 -6 44 25
74 19 18 34 36 34 41 0 4 -22 10 -49 14 -45 6 -50 9 -67 46 -21 46 -28 52 -42
35z"
                    />
                    <path
                      d="M919 267 c-20 -42 -25 -45 -70 -51 -27 -4 -49 -10 -49 -14 0 -5 15
-23 34 -41 31 -30 33 -35 25 -74 -4 -23 -4 -46 1 -51 5 -4 26 2 48 14 l39 22
41 -21 c23 -12 44 -21 47 -21 4 0 4 24 0 52 -6 50 -5 55 24 82 17 17 31 33 31
37 0 4 -20 11 -45 15 -40 6 -48 11 -65 45 -28 54 -37 55 -61 6z"
                    />
                    <path
                      d="M1312 265 c-16 -34 -28 -45 -44 -45 -38 0 -68 -12 -68 -26 0 -7 14
-24 30 -36 30 -21 31 -25 24 -75 -3 -29 -3 -53 0 -53 4 0 25 9 46 20 l40 20
40 -20 c21 -11 42 -20 46 -20 4 0 4 21 1 48 -5 44 -3 50 30 84 l36 37 -27 11
c-15 5 -38 10 -52 10 -19 0 -29 10 -46 45 -12 25 -25 45 -28 45 -3 0 -16 -20
-28 -45z"
                    />
                    <path
                      d="M1722 297 c-5 -6 -17 -26 -25 -43 -14 -26 -24 -33 -62 -38 -25 -4
-45 -11 -45 -15 0 -4 14 -20 31 -37 29 -27 31 -32 25 -81 -3 -29 -4 -53 -1
-53 3 0 24 9 47 21 l40 21 44 -23 c23 -13 46 -20 49 -17 4 4 3 27 -3 52 -9 43
-8 46 24 77 19 18 34 36 34 41 0 4 -22 10 -49 14 -45 6 -50 9 -67 46 -21 46
-28 52 -42 35z"
                    />
                  </g>
                </svg>
              </div>
              <p className=" mb-2 ">{testimonial.description}</p>
              <p className="font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
