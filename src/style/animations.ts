import { keyframes } from 'styled-components';

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const fadeOut = keyframes`
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`;

const fadeInTop = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-40px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

const fadeOutTop = keyframes`
	0% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateY(-40px);
	}
`;

const fadeInBottom = keyframes`
	0% {
		opacity: 0;
		transform: translateY(40px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

const fadeOutBottom = keyframes`
	0% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateY(40px);
	}
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animations = {
  fadeIn,
  fadeOut,
  fadeInTop,
  fadeOutTop,
  fadeInBottom,
  fadeOutBottom,
  rotation,
};

export default animations;
