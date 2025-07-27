import { Controller } from 'react-hook-form';
import type { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';


interface IControlledField<T extends FieldValues> {
	name: Path<T>,
	control: Control<T>,
	rules?: RegisterOptions<T, Path<T>>
	renderFunc: Parameters<typeof Controller<T>>[0]['render']
}

export function ControlledField<T extends FieldValues>({name, control, rules,  renderFunc}: IControlledField<T>) {
	return (
		<Controller name={name} control={control} render={renderFunc} rules={rules}/>
	);
}

