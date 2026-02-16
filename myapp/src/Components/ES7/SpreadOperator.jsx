import React from 'react'

export default function SpreadOperator() {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combinedArray = [...arr1, ...arr2];

  // using object (correct syntax)
  const obj1 = { name: 'User', age: 30 };
  const obj2 = { city: 'Bangalore' };

  const mergedObj = { ...obj1, ...obj2 };

  return (
    <div>
      <p>Array: {combinedArray}</p>

      {/* using object */}
      <p>Name: {mergedObj.name}</p>
      <p>Age: {mergedObj.age}</p>
      <p>City: {mergedObj.city}</p>
    </div>
  );
}
