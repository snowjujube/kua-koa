import MainService from '../../app/service/main';
declare module 'kua' {
	interface ServiceHub {
		main: MainService;
	}
}