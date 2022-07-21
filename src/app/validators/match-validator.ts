import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchValidator(first: string, second: string): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const firstControl = control.get(first);
		const secondControl = control.get(second);

		return firstControl?.value === secondControl?.value ? null : { mismatch: true };
	};
}
