import React from "react";

const About = () => {
  return (
    <div className="max-w mx-auto p-6 md:p-10 mt-10 bg-white shadow-xl rounded-xl border border-gray-200 transition-transform duration-300 hover:shadow-2xl">
      {/* Title Section */}
      <h2 className="text-4xl font-extrabold text-center text-green-700 mb-6 tracking-wide">
        🏨 GCE Bodi Hostel Management
      </h2>
      
      {/* Overview */}
      <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-center mb-6">
        The <strong className="text-green-600">GCE Bodi Hostel Management System</strong> ensures
        <span className="text-blue-600 font-semibold"> secure and automated attendance tracking</span> 
        using <span className="text-blue-600 font-semibold">live location, face verification,</span> 
        and <span className="text-blue-600 font-semibold">real-time notifications</span> to the warden.
      </p>

      {/* Features Section */}
      <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">🛡️ Key Features</h3>
        <ul className="list-disc list-inside text-gray-800 text-lg space-y-3">
          <li>📍 <strong className="text-green-700">Live Location Tracking</strong> – Ensures students are within hostel premises.</li>
          <li>🧑‍💻 <strong className="text-green-700">Face Verification</strong> – AI-powered recognition for attendance marking.</li>
          <li>📧 <strong className="text-green-700">Automated Warden Alerts</strong> – Real-time email notifications for better security.</li>
        </ul>
      </div>

      {/* Technologies Used */}
      <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md mt-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">💡 Technologies Used</h3>
        <p className="text-gray-800 text-lg leading-relaxed">
          - <span className="text-blue-600 font-semibold">React.js</span> for interactive UI  
          <br />
          - <span className="text-blue-600 font-semibold">Flask/Node.js</span> for backend processing  
          <br />
          - <span className="text-blue-600 font-semibold">OpenCV/TensorFlow</span> for AI-based face verification  
          <br />
          - <span className="text-blue-600 font-semibold">Google Maps API</span> for live location tracking  
          <br />
          - <span className="text-blue-600 font-semibold">Nodemailer/SMTP</span> for email notifications  
        </p>
      </div>

      {/* Goal Section */}
      <div className="mt-6 p-6 md:p-8 rounded-lg shadow-md bg-green-50 border-l-4 border-green-700">
        <h3 className="text-2xl font-semibold text-green-800 mb-4">🎯 Our Goal</h3>
        <p className="text-gray-800 text-lg leading-relaxed">
          Our mission is to <span className="text-green-700 font-semibold">enhance hostel security</span> 
          and <span className="text-green-700 font-semibold">automate attendance tracking</span> using AI-driven technologies, 
          ensuring a safer and more efficient hostel environment.
        </p>
      </div>
    </div>
  );
};

export default About;
