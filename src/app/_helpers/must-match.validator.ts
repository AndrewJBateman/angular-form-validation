/* The custom MustMatch validator is used in this example to validate that both of the password fields - 
password and confirmPassword - are matching. However it can be used to validate that any pair of fields 
is matching (e.g. email and confirm email fields).
It works slightly differently than a typical custom validator because I'm setting the error on the second 
field instead of returning it to be set on the formGroup. I did it this way because I think it makes the 
template a bit cleaner and more intuitive, the mustMatch validation error is displayed below the 
confirmPassword field so I think it makes sense that the erroris attached the the confirmPassword form 
control.*/

import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
          return null;
        }

        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}