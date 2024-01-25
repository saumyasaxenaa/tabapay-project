import React, { useState } from "react";
import data from "../data/data.json";

const RadioTreeView = ({ data }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [expandedNodes, setExpandedNodes] = useState([]);

  const handleRadioChange = (value, level) => {
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
          onChange={() => handleRadioChange(node.value, node.level)}
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

  return <div>{data.map((node) => renderNode(node))}</div>;
};

const Sidebar = () => {
  return <RadioTreeView data={data} />;
};

export default Sidebar;
