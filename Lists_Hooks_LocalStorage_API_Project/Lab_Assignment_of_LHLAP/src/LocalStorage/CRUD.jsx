import React, { useState, useEffect } from "react";

const CRUD = () => {
  // State for items, input, and editing
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);

  // Load items from localStorage when the app mounts
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(savedItems);
  }, []);

  // Save items to localStorage whenever the list updates
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // Add a new item
  const addItem = () => {
    if (input.trim() === "") return;
    const newItem = { id: Date.now(), name: input };
    setItems([...items, newItem]);
    setInput("");
  };

  // Delete an item
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  // Start editing an item
  const startEditing = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setInput(itemToEdit.name);
    setIsEditing(true);
    setCurrentItemId(id);
  };

  // Update an item
  const updateItem = () => {
    if (input.trim() === "") return;
    const updatedItems = items.map((item) =>
      item.id === currentItemId ? { ...item, name: input } : item
    );
    setItems(updatedItems);
    setInput("");
    setIsEditing(false);
    setCurrentItemId(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>CRUD with LocalStorage</h1>
      <div>
        <input
          type="text"
          placeholder="Enter item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {!isEditing ? (
          <button onClick={addItem}>Add</button>
        ) : (
          <button onClick={updateItem}>Update</button>
        )}
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{ margin: "10px 0" }}>
            {item.name}
            <button
              onClick={() => startEditing(item.id)}
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>
            <button
              onClick={() => deleteItem(item.id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUD;
