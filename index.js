const shallowProperty = key => obj => obj == null ? void 0 : obj[key];

const deepGet = (obj, path) => {
	const length = path.length;
	for (let i = 0; i < length; i++) {
		if (obj == null) return void 0;
		obj = obj[path[i]];
	}
	return length ? obj : void 0;
};

// Creates a function that, when passed an object, will traverse that object’s
// properties down the given `path`, specified as an array of keys or indexes.
const property = path => {
	if (!Array.isArray(path)) {
		return shallowProperty(path);
	}
	return obj => deepGet(obj, path);
};

// Convenience version of a common use case of `map`: fetching a property.
module.exports = (obj, key) => obj.map(property(key));
