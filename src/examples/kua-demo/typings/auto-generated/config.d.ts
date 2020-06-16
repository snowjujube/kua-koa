import defaultconfig from '../../config/config.default'
type UnpackConfig<T> = T extends Function ? ReturnType<T> : T;
declare module 'kua' {
	interface Config extends UnpackConfig<typeof defaultconfig> {}
}