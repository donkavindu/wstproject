"use client"
import { useState } from 'react';

const Dashboard = () => {
  const [pets, setPets] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPet, setCurrentPet] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    breed: '',
    age: '',
    weight: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing) {
      // Update existing pet
      setPets(pets.map(pet => 
        pet.id === currentPet.id ? { ...formData, id: currentPet.id } : pet
      ));
    } else {
      // Add new pet
      const newPet = {
        ...formData,
        id: Date.now().toString()
      };
      setPets([...pets, newPet]);
    }

    // Reset form
    setFormData({
      name: '',
      type: '',
      breed: '',
      age: '',
      weight: '',
      notes: ''
    });
    setIsEditing(false);
    setCurrentPet(null);
    setShowForm(false);
  };

  const handleEdit = (pet) => {
    setFormData({
      name: pet.name,
      type: pet.type,
      breed: pet.breed,
      age: pet.age,
      weight: pet.weight,
      notes: pet.notes
    });
    setIsEditing(true);
    setCurrentPet(pet);
    setShowForm(true);
  };

  const handleDelete = (petId) => {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      setPets(pets.filter(pet => pet.id !== petId));
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      type: '',
      breed: '',
      age: '',
      weight: '',
      notes: ''
    });
    setIsEditing(false);
    setCurrentPet(null);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pet Dashboard
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Manage your pet details
          </p>
        </div>

        {/* Add Pet Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={() => setShowForm(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium"
          >
            Add New Pet
          </button>
        </div>

        {/* Pet Form */}
        {showForm && (
          <div className="mt-6 bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">
              {isEditing ? 'Edit Pet' : 'Add New Pet'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Pet Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select Type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                    <option value="fish">Fish</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Breed</label>
                  <input
                    type="text"
                    name="breed"
                    value={formData.breed}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Age (years)</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    min="0"
                    step="0.1"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    min="0"
                    step="0.1"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows="3"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium"
                >
                  {isEditing ? 'Update Pet' : 'Add Pet'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Pets List */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">My Pets</h2>
          {pets.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-500 text-lg">No pets added yet. Add your first pet!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pets.map((pet) => (
                <div key={pet.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{pet.name}</h3>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {pet.type}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <p><span className="font-medium">Breed:</span> {pet.breed || 'Not specified'}</p>
                    <p><span className="font-medium">Age:</span> {pet.age ? `${pet.age} years` : 'Not specified'}</p>
                    <p><span className="font-medium">Weight:</span> {pet.weight ? `${pet.weight} kg` : 'Not specified'}</p>
                    {pet.notes && (
                      <p><span className="font-medium">Notes:</span> {pet.notes}</p>
                    )}
                  </div>

                  <div className="flex justify-end space-x-2 mt-4">
                    <button
                      onClick={() => handleEdit(pet)}
                      className="text-indigo-600 hover:text-indigo-900 font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(pet.id)}
                      className="text-red-600 hover:text-red-900 font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;