

const GameOptions = ({options}) => {
    return (
        <div className="bg-common-blue mt-4 h-full p-2">
        <h3 className="bg-blue-800 shadow-3xl-blue flex items-center gap-2 p-3 rounded-lg">
          <div className="flex flex-row gap-4 overflow-x-auto pb-1">
            {options.map((game) => (
              <div key={game.id} className="flex gap-2 items-center">
                <input type="checkbox" id={game.id} className="w-4 h-4 cursor-pointer" />
                <label htmlFor={game.id} className="text-white font-medium">
                  {game.label}
                </label>
              </div>
            ))}
          </div>
        </h3>
      </div>
    );
};

export default GameOptions;