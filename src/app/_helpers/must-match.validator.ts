/* This validator is used to validate that both of the password fields -
password and confirmPassword - are matching. However it can be used to validate that any pair of fields
match (e.g. email and confirm email fields).
It works differently from a typical custom validator because I'm setting the error on the second
field instead of returning it to be set on the formGroup.

The mustMatch validation error is displayed below the confirmPassword field so the error is attached
to the confirmPassword form control.*/

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
    };
}
