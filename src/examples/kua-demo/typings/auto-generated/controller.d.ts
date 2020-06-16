import TestController from '../../app/controller/test';
import MainController from '../../app/controller/main';
declare module 'kua' {
	interface ControllerHub {
		test: TestController;
		main: MainController;
	}
}