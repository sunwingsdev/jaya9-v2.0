

const Navigation = ({navigate}) => {
    return (
        <div>
            <span
            
            className="absolute -top-8  right-14 lg:right-1/4 translate-x-full ">
       <svg
          onClick={() => navigate(-1)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="auto"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-2 w-20 p-6 bg-informationBackground informationBackground  cursor-pointer rounded-full"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
       </span> 
        </div>
    );
};

export default Navigation;