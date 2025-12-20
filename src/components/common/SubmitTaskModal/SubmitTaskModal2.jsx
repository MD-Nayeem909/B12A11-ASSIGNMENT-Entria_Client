import { BookOpenText } from "lucide-react";

const SubmitTaskModal2 = ({
  userInfo = {},
  setIsCompletionOpen,
}) => {

  
  const user = userInfo?.userId;
  // const {email, name, image}= user;

  

  return (
    <section
      onClose={() => setIsCompletionOpen(false)}
      size="md"
    >
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-base-200 opacity-80 backdrop-blur-sm absolute h-screen w-full"></div>
        <div className="text-center space-y-6 bg-base-100 shadow-lg p-10 rounded-4xl z-100">
          <div className="mx-auto bg-info text-info-content flex items-center justify-center h-20 w-20 rounded-full">
            <BookOpenText className="h-12 w-12" />
          </div>

          <div>
            <h3 className="text-xl font-semibold ">Submission Info!</h3>
            <p className="text-sm mt-2">
              You have successfully completed the onboarding process. Welcome to
              our platform!
            </p>
          </div>

          <div className="text-left flex items-center gap-4">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring-2 ring-offset-2">
                <img
                  src={user?.image}
                  alt=""
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl">
                Name : <span className="font-medium">{user?.name}</span>
              </h3>
              <h3 className="text-xl">
                Email : <span className="font-medium">{user?.email}</span>
              </h3>
            </div>
          </div>
          <div className="bg-info text-info-content border rounded-lg p-4">
            <p className="text-sm mt-2">
              You have successfully completed the onboarding process. Welcome to
              our platform!
            </p>
          </div>

          <div className="flex justify-center space-x-3">
            <button
              onClick={() => setIsCompletionOpen(false)}
              variant="secondary"
              className="btn btn-error"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitTaskModal2;
