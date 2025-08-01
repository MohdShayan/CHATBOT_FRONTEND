import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center gap-4 animate-fade-in">
          <div className="loader border-4 border-blue-300 border-t-blue-600 rounded-full w-12 h-12 animate-spin"></div>
          <p className="text-lg font-semibold text-gray-800">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
