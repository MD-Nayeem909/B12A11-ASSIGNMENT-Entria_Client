const DeleteModal = ({ isOpen, onClose, onConfirm, loading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-sm shadow-xl animate-fadeIn">
        <h2 className="text-lg font-semibold mb-2">Are you sure?</h2>
        <p className="text-gray-600">This action cannot be undone.</p>

        <div className="flex justify-end gap-3 mt-6">
          <button className="btn" onClick={onClose}>
            Cancel
          </button>

          <button
            className="btn bg-rose-600 text-white"
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
