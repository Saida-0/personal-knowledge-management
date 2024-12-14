// import React from "react";
// import { Graph } from "react-d3-graph";

// const KnowledgeGraph = ({ contents }) => {
//   const nodes = contents.map((content) => ({ id: content.title }));
//   const links = contents.flatMap((content) =>
//     content.links.map((link) => ({ source: content.title, target: link.title }))
//   );

//   const data = { nodes, links };

//   const config = {
//     nodeHighlightBehavior: true,
//     node: {
//       color: "lightblue",
//       size: 300,
//       highlightStrokeColor: "blue",
//     },
//     link: {
//       highlightColor: "blue",
//     },
//   };

//   return (
//     <div>
//       <h2>Knowledge Graph</h2>
//       <Graph id="graph-id" data={data} config={config} />
//     </div>
//   );
// };

// export default KnowledgeGraph;


import React from 'react';
import { Graph } from 'react-d3-graph';
import './styles/KnowledgeGraph.css';

const KnowledgeGraph = ({ contents = [] }) => {
  const nodes = contents.map((content) => ({
    id: content.title || `Node-${content.id}`,
    color: '#007bff',
  }));

  const links = contents.flatMap((content) =>
    content.links
      ? content.links.map((linkedTitle) => ({
          source: content.title || `Node-${content.id}`,
          target: linkedTitle,
        }))
      : []
  );

  const data = {
    nodes: nodes.length > 0 ? nodes : [{ id: 'Placeholder Node' }],
    links: links.length > 0 ? links : [],
  };

  const config = {
    nodeHighlightBehavior: true,
    node: {
      color: 'lightblue',
      size: 300,
      highlightStrokeColor: 'blue',
    },
    link: {
      highlightColor: 'blue',
    },
    directed: false,
    panAndZoom: true,
    width: 800,
    height: 600,
  };

  return (
    <div className="knowledge-graph-container">
      <h2>Knowledge Graph</h2>
      <Graph id="knowledge-graph" data={data} config={config} />
    </div>
  );
};

export default KnowledgeGraph;
