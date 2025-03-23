
import { Link } from 'react-router-dom';

const MainProfileTabs = ({data}) => {
    return (
        <div className="  ">
            {data.map((section, index) => (
              <div
                className={` bg-white mt-2 ${section.sectionClass}`}
                key={index}
              >
                <h3
                  className={`font-semibold p-3 ${
                    index !== data.length - 1 ? "border-b border-gray-400" : ""
                  }   ${section.titleClass}`}
                >
                  {section.title}
                </h3>
                <div
                  className={`grid ${section.gridClass}  justify-items-center   p-2`}
                >
                  {section.items.map((item, i) => (
                    <Link key={i} to={item.path}>
                      <div
                        key={i}
                        className={`flex ${
                          index === data.length - 1 ? "flex-row" : "flex-col"
                        }  items-center`}
                        onClick={item.onClick}
                      >
                        <img
                          src={item.imgSrc}
                          alt={item.label}
                          className={item.imgClass}
                        />
                        <h3 className={item.labelClass}>{item.label}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
    );
};

export default MainProfileTabs;