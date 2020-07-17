export const updateObject = (oldObject, updatedObjects) => {
    return {
        ...oldObject,
        ...updatedObjects
    };
};