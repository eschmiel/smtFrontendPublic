import endPointsProd from './endPointsProd.js';
import endPointsDev from './endPointsDev.js';

let endPoints;

switch (process.env.NODE_ENV) {
	case 'production':
		endPoints = endPointsProd;
		break;
	case 'development':
		endPoints = endPointsDev;
		break;
	default:
		endPoints = endPointsDev
		console.log("Default end points used.");
};

export { endPoints };