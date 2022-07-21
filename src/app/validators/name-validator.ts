import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function nameValidator(regex: RegExp): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const required = regex.test(control.value);
		return required ? null : { requiredName: { value: control.value } };
	};
}
