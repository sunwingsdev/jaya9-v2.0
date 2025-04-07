import { useState } from "react";

const AddGameCategories = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const handleAddClick = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setCategoryName("");
  };

  const handleAdd = () => {
    console.log(`Added ${modalType}:`, categoryName);
    handleClose();
  };

  return (
    <div className=" bg-gray-100 min-h-screen">
      <h1 className="text-center p-4 bg-gradient-to-r from-gray-500 to-slate-500 text-white text-2xl font-bold rounded-t-lg">
        Game Categories
      </h1>
      <div className="lg:w-2/3 mx-auto my-6 p-2 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-lg font-semibold text-gray-700 mb-6">
          Create Game Categories
        </h2>
        <div className=" lg:flex justify-between space-x-2 lg:space-x-4 text-nowrap">
          {/* Main Categories */}
          <div className="">
            <h3 className="bg-[#6b7699f1] text-white p-1 rounded-md flex justify-between items-center font-medium">
              Main Categories
              <button
                onClick={() => handleAddClick("Main")}
                className="bg-slate-700 hover:bg-orange-600 text-white p-2 mx-2 rounded-md"
              >
                Add+
              </button>
            </h3>
            {["casino", "slot", "table", "fishing"].map((category) => (
              <div
                key={category}
                className="flex items-center p-1 my-3 border rounded-lg shadow-sm hover:shadow-md"
              >
                <img
                  className="w-10 h-10 mr-4 rounded-full"
                  src="https://play-lh.googleusercontent.com/bPGq9LguGXjRyX_rYuemvQtSGpcUr4hXWBZ3uBLRXJzrnV2ueJHMS3SYtcSSPtDR-K0=w526-h296-rw"
                  alt={category}
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {category}
                </h4>
              </div>
            ))}
          </div>

          {/* Sub Categories */}
          <div className="">
            <h3 className="bg-[#6b7699f1] text-white p-1 rounded-md flex justify-between items-center font-medium">
              Sub Categories
              <button
                onClick={() => handleAddClick("Sub")}
                className="bg-slate-700 hover:bg-orange-600 text-white  p-2 mx-2 rounded-md"
              >
                Add+
              </button>
            </h3>
            {["jili", "PG soft", "Fa chai"].map((subCategory) => (
              <div
                key={subCategory}
                className="flex justify-between items-center p-1 my-3 border rounded-lg shadow-sm hover:shadow-md"
              >
                <h4 className="text-lg font-semibold text-gray-800">
                  {subCategory}
                </h4>
                <img
                  className=" w-6 lg:w-10 h-6 lg:h-10 rounded-full"
                  src="https://p1.hiclipart.com/preview/884/768/968/3d-cartoon-icons-iii-windows-stand-by-push-button-png-clipart.jpg"
                  alt={subCategory}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Add {modalType} Category
            </h2>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter category name"
              className="w-full p-2 border rounded-md mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleClose}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
              <button
                onClick={handleAdd}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddGameCategories;
