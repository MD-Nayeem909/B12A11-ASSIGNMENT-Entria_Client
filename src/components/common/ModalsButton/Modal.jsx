const Modal = ({ isOpen, onClose, title, children, size = "sm" }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div
        className={`relative bg-white rounded-xl shadow-lg w-full ${sizeClasses[size]} p-6 z-50 animate-fadeIn`}
      >
        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">{title}</h2>

        {/* Content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
