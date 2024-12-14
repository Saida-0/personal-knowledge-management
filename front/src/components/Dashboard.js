// import React, { useState } from 'react';
// import ProfileSection from './ProfileSection';
// import ContentForm from './ContentForm';
// import ContentList from './ContentList';
// import KnowledgeGraph from './KnowledgeGraph';
// import './styles/Dashboard.css';

// const Dashboard = () => {
//   const [contents, setContents] = useState([]);
// //  const [selectedContentId, setSelectedContentId] = useState(null);
//   const [showSection, setShowSection] = useState({
//     profile: false,
//     addContent: false,
//     viewContents: true,
//     graph: false,
//   });

//   const handleContentUpdate = (newContent) => {
//     setContents((prev) => [...prev, newContent]);
//   };

//   const toggleSection = (section) => {
//     setShowSection((prev) => ({
//       profile: false,
//       addContent: false,
//       viewContents: false,
//       graph: false,
//       [section]: !prev[section],
//     }));
//   };

//   return (
//     <div className="dashboard-container">
//       <nav className="dashboard-nav">
//         <button onClick={() => toggleSection('profile')}>Profile</button>
//         <button onClick={() => toggleSection('addContent')}>Add Content</button>
//         <button onClick={() => toggleSection('viewContents')}>View Contents</button>
//         <button onClick={() => toggleSection('graph')}>Knowledge Graph</button>
//       </nav>
//       <div className="dashboard-content">
//         {showSection.profile && <ProfileSection />}
//         {showSection.addContent && (
//           <ContentForm onContentUpdate={handleContentUpdate} />
//         )}
//         {showSection.viewContents && (
//           <ContentList
//             onEdit={setSelectedContentId}
//           />
//         )}
//         {showSection.graph && <KnowledgeGraph contents={contents} />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState } from 'react';
// import ProfileSection from './ProfileSection';
// import ContentForm from './ContentForm';
// import ContentList from './ContentList';
// import KnowledgeGraph from './KnowledgeGraph';
// import './styles/Dashboard.css';

// const Dashboard = () => {
//   const [contents, setContents] = useState([]);
//   const [selectedContentId, setSelectedContentId] = useState(null); // Re-added this state
//   const [showSection, setShowSection] = useState({
//     profile: false,
//     addContent: false,
//     viewContents: true,
//     graph: false,
//   });

//   const handleContentUpdate = (newContent) => {
//     setContents((prev) => [...prev, newContent]);
//   };

//   const toggleSection = (section) => {
//     setShowSection((prev) => ({
//       profile: false,
//       addContent: false,
//       viewContents: false,
//       graph: false,
//       [section]: !prev[section],
//     }));
//   };

//   return (
//     <div className="dashboard-container">
//       <nav className="dashboard-nav">
//         <button onClick={() => toggleSection('profile')}>Profile</button>
//         <button onClick={() => toggleSection('addContent')}>Add Content</button>
//         <button onClick={() => toggleSection('viewContents')}>View Contents</button>
//         <button onClick={() => toggleSection('graph')}>Knowledge Graph</button>
//       </nav>
//       <div className="dashboard-content">
//         {showSection.profile && <ProfileSection />}
//         {showSection.addContent && (
//           <ContentForm onContentUpdate={handleContentUpdate} />
//         )}
//         {showSection.viewContents && (
//           <ContentList
//             onEdit={setSelectedContentId} // This now works with the re-added state
//           />
//         )}
//         {showSection.graph && <KnowledgeGraph contents={contents} />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState } from 'react';
import ProfileSection from './ProfileSection';
import ContentForm from './ContentForm';
import ContentList from './ContentList';
import KnowledgeGraph from './KnowledgeGraph';
import './styles/Dashboard.css';

const Dashboard = () => {
  const [contents, setContents] = useState([]); // Tracks all contents
  const [selectedContentId, setSelectedContentId] = useState(null); // Keeps track of the currently selected content
  const [showSection, setShowSection] = useState({
    profile: false,
    addContent: false,
    viewContents: true,
    graph: false,
  });

  // Handle adding/updating content in the contents array
  const handleContentUpdate = (newContent) => {
    setContents((prev) => [...prev, newContent]); // Add new content to the list
  };

  // Toggle visibility of sections
  const toggleSection = (section) => {
    setShowSection((prev) => ({
      profile: false,
      addContent: false,
      viewContents: false,
      graph: false,
      [section]: true, // Enable only the selected section
    }));
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <button onClick={() => toggleSection('profile')}>Profile</button>
        <button onClick={() => toggleSection('addContent')}>Add Content</button>
        <button onClick={() => toggleSection('viewContents')}>View Contents</button>
        <button onClick={() => toggleSection('graph')}>Knowledge Graph</button>
      </nav>
      <div className="dashboard-content">
        {showSection.profile && <ProfileSection />}
        {showSection.addContent && (
          <ContentForm onContentUpdate={handleContentUpdate} />
        )}
        {showSection.viewContents && (
          <ContentList
            contents={contents} // Pass contents if needed by ContentList
            onEdit={setSelectedContentId} // Handle selection of content for editing
          />
        )}
        {showSection.graph && <KnowledgeGraph contents={contents} />}
      </div>
    </div>
  );
};

export default Dashboard;
