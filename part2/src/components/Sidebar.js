import React, { useState } from "react";
import data from "../data/data.json";

const Modal = ({ isOpen, onClose, selectedNode }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{selectedNode.title}</h2>
        {/* Add more content as needed */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const RadioTreeView = ({ data }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [expandedNodes, setExpandedNodes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);

  const handleRadioChange = (value, level, node) => {
    setExpandedNodes((prevExpandedNodes) => {
      const currentIndex = prevExpandedNodes.findIndex(
        (node) => node.level === level
      );

      const updatedNodes =
        currentIndex === -1
          ? [
              ...prevExpandedNodes.filter((node) => node.level < level),
              { value, level },
            ]
          : [...prevExpandedNodes.slice(0, currentIndex), { value, level }];

      return updatedNodes;
    });

    setSelectedValue(value);
    setSelectedNode(node);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderNode = (node) => (
    <div
      key={node.id}
      style={{ marginLeft: `${(parseInt(node.level) - 1) * 20}px` }}
    >
      <label>
        <input
          type="radio"
          value={node.value}
          checked={selectedValue === node.value}
          onChange={() => handleRadioChange(node.value, node.level, node)}
        />
        {node.title}
      </label>

      {node.children &&
        node.children.length > 0 &&
        expandedNodes.some(
          (expandedNode) => expandedNode.value === node.value
        ) && <div>{node.children.map((child) => renderNode(child))}</div>}
    </div>
  );

  return (
    <div>
      {data.map((node) => renderNode(node))}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedNode={selectedNode}
      />
    </div>
  );
};

const Sidebar = () => {
  return <RadioTreeView data={data} />;
};

export default Sidebar;
