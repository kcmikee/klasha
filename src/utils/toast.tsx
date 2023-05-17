import toast from "react-hot-toast";

const options = {
  duration: 4000,
  position: "top-center",

  // Styling
  style: {},
  className: "",

  // Custom Icon
  icon: "👏",

  // Change colors of success/error/loading icon
  iconTheme: {
    primary: "#000",
    secondary: "#fff",
  },

  // Aria
  ariaProps: {
    role: "status",
    "aria-live": "polite",
  },
};

function toastSuccess(title: string) {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-green-500 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <p className="text-sm font-medium text-white">{title}</p>
        </div>
      </div>
    </div>
  ));
}
function toastError(title: string) {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-sm w-5/12 bg-red-500 px-4 py-4 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <p className="text-sm font-medium text-white">{title}</p>
        {/* <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
          </div>
        </div> */}
      </div>
    ),
    {
      position: "top-right",
    }
  );
}

function toastInfo(title: string) {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-blue-400 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <p className="text-sm font-medium text-white">{title}</p>
        </div>
      </div>
    </div>
  ));
}
function toastWarning(title: string) {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-yellow-500 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <p className="text-sm font-medium text-white">{title}</p>
        </div>
      </div>
    </div>
  ));
}
export { toastSuccess, toastError, toastInfo, toastWarning };
