"use client";

import Border from "#/components/border";
import React, { useState } from "react";

interface IteratedClientProps {
  item?: React.ReactNode;
  renderItem?: (index: number) => React.ReactNode;
  buttonText?: string;
}

const IteratedClient: React.FC<IteratedClientProps> = ({
  item,
  renderItem,
  buttonText = "Add Item",
}) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const renderDefaultItem = (index: number) => {
    return <div key={index}>Hello item {index + 1}</div>;
  };

  const renderItems = () => {
    const items = [];
    for (let i = 0; i < count; i++) {
      if (item) {
        items.push(React.cloneElement(item as React.ReactElement, { key: i }));
      } else if (renderItem) {
        items.push(renderItem(i));
      } else {
        items.push(renderDefaultItem(i));
      }
    }
    return items;
  };

  return (
    <Border client>
      <div className="flex flex-col gap-2">
        <div>
          <button className="btn btn-primary" onClick={handleIncrement}>
            {buttonText}
          </button>
        </div>
        {renderItems()}
      </div>
    </Border>
  );
};

export default IteratedClient;
