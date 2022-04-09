// Generate a random ID
const generateID = () => {
  return "_" + Math.random().toString(36).substring(2,9)
};



export {generateID}