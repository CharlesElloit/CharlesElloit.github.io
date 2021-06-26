/**
 * @param {Object} oldObject Old object to be merge into.
 * @param {Object} updaterObject New object to be added on to the old object.
 * @returns New Object with the merge values.
 */

const mergeObjects = (oldObject, updaterObject) => ({
  ...oldObject,
  ...updaterObject,
});

export default mergeObjects;
