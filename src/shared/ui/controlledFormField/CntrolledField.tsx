import { Controller } from 'react-hook-form';
import type { Control, FieldValues, Path } from 'react-hook-form';


interface IControlledField<T extends FieldValues> {
	name: Path<T>,
	control: Control<T>,
	rules: {required: string | boolean}
	renderFunc: Parameters<typeof Controller<T>>[0]['render']
}

export function ControlledField<T extends FieldValues>({name, control, rules,  renderFunc}: IControlledField<T>) {
	return (
		<Controller name={name} control={control} render={renderFunc} rules={rules}/>
	);
}

