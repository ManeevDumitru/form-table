export interface InputComponentInterface {
	validate: () => Promise<boolean>;
}