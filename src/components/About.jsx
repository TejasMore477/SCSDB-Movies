import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

function About() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-fit pt-5 px-8">
      <div className="flex items-center gap-5 text-2xl">
        <i
          onClick={() => navigate(-1)}
          className="text-[#6556CD] ri-arrow-left-line active:text-[#503ecb] cursor-pointer"
        ></i>
        <h1 className="text-xl font-semibold text-zinc-400">
          <i className="text-[#6556CD] ri-tv-fill"></i>
          <span className="ml-3">About SCSDB-Movies</span>
        </h1>
      </div>

      {/* content */}
      <div className="py-10">
        <h2 className="text-2xl font-semibold text-zinc-200">What is this ?</h2>
        <p className="text-lg font-light mt-2">
          SCSBD Movie Web App is your ultimate destination for discovering and
          exploring movies and TV shows from around the globe. Built with a
          passion for cinema and technology, we strive to bring the world of
          entertainment closer to you, one movie at a time.
        </p>

        <hr className="border-none h-[1px] bg-zinc-500 my-10" />

        <h2 className="text-2xl font-semibold text-zinc-200">My Mission</h2>
        <p className="text-lg font-light mt-2">
          My mission is to simplify the way you connect with the movies and
          shows you love. <br /> Whether you're a casual viewer or a hardcore
          cinephile, SCSBD offers a seamless platform to:
        </p>
        <ul className="font-light pl-5 list-disc marker:text-customBullet">
          <li className="mb-3">Explore trending and classic titles.</li>
          <li className="mb-3">
            Get detailed insights about movies and shows.
          </li>
          <li className="mb-3">Share your favorites with friends.</li>
        </ul>

        <hr className="border-none h-[1px] bg-zinc-500 my-10" />

        <div className="w-full grid grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-200">
              What I Offer
            </h2>
            <ul className="font-light pl-5 list-disc marker:text-customBullet mt-2">
              <li className="mb-3">
                <h3 className="text-lg">Comprehensive Movie Details:</h3>
                <span className="text-zinc-300 text-base">
                  Dive deep into movie synopses, ratings, reviews, and more.
                </span>
              </li>
              <li className="mb-3">
                <h3 className="text-lg">Personalized Recommendations:</h3>
                <span className="text-zinc-300 text-base">
                  Discover content tailored to your preferences.
                </span>
              </li>
              <li className="mb-3">
                <h3 className="text-lg">Interactive Sharing: </h3>
                <span className="text-zinc-300 text-base">
                  Share your favorite movies and shows with friends through
                  dynamic, poster-rich links.
                </span>
              </li>
              <li className="mb-3">
                <h3 className="text-lg">Modern User Experience:</h3>
                <span className="text-zinc-300 text-base">
                  Enjoy a fast, responsive, and visually appealing interface.
                </span>
              </li>
            </ul>
          </div>

          <div>
            {" "}
            <h2 className="text-2xl font-semibold text-zinc-200">
              Why Choose SCSBD?
            </h2>
            <ul className="font-light pl-5 list-disc marker:text-customBullet mt-2">
              <li className="mb-3">
                <h3 className="text-lg">Rich Data: </h3>
                <span className="text-zinc-300 text-base">
                  {" "}
                  Powered by The Movie Database (TMDb) API for accurate and
                  up-to-date information.
                </span>
              </li>
              <li className="mb-3">
                <h3 className="text-lg">User-Friendly Design:</h3>
                <span className="text-zinc-300 text-base">
                  Clean, intuitive, and accessible to users of all ages.
                </span>
              </li>
              <li className="mb-3">
                <h3 className="text-lg">Engaging Features: </h3>
                <span className="text-zinc-300 text-base">
                  Tools for sharing, bookmarking, and exploring content like
                  never before.
                </span>
              </li>
              <li className="mb-3">
                <h3 className="text-lg">
                  Built for Movie Lovers, by Movie Lovers:
                </h3>
                <span className="text-zinc-300 text-base">
                  I know what you want because I love it too!
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-200">Technology</h2>
            <p className="text-lg font-light mt-2">
              SCSBD Movie Web App is built using cutting-edge technologies,
              including:
            </p>
            <ul className="font-light pl-5 list-disc marker:text-customBullet mt-2">
              <li className="mb-3">
                <h3 className="text-lg">Frontend: </h3>
                <span className="text-zinc-300 text-base">
                  {" "}
                  React.js for a dynamic and responsive interface.
                </span>
              </li>
              <li className="mb-3">
                <h3 className="text-lg">Backend:</h3>
                <span className="text-zinc-300 text-base">
                  Node.js for robust server-side handling.
                </span>
              </li>
              <li className="mb-3">
                <h3 className="text-lg">APIs: </h3>
                <span className="text-zinc-300 text-base">
                  TMDb for reliable movie data
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-200">
              Get in Touch
            </h2>
            <p className="text-lg font-light mt-2">
              I value your feedback and suggestions to make SCSBD even better.
              Reach out to me anytime!
            </p>

            <ul className="font-light pl-5 list-disc marker:text-customBullet mt-2">
              <li className="mb-3">
                <h3 className="text-lg">Email: </h3>
                <span className="text-zinc-300 text-base">
                  {" "}
                  tejasmore660@gmail.com
                </span>
              </li>
              <li className="mb-3">
                <h3 className="text-lg">Follow Me: </h3>
                <span className="text-zinc-300 text-base">LinkedIn</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-none h-[1px] bg-zinc-500 my-10" />

        <p>
          Thank you for choosing SCSBD Movie Web App – Let’s explore the world
          of movies together!
        </p>
        
      </div>
    </div>
  );
}

export default About;
