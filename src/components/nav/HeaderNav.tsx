type HeaderNavProps = {};

const HeaderNav = ({}: HeaderNavProps) => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="flex items-center gap-2" href="/">
          <span className="sr-only">DEMO</span>
          <svg
            width="123"
            height="50"
            viewBox="0 0 163 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_415_152)">
              <path
                d="M107.912 53.7478C105.649 53.7478 103.387 54.0038 101.183 54.5158C95.8747 55.7505 91.6267 57.9825 88.1187 62.2585C85.3107 65.6825 81.976 70.9225 81.188 75.2998C83.0627 64.8878 85.8294 56.5225 85.8414 45.8105C86.9 49.7305 87.0094 53.8612 87.604 57.9212C87.968 57.8238 88.3187 57.6905 88.6627 57.5185C90.684 47.1105 84.0374 33.6238 83.9374 26.1158C87.0174 25.6185 89.884 28.0358 92.1067 27.6478C95.596 27.0412 95.5507 25.1332 98.472 24.0652C102.367 22.6398 104.711 23.2292 108.515 18.4038C106.961 15.0145 103.429 15.4705 100.533 16.6799C98.1147 17.6932 96.1107 17.2865 95.7174 14.0772C95.5587 12.7625 95.9894 10.6745 97.8347 11.0678C99.384 11.4025 99.5214 13.7878 99.7347 15.0065C101.124 14.1812 104.225 12.8292 105.973 13.3812C106.137 13.4359 106.292 13.5038 106.435 13.5878C106.757 13.2692 107.071 12.9732 107.356 12.7385C102.916 9.53589 100.007 3.39722 92.5787 -0.00012207C85.2934 3.36521 74.2707 7.41988 70.756 13.3945C68.22 17.6972 67.2494 25.8772 65.3027 30.9785C61.704 40.4078 57.7707 49.2785 53.184 58.0638C49.3587 65.3825 42.2054 80.0398 44.5507 88.4345C47.1894 97.8838 61.404 99.0852 69.1467 102.192C81.7054 107.229 94.0827 113.041 107.912 113.041C124.287 113.041 137.56 99.7665 137.56 83.3918C137.56 67.0225 124.287 53.7478 107.912 53.7478Z"
                fill="#9B93FF"
              />
              <path
                d="M25.8573 46.8787L29.7413 53.98L36.8426 57.8654L29.7413 61.7494L25.8573 68.8521L21.9719 61.7494L14.8706 57.8654L21.9719 53.98L25.8573 46.8787Z"
                fill="#9B93FF"
              />
              <path
                d="M155.325 73.124L157.953 77.9293L162.76 80.5586L157.953 83.188L155.325 87.9946L152.696 83.188L147.889 80.5586L152.696 77.9293L155.325 73.124Z"
                fill="#9B93FF"
              />
              <path
                d="M7.43467 80.5588L10.064 85.3654L14.8707 87.9948L10.064 90.6228L7.43467 95.4294L4.80667 90.6228L0 87.9948L4.80667 85.3654L7.43467 80.5588Z"
                fill="#9B93FF"
              />
              <path
                d="M147.889 25.6667L151.773 32.768L158.876 36.652L151.773 40.536L147.889 47.64L144.005 40.536L136.903 36.652L144.005 32.768L147.889 25.6667Z"
                fill="#9B93FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_415_152">
                <rect width="163" height="114" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <div />
          {/* <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  O nas
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Produkty
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Konfigurator
                </a>
              </li>
            </ul>
          </nav> */}

          <div className="flex items-center gap-4">
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 ">
              <span className="sr-only">Shopping Cart</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
