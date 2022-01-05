import React from 'react';

export const Footer = () => {
  return (
    <footer className="mt-24 px-12 lg:px-16 xl:px-48 pb-24 border-t-2 border-gray-400">
      <div className="block lg:flex mt-16 lg:my-24">
        <div>
          <h4 className="text-4xl text-blue-900 font-bold">
            Make your community a <br className="hidden lg:block" /> better place to live!
          </h4>
          <p className="text-gray-500 mt-4">Try for free</p>
        </div>
        <div className="ml-auto box-content py-6 mt-8 lg:mt-0">
          <a href="#" className="bg-pink-400 hover:bg-pink-300 text-white py-5 px-10 rounded-full ml-auto">
            Learn more
          </a>
        </div>
      </div>
      <div className="block lg:flex w-full">
        <div>
          <div className="flex items-center">
            <svg className="w-14 h-14" viewBox="0 0 49 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="15" width="20" height="20" rx="10" fill="#9C69E2" />
              <rect x="29" width="20" height="35" rx="10" fill="#F063B8" />
            </svg>
            <p className="ml-4 text-xl text-blue-900 font-semibold">Communite</p>
          </div>
          <div className="text-lg text-blue-900 font-semibold mt-6">
            <a href="" className="hover:underline">
              info@communify
            </a>{' '}
            <br />
            <a href="" className="hover:underline">
              1-232-3434 (Main)
            </a>
          </div>
        </div>
        <div className="ml-auto mt-8 lg:mt-0">
          <h5 className="text-lg text-blue-900 font-semibold">About</h5>
          <ul className="mt-8 lg:mt-16">
            <li className="mt-4">
              <a href="#" className="text-blue-900 hover:text-blue-700 hover:underline hover:font-bold">
                Profile
              </a>
            </li>
            <li className="mt-4">
              <a href="#" className="text-blue-900 hover:text-blue-700 hover:underline hover:font-semibold">
                Features
              </a>
            </li>
            <li className="mt-4">
              <a href="#" className="text-blue-900 hover:text-blue-700 hover:underline hover:font-semibold">
                Careers
              </a>
            </li>
            <li className="mt-4">
              <a href="#" className="text-blue-900 hover:text-blue-700 hover:underline hover:font-semibold">
                DW News
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-0 lg:ml-32 mt-16 lg:mt-0">
          <h5 className="text-lg text-blue-900 font-semibold">Help</h5>
          <ul className="mt-8 lg:mt-16">
            <li className="mt-4">
              <a href="#" className="text-blue-900 hover:text-blue-700 hover:underline hover:font-semibold">
                Support
              </a>
            </li>
            <li className="mt-4">
              <a href="#" className="text-blue-900 hover:text-blue-700 hover:underline hover:font-semibold">
                Sign up
              </a>
            </li>
            <li className="mt-4">
              <a href="#" className="text-blue-900 hover:text-blue-700 hover:underline hover:font-semibold">
                Guide
              </a>
            </li>
            <li className="mt-4">
              <a href="#" className="text-blue-900 hover:text-blue-700 hover:underline hover:font-semibold">
                Reports
              </a>
            </li>
            <li className="mt-4">
              <a href="#" className="text-blue-900 hover:text-blue-700 hover:underline hover:font-semibold">
                Q&A
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-0 lg:ml-32 mt-16 lg:mt-0">
          <h5 className="text-lg text-blue-900 font-semibold">Social Media</h5>
          <div className="mt-16 flex">
            <a href="#" className="text-gray-900 hover:text-gray-700 p-4 bg-gray-200 hover:bg-gray-100 rounded-full">
              <svg className="w-7 h-7" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M6.465 0.066C7.638 0.012 8.012 0 11 0C13.988 0 14.362 0.013 15.534 0.066C16.706 0.119 17.506 0.306 18.206 0.577C18.939 0.854 19.604 1.287 20.154 1.847C20.714 2.396 21.146 3.06 21.422 3.794C21.694 4.494 21.88 5.294 21.934 6.464C21.988 7.639 22 8.013 22 11C22 13.988 21.987 14.362 21.934 15.535C21.881 16.705 21.694 17.505 21.422 18.205C21.146 18.9391 20.7133 19.6042 20.154 20.154C19.604 20.714 18.939 21.146 18.206 21.422C17.506 21.694 16.706 21.88 15.536 21.934C14.362 21.988 13.988 22 11 22C8.012 22 7.638 21.987 6.465 21.934C5.295 21.881 4.495 21.694 3.795 21.422C3.06092 21.146 2.39582 20.7133 1.846 20.154C1.28638 19.6047 0.853315 18.9399 0.577 18.206C0.306 17.506 0.12 16.706 0.066 15.536C0.012 14.361 0 13.987 0 11C0 8.012 0.013 7.638 0.066 6.466C0.119 5.294 0.306 4.494 0.577 3.794C0.853723 3.06008 1.28712 2.39531 1.847 1.846C2.39604 1.2865 3.06047 0.853443 3.794 0.577C4.494 0.306 5.294 0.12 6.464 0.066H6.465ZM15.445 2.046C14.285 1.993 13.937 1.982 11 1.982C8.063 1.982 7.715 1.993 6.555 2.046C5.482 2.095 4.9 2.274 4.512 2.425C3.999 2.625 3.632 2.862 3.247 3.247C2.88205 3.60205 2.60118 4.03428 2.425 4.512C2.274 4.9 2.095 5.482 2.046 6.555C1.993 7.715 1.982 8.063 1.982 11C1.982 13.937 1.993 14.285 2.046 15.445C2.095 16.518 2.274 17.1 2.425 17.488C2.601 17.965 2.882 18.398 3.247 18.753C3.602 19.118 4.035 19.399 4.512 19.575C4.9 19.726 5.482 19.905 6.555 19.954C7.715 20.007 8.062 20.018 11 20.018C13.938 20.018 14.285 20.007 15.445 19.954C16.518 19.905 17.1 19.726 17.488 19.575C18.001 19.375 18.368 19.138 18.753 18.753C19.118 18.398 19.399 17.965 19.575 17.488C19.726 17.1 19.905 16.518 19.954 15.445C20.007 14.285 20.018 13.937 20.018 11C20.018 8.063 20.007 7.715 19.954 6.555C19.905 5.482 19.726 4.9 19.575 4.512C19.375 3.999 19.138 3.632 18.753 3.247C18.3979 2.88207 17.9657 2.60121 17.488 2.425C17.1 2.274 16.518 2.095 15.445 2.046ZM9.595 14.391C10.3797 14.7176 11.2534 14.7617 12.0669 14.5157C12.8805 14.2697 13.5834 13.7489 14.0556 13.0422C14.5278 12.3356 14.7401 11.4869 14.656 10.6411C14.572 9.79534 14.197 9.00497 13.595 8.405C13.2112 8.02148 12.7472 7.72781 12.2363 7.54515C11.7255 7.36248 11.1804 7.29536 10.6405 7.34862C10.1006 7.40187 9.57915 7.57418 9.1138 7.85313C8.64845 8.13208 8.25074 8.51074 7.9493 8.96185C7.64786 9.41296 7.45019 9.92529 7.37052 10.462C7.29084 10.9986 7.33115 11.5463 7.48854 12.0655C7.64593 12.5847 7.91648 13.0626 8.28072 13.4647C8.64496 13.8668 9.09382 14.1832 9.595 14.391ZM7.002 7.002C7.52702 6.47697 8.15032 6.0605 8.8363 5.77636C9.52228 5.49222 10.2575 5.34597 11 5.34597C11.7425 5.34597 12.4777 5.49222 13.1637 5.77636C13.8497 6.0605 14.473 6.47697 14.998 7.002C15.523 7.52702 15.9395 8.15032 16.2236 8.8363C16.5078 9.52228 16.654 10.2575 16.654 11C16.654 11.7425 16.5078 12.4777 16.2236 13.1637C15.9395 13.8497 15.523 14.473 14.998 14.998C13.9377 16.0583 12.4995 16.654 11 16.654C9.50046 16.654 8.06234 16.0583 7.002 14.998C5.94166 13.9377 5.34597 12.4995 5.34597 11C5.34597 9.50046 5.94166 8.06234 7.002 7.002ZM17.908 6.188C18.0381 6.06527 18.1423 5.91768 18.2143 5.75397C18.2863 5.59027 18.3248 5.41377 18.3274 5.23493C18.33 5.05609 18.2967 4.87855 18.2295 4.71281C18.1622 4.54707 18.0624 4.39651 17.936 4.27004C17.8095 4.14357 17.6589 4.04376 17.4932 3.97652C17.3275 3.90928 17.1499 3.87598 16.9711 3.87858C16.7922 3.88119 16.6157 3.91965 16.452 3.9917C16.2883 4.06374 16.1407 4.1679 16.018 4.298C15.7793 4.55103 15.6486 4.88712 15.6537 5.23493C15.6588 5.58274 15.7992 5.91488 16.0452 6.16084C16.2911 6.40681 16.6233 6.54723 16.9711 6.5523C17.3189 6.55737 17.655 6.42669 17.908 6.188Z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 p-4 bg-gray-200 hover:bg-gray-100 rounded-full ml-6"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 p-4 bg-gray-200 hover:bg-gray-100 rounded-full ml-6"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.643 2.93702C22.808 3.30702 21.911 3.55702 20.968 3.67002C21.941 3.08781 22.669 2.17148 23.016 1.09202C22.1019 1.63501 21.1014 2.01721 20.058 2.22202C19.3564 1.47288 18.4271 0.976342 17.4143 0.80949C16.4016 0.642638 15.3621 0.814807 14.4572 1.29927C13.5524 1.78373 12.8328 2.55338 12.4102 3.48872C11.9875 4.42406 11.8855 5.47277 12.12 6.47202C10.2677 6.37901 8.45564 5.89757 6.80144 5.05892C5.14723 4.22028 3.68785 3.04318 2.51801 1.60402C2.11801 2.29402 1.88801 3.09402 1.88801 3.94602C1.88757 4.71301 2.07644 5.46826 2.43789 6.14475C2.79934 6.82124 3.32217 7.39805 3.96001 7.82402C3.22029 7.80048 2.49688 7.6006 1.85001 7.24102V7.30102C1.84994 8.37676 2.22204 9.41939 2.90319 10.252C3.58434 11.0846 4.53258 11.6559 5.58701 11.869C4.9008 12.0547 4.18135 12.0821 3.48301 11.949C3.78051 12.8746 4.36001 13.684 5.14038 14.2639C5.92075 14.8438 6.86293 15.1652 7.83501 15.183C6.18485 16.4784 4.1469 17.1811 2.04901 17.178C1.67739 17.1781 1.30609 17.1564 0.937012 17.113C3.06649 18.4822 5.54535 19.2088 8.07701 19.206C16.647 19.206 21.332 12.108 21.332 5.95202C21.332 5.75202 21.327 5.55002 21.318 5.35002C22.2293 4.69099 23.0159 3.87491 23.641 2.94002L23.643 2.93702V2.93702Z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-500 p-4 bg-gray-200 hover:bg-gray-100 rounded-full ml-6"
            >
              <svg className="w-7 h-7" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10C0 4.47715 4.47715 0 10 0H20C25.5228 0 30 4.47715 30 10V14C30 19.5228 25.5228 24 20 24H0V10Z" />
                <circle cx="9" cy="12" r="2" fill="white" />
                <circle cx="15" cy="12" r="2" fill="white" />
                <circle cx="21" cy="12" r="2" fill="white" />
                <path d="M10 23H0V25.4676C0 27.0222 1.69594 27.9824 3.02899 27.1826L10 23Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
