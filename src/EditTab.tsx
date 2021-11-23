import { X } from "react-feather";

const EditTab = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl">Today</h3>

        <div className="flex">
          <span className="flex-1">WAYN-12513 Flight tab - 2h 30m</span>
          <X className="text-red" />
        </div>

        <div className="flex">
          <span className="flex-1">WAYN-12513 Flight tab - 2h 30m</span>
          <X className="text-red" />
        </div>

        <div className="flex">
          <span className="flex-1">WAYN-12513 Flight tab - 2h 30m</span>
          <X className="text-red" />
        </div>

        <form className="flex gap-4">
          <input
            className="py-2 px-3 rounded-lg placeholder-lightGray bg-whiteSurface"
            placeholder="Task id"
          />
          <button className="flex py-2 text-black flex-1 justify-center bg-gray rounded-lg">
            Create
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-3 ">
        <h3 className="text-xl">Constants </h3>

        <div className="flex">
          <span className="flex-1">WAYN-12513 Flight tab - 2h 30m</span>
          <X className="text-red" />
        </div>

        <div className="flex">
          <span className="flex-1">WAYN-12513 Flight tab - 2h 30m</span>
          <X className="text-red" />
        </div>

        <div className="flex">
          <span className="flex-1">WAYN-12513 Flight tab - 2h 30m</span>
          <X className="text-red" />
        </div>

        <form className="flex gap-4">
          <input
            className="py-2 px-3 rounded-lg placeholder-lightGray bg-whiteSurface"
            placeholder="Task id"
          />
          <button className="flex py-2 text-black flex-1 justify-center bg-gray rounded-lg">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default EditTab;
