const shallowProperty = key => obj => obj == null ? void 0 : obj[key];

const deepGet = (obj, path) => {
	const length = path.length;
	for (let i = 0; i < length; i++) {
		if (obj == null) return void 0;
		obj = obj[path[i]];
	}
	return length ? obj : void 0;
};

const property = path => {
	if (!Array.isArray(path)) {
		return shallowProperty(path);
	}
	return obj => deepGet(obj, path);
};

module.exports = (obj, key) => obj.map(property(key));
